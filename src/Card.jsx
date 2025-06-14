import React from 'react';

function Card({ title, children }) {
  return (
    <div className="flex justify-center items-center py-8 w-full">
      <div className="bg-black rounded-2xl shadow-xl p-6 w-full">
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white text-center md:text-left">
            {title}
          </h2>
        )}
        <div className="text-white text-base md:text-lg leading-relaxed w-3xl">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Card;
