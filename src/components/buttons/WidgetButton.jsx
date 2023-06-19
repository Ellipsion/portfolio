import React from 'react';
import { NavLink } from 'react-router-dom';
const WidgetButton = ({ Icon, link }) => {
    return (

        <NavLink to={link} className='bg-white w-[50px] cursor-pointer p-4 flex items-center justify-center rounded-full font-normal text-lg shadow-neumorphic'>
            <Icon className="w-5" />
        </NavLink>

    );
}

export default WidgetButton;
