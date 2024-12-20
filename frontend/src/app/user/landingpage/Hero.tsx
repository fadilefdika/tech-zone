import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex items-center justify-evenly pt-14 pb-4">
      <div className="flex flex-col items-center">
        <h1 className="text-9xl font-normal text-[#2b6c9f] font-serif mb-1">TECH</h1>
        <h3 className="text-5xl font-extralight text-[#2b6c9f] font-serif tracking-widest">ZONE</h3>
        <p className="text-lg font-normal text-gray-800 mt-10">Quick Solution, All of Our Electronics</p>
      </div>
      <div>
        <Image src={'/image 11.png'} alt="image hero" width={400} height={400} />
      </div>
    </div>
  );
};

export default Hero;
