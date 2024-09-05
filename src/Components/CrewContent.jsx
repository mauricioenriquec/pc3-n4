import React from 'react';
import { motion } from 'framer-motion';
import backgroundImageCrew from '../assets/crew/bgcrew.jpg';
import imageCrew from '../assets/crew/image-ansari.png';

function CrewContent() {
  return (
    <div
      className="relative flex flex-col justify-center items-center text-white h-screen"
      style={{
        backgroundImage: `url(${backgroundImageCrew})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <motion.div
        className="relative top-40 text-left"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-2xl uppercase tracking-widest">
          <span className="font-bold mr-4">02</span>Meet your crew
        </h1>
      </motion.div>

      <div className="flex justify-center items-center w-full h-full px-8">
        <section className="w-full max-w-5xl flex flex-col items-center text-left space-y-8">
          <motion.article
            className="flex flex-col space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-thin text-gray-500">FLIGHT ENGINEER</h2>
            <h3 className="text-7xl font-thin">ANOUSHEH ANSARI</h3>
            <p className="max-w-xl mx-auto text-lg mt-4">
              Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.
            </p>
          </motion.article>
          <div className="flex justify-center space-x-4 mt-8">
            <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </section>
        
        <motion.figure
          className="w-full max-w-sm flex justify-center items-center mt-8 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={imageCrew} alt="Anousheh Ansari" className="max-h-full object-contain" />
        </motion.figure>
      </div>
    </div>
  );
}

export default CrewContent;
