import { useContext } from "react";
import { CTX } from "../utils/Store";

const Filter = () => {
  let [state, dispatch] = useContext(CTX);
  let { frequency, detune, Q, gain, type } = state.filterSettings;

  const change = (e) => {
    let { id, value } = e.target;
    dispatch({ type: "CHANGE_FILTER", payload: { id, value } });
  };

  const changeType = (e) => {
    let { id } = e.target;
    dispatch({ type: "CHANGE_FILTER_TYPE", payload: { id } });
  };
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

      <div className="mt-4 flex flex-wrap justify-center">
        <button
          id="lowpass"
          onClick={changeType}
          className={`border-2 border-white rounded-sm p-1 ${
            type === "lowpass" && "bg-amber-800"
          }`}
        >
          Lowpass
        </button>
        <button
          id="highpass"
          onClick={changeType}
          className={`border-2 border-white rounded-sm p-1 ${
            type === "highpass" && "bg-amber-800"
          }`}
        >
          Highpass
        </button>
        <button
          id="notch"
          onClick={changeType}
          className={`border-2 border-white rounded-sm p-1 ${
            type === "notch" && "bg-amber-800"
          }`}
        >
          Notch
        </button>
        <button
          id="lowshelf"
          onClick={changeType}
          className={`border-2 border-white rounded-sm p-1 ${
            type === "lowshelf" && "bg-amber-800"
          }`}
        >
          Lowshelf
        </button>
        <button
          id="highshelf"
          onClick={changeType}
          className={`border-2 border-white rounded-sm p-1 ${
            type === "highshelf" && "bg-amber-800"
          }`}
        >
          HighShelf
        </button>
      </div>
    </div>
  );
};

export default Filter;
