"use client"
import React, { createContext, useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingAnimation from './../common/LoadingAnimation';

const LoadingContext = createContext({
  isLoading: false,
  setIsLoading: () => {},
});

const CircularReveal = ({ isOpen, children }) => {
  return (
    <div className="relative w-full h-full">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0, borderRadius: "100%" }}
            animate={{ 
              scale: 2,
              borderRadius: "0%",
              transition: { 
                duration: 1,
                ease: [0.87, 0, 0.13, 1]
              }
            }}
            exit={{ scale: 0, borderRadius: "100%" }}
            className="fixed inset-0 bg-[#fef2f2] flex items-center justify-center z-40"
          >
            <LoadingAnimation />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isOpen ? 0 : 1,
          transition: { 
            duration: 0.3,
            delay: isOpen ? 0 : 0.5
          }
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <CircularReveal isOpen={isLoading}>
        {children}
      </CircularReveal>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);

export default LoadingProvider;