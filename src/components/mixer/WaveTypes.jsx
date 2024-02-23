import PropTypes from "prop-types";

const WaveTypes = ({ type, changeType }) => {
  return (
    <>
      <p>Select Type:</p>
      <div>
        <button
          id="sine"
          onClick={changeType}
          className={`border-2 border-white rounded-sm p-1 ${
            type === "sine" && ""
          }`}
        >
          <img src="./wave-sine.png" alt="" width={25} />
        </button>
        <button
          id="triangle"
          onClick={changeType}
          className={`border-2 border-white rounded-sm p-1 ${
            type === "triangle" && "bg-blue-500"
          }`}
        >
          <img src="./wave-triangle.png" alt="" width={25} />
        </button>
        <button
          id="square"
          onClick={changeType}
          className={`border-2 border-white rounded-sm p-1 ${
            type === "square" && "bg-blue-500"
          }`}
        >
          <img src="./wave-square.png" alt="" width={25} />
        </button>
        <button
          id="sawtooth"
          onClick={changeType}
          className={`border-2 border-white rounded-sm p-1 ${
            type === "sawtooth" && "bg-blue-500"
          }`}
        >
          <img src="./sawtooth.png" alt="" width={25} />
        </button>
      </div>
    </>
  );
};

WaveTypes.propTypes = {
  type: PropTypes.string.isRequired,
  changeType: PropTypes.func.isRequired,
};

export default WaveTypes;
