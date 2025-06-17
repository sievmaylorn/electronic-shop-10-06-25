import React from 'react';

function CashCard() {
  return (
    <div  className="w-full overflow-hidden  bg-pink-400  py-5">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-start lg:gap-10 ">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <h1 className="text-3xl lg:ms-15 md:ms-10 sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
             Get 5% Cash back
          </h1>
          <p className="text-lg lg:ms-15 md:ms-10 sm:text-xl md:text-2xl mt-4 text-white">
            on Shopcart.com
          </p>
          <button className="mt-5 lg:ms-15 md:ms-10 px-6 py-3 text-white text-lg md:text-2xl bg-pink-700 rounded-4xl hover:bg-pink-500 transition duration-300 ease-in-out">
            Learn More
          </button>
        </div>

        {/* Right Image / Placeholder */}
        <div className="w-full md:w-1/2">
          <img src="/Cashcard.png" alt="No-image" className="hidden md:block md:w-[100%] md:h-auto lg:w-[30vw] lg:h-[auto] object-contain" />
        </div>
      </div>
    </div>
  );
}

export default CashCard;
