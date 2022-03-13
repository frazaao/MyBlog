import { Outlet } from 'react-router-dom'

import Header from '../../components/Header'
import Blog from '../../components/Blog';

import styles from './styles.module.css';

export default function BlogPage(){

    return(
        <>
            <Header />
            <Blog />
            <Outlet />
        </>
    )
}