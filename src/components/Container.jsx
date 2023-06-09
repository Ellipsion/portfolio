import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const Container = ({ children }) => {

    return (
        <div className='mx-auto w-[310px] sm:w-[500px] 2xl:w-[600px] mt-[100px] min-h-screen'>
            {children}
        </div>
    );
}

export default Container;
