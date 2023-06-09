import React from 'react';
import Divider from '../components/ui/Divider';
import Card from '../components/ui/Card';
import SkillCard from '../components/ui/SkillCard';
import { PythonCard, JsCard, ReactCard, Django, Node, Mongo, Express, Postgres } from "../components/skillCards"

// data
import { skillsData } from '../cms/skills';
const Skills = () => {
    return (
        <div className='mx-3 h-fit flex flex-wrap flex-col gap-8 sm:gap-5'>
            <div className='font-bold text-[40px] sm:text-[55px] leading-tight sm:leading-[68px] tracking-[-3px] sm:tracking-[-4px]'>
                <p >Skills </p>
            </div>
            <Divider />
            <div className='px-3 sm:px-0'>
                <p className='text-normal font-medium'>My Skills and Strengths</p>
                <p className='text-gray-500  text-sm z-10'>with a solid background in Python programming and web development.</p>
            </div>
            <div className='flex flex-col gap-5 '>
                <div className='mt-5 flex flex-wrap gap-3 justify-center sm:justify-normal'>
                    {
                        skillsData.content.map(skill => (<SkillCard icon={skill.icons.map(Icon => <Icon />)} {...skill} />))
                    }

                </div>
            </div>
            <Divider />
        </div>
    );
}

export default Skills;
