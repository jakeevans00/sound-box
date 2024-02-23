import Header from "./components/Header";
import Hero from "./components/Hero";
import { useState } from "react";
import Oscillator from "./components/Oscillator";
import Filter from "./components/Filter";

let actx = new AudioContext();
let out = actx.destination;

let osc1 = actx.createOscillator();
let gain1 = actx.createGain();
let filter = actx.createBiquadFilter();

osc1.connect(gain1);
gain1.connect(filter);
filter.connect(out);

export default function App() {
  const [osc1Settings, setOsc1Settings] = useState({
    frequency: osc1.frequency.value,
    detune: osc1.detune.value,
    type: osc1.type,
  });

  const [filterSettings, setFilterSettings] = useState({
    frequency: filter.frequency.value,
    detune: filter.detune.value,
    Q: filter.Q.value,
    gain: filter.gain.value,
    type: filter.type,
  });

  const changeOsc1 = (e) => {
    let { value, id } = e.target;
    setOsc1Settings({ ...osc1Settings, [id]: value });
    osc1[id].value = value;
  };

  const changeOsc1Type = (e) => {
    let { id } = e.target;
    setOsc1Settings({ ...osc1Settings, type: id });
    osc1.type = id;
  };

  const changeFilter = (e) => {
    let { value, id } = e.target;
    setFilterSettings({ ...filterSettings, [id]: value });
    filter[id].value = value;
  };

  const changeFilterType = (e) => {
    let { id } = e.target;
    setFilterSettings({ ...filterSettings, type: id });
    filter.type = id;
  };
  // Handle start stop
  let [, setIsPlaying] = useState(false);

  let setPlay = () => {
    setIsPlaying(true);
    osc1.start();
    console.log("osc started");
  };
  let setPause = () => {
    setIsPlaying(false);
    osc1.stop();
  };

  return (
    <>
      <div className="h-screen">
        <div className="  text-white py-6 px-12">
          <Header />
          <Hero />
          <div className="bg-black-900 flex items-center justify-center p-6">
            <div className="px-4 w-1/3 bg-amber-900 rounded-lg">
              <div className="bg-black h-[650px] flex flex-col items-center px-12 py-2 gap-2">
                <p className="text-gray-600 text-xl">Oscillator</p>

                <div className="flex gap-2">
                  <button
                    className="border-4 border-amber-900 px-4 rounded-lg bg-black-900 text-white hover:bg-gray-800 hover:cursor-pointer"
                    onClick={setPlay}
                  >
                    Start
                  </button>
                  <button
                    className="border-4 border-amber-900 px-4 rounded-lg bg-black-900 text-white hover:bg-red-900 hover:cursor-pointer"
                    onClick={setPause}
                  >
                    Stop
                  </button>
                </div>

                <Oscillator
                  settings={osc1Settings}
                  change={changeOsc1}
                  changeType={changeOsc1Type}
                />
                <p className="text-gray-600 text-xl mt-2">Filter</p>
                <Filter
                  settings={filterSettings}
                  change={changeFilter}
                  changeType={changeFilterType}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
