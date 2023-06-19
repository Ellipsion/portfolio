import React, { useState } from 'react';
import MenuButton from './buttons/MenuButton';
import { SiPluscodes, SiNounproject } from "react-icons/si";
import { AiOutlineMenu } from 'react-icons/ai';
import { CiMail, CiGrid42, CiViewTimeline, CiSquareMore, CiCoffeeCup, CiPaperplane, CiViewBoard } from "react-icons/ci"
import { IoMailOutline, IoDocumentTextOutline, IoBagCheckOutline } from "react-icons/io5"
import { LuCode2 } from "react-icons/lu"

const Sidebar = () => {

    return (
        <div className='fixed w-full bottom-0 bg-gray-100/30 md:bg-transparent backdrop-blur py-3 shadow-neumorphic md:shadow-none h-auto md:w-fit md:h-screen  md:left-8 z-[999]'>
            <nav className={`wrapper flex  justify-center md:flex-col gap-5 md:h-full`}>
                <div className='shadow-neumorphic border bg-white w-fit rounded-full p-1 flex flex-row md:flex-col  gap-3'>
                    <MenuButton Icon={CiGrid42} name={"Home"} link={"/"} />
                    <MenuButton Icon={CiPaperplane} name={"Services"} link={"/#services"} />
                    <MenuButton Icon={LuCode2} name={"Skills"} link={"/skills"} />
                    <MenuButton Icon={SiNounproject} name={"Projects"} link={"/projects"} />
                </div>
                <div className='shadow-neumorphic border bg-white w-fit rounded-full p-1 flex flex-row gap-3 md:flex-col'>
                    <MenuButton Icon={CiViewTimeline} name={"Resume"} link={"/resume"} />
                    <MenuButton Icon={CiMail} name={"Contact"} link={"/contact"} />
                </div>
            </nav>

        </div>
    );
}

export default Sidebar;
