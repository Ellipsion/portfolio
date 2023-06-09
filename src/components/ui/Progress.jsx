import React from 'react';

const Progress = ({ progress }) => {
    return (
        <div class="w-full rounded-full h-1 mb-4 dark:bg-gray-700">
            <div class="bg-gray-800 h-1 rounded-full dark:bg-blue-500" style={{ width: `${progress}%` }}></div>
        </div>
    );
}

export default Progress;
