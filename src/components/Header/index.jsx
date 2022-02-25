import { useState } from 'react'
import styles from './styles.module.css'
import { FaBars } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';
import { Link } from 'react-router-dom'

export default function Header(){

  const [ isActive,  setIsActive ] = useState( false );

  function toggleActive() {
    setIsActive(!isActive)
  }

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link to='/'><h1><span>Geek</span>Place</h1></Link>
        <nav className={styles.navigation}>
          <button onClick={toggleActive}>{isActive? <CgClose /> : <FaBars /> }</button>
          <ul className={ isActive ? styles.navContainer + ' ' +  styles.active : styles.navContainer}>
            <li className={styles.navItem}><Link to="/blog">Blog</Link></li>
            <li className={styles.navItem}><a href="#">About us</a></li>
            <li className={styles.navItem}><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}