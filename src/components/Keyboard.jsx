import { useEffect } from "react";
import QwertyHancock from "../utils/qwerty";
import { useContext, useState } from "react";
import { CTX } from "../utils/Store";

const Keyboard = () => {
  const [appState, updateState] = useContext(CTX);

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const keyboard = new QwertyHancock({
      id: "keyboard",
      width: 449,
      height: 150,
      octaves: 2,
      startNote: "C4",
      whiteNotesColour: "white",
      blackNotesColour: "black",
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
