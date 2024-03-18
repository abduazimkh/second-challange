import React from 'react'
import "./Footer.scss"
import { Container } from '../../styled-components/StyledComponent'
import { Link } from "react-router-dom";
import hackerrankLogo from "../../assets/images/hackerrank_link-logo.svg"
import facebookLogo from "../../assets/images/facebook_link-logo.svg"
import linkedinLogo from "../../assets/images/linkedin_link-logo.svg"
import twitterLogo from "../../assets/images/twitter_link-logo.svg"
import instagramLogo from "../../assets/images/instagram_link-logo.svg"




const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <div className="footer__main-links">
          <div className="first-links">
            <ul>
              <li><Link to={"/"}>Products</Link></li>
              <li><Link to={"/"}>Screen</Link></li>
              <li><Link to={"/"}>Interview</Link></li>
              <li><Link to={"/"}>Certified Assessments</Link></li>
              <li><Link to={"/"}>Plagiarism Detection</Link></li>
              <li><Link to={"/"}>Real World Questions</Link></li>
            </ul>
            <ul>
              <li><Link to={"/"}>Solutions</Link></li>
              <li><Link to={"/"}>Set Up a Skills Strategy</Link></li>
              <li><Link to={"/"}>Showcase Your Talent Brand</Link></li>
              <li><Link to={"/"}>Optimize Your Hiring Process</Link></li>
              <li><Link to={"/"}>Mobilize Your Internal Talent</Link></li>
              <li><Link to={"/"}>Embrace AI</Link></li>
            </ul>
            <ul>
              <li><Link to={"/"}>Resources</Link></li>
              <li><Link to={"/"}>Blog</Link></li>            
              <li><Link to={"/"}>Customer Stories</Link></li>
              <li><Link to={"/"}>Roles Directory</Link></li>            
              <li><Link to={"/"}>Partners</Link></li>            
              <li><Link to={"/"}>Integrations</Link></li>            
              <li><Link to={"/"}>What’s New</Link></li>            
            </ul>
          </div>
          <div className="second__links">
            <div className="sub-links">
              <ul>
                <li><Link to={"/"}>About Us</Link></li>
                <li><Link to={"/"}>Careers</Link></li>
                <li><Link to={"/"}>Our Team</Link></li>
                <li><Link to={"/"}>Newsroom</Link></li>
                <li><Link to={"/"}>Status</Link></li>
                <li><Link to={"/"}>Trust</Link></li>
              </ul>
              <ul>
                <li><Link to={"/"}>Get Started</Link></li>
                <li><Link to={"/"}>Pricing</Link></li>
                <li><Link to={"/"}>Contact Us</Link></li>
                <li><Link to={"/"}>Request Demo</Link></li>
                <li><Link to={"/"}>Product Support</Link></li>
                <li><Link to={"/"}>For Developers</Link></li>
              </ul>
            </div>
            <div className="copyright">
              <ul className="sub__menu">
                <li><img src={hackerrankLogo} alt="Hacker Rank link logo"/></li>
                <li><Link to={"/"}><img src={facebookLogo} alt='Facebook link logo'/></Link></li>
                <li><Link to={"/"}><img src={linkedinLogo} alt='Linked In link logo'/></Link></li>
                <li><Link to={"/"}><img src={twitterLogo} alt='Twitter link logo'/></Link></li>
                <li><Link to={"/"}><img src={instagramLogo} alt='Instagram link logo'/></Link></li>
              </ul>
              <div className="copyright-info">
                <p>Copyright © 2024 HackerRank <span>DBA INTERVIEW STREET <br/> TECHNOLOGIES PRIVATE LIMITED</span></p>
                <Link to={"/"}>Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer