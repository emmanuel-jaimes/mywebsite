import React from "react";

function DateCard({
  year,
  company,
  title,
  location,
  logo,
  hoverable = true,
  hoverClass = "hover:bg-white/20",
  align = "left", // "left" | "right"
}) {
  return (
    <div
      className={`
        relative
        bg-white/10
        backdrop-blur-sm
        p-6
        rounded-2xl
        shadow-md
        text-white
        w-full
        transition-all
        duration-300
        ease-out
        ${hoverable ? hoverClass : ""}
        ${hoverable ? "hover:-translate-y-1 hover:shadow-xl" : ""}
        ${align === "right" ? "text-left" : "text-right"}
      `}
    >
      {/* Year */}
      <div className="text-xl text-gray-300 italic mb-2">
        {year}
      </div>

      {/* Header */}
      <div className="flex items-center gap-3 mb-2 justify-center">
        {logo && (
          <img
            src={logo}
            alt={company}
            className="w-14 h-14 object-contain rounded"
          />
        )}
        <h3 className="text-lg font-medium text-gray-300">
          {company}
        </h3>
      </div>

      {/* Role */}
      <p className="text-lg font-bold">
        {title}
      </p>

      {/* Location */}
      <p className="italic text-gray-300">
        {location}
      </p>
    </div>
  );
}

export default DateCard;
