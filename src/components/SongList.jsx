import PropTypes from "prop-types";

const SongList = ({ setFile }) => {
  const handleSongSelect = (song) => {
    setFile(song);
  };

  return (
    <>
      <div className="flex-1">
        <h3 className="font-bold">Choose a Song:</h3>
        <ul className="flex-col">
          <li
            className="hover:cursor-pointer"
            onClick={() => handleSongSelect("./minimal.mp3")}
          >
            Minimal
          </li>
          <li
            className="hover:cursor-pointer"
            onClick={() => handleSongSelect("./blind.mp3")}
          >
            Blind
          </li>
        </ul>
      </div>
    </>
  );
};

SongList.propTypes = {
  setFile: PropTypes.func.isRequired,
};

export default SongList;
