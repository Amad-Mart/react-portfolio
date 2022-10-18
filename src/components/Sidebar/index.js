import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import Logos from '../../assets/images/logo-a.png'
//import Logos from '../../assets/images/logo-s.png'
//<a href="https://www.textstudio.co/">Logo generator</a>
import LogoSubtitle from '../../assets/images/logo_subA.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {

  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={Logos} alt='logo'/>
            <img className="sub-logo"src={LogoSubtitle} alt='Amadeus'/>
        </Link>
        <nav>
            <NavLink exacty='true' activeClassName='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink 
              exacty='true' 
              activeClassName='active' 
              className='about-link' 
              to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink 
              exacty='true' 
              activeClassName='active' 
              className='contact-link' 
              to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
          <li>
            <a 
              target='_blank' 
              rel='noreferrer' 
              href='https://www.linkedin.com/in/amadeus-martinez-538a961a5/'>
              <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
            </a>
          </li>
          <li>
            <a 
              target='_blank' 
              rel='noreferrer' 
              href='https://github.com/Amad-Mart'>
              <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
            </a>
          </li>
        </ul>
    </div>
  )
    
}

export default Sidebar