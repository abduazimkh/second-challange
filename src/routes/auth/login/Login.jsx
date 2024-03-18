import { RiErrorWarningLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { GoLock } from "react-icons/go";
import { Button } from "../../../styled-components/StyledComponent";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className='register__form--item'>
        <div className="input" >
          <label className="input-label" htmlFor="">
            <i><MdOutlineEmail /></i>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email' />
          </label>
          <span> <RiErrorWarningLine /> &nbsp; Invalid email address.</span>
        </div>

        <div className="input">
          <label className="input-label" htmlFor="">
            <i><GoLock /></i>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder='Your password' />
          </label>
          <span> <RiErrorWarningLine /> &nbsp; Password should be at least 6 characters long.</span>
        </div>

        <div className="checkbox__wrapper">
          <div class="checkbox-wrapper-42">
            <input id="cbx-42" type="checkbox" />
            <label class="cbx" for="cbx-42"></label>
            <label class="lbl" for="cbx-42">Remember me</label>
          </div>

          <Link to="/auth/sign-up">Forgot Password</Link>
        </div>

        <Button>Log In</Button>
      </div >
    </>
  )
}

export default Login;