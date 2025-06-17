import React from 'react';

function CashCard() {
  return (
    <div className="w-full overflow-hidden bg-pink-500 py-5">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Get 5% Cash back
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mt-4 text-white">
            on Shopcart.com
          </p>
          <button className="mt-5 px-6 py-3 text-white text-lg md:text-2xl bg-pink-700 rounded-2xl hover:bg-pink-600 transition duration-300 ease-in-out">
            Learn More
          </button>
        </div>

        {/* Right Image - always beside on md and up */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src="/Cashcard.png"
            alt="No-image"
            className="hidden sm:block w-[300px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default CashCard;
