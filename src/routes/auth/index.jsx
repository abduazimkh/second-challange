import "./Auth.scss";
import { RegisterForm } from '../../utils/Utils';
import logo from "../../assets/images/hackerrank_logo.png"
import { Container } from "../../styled-components/StyledComponent";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <Container>
      <div className='auth__wrapper'>
        <div className="top">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <h1>For Developers</h1>
          <p>Practice coding, prepare for interviews, and get hired.</p>
        </div>

        <RegisterForm />
      </div>
    </Container>
  )
}

export default index