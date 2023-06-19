import SkillIcon from 'components/SkillIcon';
import React from 'react';
import Tooltip from 'components/tooltip';

//icons
import { FiArrowDownRight } from "react-icons/fi"

const Card = ({ project }) => {
    const { title, description, techStack, imageUrl, deployment, type } = project || {};
    // console.log(project)
    return (
        <div className='w-fit sm:w-[48%] bg-white shadow-neumorphic p-2 rounded-lg flex flex-col justify-between gap-5 cursor-pointer'>
            <div>
                <div className='w-full flex justify-between'>
                    <div>
                        <p className='text-[10px] font-bold border w-fit px-3 py-[7px] rounded-lg cursor-pointer capitalize'>{type}</p>
                    </div>
                    {
                        deployment?.status && (
                            <a className=' cursor-pointer' href={deployment?.link} target='_blank'>
                                {/* <Tooltip name={deployment?.message} position={"bottom-10 left-0"}> */}
                                <FiArrowDownRight className='text-xl m-2 font-bold' />
                                {/* </Tooltip> */}
                            </a>
                        )
                    }

                </div>
                <div className='w-full p-2'>
                    <p className='text-sm font-medium my-1'>{title}</p>
                    <p className='text-[12px] text-stone-500'>{description}</p>
                </div>
                <div className='flex gap-2 mt-3 mx-2'>
                    {
                        techStack?.map((skill, idx) => <SkillIcon key={`skill-${idx}-${idx + 1}`} skillName={skill} />)
                    }
                </div>
            </div>

            <img className='w-full min-h-[100px] object-cover rounded-lg outline-none border-none' src={imageUrl} alt="" />
        </div>
    );
}

export default Card;
