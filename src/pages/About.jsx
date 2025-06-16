import React from 'react';

const About = () => {
  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 className='font-bold text-3xl'>About Our Electronic Shop</h1>
      <p>
        Welcome to TechWave Electronics! We offer the latest and greatest in electronic devices 
        from smartphones and laptops to home appliances and accessories. Our mission is to provide 
        quality products with excellent customer service.
      </p>

      <p>
        Whether you're a tech enthusiast or just looking for reliable gadgets, we have something 
        for everyone. Visit us to explore our wide range of electronics and enjoy great deals.
      </p>

      <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
        <img 
          src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80" 
          alt="Electronics Store" 
          style={{ width: '50%', borderRadius: '8px' }} 
        />
        <img 
          src="https://images.unsplash.com/photo-1510557880182-3eec4e12f0e2?auto=format&fit=crop&w=400&q=80" 
          alt="Electronic Gadgets" 
          style={{ width: '50%', borderRadius: '8px' }} 
        />
      </div>
    </div>
  );
};

export default About;
