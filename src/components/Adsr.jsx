import { useContext } from "react";
import { CTX } from "../utils/Store";

const Adsr = () => {
  let [state, dispatch] = useContext(CTX);
  let { attack, decay, sustain, release } = state.envelope;

  const change = (e) => {
    let { id, value } = e.target;
    dispatch({
      type: "CHANGE_ADSR",
      payload: { id, value },
    });
  };

  return (
    <div className="flex gap-8 justfy-between items-center">
      <div className="">
        <p className="text-gray-400  text-md inline">Attack</p>
        <input
          id="attack"
          value={attack}
          type="range"
          max="2"
          step="0.02"
          className="w-full h-2 bg-gray-200 border-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          onChange={change}
        ></input>
        <p className="text-gray-400 text-md">Decay</p>
        <input
          id="decay"
          value={decay}
          type="range"
          max="1"
          step="0.01"
          className="w-full h-2 bg-gray-200 border-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          onChange={change}
        ></input>
      </div>
      <div className="">
        <p className="text-gray-400 text-md">Sustain</p>
        <input
          id="sustain"
          value={sustain}
          type="range"
          max="1"
          step="0.01"
          className="w-full h-2 bg-gray-200 border-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          onChange={(e) => change(e)}
        ></input>
        <p className="text-gray-400 text-md">Release</p>
        <input
          id="release"
          value={release}
          type="range"
          max="2"
          step="0.02"
          className="w-full h-2 bg-gray-200 border-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          onChange={(e) => change(e)}
        ></input>
      </div>
    </div>
  );
};

export default Adsr;
