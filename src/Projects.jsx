import React from 'react'
import Card from './Card'
import SocialIcon from './SocialIcon'

function Projects() {
  return (
    <div>

      <Card title={"Smart Home Thermometer System"} description={""}>
        <div className="border-b-white border-2 rounded-2xl p-4 m-2 text-center">
          <div className="flex justify-center items-center">
            <SocialIcon
              href="https://github.com/emmanuel-jaimes/iot"
              alt="Github Link"
              src="/Github.svg"
              hoverColor="hover:bg-purple-800"
            />
          </div>
        </div>
      </Card>

      <Card title={"Typing Analyzer"} description={"Typing performance analyzer built with React and Firebase"}>
        <div className="border-b-white border-2 rounded-2xl p-4 m-2 text-center">
          <div className="flex justify-center items-center">
            <SocialIcon
              href="https://github.com/emmanuel-jaimes/typingtyper"
              alt="Github Link"
              src="/Github.svg"
              hoverColor="hover:bg-purple-800"
            />
          </div>
        </div>
      </Card>

      <Card title={"Album Art Extractor"} description={"Tool to extract and display Spotify album art from links."}>
        <div className="border-b-white border-2 rounded-2xl p-4 m-2 text-center">
          <div className="flex justify-center items-center">
            <SocialIcon
              href="https://github.com/emmanuel-jaimes/muse"
              src="/Github.svg"
              hoverColor="hover:bg-purple-800"
            />
          </div>
        </div>
      </Card>

      <Card title={"Network Protocol Simulator"} description={"Simulates network protocols using linked lists."}>
        <div className="border-b-white border-2 rounded-2xl p-4 m-2 text-center">
          <div className="flex justify-center items-center">
            <SocialIcon
              href="https://github.com/emmanuel-jaimes/uni-projects/tree/main/LinkedListNetwork"
              alt="Github Link"
              src="/Github.svg"
              hoverColor="hover:bg-purple-800"
            />
          </div>
        </div>
      </Card>

    </div>
  )
}

export default Projects
