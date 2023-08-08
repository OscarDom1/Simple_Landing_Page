import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt=""
          />

          <h2 className="text-2xl font-bold text-center py-4">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-4">500 GB Storage</p>
            <p className="py-2 border-b mx-8 mt-4">1 Granted User</p>
            <p className="py-2 border-b mx-8 mt-4">Send up to 2GB</p>
          </div>
          <button className="text-black bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto px-6 my-6 py-3 hover:bg-transparent duration-300">
            Start Trial
          </button>
        </div>

        <div className="w-full bg-gray-200 shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt=""
          />

          <h2 className="text-2xl font-bold text-center py-4">Double User</h2>
          <p className="text-center text-4xl font-bold">$300</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-4">1000 GB Storage</p>
            <p className="py-2 border-b mx-8 mt-4">2 Granted User</p>
            <p className="py-2 border-b mx-8 mt-4">Send up to 4GB</p>
          </div>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium mx-auto px-6 my-6 py-3 hover:bg-transparent duration-300">
            Start Trial
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt=""
          />

          <h2 className="text-2xl font-bold text-center py-4">Triple User</h2>
          <p className="text-center text-4xl font-bold">$450</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-4">1500 GB Storage</p>
            <p className="py-2 border-b mx-8 mt-4">3 Granted User</p>
            <p className="py-2 border-b mx-8 mt-4">Send up to 6GB</p>
          </div>
          <button className="text-black bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto px-6 my-6 py-3 hover:bg-transparent duration-300">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
