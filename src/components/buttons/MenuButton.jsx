import React from 'react';
import Tooltip from '../tooltip';

import { NavLink } from 'react-router-dom';

const MenuButton = ({ Icon, link, name }) => {
    return (
        <Tooltip name={name} >
            <NavLink to={link}
                className='bg-white w-12 h-12 cursor-pointer transition-all flex items-center justify-center rounded-full font-light text-xl hover:bg-gray-200'>
                <Icon />
            </NavLink>
        </Tooltip>
    );
}

export default MenuButton;
