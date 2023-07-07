import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';

import Divider from '../components/ui/Divider';
import Card from '../components/ui/Card';
// import SkillCard from '../components/ui/SkillCard';
import { PythonCard, JsCard, ReactCard, Django, Node, Mongo, Express, Postgres } from "../components/skillCards"
import ProjectsSection from 'components/sections/Projects/Projects';

// data
// import { skillsData } from '../cms/skills';

const GET_PROJECTS = gql`
query getProjects {
    projects {
      data {
        id,
        attributes{
          Title,
          shortDesc,
          technologies {
              data {
              id,
              attributes {
                name,
              }
            }
          }
        }
      }
    }
  }
`


const Projects = () => {
    // const { data, loading, error } = useQuery(GET_PROJECTS)
    return (
        <div className='mx-3 h-fit flex flex-wrap flex-col gap-8 sm:gap-5'>
            <div className='font-bold text-[40px] sm:text-[55px] leading-tight sm:leading-[68px] tracking-[-3px] sm:tracking-[-4px]'>
                <p >Projects </p>
            </div>
            <Divider />
            <div className='px-3 sm:px-0'>
                <p className='text-normal font-medium'>All Projects</p>
                {/* <p className='text-gray-500  text-sm z-10'>with a solid background in Python programming and web development.</p> */}
            </div>
            <div className='px-3 sm:px-0'>
                <ProjectsSection />
            </div>
            <Divider />
        </div>
    );
}

export default Projects;
