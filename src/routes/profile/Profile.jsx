import React, { useEffect } from 'react'
import './Profile.scss'
import {Container} from '../../styled-components/StyledComponent'
import { FaEdit } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { SlBadge } from "react-icons/sl";
import { TiDocumentText } from "react-icons/ti";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiGraduationCap } from "react-icons/pi";
import { FiLink } from "react-icons/fi";
import { MdEmail, MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Profile = () => {
  const {pathname} = useLocation()
  const userData = useSelector(state => state.user.data)
  console.log(userData);

  useEffect(() => {
    if(pathname.includes('/profile')){
      document.body.style.background = '#F4F4F5'
    }
    else{
      document.body.style.background = '#fff'
      
    }
  }, [pathname])
  return (
    <div className='profile'>
      <Container>
        <div className="profile-wrapper">
                <div className="user__info-wrapper">
                        <div className="user__info-card card">
                            <div className="info__top-header">
                                <img className='user-avatar' src={userData.image} alt="H" />
                                <button className='edit-btn'><FaEdit/></button>
                            </div>
                            <h2 className="user__fullname">{userData.name}</h2>
                            <p className='username-link'>{userData.email}</p>
                        </div>
                        <div className="personal__information-card card">
                            <div className="card-header">
                                <h4>Personal Information</h4>
                                <button className='edit-btn'><FaEdit/></button>
                            </div>
                            <div className="personal-item">
                                    <i><MdEmail/></i>
                                    <p>{userData.email}</p>
                            </div>
                            <div className="personal-item">
                                    <i><MdOutlineLocalPhone/></i>
                                    <p>+998 97 777 77 00</p>
                            </div>
                            <div className="personal-item">
                                    <i><CiLocationOn/></i>
                                    <p>Uzbekistan</p>
                            </div>
                        </div>
                        <div className="resume-card card">
                        <div className="card-header">
                                <h4>My resume</h4>
                                <button className='add-btn'>+ Add Resume</button>
                            </div>
                            <p className='resume-text'>Add your resume here</p>
                        </div>
                        <div className="settings-card card">
                        <div className="card-header">
                                <h4>EEO settings</h4>
                                <button className='edit-btn'><FaEdit/></button>
                            </div>
                        </div>
                </div>
                <div className="user__badges-wrapper">
                  <div className="badge-card badge">
                          <div className="badge-header">
                            <i><SlBadge/></i>
                            <h4>My Badges</h4>
                          </div>
                          <p className='badge-description'>You have not unlocked any badges yet. <Link className='badge-link'>Get Badges</Link></p>
                  </div>
                  <div className="badge-card badge">
                          <div className="badge-header">
                            <i><TiDocumentText/></i>
                            <h4>My Certifications</h4>
                          </div>
                          <p className='badge-description'>You have not earned any certificates yet.  <Link className='badge-link'>Get Certified</Link></p>
                  </div>
                  <div className="badge-card badge">
                            <div className="occupation-header">
                          <div className="badge-header">
                            <i><HiOutlineShoppingBag/></i>
                            <h4>Work Experience</h4>
                          </div>
                            <button className="add-btn">+ Add Work Experience</button>
                            </div>
                          <p className='badge-description'>Add your work experience. Don’t forget to add those internships as well.</p>
                  </div>
                  <div className="badge-card badge">
                            <div className="occupation-header">
                          <div className="badge-header">
                            <i><PiGraduationCap/></i>
                            <h4>Education</h4>
                          </div>
                            <button className="add-btn">+ Add Education</button>
                            </div>
                          <p className='badge-description'>We believe in skills over pedigree; but go ahead add your education for the recruiters who don’t.</p>
                  </div>
                  <div className="badge-card badge">
                            <div className="occupation-header">
                          <div className="badge-header">
                            <i><FiLink/></i>
                            <h4>Links</h4>
                          </div>
                            <button className="add-btn">+ Add Links</button>
                            </div>
                          <p className='badge-description'>Add all the relevant links that help in knowing you as a hacker</p>
                  </div>
                  <div className="badge-card badge">
                            <div className="occupation-header">
                          <div className="badge-header">
                            <h4>My Skills</h4>
                          </div>
                            <button className="add-btn">+ Add Skills</button>
                            </div>
                          <p className='badge-description'>Add all the relevant skills that speak on your behalf</p>
                  </div>
                </div>
        </div>

      </Container>
        <div className="profile-footer">
              <Link className='footer-link'>Blog</Link>
              <Link className='footer-link'>Scoring</Link>
              <Link className='footer-link'>Environment</Link>
              <Link className='footer-link'>FAQ</Link>
              <Link className='footer-link'>About Us</Link>
              <Link className='footer-link'>Support</Link>
              <Link className='footer-link'>Careers</Link>
              <Link className='footer-link'>Terms Of Service</Link>
              <Link className='footer-link'>Privacy Policy</Link>
        </div>

    </div>
  )
}

export default Profile
