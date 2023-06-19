import React from 'react';
import Divider from '../components/ui/Divider';
import Card from '../components/ui/Card';
// import SkillCard from '../components/ui/SkillCard';
import { PythonCard, JsCard, ReactCard, Django, Node, Mongo, Express, Postgres } from "../components/skillCards"
import ResumeSection from 'components/sections/Resume';
import WidgetButton from 'components/buttons/WidgetButton';
import { LuDownload } from 'react-icons/lu';

import resumePDF from "/resume.pdf"

// import { skillsData } from '../cms/skills';
const Resume = () => {
    return (
        <div className='mx-3 h-fit flex flex-wrap flex-col gap-8 sm:gap-5'>
            <div className='font-bold text-[40px] sm:text-[55px] leading-tight sm:leading-[68px] tracking-[-3px] sm:tracking-[-4px]'>
                <p >Resume </p>
            </div>
            <Divider />
            <div className='px-3 sm:px-0 flex justify-between text-lg'>
                <p className='text-normal font-medium'>My Resume</p>
                {/* <p className='text-gray-500  text-sm z-10'>with a solid background in Python programming and web development.</p> */}
                <a href={resumePDF} download={"Ashish's Resume"}>
                    <WidgetButton Icon={LuDownload} />
                </a>
            </div>
            <div className=''>
                <ResumeSection />
            </div>
            <Divider />
        </div>
    );
}

export default Resume;
