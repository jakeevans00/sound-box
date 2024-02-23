import PropTypes from "prop-types";
// import WaveTypes from "./mixer/WaveTypes";

const Oscillator = ({ change, changeType, settings }) => {
  let { type, frequency, detune } = settings;
  return (
    <div>
      <p className="text-gray-400 mt-2 text-md">Frequency</p>
      <input
        id="frequency"
        value={frequency}
        type="range"
        min="20"
        max="2000"
        className="w-full h-2 bg-gray-200 border-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        onChange={(e) => change(e)}
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

Oscillator.propTypes = {
  settings: PropTypes.object.isRequired,
  change: PropTypes.func.isRequired,
  changeType: PropTypes.func,
};

export default Oscillator;
