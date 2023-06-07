import React from 'react';
import MenuButton from './buttons/MenuButton';
import { SiPluscodes } from "react-icons/si"


const Sidebar = () => {
    return (
        <div className='fixed h-screen left-0'>
            <div className='overlay md:hidden absolute left-0 top-0 h-screen w-screen bg-black bg-opacity-90 z-20'></div>
            <div className='wrapper absolute left-6 h-full w-[100px] flex flex-col justify-center z-30'>
                <div className='shadow-neumorphic border bg-white w-fit rounded-full p-1 flex flex-col gap-3'>
                    <MenuButton Icon={SiPluscodes} />
                    <MenuButton Icon={SiPluscodes} />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
