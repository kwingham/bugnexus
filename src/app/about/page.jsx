// src/app/about/page.jsx

import React from "react";

function Page() {
  return (
    <div className="relative text-center p-4">
      {/* Title Section */}
      <h1 className="text-xl font-semibold mt-6 mb-4 bg-green-200 p-4 rounded-lg">
        BugNexus was brought to life by a passionate team of coding enthusiasts: Magda, Shaun, Jon, and Kyle. Our passion for coding and community is what drives us. Together, we are dedicated to providing a space where you can ask questions, debug issues, and develop your coding prowess in a collaborative and encouraging environment. #Ubuntu - I am because we are; We all win, or nobody wins
      </h1>

      <p className="text-lg mb-6 p-4">
        At BugNexus, learning is a journey best taken with others. Whether you’re stuck on a tricky bug, seeking guidance on best practices, or simply looking to enhance your skills, our platform is here to help. Our community is made up of both fellow learners and experienced developers, all eager to assist and grow alongside you.
      </p>

      {/* Main Content with Cards and Image */}
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-3 gap-4 w-full max-w-4xl">
          {/* Left Column (Magda and Shaun) */}
          <div className="flex flex-col gap-4 items-center">
            {/* Magda Card */}
            <div className="bg-red-200 p-8 text-center rounded-lg shadow-md w-40 h-40 flex items-center justify-center">
              <p>Magda</p>
            </div>

            {/* Shaun Card */}
            <div className="bg-red-200 p-8 text-center rounded-lg shadow-md w-40 h-40 flex items-center justify-center">
              <p>Shaun</p>
            </div>
          </div>

          {/* Center Column (Frogs Image) */}
          <div className="flex justify-center items-center">
            <img 
              src="/media/frogs-catching-bugs.webp" 
              alt="Frogs catching bugs" 
              className="w-64 h-64 rounded-lg shadow-md" 
            />
          </div>

          {/* Right Column (Jon and Kyle) */}
          <div className="flex flex-col gap-4 items-center">
            {/* Jon Card */}
            <div className="bg-red-200 p-8 text-center rounded-lg shadow-md w-40 h-40 flex items-center justify-center">
              <p>Jon</p>
            </div>

            {/* Kyle Card */}
            <div className="bg-red-200 p-8 text-center rounded-lg shadow-md w-40 h-40 flex items-center justify-center">
              <p>Kyle</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
