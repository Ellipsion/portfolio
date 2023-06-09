import React from 'react';
import { FaReact } from 'react-icons/fa';

export const ReactCard = () => {
    return (
        <div className='w-[90%] sm:w-auto bg-white shadow-neumorphic p-2 rounded-lg flex flex-col gap-5'>
            <div className='w-full'>
                <p className='text-2xl font-light  w-fit px-2 py-1 rounded-lg text-white bg-blue-500'><FaReact /></p>

            </div>
            <div className='w-full p-2'>
                <p className='text-sm md:text-xs font-medium'>ReactJS</p>
                <p className='text-[12px] text-warm-gray-400'>JavaScript Frontend Framework</p>
            </div>
        </div>
    );
}

