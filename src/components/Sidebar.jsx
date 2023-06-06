import React from 'react';
import WidgetButton from './buttons/WidgetButton';

import { SiPluscodes } from "react-icons/si"

const Sidebar = () => {
    return (
        <div className='fixed h-screen left-0'>
            <div className='overlay md:hidden absolute left-0 top-0 h-screen w-screen bg-black bg-opacity-90 z-20'></div>
            <div className='wrapper absolute left-4 h-full w-[100px] bg-gray-100 z-30'>
                <div className='shadow-neumorphic h-1/2 bg-white w-fit'>
                    <WidgetButton Icon={SiPluscodes} />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
