import "./NavOutHome.scss"
import { Button } from '../../styled-components/StyledComponent'
import logo from "../../assets/images/hackerrank_link-logo.svg"
import { NavLink, Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import hakkerRankLogo from "../../assets/images/hackerrank_white-logo.svg"
import { FiMessageSquare } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import { CgMenuGridO } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { useSelector } from 'react-redux';







const NavOutHome = () => {
    const state = useSelector(state => state.auth);

    return (
        <div className='nav-out-home'>
            <div className="nav__out-main">
                <div className="nav__out-links">
                    <Link to="/" className="nav__out-logo">
                        <img src={logo} alt="image" />
                        <h3>HackerRank</h3>
                    </Link>
                    <NavLink className="nav-link" to="/dashboard">Prepare</NavLink>
                    <NavLink className="nav-link" to="/dashboard">Certify</NavLink>
                    <NavLink className="nav-link" to="/dashboard">Compete</NavLink>
                    <NavLink className="nav-link" to="/dashboard">Apply</NavLink>
                </div>
                <div className="nav__out-login">
                    <div className="search-input">
                        <IoSearch className='search-logo' />
                        <input type="text" placeholder='Search' />
                    </div>
                    {
                        !state.token && !state.data ? <div className="before-login">
                            <Link to={"/"}>Hiring developers?</Link>
                            <Link className='btn' to="/auth">
                                <Button className='btn' >Log In</Button>
                            </Link>
                            <Link className='btn' to="/auth/sign-up" >
                                <Button className='btn' >Sign Up</Button>
                            </Link>
                        </div>
                            :
                            <div className="after-login-nav-profile">
                                <FiMessageSquare />
                                <GoBell />
                                <CgMenuGridO />
                                <div className="user-profile">
                                    <Link to="/profile">
                                        <FaUserCircle />
                                    </Link>
                                    <FaChevronDown />
                                </div>
                            </div>
                    }
                </div>
            </div>
            <div className="appearable__nav">
                <RxHamburgerMenu className='hamburger' />
                <img src={hakkerRankLogo} alt="" />
                {
                    !state.token && !state.data ? <div className='appearable__nav-after-logging'>
                        <FiMessageSquare />
                        <GoBell />
                    </div>
                        :
                        <p>just</p>
                }
            </div>
        </div>
    )
}

export default NavOutHome