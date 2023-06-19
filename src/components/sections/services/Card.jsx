import React from 'react';


const Card = ({ service, type }) => {
    const { title, description, imageUrl } = service
    return (
        <div className='w-[90%] sm:w-[48%] bg-white shadow-neumorphic p-2 rounded-lg flex flex-col justify-between gap-5'>
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
        </div>
    );
}

export default Card;
