'use client';
import React from 'react';
import Image from 'next/image';
import Express from "../logos/express.png";
import Firebase from "../logos/firebase.png";
import Git from "../logos/git.png";
import GitHub from "../logos/github.png";
import Java from "../logos/java.png";
import JavaScript from "../logos/javascript.png";
import MongoDB from "../logos/mongodb.png";
import MySql from "../logos/mysql.png";
import Next from "../logos/nextjs.png";
import NodeJs from "../logos/nodejs.png";
import Postman from "../logos/postman.png";
import Python from "../logos/python.png";
import ReactJS from "../logos/reactjs.png";
import Sql from "../logos/sql.png";
import Tailwind from "../logos/tailwind.png";
import TypeScript from "../logos/typescript.png";
import MyImage from "../logos/image.png";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#111827] flex items-center justify-center overflow-hidden mb-5">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto overflow-y-auto">
        <h1 className="text-4xl font-extrabold text-teal-600 mb-6 text-center">
          About Me
        </h1>
        <p className="text-lg leading-relaxed text-gray-700 text-center mb-8">
          Hi, I’m Dhruv, a passionate tech enthusiast and aspiring developer currently studying software engineering. 
          I have hands-on experience with technologies like JavaScript, React, Firebase, Node.js, and MongoDB. 
          I’ve worked on projects ranging from real-time chat applications to e-voting platforms and dynamic task 
          management systems. I’m currently focused on becoming a well-rounded full-stack developer.
        </p>
        <div className="flex justify-center">
          <Image
            src={MyImage}
            alt="Dhruv"
            width={192}
            height={192}
            className="rounded-full shadow-lg border-4 border-teal-500 image-3d"
          />
        </div>
        <p className="mt-8 text-lg leading-relaxed text-gray-700 text-center">
          Outside of coding, I enjoy music and photography. You can check out my Instagram page, MomentsMuse, where I share moments that inspire me.
        </p>

        {/* Skills Section */}
        <h2 className="text-2xl font-bold text-teal-600 mt-8 mb-4 text-center">Skills</h2>

        {/* Frontend Technologies */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 text-center">Frontend Technologies</h3>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center skill-icon">
            <Image src={ReactJS} alt="React" width={50} height={50} className="mb-2" />
            <span className="text-gray-700">React</span>
          </div>
          <div className="flex flex-col items-center skill-icon">
            <Image src={Next} alt="Next.js" width={50} height={50} className="mb-2" />
            <span className="text-gray-700">Next.js</span>
          </div>
          <div className="flex flex-col items-center skill-icon">
            <Image src={Tailwind} alt="Tailwind CSS" width={50} height={50} className="mb-2" />
            <span className="text-gray-700">Tailwind CSS</span>
          </div>
          <div className="flex flex-col items-center skill-icon">
            <Image src={TypeScript} alt="TypeScript" width={50} height={50} className="mb-2" />
            <span className="text-gray-700">TypeScript</span>
          </div>
        </div>

        {/* Backend Technologies */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 text-center">Backend Technologies</h3>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center skill-icon">
            <Image src={NodeJs} alt="Node.js" width={50} height={50} className="mb-2" />
            <span className="text-gray-700">Node.js</span>
          </div>
          <div className="flex flex-col items-center skill-icon">
            <Image src={Express} alt="Express.js" width={50} height={50} className="mb-2" />
            <span className="text-gray-700">Express.js</span>
          </div>
          <div className="flex flex-col items-center skill-icon">
            <Image src={Sql} alt="Express.js" width={50} height={50} className="mb-2" />
            <span className="text-gray-700">SQL</span>
          </div>
        </div>

        {/* Databases */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 text-center">Databases</h3>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center skill-icon">
            <Image src={MongoDB} alt="MongoDB" width={50} height={50} className="mb-2" />
            <span className="text-gray-700">MongoDB</span>
          </div>
          <div className="flex flex-col items-center skill-icon">
            <Image src={MySql} alt="MySQL" width={50} height={50} className="mb-2" />
            <span className="text-gray-700">MySQL</span>
          </div>
        </div>

        {/* Programming Languages */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 text-center">Programming Languages</h3>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center skill-icon">
            <Image src={JavaScript} alt="JavaScript" width={50} height={50} className="mb-2" />
            <span className="text-gray-700">JavaScript</span>
          </div>
          <div className="flex flex-col items-center skill-icon">
            <Image src={Python} alt="Python" width={50} height={50} className="mb-2" />
            <span className="text-gray-700">Python</span>
          </div>
          <div className="flex flex-col items-center skill-icon">
            <Image src={Java} alt="Java" width={50} height={50} className="mb-2" />
            <span className="text-gray-700">Java</span>
          </div>
        </div>

        {/* Tools */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 text-center">Tools & Version Control</h3>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center skill-icon">
            <Image src={Git} alt="Git" width={50} height={50} className="mb-2" />
            <span className="text-gray-700">Git</span>
          </div>
          <div className="flex flex-col items-center skill-icon">
            <Image src={GitHub} alt="GitHub" width={50} height={50} className="mb-2" />
            <span className="text-gray-700">GitHub</span>
          </div>
          <div className="flex flex-col items-center skill-icon">
            <Image src={Postman} alt="Postman" width={50} height={50} className="mb-2" />
            <span className="text-gray-700">Postman</span>
          </div>
        </div>

        {/* Cloud & Firebase */}
        <h3 className="text-xl font-semibold text-gray-800 mt-6 text-center">Cloud & Backend Services</h3>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center skill-icon">
            <Image src={Firebase} alt="Firebase" width={50} height={50} className="mb-2" />
            <span className="text-gray-700">Firebase</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
