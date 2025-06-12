import React from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const logo = (
    <div className={styles.logo}>
    <Link to ="/">
        <h2>Shop<span>ErZ</span></h2>
    </Link>
</div>

)

const activeLink = ({isActive}) => (isActive ? `${styles.active}` : `${styles.inactive}`)

export const Header = () => {
  return (
    <header>
        <div className={styles.header}>
           {logo}
           <nav>
            <ul>
                <li>
                    <NavLink to="/shop" className={activeLink}/>
                </li>
              
            </ul>
            <div className={styles["header-right"]}></div>
           </nav>
        </div>
    </header>
   
  )
}
