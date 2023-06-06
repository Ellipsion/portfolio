import React from 'react';

const WidgetButton = ({ Icon, link }) => {
    return (

        <a className='bg-white w-fit cursor-pointer p-4 flex items-center justify-center rounded-full font-normal text-sm shadow-neumorphic'>
            <Icon className="w-5" />
        </a>

    );
}

export default WidgetButton;
