import React from 'react';
import Tooltip from '../tooltip';

import { NavLink } from 'react-router-dom';

const MenuButton = ({ Icon, link, name }) => {
    return (
        <Tooltip name={name} >
            <NavLink to={link} end
                className={({ isActive, isPending }) => (` w-12 h-12 cursor-pointer transition-all flex items-center justify-center rounded-full font-bold text-xl  active:bg-black
                ${isActive && name !== "Services" ? "bg-gray-800 text-white hover:bg-gray-800" : "bg-white text-black hover:bg-gray-200"}
                `)}>
                <Icon />
            </NavLink>
        </Tooltip>
    );
}

export default MenuButton;
