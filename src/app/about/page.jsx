// page.jsx
"use client"; // Add this directive

import React, { useEffect, useState } from "react";
import Image from 'next/image'; // Import the Image component from Next.js

function Page() {

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col gap-8 p-10">
      {/* Title Section */}
      <h1 className="text-3xl font-semibold mt-6 mb-8 bg-gray-800 p-6 rounded-lg shadow-lg text-green-400">
        BugNexus was brought to life by a passionate team of coding enthusiasts: Magda, Shaun, Jon, and Kyle. Our passion for coding and community is what drives us. Together, we are dedicated to providing a space where you can ask questions, debug issues, and develop your coding prowess in a collaborative and encouraging environment.
        <span className="block mt-2 text-gray-300">#Ubuntu - I am because we are; We all win, or nobody wins</span>
      </h1>
      <p className="text-lg mb-10 bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto text-gray-300">
        At BugNexus, learning is a journey best taken with others. Whether you’re stuck on a tricky bug, seeking guidance on best practices, or simply looking to enhance your skills, our platform is here to help. Our community is made up of both fellow learners and experienced developers, all eager to assist and grow alongside you.
      </p>

      {/* Main Content with Cards and Image */}
      <div className="relative flex justify-center items-center gap-8 flex-wrap">
        <div className="w-3/12 "> 
          <Image
            src="/media/frogs-catching-bugs.webp"
            alt="Frogs catching bugs"
            layout="responsive"
            width={599}
            height={599}
            className="rounded-lg shadow-lg border border-gray-700"
            priority={true.toString()}
          />
        </div>

        {/* Magda Card */}
        <div className="lg:absolute lg:top-0 lg:left-32 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 bg-gray-800 p-4 text-left rounded-lg shadow-lg max-w-xs text-green-500 font-semibold" style={{ marginLeft: "2cm" }}>
          <p>I’m Magda, a student at Tech Educators, embarking on my coding journey in the exciting world of software development. Driven by a passion for learning and a fascination with technology, I’ve collaborated with my colleagues to build this website, aimed at helping fellow coders navigate their challenges.</p>
        </div>

        {/* Jon Card */}
        <div className="lg:absolute lg:-top-14 lg:-right-16 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 bg-gray-800 p-4 text-left rounded-lg shadow-lg max-w-xs text-green-400 font-semibold" style={{ marginRight: "2cm" }}>
          <p>I am Jonathan, currently a student at Tech Educators (until Today 😦 ), I have enjoyed my start into the world of Coding through this bootcamp, I am now looking forward to starting my Journey in the world of Tech. My main passions in Life include Gaming, Technology and spending time with my wife. This collaborated project is aimed at helping newbies to coding with issues and having a community to help. I hope you enjoy your time here and continue to help others later down the line.</p>
        </div>

        {/* Shaun Card */}
        <div className="lg:absolute lg:bottom-0 lg:left-32 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 bg-gray-800 p-4 text-left rounded-lg shadow-lg max-w-xs text-green-400 font-semibold" style={{ marginLeft: "2cm" }}>
          <p>I’m Shaun, a software developer and application support engineer with a knack for problem-solving and a passion for technology.</p>                    
                      <p className="mt-2 text-gray-300">Connect with me:</p>
          <ul className="list-disc list-inside text-gray-300 mt-2">
            <li><a href="github.com/ShaunMadziva" className="text-blue-500 hover:underline">GitHub</a></li>
            </ul>
        </div>

        {/* Kyle Card */}
        <div className="lg:absolute lg:bottom-0 lg:-right-16 lg:transform lg:-translate-x-1/2 bg-gray-800 p-4 text-left rounded-lg shadow-lg max-w-xs text-green-400 font-semibold" style={{ marginRight: "2cm" }}>
          <p>Howzit! I’m Kyle Wingham. Born in South Africa, I moved to England in 1999. As an aspiring frontend developer, I thrive on collaboration and continuous learning. My passions include rugby, helping others, and all things tech-related.</p>
          <p className="mt-2 text-gray-300">Connect with me:</p>
          <ul className="list-disc list-inside text-gray-300 mt-2">
            <li><a href="https://uk.linkedin.com/in/kylewingham" className="text-blue-500 hover:underline">LinkedIn</a></li>
            <li><a href="https://github.com/kwingham" className="text-blue-500 hover:underline">GitHub</a></li>
            <li><a href="https://x.com/WinghamKyle" className="text-blue-500 hover:underline">Twitter</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Page;
