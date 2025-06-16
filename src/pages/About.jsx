// import React from 'react';

// const About = () => {
//   return (
//     <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <h1 className='font-bold text-3xl'>About Our Electronic Shop</h1>
//       <p>
//         Welcome to TechWave Electronics! We offer the latest and greatest in electronic devices 
//         from smartphones and laptops to home appliances and accessories. Our mission is to provide 
//         quality products with excellent customer service.
//       </p>

//       <p>
//         Whether you're a tech enthusiast or just looking for reliable gadgets, we have something 
//         for everyone. Visit us to explore our wide range of electronics and enjoy great deals.
//       </p>

//       <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
//         <img 
//           src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80" 
//           alt="Electronics Store" 
//           style={{ width: '50%', borderRadius: '8px' }} 
//         />
//         <img 
//           src="https://soyacincau.com/wp-content/uploads/2021/12/211210-msi-prestige-14-rose-pink-4.jpg" 
//           alt="Electronic Gadgets" 
//           style={{ width: '50%', borderRadius: '8px' }} 
//         />
//       </div>
//     </div>
//   );
// };

// export default About
import React from 'react';

function About() {
  return (
    <div className="w-full h-[85vh] bg-amber-500 pt-10 bg3-image">
      <div className="w-full h-auto sm:h-[50vh] lg:h-[80vh]  px-4 sm:px-6 md:ms-20 pt-10">
        <h1 className="font-bold text-3xl sm:text-4xl text-pink-500 underline">
          About Us
        </h1>
        <p className="text-lg md:text-2xl md:w-[50vh] mt-5 text-white">
          Lorem, ipsum dolor sit amet cons. Deleniti, esse illo distinctio, laborum ipsum
          consequuntur labore cumque quia sequi voluptas velit eligendi sit, nihil ab architecto
          culpa. Est ipsa ex quod aut cupiditate facere cumque aperiam neque fuga?
        </p>
      </div>
    </div>
  );
}

export default About;

