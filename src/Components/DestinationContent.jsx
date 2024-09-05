import React from 'react';
import { motion } from 'framer-motion';
import backgroundImageDestination from '../assets/destination/bgdestination.jpg';
import imageMoon from '../assets/destination/image-moon.png';
import DestinationLinks from './DestinationLinks';

function DestinationContent() {
  return (
    <div
      className="relative flex flex-col justify-center items-center text-white min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImageDestination})`,
      }}
    >
     <div className="container mx-auto px-4 py-16">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl uppercase tracking-widest mb-12"
        >
          <span className="font-bold mr-4">01</span>Pick your destination
        </motion.h2>
        <main className="flex flex-col md:flex-row justify-between items-start">
          <motion.section 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-2/5 mb-8 md:mb-0"
          >
<img src={imageMoon} alt="Planet" className="custom-width h-auto" />
          </motion.section>
          <motion.section 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full md:w-1/2"
          >
            <div className="flex justify-start mb-8">
              <DestinationLinks />
            </div>
            <article>
              <h2 className="text-6xl md:text-8xl font-serif mb-4">MOON</h2>
              <p className="text-lg text-gray-300 mb-12">
                See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
              </p>
              <div className="border-t border-gray-600 pt-8">
                <div className="flex flex-col md:flex-row justify-start space-y-8 md:space-y-0 md:space-x-16">
                  <div>
                    <h3 className="text-sm font-light uppercase mb-2">Avg. distance</h3>
                    <p className="text-3xl">384,400 KM</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-light uppercase mb-2">Est. travel time</h3>
                    <p className="text-3xl">3 DAYS</p>
                  </div>
                </div>
              </div>
            </article>
          </motion.section>
        </main>
      </div>
    </div>
  );
}

export default DestinationContent;