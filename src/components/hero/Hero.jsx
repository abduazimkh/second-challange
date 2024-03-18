import React from 'react'
import './Hero.scss'
import Peloton from '../../assets/images/peloton_black.png'
import Atlassian from '../../assets/images/atlassian_black.png'
import Bloomberg from '../../assets/images/bloomberg_black.png'
import Vmware from '../../assets/images/vmware_black.png'
import Stripe from '../../assets/images/stripe_black.png'
import Goldman from '../../assets/images/goldmansachs_black.png'
import Adobe from '../../assets/images/adobe_black.png'
import Linkedin from '../../assets/images/linkedin_black.png'
import { Button, Container } from '../../styled-components/StyledComponent'
const Hero = () => {
  return (
    <div className='hero' >
      <Container>

        <div className="hero-content">
          <h2 className='hero-title'>  Skills speak louder than words</h2>
          <p className='hero-description'>We help companies develop the strongest tech teams around. We help candidates sharpen their tech skills and pursue job opportunities.</p>
          <div className="auth-action">
            <Button className='signup-btn'>Sign up</Button>
            <Button className='demo-btn'>Request demo</Button>
          </div>
          <div className="hero__partners-wrapper">
            <p className="partners-description">Over 40% of developers worldwide and 3,000 companies use HackerRank</p>
            <div className="partners-images">
        <img src={Peloton} alt="Partners" />
        <img src={Atlassian} alt="Partners" />
        <img src={Bloomberg} alt="Partners" />
        <img src={Vmware} alt="Partners" />
        <img src={Stripe} alt="Partners" />
        <img src={Goldman} alt="Partners" />
        <img src={Adobe} alt="Partners" />
        <img src={Linkedin} alt="Partners" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero