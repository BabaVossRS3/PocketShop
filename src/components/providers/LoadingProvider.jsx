'use client';

import React, { createContext, useContext, useState } from 'react';
import LoadingAnimation from './../common/LoadingAnimation';

const LoadingContext = createContext({
  isLoading: false,
  setIsLoading: () => {},
});

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Auto hide loader after 2 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading && (
        <div className="fixed inset-0 bg-[#242424] flex items-center justify-center z-50">
          <LoadingAnimation />
        </div>
      )}
      <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}>
        {children}
      </div>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);