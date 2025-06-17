import React from 'react';

function HeroTwo() {
  return (
    <div className="w-full min-h-[70vh] bg2-img flex items-center">
      <div className="container mx-auto px-4 lg:px-32 flex justify-end">
        <div className="w-full sm:w-[90%] md:w-[65%] lg:w-[45%] bg-pink-500 p-6 sm:p-8 rounded-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Get 5% Cash back on $200
          </h1>
          <p className="text-base sm:text-lg md:text-xl mt-4 sm:mt-6 text-white">
            Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.
          </p>
          <button
            className="mt-6 px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl lg:text-2xl 
                       bg-white text-pink-600 font-semibold rounded-4xl 
                       duration-300 ease-in-out hover:bg-pink-100"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroTwo;
