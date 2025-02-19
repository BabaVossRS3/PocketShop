import React from 'react';

const LoadingAnimation = () => {
  return (
    <div className="bg-[#D0DDD0] p-4 md:p-8 rounded-xl">
      <div className="text-gray-400 font-medium text-2xl h-10 py-2 px-2 flex items-center gap-2 rounded-lg">
        <p className="text-[#242424]">Loading</p>
        <div className="overflow-hidden relative h-10">
          <div className="after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-b after:from-[#D0DDD0] after:via-transparent after:to-[#D0DDD0] after:z-20">
            <span className="block h-full pl-2 text-[#727D73] animate-spin-words">δημιουργία</span>
            <span className="block h-full pl-2 text-[#727D73] animate-spin-words">επιτυχία</span>
            <span className="block h-full pl-2 text-[#727D73] animate-spin-words">καινοτομία</span>
            <span className="block h-full pl-2 text-[#727D73] animate-spin-words">ανάπτυξη</span>
            <span className="block h-full pl-2 text-[#727D73] animate-spin-words">δημιουργία</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
