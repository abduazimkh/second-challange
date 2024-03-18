import React from 'react'
import "./PracticeCoding.scss"
import { Button, Container } from '../../styled-components/StyledComponent'



const PracticeCoding = () => {
    
  return (
    <section className='practice'>
        <Container>
            <div className="practice__main">
                <div className="practice__coding">
                    <h3>Practice coding challenges & <span>prep for interviews</span></h3>
                    <p>Start practicing your skills now and land the job of your dreams.</p>
                    <Button>Join the community</Button>
                </div>
                <div className="hiring">
                    <h3>Get started <span>hiring with HackerRank</span></h3>
                    <p>More than 3,000 tech teams, representing all industries and from countries around the world, trust HackerRank</p>
                    <Button>Request a demo</Button>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default PracticeCoding