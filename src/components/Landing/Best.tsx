import Image from "next/image";
import React from "react";


export default function Best() {
  return (
    <div className="w-full flex justify-center my-10  px-4">
      <div className="relative bg-accentColor rounded-md w-full max-w-[1200px] h-[60vh] flex flex-col md:flex-row items-center overflow-hidden shadow-lg">

        {/* Left: Image */}
        <div className="absolute left-0 bottom-0 w-1/2 md:w-auto">
          <Image
            src="/aligarh.png"
            height={500}
            width={400}
            alt="Aligarh Tower"
            className="w-full md:w-[300px] z-50 lg:w-[400px] object-contain"
          />
        </div>


        {/* Right: Text */}
        <div className="flex flex-col justify-center items-end w-full h-full pr-6 text-right">
          <h1 className="font-guzan text-white text-4xl sm:text-6xl lg:text-8xl leading-tight drop-shadow-md">
            ALIGARH <br /> <span className="text-black">BEST AGENCY</span>
          </h1>
        </div>

      </div>
    </div>
  );
}
