import React from 'react';
import IconCarousel from './IconCarousel';
import Typewriter from './Typewriter';
import Card from './Card';
import { title } from 'framer-motion/client';

const sampleSongs = [
  {
    title: "BAILE INoLVIDABLE",
    artist: "Bad Bunny",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273bbd45c8d36e0e045ef640411"
  },
  {
    title: "Mirada",
    artist: "Ivan Cornejo",
    albumArt: "https://i.scdn.co/image/ab67616d0000b2738f5be6be73a2742bbf0e4fef"
  },
  {
    title: "rookie of the year",
    artist: "Young Miko",
    albumArt: "https://i.scdn.co/image/ab67616d0000b27310dfb6ef442ace580aa5a2bf"
  },
  {
    title: "Funny Papers",
    artist: "Mac Miller",
    albumArt: "https://i.scdn.co/image/ab67616d0000b2739a9c4cd69a6f514dfbb7305a"
  },
  {
    title: "FUEGO",
    artist: "GANGGY",
    albumArt: "https://i.scdn.co/image/ab67616d0000b273ce508549a22c5fd5c16e9322"
  },
];

const techStack = [
  {
    // title: "Java",
    albumArt: "/java.svg",
    description: "Java"
  },
  {
  //  title: "JavaScript",
   albumArt: "/javascript.svg",
   description: "JavaScript"
  },
  {
  //  title: "C++",
   albumArt: "/c.svg",
   description: "C++"
  },
  {
    albumArt: "/csharp.svg",
    description: "C Sharp"
  },
  {
  //  title: "python",
   albumArt: "/python.svg",
   description: "Python"
  },
  {
    albumArt: "/html.svg",
    description: "HTML"
  },
  {
    albumArt: "/css.svg",
    description: "CSS"
  },
  {
    albumArt: "/haskell.svg",
    description: "Haskell"
  },
]
const frameworks = [
  {
    albumArt: "/react.svg",
    description: "React"
  },
  {
    albumArt: "/typescript.svg",
    description: "TypeScript"
  },
  {
    albumArt: "vite.svg",
    description: "Vite"
  },
  {
    albumArt: "/expo.svg",
    description: "Expo"
  },
  {
    albumArt: "/node-js.svg",
    description: "Node.js"
  },
  {
    albumArt: "/tailwindcss.svg",
    description: "Tailwind CSS"
  },
  {
    albumArt: "/firebase.svg",
    description: "Firebase"
  },
  {
    albumArt: "/php.svg",
    description: "PHP",
  },
  {
    albumArt: "/qt.svg",
    description: 'QT'
  }

]

function About() {
  return (
    <div className="text-left text-3xl justify-center"> 

        <Card>
            <p className='text-2xl font-bold'>Howdy</p>
            <div className="leading-relaxed items-center justify-center">
                <p>
                Whether it's solving complex problems or crafting beautiful solutions, I bridge curiosity, precision, and a hunger to keep learning. 
                <br />
                Oh—and can make <i>pretty mean</i> margaritas too. 🍸
                </p>
            </div>
        </Card>

        <Card>
          <p className='text-2xl font-bold'>Current Tech Stack</p>
          <div className='space-y-4 flex flex-col'>
            <IconCarousel songs={techStack} size={'84'}/>
          <Typewriter words={["Frameworks & Tools"]} pause={4500}/>
            <IconCarousel songs={frameworks} size={'84'}/>
          </div>
        </Card>

        <Card title={"Theme Music"}>
            <div className='space-y-4 flex flex-col'>
              <p className='font-semibold'>Something on my rotation</p>
            </div>
            <div className='items-center justify-center text-center overflow-scroll'>
              <IconCarousel songs={sampleSongs} size={'96'}/>
            </div>
        </Card>

    </div>
  );
}

export default About;
