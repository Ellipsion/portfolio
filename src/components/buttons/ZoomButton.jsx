import React from 'react';
import { NavLink } from 'react-router-dom';

const ZoomButton = ({ Icon, text, link }) => {
    return (

        <NavLink className='bg-white cursor-pointer py-3 px-6 flex items-center justify-center gap-3 min-w-24 rounded-full font-medium text-sm shadow-neumorphic w-full sm:w-auto'
            to={link || ""}
        >
            <p className=' '>{text}</p>
            <Icon className="w-4 drop-shadow shadow-black" />
        </NavLink>

    );
}

export default ZoomButton;
