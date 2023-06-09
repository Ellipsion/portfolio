import React from 'react';
import { DiJavascript1 } from 'react-icons/di';

export const JsCard = () => {
    return (
        <div className='w-[90%] sm:w-auto bg-white shadow-neumorphic p-2 rounded-lg flex flex-col gap-5'>
            <div className='w-full'>
                <p className='text-2xl font-light  w-fit px-2 py-1 rounded-lg border text-blue-950 bg-yellow-300'><DiJavascript1 /></p>

            </div>
            <div className='w-full p-2'>
                <p className='text-sm md:text-xs font-medium'>Javascript</p>
                <p className='text-[12px] text-warm-gray-400'>Programming Language</p>
            </div>
        </div>
    );
}

