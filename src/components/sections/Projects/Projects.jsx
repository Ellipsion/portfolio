import React from 'react';
import Card from './ProjectCard';

import projectsData from "cms/projects.json";
const ProjectsSection = () => {
    return (
        <div className='flex flex-col gap-5 '>
            {/* <div className='flex justify-between items-start mt-2'>
                <p className='text-normal font-medium'>What I do</p>
                <WidgetButton Icon={FaCode} />
            </div> */}

            <div className='mt-5 flex flex-wrap gap-3 justify-center sm:justify-normal'>
                {
                    projectsData.projects.map((item, idx) => (<Card key={`project-${idx}`} project={item} />))
                }

            </div>
        </div>
    );
}

export default ProjectsSection;
