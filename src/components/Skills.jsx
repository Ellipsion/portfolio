import React from 'react';
import Card from './ui/Card';

import WidgetButton from './buttons/WidgetButton';

import { FaCode } from "react-icons/fa"
const Skills = () => {
    return (
        <div className='flex flex-col gap-5 '>
            <div className='flex justify-between items-start mt-2'>
                <p className='text-normal font-medium'>What I do</p>
                <WidgetButton Icon={FaCode} />
            </div>

            <div className='mt-5 flex flex-wrap gap-3 justify-center sm:justify-normal'>
                <Card title={"Dashboard Development"} desc={"Analytics and admin dashboards"} />
                <Card title={"Commision Pages"} desc={"Showcase atwork and take commisions"} />
                <Card title={"Web Apps"} desc={"Full stack web apps"} />
                <Card title={"Portfolio Websites"} desc={"Personal and portfolio websites"} />
                <Card title={"Web Scraping"} desc={"Python scrappers"} />
                <Card title={"E-commerce Store"} desc={"Your customized store"} />
            </div>
        </div>
    );
}

export default Skills;
