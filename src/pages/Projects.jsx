import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';

import Divider from '../components/ui/Divider';
import Card from 'components/projects/card'


const GET_PROJECTS = gql`
query getProjects {
    projects {
      data {
        id,
        attributes{
          title,
          shortDesc,
          slug,
          image {
            data {
              attributes {
                url
              }
            }
          }
          technologies {
              data {
              id,
              attributes {
                name,
              }
            }
          }
          deployment {
            data {
            id,
            attributes {
              status,
              link,
              message
            }
          }
        }
        }
      }
    }
  }
`


const Projects = () => {
  const { data, loading, error } = useQuery(GET_PROJECTS)
  useEffect(() => {
    if (data) {
      console.log(data)
    }
  }, [data])

  return (
    <div className='mx-3 h-fit flex flex-wrap flex-col gap-8 sm:gap-5'>
      <div className='font-bold text-[40px] sm:text-[55px] leading-tight sm:leading-[68px] tracking-[-3px] sm:tracking-[-4px]'>
        <p >Projects </p>
      </div>
      <Divider />
      {
        loading
          ?
          "loading..."
          :
          error
            ?
            "error loading resources."
            :
            <>
              <div className='px-3 sm:px-0'>
                <p className='text-normal font-medium'>All Projects</p>
                {/* <p className='text-gray-500  text-sm z-10'>with a solid background in Python programming and web development.</p> */}
              </div>
              <div className='px-3 sm:px-0'>
                <div className='flex flex-col gap-5 '>

                  <div className='mt-5 flex flex-wrap gap-3 justify-center sm:justify-normal'>
                    {
                      data.projects.data.map(project => <Card key={project.id} project={project} />)
                    }
                  </div>
                </div>
              </div>
            </>
      }

      <Divider />
    </div>
  );
}

export default Projects;
