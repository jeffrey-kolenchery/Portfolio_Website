import './index.scss'
import { Link, NavLink } from 'react-router-dom';
import logo_nobg from '../../assets/images/logo_nobg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faUser, faLink, faComputer } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => (
    <div className="nav-bar">
        <Link className='logo' to='/'>
        <img src={logo_nobg} alt="logo" />
        </Link>

        <nav>
            <NavLink exact = "true" activeclassname="active" to='/'>
            <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact = "true" activeclassname="active" className="about-link" to='/about'>
            <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact = "true" activeclassname="active" className="contact-link" to='/contact'>
            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                target='_blank' 
                rel='noreferrer'
                href='https://www.linkedin.com/in/jeffrey-kolenchery/'>
                    <FontAwesomeIcon icon={faLink} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a 
                target='_blank' 
                rel='noreferrer'
                href='https://github.com/jeffrey-kolenchery'>
                    <FontAwesomeIcon icon={faComputer} color='#4d4d4e'/>
                </a>
            </li>
        </ul>
    </div>

)

export default Sidebar;