import React from 'react';

const WidgetButton = ({ Icon, link }) => {
    return (

        <a href={link} className='bg-white w-[50px] cursor-pointer p-4 flex items-center justify-center rounded-full font-normal text-lg shadow-neumorphic'>
            <Icon className="w-5" />
        </a>

    );
}

export default WidgetButton;
