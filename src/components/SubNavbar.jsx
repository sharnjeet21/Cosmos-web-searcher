// SubNavbar.js
import React from 'react';

const Subbar = ({isVisible}) => {
    return (
        <div className={`h-32  navbar bg-[#1a1a1a]  ${isVisible ? '' : 'hidden'}`}>
      <div className='w-full h-px bg-black fixed top-32 left-0'></div>

        </div>

    );
};

export default Subbar;
