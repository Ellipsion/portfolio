import React from 'react';
import Tooltip from '../tooltip';

const MenuButton = ({ Icon }) => {
    return (
        <Tooltip orientation={"right"}>
            <a className='bg-white w-12 h-12 cursor-pointer transition-all flex items-center justify-center rounded-full font-light text-xl hover:bg-gray-200'>
                <Icon />
            </a>
        </Tooltip>
    );
}

export default MenuButton;
