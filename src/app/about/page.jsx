import React from "react";

function Page() {
  return (
    <div className="relative text-center p-10 bg-gray-900 text-white min-h-screen">
      {/* Title Section */}
      <h1 className="text-3xl font-semibold mt-6 mb-8 bg-gray-800 p-6 rounded-lg shadow-lg text-green-400">
        BugNexus was brought to life by a passionate team of coding enthusiasts:
        Magda, Shaun, Jon, and Kyle. Our passion for coding and community is
        what drives us. Together, we are dedicated to providing a space where
        you can ask questions, debug issues, and develop your coding prowess in
        a collaborative and encouraging environment.
        <span className="block mt-2 text-gray-300">
          #Ubuntu - I am because we are; We all win, or nobody wins
        </span>
      </h1>

      <p className="text-lg mb-10 bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto text-gray-300">
        At BugNexus, learning is a journey best taken with others. Whether
        you’re stuck on a tricky bug, seeking guidance on best practices, or
        simply looking to enhance your skills, our platform is here to help. Our
        community is made up of both fellow learners and experienced developers,
        all eager to assist and grow alongside you.
      </p>

      {/* Main Content with Cards and Image */}
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
          {/* Left Column (Magda and Shaun) */}
          <div className="flex flex-col gap-8 items-center">
            {/* Magda Card */}
            <div className="bg-gray-800 p-8 text-center rounded-lg shadow-lg w-40 h-40 flex items-center justify-center text-green-400 font-semibold">
              <p>Magda</p>
            </div>

            {/* Shaun Card */}
            <div className="bg-gray-800 p-8 text-center rounded-lg shadow-lg w-40 h-40 flex items-center justify-center text-green-400 font-semibold">
              <p>Shaun</p>
            </div>
          </div>

          {/* Center Column (Frogs Image) */}
          <div className="flex justify-center items-center">
            <img
              src="/media/frogs-catching-bugs.webp"
              alt="Frogs catching bugs"
              className="w-64 h-64 rounded-lg shadow-lg border border-gray-700"
            />
          </div>

          {/* Right Column (Jon and Kyle) */}
          <div className="flex flex-col gap-8 items-center">
            {/* Jon Card */}
            <div className="bg-gray-800 p-8 text-center rounded-lg shadow-lg w-40 h-40 flex items-center justify-center text-green-400 font-semibold">
              <p>Jon</p>
            </div>

            {/* Kyle Card */}
            <div className="bg-gray-800 p-8 text-center rounded-lg shadow-lg w-40 h-40 flex items-center justify-center text-green-400 font-semibold">
              <p>Kyle</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
