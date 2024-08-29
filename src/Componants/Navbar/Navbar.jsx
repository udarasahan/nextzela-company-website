import { useState, useRef } from 'react';
import assets from '../../assets/assets';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {

    const [menu, setMenu] = useState("home");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    }

    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    }

    return (
        <div className='navbar' id='navbar'>
            <div className="logo">
                <img src={assets.logoIcon} alt="" />
            </div>
            <img src={assets.menuIcon} onClick={openMenu} alt="" className='nav-mob-open' />
            <ul className='nav-menu' ref={menuRef}>
                <img src={assets.closeIcon} onClick={closeMenu} className='nav-mob-close' alt="" />
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Portfolio</li>
            </ul>
            <div className='nav-connect'>Contact Us</div>
        </div>
    );
}

export default Navbar;
