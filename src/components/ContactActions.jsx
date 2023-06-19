import React from 'react';
import SpringButton from './buttons/SpringButton';
import { HiOutlineMail } from "react-icons/hi"
import { AiFillGithub } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"
import { CiMail } from "react-icons/ci"
import { IoMailOutline } from "react-icons/io5"
const ContactActions = () => {
    return (
        <div className='flex flex-col gap-4 sm:px-0 sm:justify-start sm:flex-row w-full my-3'>
            <SpringButton text={"Email"} Icon={IoMailOutline} link={"email:email"} />
            <SpringButton text={"Github"} Icon={AiFillGithub} link={"email:email"} />
            <SpringButton text={"LinkedIn"} Icon={FaLinkedinIn} link={"email:email"} />
        </div>
    );
}

export default ContactActions;
