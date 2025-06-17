import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';

function PopularProduct() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true); // 1. Add loading state

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await axios.get('https://product-server-json.onrender.com/products');
                console.table(res.data);
                setItems(res.data);
            } catch (e) {
                console.log(e.message);
            } finally {
                setLoading(false); // 2. Set loading to false
            }
        };
        fetchApi();
    }, []);

    return (
        <div className='w-full mt-10 lg:mt-24'>
            <div  data-aos="fade-up" className='container px-4 lg:px-[70px] mx-auto'>
                <h1  className='text-3xl font-bold mb-5'>Today's Best Deals for you!</h1>

                <div  data-aos="fade-up" className='overflow-x-auto mb-5'>
                    <div className='flex flex-nowrap gap-5'>
                        {/* Product Cards */}
                        {!loading &&
                            items.map((v, i) => (
                                <div key={i} className='w-[49%] md:w-[32%] shrink-0'>
                                    <div className='w-full h-[350px] rounded-lg overflow-hidden relative'>
                                        <button className='btn btn-circle absolute end-3 top-3'>
                                            <IoMdHeartEmpty className='text-2xl' />
                                        </button>
                                        <img src={v.image} alt="" className='w-full h-full object-contain' />
                                    </div>

                                    <div className='py-5 flex justify-between'>
                                        <div>
                                            <p className='text-xl line-clamp-1 font-bold'>{v.name}</p>
                                            <p className='line-clamp-2 my-2 text-gray-600'>
                                                {v.description}
                                            </p>
                                            <p className='text-orange-600 text-xl'>Rating: {v.rating}</p>
                                            <button className='border px-5 py-3 rounded-3xl cursor-pointer hover:bg-pink-600 hover:text-white duration-300 mt-3'>
                                                Add Cart
                                            </button>
                                        </div>
                                        <div>
                                            <p className='text-xl font-bold'>${v.price}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                        {/* Skeleton Loading Card */}
                        {loading && (
                            <div className='w-[49%] lg:w-[32%] shrink-0 animate-pulse'>
                                <div className='w-full h-[350px] bg-gray-300 rounded-lg overflow-hidden relative'>
                                    <div className='btn btn-circle absolute end-3 top-3 bg-gray-400'></div>
                                    <div className='w-full h-full bg-gray-300'></div>
                                </div>
                                <div className='py-5 flex justify-between'>
                                    <div className='flex-1'>
                                        <div className='h-6 bg-gray-300 rounded w-3/4 mb-3'></div>
                                        <div className='h-4 bg-gray-300 rounded w-full mb-2'></div>
                                        <div className='h-4 bg-gray-300 rounded w-5/6 mb-2'></div>
                                        <div className='h-5 bg-gray-300 rounded w-1/3 mb-3'></div>
                                        <div className='h-10 bg-gray-300 rounded-3xl w-32'></div>
                                    </div>
                                    <div className='flex items-start'>
                                        <div className='h-6 bg-gray-300 rounded w-16'></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopularProduct;
