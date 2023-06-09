import React from 'react';
import { SiPostgresql } from "react-icons/si"

export const Postgres = () => {
    return (
        <div className='w-[90%] sm:w-auto bg-white shadow-neumorphic p-2 rounded-lg flex flex-col gap-5'>
            <div className='w-full'>
                <p className='text-2xl font-light  w-fit px-2 py-1 rounded-lg text-gray-100 bg-gray-700'><SiPostgresql /></p>

            </div>
            <div className='w-full p-2'>
                <p className='text-sm md:text-xs font-medium'>PostgresSQL</p>
                <p className='text-[12px] text-warm-gray-400'>SQL Database</p>
            </div>
        </div>
    );
}

