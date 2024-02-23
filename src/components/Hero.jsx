const Hero = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-black flex-1">Soundbox</h1>
          <p className="text-gray-400">
            unshackled sound design is just a click away👇
          </p>
          <p className="text-red-500">
            NOTE: Currently, web audio breaks site when you hit stop!
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
