import React from 'react';
import RecentlyPlayed from './RecentlyPlayed';
import Typewriter from './Typewriter';

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

function About() {
  return (
    <div className="text-left text-3xl"> 
      <Typewriter
                    size=""
                    words={[
                        "Howdy, I'm a...",
                      "Software Engineer",
                      "University of Iowa Graduate",
                      "Dallas Native",
                      "Craft Bartender",
                      "Music Enthusiast",
                      "Intramural Futsal Champion",
                    ]}
                  />
        <div className="text-base px-4 py-6 space-y-6 text-left">
                        
        <div className="leading-relaxed">
            <p>
            Whether it's solving complex problems or crafting beautiful solutions, I bridge curiosity, precision, and a hunger to keep learning. 
            <br />
            Oh—and can make <i>pretty mean</i> margaritas too. 🍸
            </p>
        </div>

            <div className="space-y-4 flex flex-col">
                <p className="font-semibold">
                    Every project deserves a theme song. Here’s my frequently played.
                </p>
                <div className="w-full max-w-4xl items-center justify-center text-center">
                    <RecentlyPlayed songs={sampleSongs} />
                </div>
            </div>

        </div>
    </div>
  );
}

export default About;
