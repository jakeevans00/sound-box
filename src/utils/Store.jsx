import React from "react";
import PropTypes from "prop-types";
import Osc from "./Osc";

let actx = new AudioContext();
let out = actx.destination;

let osc1 = actx.createOscillator();
let gain1 = actx.createGain();
gain1.gain.value = 0.1;
let filter = actx.createBiquadFilter();

osc1.connect(gain1);
gain1.connect(filter);
filter.connect(out);

const CTX = React.createContext("");
export { CTX };

let nodes = [];

function reducer(state, action) {
  let { id, value, frequency } = action.payload || {};

  switch (action.type) {
    case "OSC_PLAY_NOTE":
      // eslint-disable-next-line no-case-declarations
      let newOsc = new Osc(
        actx,
        state.osc1Settings.type,
        frequency,
        state.osc1Settings.detune,
        state.envelope,
        gain1
      );
      nodes.push(newOsc);
      return { ...state };
    case "OSC_STOP_NOTE":
      // eslint-disable-next-line no-case-declarations
      let newNodes = [];
      nodes.forEach((node) => {
        if (Math.round(node.osc.frequency.value) === Math.round(frequency)) {
          node.stop();
        } else {
          newNodes.push(node);
        }
      });
      nodes = newNodes;
      return { ...state };
    case "CHANGE_OSC1":
      osc1[id].value = value;
      return { ...state, osc1Settings: { ...state.osc1Settings, [id]: value } };
    case "CHANGE_OSC1_TYPE":
      osc1.type = id;
      return { ...state, osc1Settings: { ...state.osc1Settings, type: id } };
    case "CHANGE_FILTER":
      filter[id].value = value;
      return {
        ...state,
        filterSettings: { ...state.filterSettings, [id]: value },
      };
    case "CHANGE_FILTER_TYPE":
      filter.type = id;
      return {
        ...state,
        filterSettings: { ...state.filterSettings, type: id },
      };
    case "CHANGE_ADSR":
      return {
        ...state,
        envelope: { ...state.envelope, [id]: parseFloat(value) },
      };
    default:
      console.log("Reducer error. action: ", action);
      return { ...state };
  }
}

export default function Store(props) {
  const stateHook = React.useReducer(reducer, {
    osc1Settings: {
      frequency: osc1.frequency.value,
      detune: osc1.detune.value,
      type: osc1.type,
    },
    filterSettings: {
      frequency: filter.frequency.value,
      detune: filter.detune.value,
      Q: filter.Q.value,
      gain: filter.gain.value,
      type: filter.type,
    },
    envelope: {
      attack: 0.2,
      decay: 0.1,
      sustain: 0.6,
      release: 0.3,
    },
  });
  return <CTX.Provider value={stateHook}>{props.children}</CTX.Provider>;
}

Store.propTypes = {
  children: PropTypes.any,
};
