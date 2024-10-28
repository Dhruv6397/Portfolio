
"use client";

import { useEffect, useState } from 'react';

const TypewriterEffect = () => {
  const [text, setText] = useState('');
  const fullText = '                Rules are meant to challenged , not followed.';
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100); 
 
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setIsCursorVisible((prev) => !prev);
    }, 600); 
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className=" max-w-[100%]  ">
      <p className="border-r-4 border-gray-800 whitespace-nowrap overflow-hidden text-black text-4xl ">
        {text}
        {isCursorVisible && <span className="border-r-4 border-[#2C7A7B] animate-blink"></span>}
      </p>

      <style jsx>{`
        .animate-blink {
          animation: blink 0.6s step-end infinite;
        }
        @keyframes blink {
          50% {
            border-color: transparent;
          }
        }
      `}</style>
    </div>
  );
};

export default TypewriterEffect;
