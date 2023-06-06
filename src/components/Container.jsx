import React from 'react';

const Container = ({ children }) => {
    return (
        <div className='mx-auto w-[310px] sm:w-[500px] 2xl:w-[600px] mt-[100px] min-h-screen'>
            {children}
        </div>
    );
}

export default Container;
