import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../src/navbar.css';
import logo from '../src/assets/logo.svg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar">
            <div className="navbar__logo">
                <img src={logo} alt="logo" />
            </div>
            <div className={`navbar__links ${isOpen ? 'open' : ''}`}>
                <Link to="/home">Home</Link>
                <Link to="/about">About us</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/partners">Our partners</Link>
                <Link to="/vlabs">Virtual Labs</Link>
                <div className='navbar__buttons'>
                    <Link to="/login" className="navbar__button navbar__button--login" style={{ color: 'white' }}>Login</Link>
                    <Link to="/signup" className="navbar__button navbar__button--signup" style={{ color: 'white' }}>Sign Up</Link>
                </div>
            </div>
            <div className="navbar__toggle" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
    );
}

export default Navbar;
