import Link from 'next/link';
import headerStyles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={headerStyles.nav}>
      <h1>Wedding Venue App</h1>
      
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>

        <li>
          <Link href='/about'>About</Link>
        </li>

        <li>
          <Link href='/venues'>Venues</Link>
        </li>

        <li>
          <Link href='/login'>Login/Sign Up</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header