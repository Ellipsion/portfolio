import React from 'react';
import { FaNodeJs } from "react-icons/fa"
export const Node = () => {
    return (
        <div className='w-[90%] sm:w-auto bg-white shadow-neumorphic p-2 rounded-lg flex flex-col gap-5'>
            <div className='w-full'>
                <p className='text-2xl font-light  w-fit px-2 py-1 rounded-lg text-black bg-green-500'><FaNodeJs /></p>

            </div>
            <div className='w-full p-2'>
                <p className='text-sm md:text-xs font-medium'>NodeJS</p>
                <p className='text-[12px] text-warm-gray-400'>JS runtime</p>
            </div>
        </div>
    );
}


