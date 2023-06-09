import React, { useEffect, useRef } from 'react';
import SpringButton from '../components/buttons/SpringButton';
import Skills from "../components/Skills"
import Divider from '../components/ui/Divider';
import Footer from '../components/Footer';
// icons
import { HiOutlineMail } from "react-icons/hi"
import { AiFillGithub } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"

import { useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation()
    const servicesAnchorRef = useRef(null)
    useEffect(() => {
        if (location?.hash.includes("#services")) {
            servicesAnchorRef?.current?.scrollIntoView({
                behavior: "smooth",
                block: "start", inline: "nearest"
            });
        }
    }, [servicesAnchorRef, location.hash])

    return (
        <div className=' mx-3 h-fit flex flex-wrap flex-col gap-8 sm:gap-5'>
            <div className='flex items-center gap-3'>
                <p className='w-[6px] h-[6px] bg-purple-500 rounded-[50%]'></p>
                <p className='font-medium text-base'>Ashish Kumawat</p>
            </div>
            <div className='font-bold text-[40px] sm:text-[55px] leading-tight sm:leading-[68px] tracking-[-3px] sm:tracking-[-4px]'>
                <p >Hey, I'm Ellipsion </p>
                <p > a <span className='text-warm-gray-400'> Web developer.</span></p>
            </div>
            {/* action buttons */}
            <div className='flex flex-col gap-4 px-3 sm:px-0 sm:justify-start sm:flex-row w-full my-3'>
                <SpringButton text={"Email"} Icon={HiOutlineMail} link={"email:email"} />
                <SpringButton text={"Github"} Icon={AiFillGithub} link={"email:email"} />
                <SpringButton text={"LinkedIn"} Icon={FaLinkedinIn} link={"email:email"} />
            </div>
            <div className='px-3 sm:px-0'>
                <p className='text-gray-500  text-sm z-10'>My name is Johnny Kyorov and I am a UI Designer from Bulgaria with a passion for creating exceptional SaaS, Design Systems & NoCode Development.</p>

            </div>
            <div ref={servicesAnchorRef} className='px-3 sm:px-0'>
                <Divider />
                <Skills />
            </div>
            <Divider />
        </div>
    );
}

export default Home;
