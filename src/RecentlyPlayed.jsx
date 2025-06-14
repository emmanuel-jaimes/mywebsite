import React from 'react'

function RecentlyPlayed({ songs }) {
  return (
    <div className="overflow-x-auto py-4">
      <div className="flex gap-6">
        {songs.map((song, index) => (
          <div key={index} className="md:w-24 flex-shrink-0 text-center relative">
            {/* background blur */}
            {/* <div className="absolute top-0 left-0 w-24 h-24 rounded-lg blur-xs bg-gray-200 z-0" /> */}

            <img
              src={song.albumArt}
              alt={song.title}
              className="w-24 h-24 rounded-lg mb-2 relative z-10"
            />

            <p className="text-white text-sm break-words leading-tight z-20 relative">
              {song.title}
            </p>
            <p className="text-gray-500 text-xs break-words leading-tight z-20 relative">
              {song.artist}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentlyPlayed;
