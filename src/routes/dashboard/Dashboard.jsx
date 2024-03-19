import NavOutHome from '../../layouts/nav-out-home/NavOutHome'
import { Button, Container2 } from '../../styled-components/StyledComponent'
import "./Dashboard.scss"
import { useSelector } from 'react-redux'

const Dashboard = () => {
    const state = useSelector(state => state.auth);

    return (
        <div>
            <NavOutHome />
            {
                !state.token && !state.data ?
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
                                        <p>Get interview ready for top companies by solving <br /> an interview preparation kit.</p>
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
                    :
                    <div className="logged">
                        <div className="logged-intro">
                            <Container2>
                                <div className="intro-logged">
                                    <h2>Welcome {state?.data?.name}!</h2>
                                    <p>We are here to help you get your dream job. Let’s get started with your interview preparation.</p>
                                    <div className="your-interview">
                                        <p>What is your interview?</p>
                                        <select>
                                            <option>In a week</option>
                                            <option selected>In a month</option>
                                            <option>In 3 month</option>
                                            <option>In more than 3 month</option>
                                        </select>
                                    </div>
                                </div>
                            </Container2>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Dashboard