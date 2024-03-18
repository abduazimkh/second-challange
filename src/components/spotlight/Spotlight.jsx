import React from 'react'
import './Spotlight.scss'
import { Container } from '../../styled-components/StyledComponent'
import { FaArrowRightLong } from "react-icons/fa6";
import Community from '../../assets/images/community.jpg'
import { Link } from 'react-router-dom';
const Spotlight = () => {
  return (
    <Container>
        <div className="spotlight-wrapper">
            <h2 className="spotlight-title">
                It’s not a pipeline problem.
                <span>It’s a spotlight problem.</span>
            </h2>
            <p className="spotlight-description">
            Tech hiring needs a reset. From prepping for jobs and practicing coding to running a world-class technical interview, give developers the tools they need to showcase their skills, passion, and potential.
            </p>
            <ul className="spotlight-menu">
                <li><a href="#prep">Prep</a></li>
                <li><a href="#screen">Screen</a></li>
                <li><a href="#interview">Interview</a></li>
            </ul>
            <div className="community__content-wrapper">
                <div className="community-content">
                    <strong> ◯ — :: Coding practice ::</strong>
                    <h3>Explore and expand your skills.</h3>
                    <p>Every idea has a first line of code. Prep for jobs and sharpen your skills alongside a global community of developers. Access the content you need to develop new skills – and land the job you’ve dreamed of.</p>
                    <Link className='auth-link'>Sign up and practise <i><FaArrowRightLong/></i></Link>
                </div>
            <img className='community-image' src={Community}  />
            </div>
        </div>
    </Container>    
  )
}

export default Spotlight
