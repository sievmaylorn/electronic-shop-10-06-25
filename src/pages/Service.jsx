import React from 'react';

const services = [
  {
    title: 'Mobile Repair',
    description: 'Expert repair services for smartphones of all brands with quality parts.',
    image: 'https://cdn-icons-png.flaticon.com/512/2875/2875311.png',
  },
  {
    title: 'Laptop Maintenance',
    description: 'Keep your laptop in top condition with our full system checkups.',
    image: 'https://cdn-icons-png.flaticon.com/512/2950/2950686.png',
  },
  {
    title: 'Gadget Accessories',
    description: 'Wide range of chargers, headphones, cases and more at great prices.',
    image: 'https://cdn-icons-png.flaticon.com/512/747/747376.png',
  },
];

const Service = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-pink-600 mb-10">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition"
          >
            <img
              src={service.image}
              alt={service.title}
              className="mx-auto w-20 h-20 mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h2>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
