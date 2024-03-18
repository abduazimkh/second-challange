import React, { useEffect } from 'react'
import "./Interview.scss"
import { Button, Container } from '../../styled-components/StyledComponent'
import tool1 from "../../assets/images/tool1.png"
import tool2 from "../../assets/images/tool2.png"
import tool3 from "../../assets/images/tool3.png"
import tool4 from "../../assets/images/tool4.png"
import tool5 from "../../assets/images/tool5.png"
import tool6 from "../../assets/images/tool6.png"
import tool7 from "../../assets/images/tool7.png"
import interviewBanner from "../../assets/images/interview-2.png"
import Aos from 'aos';
import 'aos/dist/aos.css';



const Interview = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, [])
  return (
    <section className='interview' id='interview'>
        <Container>
            <div className="interview__main">
                <p>:: Technical interviews ::</p>
                <h3>Interview like it’s <span>2024</span></h3>
                <p>Ditch out of reach and out of touch interview questions about golf balls and 747s — and turn off your clunky screen share for good. Code, create, and collaborate with an IDE built to showcase real-world skills in a real-world environment.</p>
                <Button>Learn more</Button>
                <div className="interview-icons" data-aos="fade-up">
                    <img src={tool1} alt="img1"/>
                    <img src={tool2} alt="img2"/>
                    <img src={tool3} alt="img3"/>
                    <img src={tool4} alt="img4"/>
                    <img src={tool5} alt="img5"/>
                    <img src={tool6} alt="img6"/>
                    <img src={tool7} alt="img7"/>
                </div>
                <div className="interview__banner">
                    <img src={interviewBanner} alt=""/>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Interview