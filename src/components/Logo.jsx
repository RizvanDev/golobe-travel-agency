import { Link } from 'react-router-dom'
import logo from '../assets/icons/Logo.svg'

const Logo = () => {
  return (
    <Link to='/'>
      <img src={logo} alt='Golobe logo' />
    </Link>
  )
}

export default Logo
