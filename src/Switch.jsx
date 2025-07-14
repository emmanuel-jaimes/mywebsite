import React, { useState } from 'react';
import Card from './Card';
import { motion, AnimatePresence } from 'framer-motion';
import Experience from './Experience';
import About from './About';
import Projects from './Projects';

const sections = {
  'Howdy': (
    <About/>
  ),
  Projects: (
    <Projects/>
  ),
  Experience: (
    <Experience/>
  ),
};

function Switch() {
  const [activeTab, setActiveTab] = useState('Howdy'); //todo About me default tab   

  return (
    <div className="min-h-screen bg-black flex flex-col items-center pt-10 transition-all duration-500">
      {/* Navigation Menu */}
      <div className="flex gap-4 mb-6">
        {Object.keys(sections).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              activeTab === tab ? 'bg-blue-500 text-blue-800' : 'bg-white text-gray-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Animated Card Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <Card title={activeTab}>
            {sections[activeTab]}
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Switch;
