import React, { useState } from 'react';
import MenuButton from './buttons/MenuButton';
import { SiPluscodes, SiNounproject } from "react-icons/si";
import { AiOutlineMenu } from 'react-icons/ai';
import { CiMail, CiGrid42, CiViewTimeline, CiSquareMore, CiCoffeeCup, CiPaperplane, CiViewBoard } from "react-icons/ci"
import { IoMailOutline, IoDocumentTextOutline, IoBagCheckOutline } from "react-icons/io5"
import { LuCode2 } from "react-icons/lu"

const Sidebar = () => {
    const [showSideBar, setShowSidebar] = useState(false)
    return (
        <div className='fixed h-screen left-0'>
            <div onClick={() => setShowSidebar(false)}
                className={`overlay md:hidden absolute left-0 top-0 h-screen w-screen bg-black bg-opacity-70 z-20 backdrop-blur-sm
                ${showSideBar ? "block" : "hidden"} transition-all
            `}></div>
            <div className={`wrapper absolute left-6 h-full w-[100px] md:flex flex-col justify-center gap-5 z-30
                ${showSideBar ? "flex" : "hidden"}
            `}>
                <div onClick={() => setShowSidebar(false)} className='shadow-neumorphic border bg-white w-fit rounded-full p-1 flex flex-col gap-3'>
                    <MenuButton Icon={CiGrid42} name={"Home"} link={"/"} />
                    <MenuButton Icon={CiPaperplane} name={"Services"} link={"/#services"} />
                    <MenuButton Icon={LuCode2} name={"Skills"} link={"/skills"} />
                    <MenuButton Icon={SiNounproject} name={"Projects"} link={"/projects"} />
                </div>
                <div onClick={() => setShowSidebar(false)} className='shadow-neumorphic border bg-white w-fit rounded-full p-1 flex flex-col gap-3'>
                    <MenuButton Icon={CiViewTimeline} name={"Resume"} link={"/resume"} />
                    <MenuButton Icon={CiMail} name={"Contact"} link={"/contact"} />
                </div>
            </div>
            <button onClick={() => setShowSidebar(true)} className='bg-black md:hidden text-gray-100 z-10 fixed bottom-10 right-8 w-[50px] h-[50px] cursor-pointer p-4 flex items-center justify-center rounded-full font-normal text-sm shadow-neumorphic'>
                <AiOutlineMenu className="w-5" />
            </button>
        </div>
    );
}

export default Sidebar;
