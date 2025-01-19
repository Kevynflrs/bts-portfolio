import React from 'react';
import Navbar from '../../Components/Common/Navbar/Navbar';
import Preview from '../Preview/Preview';

export default function Header() {
    return (
        <>
            <Navbar/>
            <div className='py-32'>
                <Preview/>
            </div>
        </>
    );
};