import React from 'react';

function Card({ title, children }) {
  return (
    <div className="flex justify-center items-center w-full px-4 py-8">
      <div className="bg-black rounded-2xl shadow-xl p-6 w-full max-w-3xl">
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white text-center md:text-left">
            {title}
          </h2>
        )}
        <div className="text-white text-base md:text-lg leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Card;
