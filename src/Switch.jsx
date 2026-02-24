import React, { useState } from 'react';
import Card from './Card';
import { motion, AnimatePresence } from 'framer-motion';
import Experience from './Experience';
import About from './About';
import Projects from './Projects';

const sections = {
  Projects: <Projects />,
  About: <About />,
  Experience: <Experience />,
};

function Switch() {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <div className="">
      {/* min-h-screen w-full bg-black flex flex-col items-center pt-10 transition-all duration-500 px-4 */}
      {/* nav menu */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.keys(sections).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === tab
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' 
                : 'bg-zinc-800 text-gray-400 hover:text-white hover:bg-zinc-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* animate */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: -10 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className=""
          // w-full flex justify-center
        >
          {/* w-full max-w-4xl */}
          <div className=""> 
            <Card title={activeTab} hoverable={true} hoverClass='hover:bg-blue'>
              {sections[activeTab]}
            </Card>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Switch;