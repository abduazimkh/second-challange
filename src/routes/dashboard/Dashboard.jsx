import React from 'react'
import NavOutHome from '../../layouts/nav-out-home/NavOutHome'
import { Button, Container2 } from '../../styled-components/StyledComponent'
import "./Dashboard.scss"

const Dashboard = () => {
  return (
    <div>
        <NavOutHome/>
        <Container2>
            <div className="no__login">
                <div className="dashboard__itle-no-login">
                    <p>Prepare</p>
                    <h2>Dashboard</h2>
                </div>
                <div className="dashboard__preparation">
                    <h3>Your Preparation</h3>
                    <div className="prep-card">
                        <div className="interview__preparation">
                            <h4>Preparation Kits</h4>
                            <p>Interview Preparation Kit</p>
                            <p>Get interview ready for top companies by solving <br/> an interview preparation kit.</p>
                            <Button>View all kits</Button>
                        </div>
                        <div className="your__first-skill">
                            <h4>New Skill</h4>
                            <p>Add your first skill</p>
                            <p>Explore and add your first skill to get started. HackerRank offers a variety of skills, tracks and tutorials for you to learn and improve.</p>
                            <Button>Explore Skills</Button>
                        </div>
                    </div>
                </div>
                <div className="dashboard__certification">
                    <h3>Certification</h3>
                    <div className="certification__cards">
                        <div className="problem__solving">
                            <h4>Problem Solving (Basic)</h4>
                            <Button>Get Certified</Button>
                        </div>
                        <div className="python">
                            <h4>Python (Basic)</h4>
                            <Button>Get Certified</Button>
                        </div>
                        <div className="stand-out">
                            <h4>Stand out from the crowd</h4>
                            <p>Take the HackerRank Certification Test and make your profile stand out</p>
                            <Button>View all certifications</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Container2>
    </div>
  )
}

export default Dashboard