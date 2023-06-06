import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className='w-screen h-screen overflow-x-hidden'>
            {children}
        </div>
    );
}

export default Layout;
