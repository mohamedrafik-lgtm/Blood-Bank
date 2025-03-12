"use client"
import { useState } from 'react';
import img from '@/images/covid-19-variants.jpg';

const ProtectionCard = () => {
    const [isFavorite, setIsFavorite] = useState(false);
   

    const toggleFavorite = () => setIsFavorite(!isFavorite);

    

    return (
        <div
            style={{
                backgroundImage: `url(${img.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '300px',
            }}
            className='rounded-4xl relative p-4 shadow-lg flex flex-col justify-end'
        >
            <div className='absolute inset-0  bg-opacity-70 rounded-lg'></div>
            
            <div 
                className={`absolute top-3 lift-3 cursor-pointer p-1 bg-white rounded-full ${isFavorite ? 'text-red-500' : 'text-red-500'}`} 
                onClick={toggleFavorite}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill={`${isFavorite ? 'red' : 'white'}`} viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="size-9 ">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            </div>
            
            <button 
                className='relative z-10 w-full bg-white/55 py-2 px-4 rounded-lg hover:bg-gray-200 text-md font-semibold'
            >
                View More 
             </button>
        </div>
    );
};

export default ProtectionCard;
