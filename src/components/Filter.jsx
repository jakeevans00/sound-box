import PropTypes from "prop-types";

const Filter = ({ settings, change, changeType }) => {
  let { frequency, detune, Q, gain, type } = settings;

  return (
    <div>
      <p className="text-gray-400 mt-2 text-md">Frequency</p>
      <input
        id="frequency"
        value={frequency}
        type="range"
        min="20"
        max="10000"
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
        onChange={change}
      ></input>
      {(type === "lowpass" || type === "highpass" || type === "notch") && (
        <>
          <p className="text-gray-400 mt-2 text-md">Q</p>
          <input
            id="Q"
            value={Q}
            type="range"
            max="10"
            step="0.1"
            className="w-full h-2 bg-gray-200 border-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            onChange={change}
          ></input>
        </>
      )}
      {(type === "lowshelf" || type === "highshelf") && (
        <>
          <p className="text-gray-400 mt-2 text-md">Gain</p>
          <input
            id="gain"
            value={gain}
            type="range"
            max="10"
            step="0.1"
            className="w-full h-2 bg-gray-200 border-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            onChange={change}
          ></input>
        </>
      )}
      <div className="mt-2">
        <button
          id="lowpass"
          onClick={changeType}
          className={`border-2 border-white rounded-sm p-1 ${
            type === "lowpass" && "bg-amber-600"
          }`}
        >
          Lowpass
        </button>
        <button
          id="highpass"
          onClick={changeType}
          className={`border-2 border-white rounded-sm p-1 ${
            type === "highpass" && "bg-amber-600"
          }`}
        >
          Highpass
        </button>
        <button
          id="notch"
          onClick={changeType}
          className={`border-2 border-white rounded-sm p-1 ${
            type === "notch" && "bg-amber-600"
          }`}
        >
          Notch
        </button>
        <button
          id="lowshelf"
          onClick={changeType}
          className={`border-2 border-white rounded-sm p-1 ${
            type === "lowshelf" && "bg-amber-600"
          }`}
        >
          Lowshelf
        </button>
        <button
          id="highshelf"
          onClick={changeType}
          className={`border-2 border-white rounded-sm p-1 ${
            type === "highshelf" && "bg-amber-600"
          }`}
        >
          HighShelf
        </button>
      </div>
    </div>
  );
};
Filter.propTypes = {
  change: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
  detune: PropTypes.number,
  frequency: PropTypes.number,
  changeType: PropTypes.func,
};

export default Filter;
