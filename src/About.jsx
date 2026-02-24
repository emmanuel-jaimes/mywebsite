import React from 'react';
import IconCarousel from './IconCarousel';
import Card from './Card';

const sampleSongs = [
  { title: "BAILE INoLVIDABLE", artist: "Bad Bunny", albumArt: "https://i.scdn.co/image/ab67616d0000b273bbd45c8d36e0e045ef640411" },
  { title: "Mirada", artist: "Ivan Cornejo", albumArt: "https://i.scdn.co/image/ab67616d0000b2738f5be6be73a2742bbf0e4fef" },
  { title: "rookie of the year", artist: "Young Miko", albumArt: "https://i.scdn.co/image/ab67616d0000b27310dfb6ef442ace580aa5a2bf" },
  { title: "Funny Papers", artist: "Mac Miller", albumArt: "https://i.scdn.co/image/ab67616d0000b2739a9c4cd69a6f514dfbb7305a" },
  { title: "FUEGO", artist: "GANGGY", albumArt: "https://i.scdn.co/image/ab67616d0000b273ce508549a22c5fd5c16e9322" },
];

const techStack = [
  { albumArt: "/java.svg", description: "Java" },
  { albumArt: "/javascript.svg", description: "JavaScript" },
  { albumArt: "/c.svg", description: "C++" },
  { albumArt: "/csharp.svg", description: "C Sharp" },
  { albumArt: "/sql.svg", description: "SQL" },
];
const techStack2 = [
  { albumArt: "/python.svg", description: "Python" },
  { albumArt: "/html.svg", description: "HTML" },
  { albumArt: "/css.svg", description: "CSS" },
  { albumArt: "/haskell.svg", description: "Haskell" },
];

const frameworks = [
  { albumArt: "/react.svg", description: "React" },
  { albumArt: "/typescript.svg", description: "TypeScript" },
  { albumArt: "/vite.svg", description: "Vite" },
  { albumArt: "/expo.svg", description: "Expo" },
];
const frameworks2 = [
  { albumArt: "/node-js.svg", description: "Node.js" },
  { albumArt: "/tailwindcss.svg", description: "Tailwind CSS" },
  { albumArt: "/firebase.svg", description: "Firebase" },
  { albumArt: "/php.svg", description: "PHP" },
  { albumArt: "/qt.svg", description: "QT" },
];

function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-10">
      
      <Card>
        <div className="text-white text-center space-y-4">
          <p className="text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            Whether it's solving complex problems or crafting beautiful solutions, I bridge curiosity and precision with a hunger to keep learning. <br />
            Writing lines of code by day, and making <i>mean</i> margaritas by night 🍸
          </p>
        </div>
      </Card>

      <Card>
        <div className="text-white text-center space-y-2">
          <p className="text-2xl sm:text-3xl font-semibold">Current Tech Stack</p>
          <p className="text-sm text-gray-400 italic">Languages, Tools & Frameworks</p>
          <div className='w-full overflow-x-auto'>
              <IconCarousel songs={[...techStack, ...techStack2]} size={72} />
          </div>
          <div className='w-full overflow-x-auto'>
              <IconCarousel songs={[...frameworks, ...frameworks2]} size={72} />
          </div>
        </div>
      </Card>

      <Card>
        <div className="text-white text-center space-y-4">
          <p className="text-2xl sm:text-3xl font-semibold">Theme Music</p>
          <p className="text-sm text-gray-400 italic">
            Can't go without mentioning a bit of enrichment
          </p>
          <div className='w-full overflow-x-auto'>
              <IconCarousel songs={sampleSongs} size={88} />
          </div>
        </div>
      </Card>

    </div>
  );
}

export default About;
