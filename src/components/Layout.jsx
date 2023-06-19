import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
    const location = useLocation()
    const myRef = useRef()
    useEffect(() => {
        if (location.hash === '') {
            myRef?.current?.scrollTo({ top: 0, behavior: "smooth" })
        }
    }, [myRef, location])

    return (
        <div ref={myRef} className='w-screen h-screen overflow-x-hidden'>
            {children}
        </div>
    );
}

export default Layout;
