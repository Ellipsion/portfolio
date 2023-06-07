import React from 'react';
import Tooltip from '../tooltip';

const MenuButton = ({ Icon }) => {
    return (
        <Tooltip orientation={"right"}>
            <a className='bg-white w-12 h-12 cursor-pointer transition-all p-1 flex items-center justify-center rounded-full font-normal hover:bg-gray-200'>
                <Icon className="w-6" />
            </a>
        </Tooltip>
    );
}

export default MenuButton;
