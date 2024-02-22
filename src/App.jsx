import Header from "./components/Header";
import Hero from "./components/Hero";
import Oscillator from "./components/Oscillator";
import { useState } from "react";
import Mixer from "./components/Mixer";
import PropTypes from "prop-types";

let actx = new AudioContext();
let out = actx.destination;

let osc1 = actx.createOscillator();
let gain1 = actx.createGain();

osc1.connect(gain1);
gain1.connect(out);

osc1.PropTypes = {
  frequency: PropTypes.number,
  type: PropTypes.string,
  start: PropTypes.func,
  stop: PropTypes.func,
};

function App() {
  const [osc1Freq, setOsc1Freq] = useState(440);
  let [, setIsPlaying] = useState(false);

  const changeOscFrequency = (e) => {
    let { value } = e.target;
    console.log(e.target.value);
    setOsc1Freq(value);
    osc1.frequency.value = value;
  };

  let setPlay = () => {
    setIsPlaying(true);
    osc1.start();
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
          <Mixer
            setPlay={setPlay}
            setPause={setPause}
            changeFreq={changeOscFrequency}
            freq={osc1Freq}
          />
          <Oscillator changeFreq={changeOscFrequency} freq={osc1Freq} />
        </div>
      </div>
    </>
  );
}

export default App;
