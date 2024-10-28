"use client";

import React from 'react';
import useCursorEffects from '../../hooks/useCursorEffects';

import NameAnimation from './NameAnimation';
import Icons from './Icons';
import TypewriterEffect from './TypeWriterEffect';
const Hero: React.FC = () => {
  useCursorEffects('rainbow', { length: 50, colors: ["black"], size: 4 })
 
  return (
    <div className='mt-6 min-h-full flex flex-col justify-center border-5 border-red-300 items-center cursor-pointer'>
      <NameAnimation />
      <TypewriterEffect />
      <Icons />
    </div>
  );
};

export default Hero;