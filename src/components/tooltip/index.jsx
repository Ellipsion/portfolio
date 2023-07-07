import React from 'react';

const orientationRef = {
    "right": "right-5"
}
// 
const Tooltip = ({ children, name, position }) => {
    return (
        <div className="group relative">
            {children}
            <div className={`absolute ${position ? position : "right-[-10px] bottom-14 md:left-16 md:bottom-3"}  min-w-[80px]  scale-0 rounded-full bg-gray-900 px-5 py-1 text-sm text-white group-hover:scale-100 flex justify-center z-50`}>

                <p>{name}</p>

            </div>
        </div>
    );
}

export default Tooltip;
