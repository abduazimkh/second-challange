import { RiErrorWarningLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { GoLock } from "react-icons/go";
import { Link } from "react-router-dom";
import { Button } from "../../../styled-components/StyledComponent";
import { useState } from "react";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className='register__form--item'>
        <div className="input">
          <label className="input-label" htmlFor="">
            <i><FiUser /></i>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='First & Last name' />
          </label>
          <span> <RiErrorWarningLine /> &nbsp; Enter first name and last name.</span>
        </div>

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

        <div class="checkbox-wrapper-42">
          <input id="cbx-42" type="checkbox" />
          <label class="cbx" for="cbx-42"></label>
          <label class="lbl" for="cbx-42">I agree to HackerRank's <Link to="/" >Terms of Service</Link> and <Link to="/" >Privacy Policy.</Link></label>
        </div>

        <Button>Create an Account</Button>
      </div>
    </>
  )
}

export default SignUp;