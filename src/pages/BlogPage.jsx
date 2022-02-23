import { Outlet } from 'react-router-dom'
import { useState } from 'react';

import Header from '../components/Header'
import Blog from '../components/Blog';

export default function BlogPage(){

    return(
        <>
            <Header />
            <Blog />
            <Outlet />
        </>
    )
}