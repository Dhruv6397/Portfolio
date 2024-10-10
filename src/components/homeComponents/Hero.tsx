import React from 'react';
import TypewriterEffect from './TypeWriterEffect';
import NameAnimation from './NameAnimation';
import Icons from './Icons';
import Aspiring from './Aspiring';
import Anime from '../../logos/hero1.png';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className='mt-6 min-h-full flex flex-col md:flex-row justify-center border-5 border-red-300 items-center'>
      {/* Left side with text and icons */}
      <div className='pl-6 ml-4 w-[50%] text-center md:text-left md:w-[100%] md:pl-0'>
        <NameAnimation />
        <Aspiring />
        <TypewriterEffect />
        <Icons />
      </div> 

      {/* Right side with image, hidden on mobile */}
      <div className='flex-shrink-0 ml-4 w-[50%] hidden md:block'>
        <Image
          src={Anime}
          alt='Dhruv Anime Photo'
          className='w-[80%] ml-6  h-auto border-5 border-white 
           transform hover:scale-105 transition-transform duration-300'
          style={{
            filter: 'drop-shadow(10px 10px 20px rgba(44, 122, 123, 0.6))',
          }}
        />
      </div>
    </div>
  );
}
