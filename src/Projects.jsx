import React from 'react';
import SocialIcon from './SocialIcon';

function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">

      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-md text-white text-center">
        <h2 className="text-2xl font-semibold mb-2">Smart Home Thermostat System</h2>
        <p className="mb-4">
          Designed and implemented an IoT Thermostat System using microcontrollers and a controllable web interface.
        </p>
        <div className="flex justify-center">
          <SocialIcon
            href="https://github.com/emmanuel-jaimes/iot"
            alt="Github Link"
            src="/Github.svg"
            hoverColor="hover:bg-purple-800"
          />
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-md text-white text-center">
        <h2 className="text-2xl font-semibold mb-2">Typing Analyzer</h2>
        <p className="mb-4">
          Developed a bilingual typing analyzer app that tracks and visualizes user performance.
        </p>
        <div className="flex justify-center">
          <SocialIcon
            href="https://github.com/emmanuel-jaimes/typingtyper"
            alt="Github Link"
            src="/Github.svg"
            hoverColor="hover:bg-purple-800"
          />
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-md text-white text-center">
        <h2 className="text-2xl font-semibold mb-2">Album Art Extractor</h2>
        <p className="mb-4">
          A web tool that extracts and displays the main color palette of any Spotify album art.
        </p>
        <div className="flex justify-center">
          <SocialIcon
            href="https://github.com/emmanuel-jaimes/muse"
            alt="Github Link"
            src="/Github.svg"
            hoverColor="hover:bg-purple-800"
          />
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-md text-white text-center">
        <h2 className="text-2xl font-semibold mb-2">Network Protocol Simulator</h2>
        <p className="mb-4">
          Simulates various networking protocols in a command-line environment using data structures.
        </p>
        <div className="flex justify-center">
          <SocialIcon
            href="https://github.com/emmanuel-jaimes/uni-projects/tree/main/LinkedListNetwork"
            alt="Github Link"
            src="/Github.svg"
            hoverColor="hover:bg-purple-800"
          />
        </div>
      </div>
      
    </div>
  );
}

export default Projects;
