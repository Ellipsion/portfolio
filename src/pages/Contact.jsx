import React from 'react'
import Divider from 'components/ui/Divider';
import ContactActions from 'components/ContactActions';


function Contact() {
    return (
        <div className='mx-3 h-fit flex flex-wrap flex-col gap-8 sm:gap-5'>
            <div className='font-bold text-[40px] sm:text-[55px] leading-tight sm:leading-[68px] tracking-[-3px] sm:tracking-[-4px]'>
                <p >Contact </p>
            </div>
            <div className='px-3 sm:px-0'>
                {/* <p className='text-normal font-medium'>All Projects</p> */}
                <p className='text-gray-500  text-md'>Let’s collaborate on a new project!</p>
            </div>
            <ContactActions />
            <div className='w-full flex flex-col gap-3'>
                <h3 className='font-bold text-black mb-5 mt-3'>Send a message</h3>
                <div className='flex flex-col md:flex-row w-full gap-3'>
                    <input type="text" placeholder='Name'
                        className='bg-stone-200/60 px-4 py-3 rounded-lg text-black placeholder:text-neutral-500 outline-none flex-auto'
                    />
                    <input type="text" placeholder='Email'
                        className='bg-stone-200/60 p-4 rounded-lg text-black placeholder:text-neutral-500 outline-none flex-auto'
                    />
                </div>
                <div className='flex flex-col gap-3 justify-between min-h-[229px]'>
                    <textarea className='bg-stone-200/60 px-4 py-3 rounded-lg text-black placeholder:text-neutral-500 outline-none w-full' placeholder='Message' rows="5"></textarea>
                    <button className='bg-black hover:bg-stone-800 text-white font-bold rounded-lg p-4'>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;