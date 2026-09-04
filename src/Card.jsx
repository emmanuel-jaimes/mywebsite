import React from "react";

function Card({
  title,
  description,
  children,
  hoverable = true,
  hoverClass = "hover:bg-white/10",
  childrenClass = "w-full"
}) {
  return (
    <div
      className={`
        relative z-1
        bg-white/10
        dark:bg-neutral-950
       text-neutral-100
        backdrop-blur-sm
        p-5 sm:p-6 lg:p-8
        rounded-xl
        shadow-md
        text-center
        transition-all
        duration-300
        ease-out
        active:scale-[0.98] md:active:scale-100 
        
        /* Desktop-Only Hover Effects */
        ${hoverable ? hoverClass : ""}
        ${hoverable ? "hover:-translate-y-1 hover:shadow-xl" : ""}
      `}
    >
      {title && (
        <h2 className="text-xl sm:text-2xl font-extralight font-sans tracking-tight mb-2">
          {title}
        </h2>
      )}

      {description && (
        <p className="mb-4 text-sm sm:text-base font-serif font-thin font-stretch-50% text-gray-400 leading-relaxed px-2">
          {description}
        </p>
      )}

      {children && (
        <div className={childrenClass}>
          {children}
        </div>
      )}
    </div>
  );
}

export default Card;