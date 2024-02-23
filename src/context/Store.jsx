import React from "react";
import PropTypes from "prop-types";

let actx = new AudioContext();
let out = actx.destination;

let osc1 = actx.createOscillator();
let filter = actx.createBiquadFilter();

osc1.connect(filter);
filter.connect(out);

const CTX = React.createContext();
export { CTX };

function reducer(state, action) {
  let { id, value } = action.payload || {};

  switch (action.type) {
    case "START_OSC1":
      osc1.start();
      return { ...state };
    case "STOP_OSC1":
      osc1.stop();
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
  });
  return <CTX.Provider value={stateHook}>{props.children}</CTX.Provider>;
}

Store.propTypes = {
  children: PropTypes.any,
};
