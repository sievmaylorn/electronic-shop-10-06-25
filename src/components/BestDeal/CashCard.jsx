import React from 'react';

function CashCard() {
  return (
    <div className="w-full overflow-hidden bg-pink-500 py-5">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-start lg:gap-10">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Get 5% Cash back
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mt-4 text-white">
            on Shopcart.com
          </p>
          <button className="mt-5 px-6 py-3 text-white text-lg md:text-2xl bg-pink-700 rounded-4xl hover:bg-pink-600 transition duration-300 ease-in-out">
            Learn More
          </button>
        </div>

        {/* Right Image - smaller on iPad */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
          <img
            src="/Cashcard.png"
            alt="No-image"
            className="hidden sm:block w-[180px] md:w-[360px] lg:w-[410px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default CashCard;
