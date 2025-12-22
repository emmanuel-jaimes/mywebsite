import React from "react";

function IconCarousel({ songs, size = 96 }) {
  return (
    <div
      className="
        relative
        w-full
        max-w-full
        overflow-x-scroll
        overflow-y-hidden
        py-4
        scroll-smooth
      "
      aria-label="Scrollable icon carousel"
    >
      {/* scroll */}
      <div
        className="
          flex
          gap-6
          px-6
          min-w-max
          justify-center
        "
      >
        {songs.map((song, index) => (
          <div
            key={index}
            className="
              flex-shrink-0
              snap-center
              text-center
              relative
              group
              transition-transform
              duration-300
              hover:-translate-y-3
            "
            style={{ width: size }}
          >
            {/* Tooltip */}
            {song.description && (
              <div
                className="
                  hidden sm:block
                  absolute
                  -bottom-1
                  left-1/2
                  -translate-x-1/2
                  px-2
                  text-xs
                  text-white
                  bg-black/80
                  rounded
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  whitespace-nowrap
                  z-20
                "
              >
                {song.description}
              </div>
            )}

            {/* glow */}
            <div
              className="
                absolute
                inset-0
                rounded-lg
                bg-white
                opacity-0
                blur-md
                scale-90
                transition-opacity
                duration-300
                group-hover:opacity-10
                z-0
              "
            />

            {/* img */}
            <img
              src={song.albumArt}
              alt={song.title || song.description}
              style={{ width: size, height: size }}
              className="rounded-lg mb-2 relative z-10"
            />

            {/* txt */}
            {song.title && (
              <p className="text-white text-sm leading-tight">
                {song.title}
              </p>
            )}
            {song.artist && (
              <p className="text-gray-500 text-xs leading-tight">
                {song.artist}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default IconCarousel;
