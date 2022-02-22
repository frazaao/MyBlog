import { useState } from 'react'
import styles from './styles.module.css'
import { FaBars } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';

export default function Header(){

  const [ isActive,  setIsActive ] = useState( false );

  function toggleActive() {
    setIsActive(!isActive)
  }

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h1>MyBlog</h1>
        <nav className={styles.navigation}>
          <button onClick={toggleActive}>{isActive? <CgClose /> : <FaBars /> }</button>
          <ul className={ isActive ? styles.navContainer + ' ' +  styles.active : styles.navContainer}>
            <li className={styles.navItem}><a href="#">Blog</a></li>
            <li className={styles.navItem}><a href="#">About us</a></li>
            <li className={styles.navItem}><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}