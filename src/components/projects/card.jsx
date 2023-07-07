import React from 'react';
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom';
import { loadMedia } from 'utils/mediaUtils';

import SkillIcon from 'components/SkillIcon';

//icons
import { FiArrowDownRight } from "react-icons/fi"


const cardMotion = {
    rest: {
        transition: { duration: 1 }
    },
    hover: {
        y: -6
    }
}

const arrowMotion = {
    rest: { opacity: 0, transition: { duration: 0.3 } },
    hover: { opacity: 1, rotate: "-90deg" }
}

const Card = ({ project }) => {
    const { title, shortDesc, image, technologies, deployment, slug } = project.attributes
    console.log(project)
    return (

        <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={cardMotion}
            // animate={{ transition: { duration: 1000 } }}
            className='w-fit sm:w-[48%] bg-white/70 backdrop-blur-sm shadow-neumorphic hover:bg-gray-50/70 p-2 rounded-lg flex flex-col justify-between gap-5 '>
            <div>

                <div className='w-full flex justify-between'>
                    <div>
                        <p className='text-[10px] font-bold border w-fit px-3 py-[7px] rounded-lg cursor-pointer capitalize'>Project</p>
                    </div>
                    {
                        deployment?.data?.attributes.status && (
                            <a className=' cursor-pointer' href={deployment?.data?.attributes.link} target='_blank'>
                                {/* <Tooltip name={deployment?.message} position={"bottom-10 left-0"}> */}
                                <motion.div
                                    variants={arrowMotion}
                                >
                                    <FiArrowDownRight className='text-xl m-2 font-bold' />
                                </motion.div>
                                {/* </Tooltip> */}
                            </a>
                        )
                    }

                </div>
                {/* <NavLink to={`/projects/${slug}`}> */}
                <div className='w-full p-2 cursor-pointer'>
                    <p className='text-sm font-medium my-1'>{title}</p>
                    <p className='text-[12px] text-stone-500'>{shortDesc}</p>
                </div>
                {/* </NavLink> */}
                <div className='flex flex-wrap gap-2 mt-3 mx-2'>
                    {
                        technologies.data.map((skill, idx) => <SkillIcon key={`skill-${skill.id}`} skillName={skill.attributes.name} />)
                    }
                </div>
            </div>

            <img className='w-full min-h-[100px] object-cover rounded-lg outline-none border-none' src={loadMedia(image.data.attributes.url)} alt="" />
        </motion.div>

    );
}

export default Card;
