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
      <div className="relative flex justify-center items-center">
        <img
          src="/media/frogs-catching-bugs.webp"
          alt="Frogs catching bugs"
          className="w-64 h-64 rounded-lg shadow-lg border border-gray-700"
        />

        {/* Magda Card */}
        <div className="absolute top-0 left-40 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 p-4 text-center rounded-lg shadow-lg max-w-xs text-green-400 font-semibold">
          <p>Magda is a passionate software developer from Poland, specializing in full-stack web development and UX/UI design.</p>
        </div>

        {/* Jon Card */}
        <div className="absolute top-0 right-40 transform translate-x-1/2 -translate-y-1/2 bg-gray-800 p-4 text-center rounded-lg shadow-lg max-w-xs text-green-400 font-semibold">
          <p>Jon is an experienced backend developer from England, known for optimizing complex systems and mentoring new developers.</p>
        </div>

        {/* Shaun Card */}
        <div className="absolute bottom-0 left-40 transform -translate-x-1/2 translate-y-1/2 bg-gray-800 p-4 text-center rounded-lg shadow-lg max-w-xs text-green-400 font-semibold">
          <p>Shaun is a skilled developer from Zimbabwe, focusing on mobile app development and AI. He believes in the power of technology to empower and uplift.</p>
        </div>

        {/* Kyle Card */}
        <div className="absolute bottom--40 right-40 transform translate-x-1/2 translate-y-1/2 bg-gray-800 p-4 text-center rounded-lg shadow-lg max-w-xs text-green-400 font-semibold">
          <p>
            Howzit! 👋🤓 I’m Kyle Wingham. Born in South Africa, I moved to England in 1999.
            As an aspiring frontend developer, I thrive on collaboration and continuous learning. My passions include rugby, helping others, and all things tech-related.
            <br /><br />
            Connect with me:
            <ul className="list-disc list-inside text-gray-300 mt-2">
              <li>LinkedIn</li>
              <li>GitHub</li>
              <li>Twitter</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;

