import React from 'react';

function IconCarousel({ songs, size = 96 }) {
  const imageSize = {
    width: `${size}px`,
    height: `${size}px`
  };

  return (
    <div className="overflow-x-auto py-4">
      <div className="flex gap-6">
        {songs.map((song, index) => (
          <div
            key={index}
            className="flex-shrink-0 text-center relative group"
            style={{ width: `${size}px` }}
          >
            {/* ttip */}
             {song.description && (
              <div className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 px-2 text-xs text-white bg-black bg-opacity-70 rounded opacity-0 group-hover:opacity-100 transition-opacity z-20 whitespace-nowrap">
                {song.description}
              </div>
            )}

            <img
              src={song.albumArt}
              alt={song.title}
              style={imageSize}
              className="rounded-lg mb-2 relative z-10"
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

export default IconCarousel;
