import React from 'react';

function TrendingProducts() {
  return (
    <div className="w-full mt-4 lg:mt-24">
      <div className="container px-4 lg:px-[50px] mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Trending Products For You!</h1>

        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          {/* Card 1 */}
          <div className="w-full md:w-[48%] bg-gray-100 rounded-xl overflow-hidden">
            <div className="w-full h-[220px] md:h-[280px] overflow-hidden">
              <img
                src="https://luxbrokers.co.uk/wp-content/uploads/2024/07/banner.jpg"
                alt="No Image"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 md:p-8">
                i
              <span className="text-2xl md:text-3xl font-bold">Furniture Village</span>
              <p className="mt-1 text-sm md:text-base">Delivery within 24 hours</p>
              <button className="bg-black text-white rounded-full mt-4 h-10 px-5 text-sm md:text-base hover:bg-gray-900">
                Shop Now
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full md:w-[48%] bg-gray-100 rounded-xl overflow-hidden">
            <div className="w-full h-[220px] md:h-[280px] overflow-hidden">
              <img
                src="https://static01.nyt.com/images/2024/03/06/multimedia/06sp-watches-femcollection-inyt/06sp-watches-femcollection-inyt-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
                alt="No Image"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-6 md:p-8">
              <span className="text-2xl md:text-3xl font-bold">Fashion World</span>
              <p className="mt-1 text-sm md:text-base">Delivery within 24 hours</p>
              <button className="bg-black text-white rounded-full mt-4 h-10 px-5 text-sm md:text-base hover:bg-gray-900">
                Shop Now
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingProducts;
