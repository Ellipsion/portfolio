import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion"
const WidgetButton = ({ Icon, link }) => {
    return (

        <NavLink to={link} >
            <motion.button
                whileHover={{ y: -5 }}
                className='bg-white w-[50px] cursor-pointer p-4 flex items-center justify-center rounded-full font-normal text-lg shadow-neumorphic'>
                <Icon className="w-5" />
            </motion.button>
        </NavLink>

    );
}

export default WidgetButton;
