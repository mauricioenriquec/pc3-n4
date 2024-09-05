import React from 'react';
import { motion } from 'framer-motion';
import backgroundImageTechnology from '../assets/technology/bgtechnology.jpg';
import imageLaunch from '../assets/technology/image-launch.jpg';

function TechnologyContent() {
  return (
    <div
      className="relative flex flex-col justify-center items-center text-white h-screen"
      style={{
        backgroundImage: `url(${backgroundImageTechnology})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <main className="flex p-8 w-full">
        <div className="flex w-2/3">
          <div className="flex flex-col space-y-10 mr-8 pt-40">
            <motion.button
              className="w-16 h-16 rounded-full bg-white text-black text-2xl font-bold"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              1
            </motion.button>
            <motion.button
              className="w-16 h-16 rounded-full border-2 border-gray-600 text-white text-2xl font-bold"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              2
            </motion.button>
            <motion.button
              className="w-16 h-16 rounded-full border-2 border-gray-600 text-white text-2xl font-bold"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              3
            </motion.button>
          </div>
          <section className="flex flex-col justify-center items-start">
            <motion.h3
              className="text-gray-400 mb-4 tracking-widest text-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              THE TERMINOLOGY...
            </motion.h3>
            <motion.h1
              className="text-5xl mb-6 font-light"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              LAUNCH VEHICLE
            </motion.h1>
            <motion.p
              className="text-gray-400 text-left max-w-xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              A launch vehicle or carrier rocket is a rocket-propelled
              vehicle used to carry a payload from Earth's surface to
              space, usually to Earth orbit or beyond. Our WEB-X
              carrier rocket is the most powerful in operation.
              Standing 150 metres tall, it's quite an awe-inspiring sight
              on the launch pad!
            </motion.p>
          </section>
        </div>
        <motion.section
          className="w-1/3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <img
            src={imageLaunch}
            alt="Rocket launch"
            className="w-full h-full object-cover"
          />
        </motion.section>
      </main>
    </div>
  );
}

export default TechnologyContent;
