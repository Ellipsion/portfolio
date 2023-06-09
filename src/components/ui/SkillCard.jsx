import React from 'react';
import Progress from './Progress';
const SkillCard = ({ name, description, iconStyle, icon }) => {
    return (
        <div className='min-w-[24%] w-[90%] sm:w-auto cursor-pointer hover:transform bg-white shadow-neumorphic p-2 rounded-lg flex flex-col gap-5'>
            <div className='w-full flex items-baseline gap-3'>
                <p className={`text-2xl font-light flex gap-1  w-fit px-2 py-1 rounded-lg border ${iconStyle}`}>{icon}</p>
                {/* <Progress progress={25} /> */}

            </div>
            <div className='w-full p-2'>
                <p className='text-sm md:text-xs font-medium'>{name}</p>
                <p className='text-[12px] text-warm-gray-400'>{description}</p>
            </div>
        </div>
    );
}

export default SkillCard;
