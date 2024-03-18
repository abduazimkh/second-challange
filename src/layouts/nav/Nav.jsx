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
  const [scrollNav, setScrollNav] = useState(0)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    function ListenScrollScreen() {
      const ScrollHeight = window.scrollY
      setScrollNav(ScrollHeight)
    }
    ListenScrollScreen()
    document.addEventListener('scroll', ListenScrollScreen)
  }, [])



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
    if (screenWidth < 1053) {
      setOpenMenu(false)
    } else {
      setOpenMenu(true)
    }
  }, [screenWidth])

  useEffect(() => {
    if (screenWidth < 1054 && openMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto '

    }
  }, [openMenu])





  return (
    <>
      <div className='navbar__top-navigation'>
        <div style={openMenu && screenWidth < 1054 ? { display: 'flex' } : { display: 'none' }} className="overlay__menu-top"></div>
        <Container>
          <div style={openMenu ? { display: 'flex' } : { display: 'none' }} className="navigation-content">
            <Link className='navigation-link navigation__contact-link'>Contact us</Link>
            <Link className='navigation-link navigation__login-link'>Log in {screenWidth < 1054 && openMenu ? <i className='arrow'><FaArrowRight /></i> : ''}</Link>
          </div>
          {/* Navbar */}
        </Container>

      </div>
      <Container>

        <nav className={scrollNav > 80 ? 'nav__fixed nav' : 'nav'}>
          <div className={scrollNav > 80 ? "nav-wrapper nav-wrapper__fixed" : "nav-wrapper"}>
            <div style={openMenu && screenWidth < 1054 ? { left: '42%' } : openMenu && screenWidth < 490 ? { left: '20px' } : { left: '0' }} className="nav-logo">
              <img className='logo-image' src={Logo} alt="Logo" />
            </div>
            <ul style={openMenu ? { display: 'flex' } : { display: 'none' }} className="nav-menu">
              <li>
                <NavLink className={({ isActive }) => isActive ? "item-link item-link--active" : 'item-link'}>Products</NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => isActive ? "item-link item-link--active" : 'item-link'}>Solutions</NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => isActive ? "item-link item-link--active" : 'item-link'}>Resourses</NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => isActive ? "item-link item-link--active" : 'item-link'}>Pricing</NavLink>
              </li>
            </ul>
            <div style={openMenu ? { display: 'flex' } : { display: 'none' }} className="nav-actions">
              <Link to="/dashboard" className='developers-link'>For developers</Link>
              {/* <Link to="/" className='action-link'>
                <Button className='request-btn'>Request demo </Button>
              </Link> */}
              <Link to="/auth/sign-up" className='action-link'>
                <Button>Sign up</Button>
              </Link>

            </div>
            <button onClick={() => setOpenMenu(!openMenu)} className='hamburger-menu'>{openMenu ? <IoClose /> : <GiHamburgerMenu />}</button>
          </div>

        </nav>

      </Container>
    </>

  )
}

export default Nav