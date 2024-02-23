import { useContext } from "react";
import { CTX } from "../utils/Store";
// import WaveTypes from "./mixer/WaveTypes";

const Oscillator = () => {
  let [state, dispatch] = useContext(CTX);
  let { frequency, detune, type } = state.osc1Settings;

  const change = (e) => {
    let { id, value } = e.target;
    dispatch({ type: "CHANGE_OSC1", payload: { id, value } });
  };

  const changeType = (e) => {
    let { id } = e.target;
    dispatch({ type: "CHANGE_OSC1_TYPE", payload: { id } });
  };

  const start = () => dispatch({ type: "START_OSC1" });
  const stop = () => dispatch({ type: "STOP_OSC1" });

  return (
    <div>
      <div className="flex gap-2">
        <button
          className="border-4 border-amber-900 px-4 rounded-lg bg-black-900 text-white hover:bg-gray-800 hover:cursor-pointer"
          onClick={start}
        >
          Start
        </button>
        <button
          className="border-4 border-amber-900 px-4 rounded-lg bg-black-900 text-white hover:bg-red-900 hover:cursor-pointer"
          onClick={stop}
        >
          Stop
        </button>
      </div>
      <p className="text-gray-400 mt-2 text-md">Frequency</p>
      <input
        id="frequency"
        value={frequency}
        type="range"
        min="20"
        max="2000"
        className="w-full h-2 bg-gray-200 border-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        onChange={change}
      ></input>
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
            type === "sine" && "bg-amber-600"
          }`}
        >
          Sine{" "}
        </button>
        <button
          id="triangle"
          onClick={changeType}
          className={`border-2 border-white rounded-sm p-1 ${
            type === "triangle" && "bg-amber-600"
          }`}
        >
          Triangle
        </button>
        <button
          id="square"
          onClick={changeType}
          className={`border-2 border-white rounded-sm p-1 ${
            type === "square" && "bg-amber-600"
          }`}
        >
          Square
        </button>
        <button
          id="sawtooth"
          onClick={changeType}
          className={`border-2 border-white rounded-sm p-1 ${
            type === "sawtooth" && "bg-amber-600"
          }`}
        >
          Sawtooth
        </button>
      </div>
    </div>
  );
};

export default Oscillator;
