import React from 'react';

const SpringButton = ({ Icon, text, link }) => {
    return (

        <a className='bg-white cursor-pointer py-3 px-6 flex items-center justify-center gap-3 min-w-24 rounded-full font-medium text-sm shadow-neumorphic w-full sm:w-auto'>
            <Icon className="w-4 " />
            <p className=' drop-shadow shadow-black'>{text}</p>
        </a>

    );
}

export default SpringButton;
