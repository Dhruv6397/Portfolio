
"use client";

import { useEffect, useState } from 'react';

const TypewriterEffect = () => {
  const [text, setText] = useState('');
  const fullText = '      कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।';
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
    <div className="p-10 bg-[#111827] max-w-fit  ">
      <p className="border-r-4 border-[#2C7A7B] whitespace-nowrap overflow-hidden text-4xl text-[#2c7a7b]-300">
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
