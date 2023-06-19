import React from 'react';

const orientationRef = {
    "right": "right-5"
}

const Tooltip = ({ children, name, position }) => {
    return (
        <div className="group relative">
            {children}
            <div className={`absolute ${position ? "" : "left-14 top-2"}  min-w-[80px]  scale-0 rounded-full bg-gray-900 px-5 py-1 text-sm text-white group-hover:scale-100 flex justify-center`}>

                <p>{name}</p>

            </div>
        </div>
    );
}

export default Tooltip;
