import { Link } from 'react-router-dom'
import Logo from '../Logo'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header>
      <nav className={styles.menu}>
        <div>
          <Link to={'./Flights'}>Find Flight</Link>
          <Link to={'./Hotels'}>Find Stays</Link>
        </div>

        <Logo />

        <div>
          <Link to={'./auth'}>Login</Link>
          <Link to={'./auth'}>Sign up</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
