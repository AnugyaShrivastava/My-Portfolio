import React from 'react'
import './Navbar.css'
import logo from '../../assets/logop.png';
import btn from '../../assets/btncon.png';
import {Link} from 'react-scroll';
const Navbar = () => {
  return (
   <nav className='navbar'>

   <img src={logo} className="logo"alt="Remote" />
  
   <div className="desktopMenu">
     <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
     <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
     <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Projects</Link>
     <Link activeClass='active' to='experience-container' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Experience</Link>
     <Link activeClass='active' to='skills-container' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Skills</Link>
   </div>

   <button className="desktopMenuBtn" onClick={()=>{
    document.getElementById('contact-page').scrollIntoView({behavior: 'smooth'});
   }}>
     <img src={btn} alt="" className="desktopMenuImg"  /> Contact Me
   </button>

   </nav>
  )
}

export default Navbar
