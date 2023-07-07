import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import Markdown from "react-markdown";
import { BsArrowLeftCircleFill } from "react-icons/bs";

const GET_PROJECT_QUERY = gql`
query getProjects($slug: String!) {
    projects (filters: { slug: { eq: $slug } }){
      data {
        id,
        attributes {
          title,
          shortDesc,
          description,
          image {
            data {
              attributes {
                url,
                previewUrl
              }
            }
          },
          deployment {
            data {
              id,
              attributes {
                link,
                status,
                message
              }
            }
          }
        }
      }
    }
  }

`

import Divider from 'components/ui/Divider';
import { loadMedia } from 'utils/mediaUtils';
const ProjectDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { data, loading, error } = useQuery(GET_PROJECT_QUERY, { variables: { slug } })

  if (loading) return <div className='w-100 h-100 blur-sm'>loading...</div>
  if (error) return <>error.</>
  console.log(data)
  const { title, shortDesc, image, description } = data?.projects?.data[0]?.attributes
  return (
    <div className='mx-3 h-fit flex flex-wrap flex-col gap-8 sm:gap-5'>
      <div className='font-medium text-base'>
        <button onClick={() => navigate("/projects")} className='flex items-center gap-3' ><BsArrowLeftCircleFill className='text-lg' />Back to Projects</button>
      </div>
      <div className='font-bold text-[40px] sm:text-[55px] leading-tight sm:leading-[68px] tracking-[-3px] sm:tracking-[-4px]'>
        <p >{title}</p>
      </div>

      <div className='px-3 sm:px-0'>
        <p className='text-gray-500  text-md'>{shortDesc}</p>
        {/* <p className='text-gray-500  text-sm z-10'>with a solid background in Python programming and web development.</p> */}
      </div>

      <img className='rounded-2xl' src={image.data.attributes.url} alt="" />
      <Markdown>{description}</Markdown>
      <Divider />
    </div>
  );
}

export default ProjectDetail;
