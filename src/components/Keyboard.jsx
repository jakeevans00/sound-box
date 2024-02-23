import { useEffect } from "react";
import QwertyHancock from "../utils/qwerty";

const Keyboard = () => {
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const keyboard = new QwertyHancock({
      id: "keyboard",
      width: 600,
      height: 150,
      octaves: 3,
      startNote: "C4",
      whiteNotesColour: "white",
      blackNotesColour: "black",
      borderColour: "black",
      activeColour: "gold",
      hoverColour: "orange",
    });
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <>
      <div className="flex items-center justify-center">
        <div id="keyboard"></div>;
      </div>
    </>
  );
};

export default Keyboard;
