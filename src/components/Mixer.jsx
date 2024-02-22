import Oscillator from "./Oscillator";
import PropTypes from "prop-types";

const Mixer = ({ setPlay, setPause, changeFreq, freq }) => {
  // const [isPlaying, setIsPlaying] = useState(null);

  // for legacy browsers
  // if (!isLoaded) {
  //   const AudioContext = window.AudioContext || window.webkitAudioContext;
  //   const audioContext = new AudioContext();

  //   state.song = song;
  //   const audioElement = document.querySelector("audio");
  //   const track = audioContext.createMediaElementSource(audioElement);
  //   track.connect(audioContext.destination);
  // }

  // const handlePlay = () => {
  //   setIsPlaying(!isPlaying);
  // };

  return (
    <>
      <div className="bg-black-900 flex items-center justify-center p-6">
        <div className="px-4 bg-amber-900 rounded-lg">
          <div className="bg-black h-[650px] flex flex-col items-center px-12 py-2 gap-2">
            <p className="text-gray-600 text-xl">Oscillator</p>

            <ul className="flex-col flex">
              <li>
                <div className="flex gap-2">
                  <button
                    className="border-4 border-amber-900 p-2 rounded-lg bg-black-900 text-white hover:bg-gray-800 hover:cursor-pointer"
                    onClick={setPlay}
                  >
                    Start
                  </button>
                  <button
                    className="border-4 border-amber-900 p-2 rounded-lg bg-black-900 text-white hover:bg-red-900 hover:cursor-pointer"
                    onClick={setPause}
                  >
                    Stop
                  </button>
                </div>

                <Oscillator changeFreq={changeFreq} freq={freq} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

Mixer.propTypes = {
  setPlay: PropTypes.func.isRequired,
  setPause: PropTypes.func.isRequired,
  changeFreq: PropTypes.func.isRequired,
  freq: PropTypes.number.isRequired,
};

export default Mixer;
