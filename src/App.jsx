import Header from "./components/Header";
import Hero from "./components/Hero";
// import { useState } from "react";
import Oscillator from "./components/Oscillator";
import Filter from "./components/Filter";
import Keyboard from "./components/Keyboard";

export default function App() {
  return (
    <>
      <div className="">
        <div className="flex flex-col justify-center text-white py-6 px-12">
          <Header />
          <Hero />
          <div className="bg-black-900 flex items-center justify-center p-6">
            <div className="p-4 w-2/3 min-w-[500px] bg-amber-900 rounded-lg">
              <div className="bg-black h-[650px] flex flex-col items-center px-12 py-2 gap-2">
                <p className="text-gray-600 text-xl">Oscillator</p>
                <Oscillator />
                <p className="text-gray-600 text-xl mt-2">Filter</p>
                <Filter />
              </div>
            </div>
          </div>
          <Keyboard />
        </div>
      </div>
    </>
  );
}
