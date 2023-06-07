import React from 'react';

const orientationRef = {
    "right": "right-5"
}

const Tooltip = ({ children, orientation }) => {
    return (
        <div class="group relative">
            {children}
            <div class={`absolute left-14 min-w-[80px] top-2 scale-0  rounded-full bg-gray-900 px-5 py-1 text-sm text-white group-hover:scale-100 flex justify-center`}>
                <p>Skills</p>
            </div>
        </div>
    );
}

export default Tooltip;
