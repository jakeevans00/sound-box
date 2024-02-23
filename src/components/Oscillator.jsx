import { useContext } from "react";
import { CTX } from "../utils/Store";
// import WaveTypes from "./mixer/WaveTypes";

const Oscillator = () => {
  let [state, dispatch] = useContext(CTX);
  let { detune, type } = state.osc1Settings;

  const change = (e) => {
    let { id, value } = e.target;
    dispatch({ type: "CHANGE_OSC1", payload: { id, value } });
  };

  const changeType = (e) => {
    let { id } = e.target;
    dispatch({ type: "CHANGE_OSC1_TYPE", payload: { id } });
  };

  return (
    <div>
      <p className="text-gray-400 mt-2 text-md">Detune</p>
      <input
        id="detune"
        value={detune}
        type="range"
        min="-50"
        max="50"
        className="w-full h-2 bg-gray-200 border-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        onChange={(e) => change(e)}
      ></input>
      <p className="text-gray-400 mt-2 text-md">Select Type</p>
      <div className="m">
        <button
          id="sine"
          onClick={changeType}
          className={`border-2 border-white rounded-sm p-1 ${
            type === "sine" && "bg-amber-900"
          }`}
        >
          Sine{" "}
        </button>
        <button
          id="triangle"
          onClick={changeType}
          className={`border-2 border-white rounded-sm p-1 ${
            type === "triangle" && "bg-amber-900"
          }`}
        >
          Triangle
        </button>
        <button
          id="square"
          onClick={changeType}
          className={`border-2 border-white rounded-sm p-1 ${
            type === "square" && "bg-amber-900"
          }`}
        >
          Square
        </button>
        <button
          id="sawtooth"
          onClick={changeType}
          className={`border-2 border-white rounded-sm p-1 ${
            type === "sawtooth" && "bg-amber-900"
          }`}
        >
          Sawtooth
        </button>
      </div>
    </div>
  );
};

export default Oscillator;
