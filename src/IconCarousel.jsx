import React from "react";

function IconCarousel({ songs, size = 80 }) {
  return (
    <div
      className="
        relative
        py-3
        scroll-smooth
        overflow-x-auto
        snap-x snap-mandatory
        no-scrollbar
      "
      aria-label="Scrollable icon carousel"
    >
      <div
        className="
          gap-4
          px-4
          flex
          min-w-max
          mx-auto
          justify-center
        "
      >
        {songs.map((song, index) => (
          <div
            key={index}
            className="
              group
              shrink-0
              snap-center
              text-center
              relative
              transition-transform
              duration-300
              active:scale-95
              sm:hover:-translate-y-2
            "
            style={{ width: size }}
          >
            {/* Glow (hover only on larger screens) */}
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
                sm:group-hover:opacity-10
                z-0
              "
            />

            <img
              src={song.albumArt}
              alt={song.title || song.description}
              style={{ width: size, height: size }}
              className="
                rounded-lg
                mb-2
                relative
                z-10
                object-cover
              "
            />

            {song.title && (
              <p className="text-white text-xs sm:text-sm leading-tight truncate">
                {song.title}
              </p>
            )}

            {song.artist && (
              <p className="text-gray-500 text-[11px] sm:text-xs leading-tight truncate">
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