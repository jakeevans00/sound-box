import PropTypes from "prop-types";

const Oscillator = ({ changeFreq, freq }) => {
  return (
    <div>
      <input
        id="default-range"
        value={freq}
        type="range"
        min="20"
        max="2000"
        className="w-full h-2 bg-gray-200 border-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        onChange={(e) => changeFreq(e)}
      ></input>
    </div>
  );
};

Oscillator.propTypes = {
  changeFreq: PropTypes.func.isRequired,
  freq: PropTypes.number.isRequired,
};

export default Oscillator;
