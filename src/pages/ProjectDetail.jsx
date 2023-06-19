import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { BsArrowLeftCircleFill } from "react-icons/bs";


import Divider from 'components/ui/Divider';
const ProjectDetail = () => {
    const { slug } = useParams()
    const navigate = useNavigate()

    return (
        <div className='mx-3 h-fit flex flex-wrap flex-col gap-8 sm:gap-5'>
            <div className='font-medium text-base'>
                <button onClick={() => navigate("/projects")} className='flex items-center gap-3' ><BsArrowLeftCircleFill className='text-lg' />Back to Projects</button>
            </div>
            <div className='font-bold text-[40px] sm:text-[55px] leading-tight sm:leading-[68px] tracking-[-3px] sm:tracking-[-4px]'>
                <p >Money Transfer App </p>
            </div>

            <div className='px-3 sm:px-0'>
                <p className='text-gray-500  text-md'>A fintech startup wanted to create a mobile app that would allow its users to transfer money quickly and securely, without having to go through the traditional banking channels. </p>
                {/* <p className='text-gray-500  text-sm z-10'>with a solid background in Python programming and web development.</p> */}
            </div>

            <img className='rounded-2xl' src={"https://cdn.dribbble.com/users/1904192/screenshots/15915703/media/64ec5a90f33e36ddae770d28a08ecd3b.png?resize=400x0"} alt="" />

            <Divider />
        </div>
    );
}

export default ProjectDetail;
