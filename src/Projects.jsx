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
        <SocialIcon
          href="https://github.com/emmanuel-jaimes/iot"
          alt="Github Link"
          src="/Github.svg"
          hoverColor="hover:bg-purple-800"
        />
      </Card>

      <Card
        title="Typing Analyzer"
        description="Developed a bilingual typing analyzer app that tracks and visualizes user performance."
      >
        <SocialIcon
          href="https://github.com/emmanuel-jaimes/typingtyper"
          alt="Github Link"
          src="/Github.svg"
          hoverColor="hover:bg-purple-800"
        />
      </Card>

      <Card
        title="Album Art Extractor"
        description="A web tool that extracts and displays the main color palette of any Spotify album art."
      >
        <SocialIcon
          href="https://github.com/emmanuel-jaimes/muse"
          alt="Github Link"
          src="/Github.svg"
          hoverColor="hover:bg-purple-800"
        />
      </Card>

      <Card
        title="Network Protocol Simulator"
        description="Simulates various networking protocols in a command-line environment using data structures."
      >
        <SocialIcon
          href="https://github.com/emmanuel-jaimes/uni-projects/tree/main/LinkedListNetwork"
          alt="Github Link"
          src="/Github.svg"
          hoverColor="hover:bg-purple-800"
        />
      </Card>

      <Card title="More under development..." />

    </div>
  );
}

export default Projects;
