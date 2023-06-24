import React from 'react';
import { motion } from "framer-motion"

const Card = ({ service, type }) => {
    const { title, description, imageUrl } = service
    return (
        <motion.div
            whileHover={{ y: -3 }}
            className='w-[90%] sm:w-[46%] bg-white/70 backdrop-blur-sm shadow-neumorphic p-2 rounded-lg flex flex-col justify-between gap-5 cursor-pointer'>
            <div>
                <div className='w-full'>
                    <p className='text-[10px] font-bold border w-fit px-2 py-1 rounded-lg'>{type}</p>

                </div>
                <div className='w-full p-2'>
                    <p className='text-sm md:text-xs font-medium capitalize'>{title}</p>
                    <p className='text-[12px] text-warm-gray-400 first-letter:uppercase'>{description}</p>
                </div>
            </div>
            <img className='w-full h-[100px] object-cover rounded-lg' src={imageUrl} alt={title + " illustration"} />
        </motion.div>
    );
}

export default Card;
