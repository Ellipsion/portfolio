import React from 'react';
import SpringButton from '../buttons/SpringButton';

import { BsCodeSlash } from "react-icons/bs"

const Card = ({ title, desc }) => {
    return (
        <div className='w-[85%] sm:w-[48%] bg-white shadow-neumorphic p-2 rounded-lg flex flex-col gap-5'>
            <div className='w-full'>
                <p className='text-[10px] font-bold border w-fit px-2 py-1 rounded-lg'>Project</p>

            </div>
            <div className='w-full p-2'>
                <p className='text-sm md:text-xs font-medium'>{title}</p>
                <p className='text-[12px] text-warm-gray-400'>{desc}</p>
            </div>
            <img className='w-full h-[100px] object-cover rounded-lg' src="https://framerusercontent.com/images/kY9K2ebQADACiUNjwCVz0VqZA.jpg?scale-down-to=512" alt="" />
        </div>
    );
}

export default Card;
