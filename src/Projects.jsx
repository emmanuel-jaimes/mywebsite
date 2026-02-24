import React from 'react';
import SocialIcon from './SocialIcon';
import Card from './Card';

function Projects() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-12">

      <Card
        title="Smart Home Thermostat System"
        hoverable="false"
        description="Designed and implemented an IoT Thermostat System using microcontrollers and a controllable web interface."
      >
        <div className='w-full flex justify-center'>
          <SocialIcon
            className='mx-auto'
            href="https://github.com/emmanuel-jaimes/iot"
            alt="Github Link"
            src="/Github.svg"
            hoverColor="hover:bg-purple-800"
          />
        </div>
      </Card>

      <Card
        title="Typing Analyzer"
        description="Developed a bilingual typing analyzer app that tracks and visualizes user performance."
      >
        <div className='w-full flex justify-center'>
          <SocialIcon
            className='mx-auto'
            href="https://github.com/emmanuel-jaimes/typingtyper"
            alt="Github Link"
            src="/Github.svg"
            hoverColor="hover:bg-purple-800"
          />
        </div>
        
      </Card>

      <Card
        title="Album Art Extractor"
        description="A web tool that extracts and displays the main color palette of any Spotify album art."
      >
        <div className='flex justify-center w-full'>
          <SocialIcon
            className='mx-auto'
            href="https://github.com/emmanuel-jaimes/muse"
            alt="Github Link"
            src="/Github.svg"
            hoverColor="hover:bg-purple-800"
          />
        </div>
      </Card>

      <Card
        title="Network Protocol Simulator"
        description="Simulates various networking protocols in a command-line environment using data structures."
      >
        <div className='flex justify-center w-full'>
          <SocialIcon
            className='mx-auto'
            href="https://github.com/emmanuel-jaimes/uni-projects/tree/main/LinkedListNetwork"
            alt="Github Link"
            src="/Github.svg"
            hoverColor="hover:bg-purple-800"
          />
        </div>
      </Card>

      <Card title="More under development..." />

    </div>
  );
}

export default Projects;
