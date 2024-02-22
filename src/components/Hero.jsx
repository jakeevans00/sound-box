import SongList from "./SongList";
import { useState } from "react";

const Hero = () => {
  const [file, setFile] = useState(null);

  return (
    <>
      <div className="flex items-center justify-between">
        <SongList setFile={setFile} />
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-black flex-1">Soundbox</h1>
          {file ? (
            <p className="text-gray-300">Now playing: {file}</p>
          ) : (
            <p>Load a song to get started</p>
          )}
        </div>
        <div className="flex-1"></div>
      </div>
    </>
  );
};

export default Hero;
