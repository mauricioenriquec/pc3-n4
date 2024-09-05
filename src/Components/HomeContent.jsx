import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import backgroundImageHome from '../assets/home/backgroundhome.jpg';
import { Link } from 'react-router-dom';

function HomeContent() {
  const location = useLocation();
  const [backgroundImage, setBackgroundImage] = useState(backgroundImageHome);

  useEffect(() => {
    setBackgroundImage(backgroundImageHome);
  }, [location.pathname]);

  return (
    <div
      className="relative flex justify-between items-center text-white min-h-screen bg-cover bg-center transition-opacity duration-500"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <motion.div
          className="md:w-1/2 text-center md:text-left mb-12 md:mb-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3
            className="text-2xl md:text-3xl mb-4 tracking-widest"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            SO, YOU WANT TO TRAVEL TO
          </motion.h3>
          <motion.h1
            className="text-7xl md:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            SPACE
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8 max-w-md mx-auto md:mx-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!
          </motion.p>
        </motion.div>
        <motion.div
          className="md:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link to="/destination">
            <motion.button
              className="bg-white text-slate-900 w-48 h-48 rounded-full text-2xl font-bold transition-transform duration-300 hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              EXPLORE
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default HomeContent;
