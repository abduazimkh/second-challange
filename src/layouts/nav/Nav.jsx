import React, { useEffect, useState } from 'react'
import "./Nav.scss"
import { Link, NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Logo from "../../assets/images/hackerrank_logo.png"
import { FaArrowRight } from "react-icons/fa6";
import { Button, Container } from '../../styled-components/StyledComponent'


const Nav = () => {
  const [openMenu, setOpenMenu] = useState(true)

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const ChangeScreen = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', ChangeScreen)
    return () => {
      window.removeEventListener('resize', ChangeScreen)
    }
  }, [])

  useEffect(() => {
    
    if(screenWidth < 1053){
      setOpenMenu(false)
      console.log(false);
    } else{
      setOpenMenu(true)
    }
  }, [screenWidth])

  useEffect(() => {
    if(openMenu){
      document.body.style.overflow = 'hidden'
    } else{
      document.body.style.overflow = 'auto '

    }
  }, [openMenu])





  return (
    <>
    <div  className='navbar__top-navigation'>
          <div style={openMenu && screenWidth < 1054 ? {display: 'flex'} : {display:'none'}} className="overlay__menu-top"></div>
      <Container>
        <div style={openMenu ? {display: 'flex'} : {display: 'none'}}  className="navigation-content">
          <Link className='navigation-link navigation__contact-link'>Contact us</Link>
          <Link  className='navigation-link navigation__login-link'>Log in { screenWidth < 1054 && openMenu ? <i className='arrow'><FaArrowRight/></i> : ''}</Link>
        </div>
        {/* Navbar */}
      </Container>

    </div>
      <Container>

        <nav>
          <div style={openMenu && screenWidth < 1054 ? {left: '42%'} : openMenu && screenWidth < 490 ? {left: '20px' }  : {left: '0'}} className="nav-logo">
            <img className='logo-image' src={Logo} alt="Logo" />
          </div>
          <ul style={openMenu ? {display: 'flex'} : {display: 'none'}} className="nav-menu">
            <li>
              <NavLink  className={({isActive}) => isActive ? "item-link item-link--active" : 'item-link'}>Products</NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => isActive ? "item-link item-link--active" : 'item-link'}>Solutions</NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => isActive ? "item-link item-link--active" : 'item-link'}>Resourses</NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => isActive ? "item-link item-link--active" : 'item-link'}>Pricing</NavLink>
            </li>
          </ul>
          <div style={openMenu ? {display: 'flex'} : {display: 'none'}}  className="nav-actions">
            <Link className='developers-link'>For developers</Link>
            <Link  className='action-link'>
              <Button className='request-btn'>Request demo </Button>
            </Link>
            <Link className='action-link'>
              <Button>Sign up</Button>
            </Link>
        
          </div>
            <button onClick={() => setOpenMenu(!openMenu)} className='hamburger-menu'>{openMenu ? <IoClose/> :<GiHamburgerMenu/>}</button>
        </nav>
      </Container>
    </>

  )
}

export default Nav