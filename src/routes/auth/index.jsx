import "./Auth.scss";
import { RegisterForm } from '../../utils/Utils';
import logo from "../../assets/images/hackerrank_logo.png"

const index = () => {
  return (
    <div className='auth__wrapper'>
      <div className="top">
        <img src={logo} alt="logo" />
        <h1>For Developers</h1>
        <p>Practice coding, prepare for interviews, and get hired.</p>
      </div>

      <RegisterForm />
    </div>
  )
}

export default index