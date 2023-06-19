import React from 'react';
import MenuButton from './buttons/MenuButton';
import { SiNounproject } from "react-icons/si";
import { CiMail, CiGrid42, CiViewTimeline, CiPaperplane } from "react-icons/ci"
import { LuCode2 } from "react-icons/lu"

const Sidebar = () => {

    return (
        <div className='fixed w-screen bottom-0 bg-gray-100/30 md:bg-transparent backdrop-blur py-3 md:shadow-none h-auto md:w-fit md:h-screen  md:left-8 z-[999]'>
            <nav className={`wrapper flex flex-wrap w-full md:flex-col gap-1 px-1 md:px-0 md:justify-center md:gap-5 md:h-full`}>
                <div className='shadow-neumorphic border bg-white w-fit rounded-full p-1 flex flex-row md:flex-col  gap-2 md:gap-3'>
                    <MenuButton Icon={CiGrid42} name={"Home"} link={"/"} />
                    <MenuButton Icon={CiPaperplane} name={"Services"} link={"/#services"} />
                    <MenuButton Icon={LuCode2} name={"Skills"} link={"/skills"} />
                    <MenuButton Icon={SiNounproject} name={"Projects"} link={"/projects"} />
                </div>
                <div className='shadow-neumorphic border bg-white w-fit rounded-full p-1 flex flex-row gap-2 md:gap-3 md:flex-col'>
                    <MenuButton Icon={CiViewTimeline} name={"Resume"} link={"/resume"} />
                    <MenuButton Icon={CiMail} name={"Contact"} link={"/contact"} />
                </div>
            </nav>

        </div>
    );
}

export default Sidebar;
