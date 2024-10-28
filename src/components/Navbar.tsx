import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#F5F7F8] text-black m-5 px-10 py-4 flex justify-center items-center shadow-md">
      {/* Logo */}
      {/* <div className="text-3xl font-bold">
          <Link href="/">Dhruv</Link>
      </div>
       */}
      {/* Navigation Links */}
      <div className="space-x-20 text-xl " style={{fontFamily: '"Dosis", sans-serif'}}>
        <Link href="/" className="hover:text-gray-300 mx-5" >Home</Link>
        <Link href="/about" className="hover:text-gray-300 mx-5">About</Link>
        <Link href="/projects" className="hover:text-gray-300 mx-5">Projects</Link>
        <Link href="/contact" className="hover:text-gray-300 mx-5">Contact</Link>
    
      </div>
    </nav>
  );
};

export default Navbar;