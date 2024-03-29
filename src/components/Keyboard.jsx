import { useEffect } from "react";
import QwertyHancock from "../utils/qwerty";
import react from "react";
import { CTX } from "../utils/Store";

const Keyboard = () => {
  const [, updateState] = react.useContext(CTX);
  const [isMobile] = react.useState(window.innerWidth < 768);

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    let keyWidth = 449;
    if (isMobile) {
      keyWidth = 330;
    }

    const keyboard = new QwertyHancock({
      id: "keyboard",
      width: keyWidth,
      height: 110,
      octaves: 2,
      startNote: "C4",
      whiteKeyColour: "#934B00",
      blackKeyColour: "#291F1E",
      borderColour: "black",
      activeColour: "gold",
      hoverColour: "orange",
    });
    keyboard.keyDown = (note, frequency) => {
      updateState({ type: "OSC_PLAY_NOTE", payload: { note, frequency } });
    };
    keyboard.keyUp = (note, frequency) => {
      updateState({ type: "OSC_STOP_NOTE", payload: { note, frequency } });
    };
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <>
      <div className="flex items-center justify-center">
        <div id="keyboard"></div>
      </div>
    </>
  );
};

export default Keyboard;
