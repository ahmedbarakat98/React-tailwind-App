import React from "react";
import picture from "../assets/Geded.JPG";


export default function Home() {
  return (
    <>
      <div className="w-full bg-[#1ABC9C] pt-5">
        <div className="flex flex-col justify-center items-center pt-5 relative">
          <div className="flex relative justify-center items-center rounded-full overflow-hidden my-0  size-75 bg-amber-200">
            <img className="absolute w-full h-full object-cover" src={picture} alt="ahmed barakat" />
          </div>
          <h1 className=" text-center text-white pt-5 text-3xl font-bold">
            Ahmed Barakat
          </h1>
          <p className="text-center text-white pb-10 text-2xl">Junior React Developer - Spatial Data Analyst</p>
        </div>
      </div>
    </>
  );
}
