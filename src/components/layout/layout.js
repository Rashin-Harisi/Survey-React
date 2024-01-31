import React from 'react';
import './layout.css';
import Timer from '../timer/timer';


const Layout = ({children}) => {
    return (
        <div className='layout'>
            <div className='timer'><Timer/></div>
            <div className='children'>{children}</div>            
            <div className='buttons'>
                <input type='button' className='previous' value='Previous' />
                <input type='button' className='next' value='Next' />
            </div>
        </div>
    )
};

export default Layout; 