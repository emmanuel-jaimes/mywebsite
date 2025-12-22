import React from "react";

function Card({
  title,
  description,
  children,
  hoverable = true,
  hoverClass = "hover:bg-white/10"
}) {
  return (
    <div
      className={`
        relative z-10
        bg-black
        backdrop-blur-sm
        p-5 sm:p-6 lg:p-8
        rounded-xl
        shadow-md
        text-white
        text-center
        transition-all
        duration-300
        ease-out
        
        /* Mobile Touch Feedback */
        active:scale-[0.98] md:active:scale-100 
        
        /* Desktop-Only Hover Effects */
        ${hoverable ? hoverClass : ""}
        ${hoverable ? "hover:-translate-y-1 hover:shadow-xl" : ""}
      `}
    >
      {title && (
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
          {title}
        </h2>
      )}

      {description && (
        <p className="mb-4 text-sm sm:text-base text-gray-400 leading-relaxed px-2">
          {description}
        </p>
      )}

      {children && (
        <div className="flex justify-center w-full overflow-hidden">
          {children}
        </div>
      )}
    </div>
  );
}

export default Card;