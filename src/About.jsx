import React from 'react';
import RecentlyPlayed from './RecentlyPlayed';
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
    albumArt: "/java.svg"
  },
  {
  //  title: "JavaScript",
   albumArt: "/javascript.svg"
  },
  {
  //  title: "python",
   albumArt: "/python.svg"
  },
  {
  //  title: "C++",
   albumArt: "/c.svg"
  },
  {
    albumArt: "/csharp.svg"
  },
  {
    albumArt: "/html.svg"
  },
  {
    albumArt: "/css.svg"
  },
  {
    albumArt: "/haskell.svg"
  },
]
const frameworks = [
  {
    albumArt: "/react.svg"
  },
  {
    albumArt: "/typescript.svg"
  },
  {
    albumArt: "vite.svg"
  },
  {
    albumArt: "/expo.svg"
  },
  {
    albumArt: "/node-js.svg"
  },
  {
    albumArt: "/tailwindcss.svg"
  },
  {
    albumArt: "/firebase.svg"
  },
  {
    albumArt: "/php.svg"
  },
  {
    albumArt: "/qt.svg"
  }

]

function About() {
  return (
    <div className="text-left text-3xl"> 

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
            <RecentlyPlayed songs={techStack} color={'gray'}/>
          <p className='text-xl'>Frameworks</p>
            <RecentlyPlayed songs={frameworks}/>
          </div>
        </Card>

        <Card title={"Theme Music"}>
            <div className='space-y-4 flex flex-col'>
              <p className='font-semibold'>Something on my rotation</p>
            </div>
            <div className='items-center justify-center text-center overflow-scroll'>
              <RecentlyPlayed songs={sampleSongs}/>
            </div>
        </Card>

    </div>
  );
}

export default About;
