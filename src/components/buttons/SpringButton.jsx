import React from 'react';
import { motion } from 'framer-motion'

const initial = {
    y: 0
}

const SpringButton = ({ Icon, text, link }) => {
    return (

        <motion.a
            whileHover={{ y: -5 }}
            href={link} target='_blank' className='bg-white/80 backdrop-blur-sm cursor-pointer py-4 sm:py-3 px-6 flex items-center justify-center gap-3 min-w-24 rounded-full font-medium text-sm shadow-neumorphic w-full sm:w-auto'>
            <Icon className="w-4 " />
            <p className=' '>{text}</p>
        </motion.a>

    );
}

export default SpringButton;
