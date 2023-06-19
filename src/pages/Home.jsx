import React, { useEffect, useRef } from 'react';
import { useLocation, createHashRouter, RouterProvider } from 'react-router-dom';


import ServicesSection from "components/sections/services/Services"
import Divider from '../components/ui/Divider';
import ContactActions from 'components/ContactActions';


import homeData from "cms/bio.json"

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
                <p className='font-medium text-base'>{homeData.name}</p>
            </div>
            <div className='font-bold text-[40px] sm:text-[55px] leading-tight sm:leading-[68px] tracking-[-3px] sm:tracking-[-4px]'>
                <p >Hey, I'm Ellipsion </p>
                <p > a <span className='text-warm-gray-400'> {homeData.role}.</span></p>
            </div>
            {/* action buttons */}
            <ContactActions />
            <div className='px-3 sm:px-0'>
                <p className='text-gray-500  text-md'>
                    {homeData.introduction}
                </p>
            </div>
            <div ref={servicesAnchorRef} className='px-3 sm:px-0'>
                <Divider />
                <ServicesSection />
            </div>
            <Divider />
        </div>
    );
}

export default Home;
