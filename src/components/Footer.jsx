import React from 'react';
import ZoomButton from './buttons/ZoomButton';

import { FiArrowUpRight } from "react-icons/fi"
import { BsDot } from "react-icons/bs"

const Footer = () => {
    return (
        <div className='mx-3'>
            <div className='mt-10 mb-5 font-bold text-[40px] sm:text-[55px] leading-10 sm:leading-[68px] tracking-[-3px] sm:tracking-[-4px]'>
                <p >Let's Collaborate!</p>
            </div>
            <div className='flex mb-10 flex-col gap-4 sm:justify-start sm:flex-row w-full my-3'>
                <ZoomButton text={"Contact"} Icon={FiArrowUpRight} link={"/contact"} />
            </div>
            <div className='flex justify-start mb-[120px] md:mb-10 mt-[70px] items-center text-sm font-medium gap-5'>
                <p className='text-gray-500'> &#169; 2023 Ellipsion</p>
                <p><BsDot /></p>
                <p>Made with React</p>
            </div>
        </div>
    );
}

export default Footer;
