import { RiErrorWarningLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { GoLock } from "react-icons/go";
import { Link } from "react-router-dom";
import { Button } from "../../../styled-components/StyledComponent";
import { useRef, useState } from "react";
import instance from "../../../api";
import { useDispatch } from "react-redux";
import { authData } from "../../../redux/feature/auth-slice";

// let is_error = 0

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [userData, setUserData] = useState();

  const dispatch = useDispatch();

  const usernameInp = useRef();
  const emailInp = useRef();
  const passwordInp = useRef();

  const USERNAME_REGEX = /^[A-Za-z0-9_-]{3,}$/;
  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
  const PASSWORD_REGEX = /[a-zA-Z0-9]{8,}/;

  const handleSubmit = (e) => {
    e.preventDefault();

    USERNAME_REGEX.test(username) ? (usernameInp.current.style = `visibility: hidden;`) : (usernameInp.current.style = `visibility: visible;`);
    EMAIL_REGEX.test(email) ? (emailInp.current.style = `visibility: hidden;`) : (emailInp.current.style = `visibility: visible;`);
    PASSWORD_REGEX.test(password) ? (passwordInp.current.style = `visibility: hidden;`) : (passwordInp.current.style = `visibility: visible;`);

    if (USERNAME_REGEX.test(username) && EMAIL_REGEX.test(email) && PASSWORD_REGEX.test(password)) {
      instance.post("users/", {
        name: username,
        email,
        password,
        avatar: "https://picsum.photos/800",
      }).then(data => {
        if (data.status === 201) {
          dispatch(authData(data.data))
          window.location.assign("/auth")
        }
      })
    }


    // if (USERNAME_REGEX.test(username) && EMAIL_REGEX.test(email) && PASSWORD_REGEX.test(password)) {

    //   for (let i in state?.data) {
    //     if (state.data[i]?.username === username) {
    //       is_error = 1
    //     } else if (state.data[i]?.email === email) {
    //       is_error = 1
    //     }
    //   }

    //   if (is_error === 0) {
    //     setUserData({ username, email, password })
    //     dispatch(authData(userData));
    //     // window.location.assign("/auth/login");
    //   }

    // }
  }



  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className='register__form--item'>
        <div className="input">
          <label className="input-label" htmlFor="username">
            <i><FiUser /></i>
            <input id="username" value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='First & Last name' />
          </label>
          <span ref={usernameInp} > <RiErrorWarningLine /> &nbsp; Enter first name and last name.</span>
        </div>

        <div className="input" >
          <label className="input-label" htmlFor="email">
            <i><MdOutlineEmail /></i>
            <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email' />
          </label>
          <span ref={emailInp} > <RiErrorWarningLine /> &nbsp; Invalid email address.</span>
        </div>

        <div className="input">
          <label className="input-label" htmlFor="password">
            <i><GoLock /></i>
            <input id="password" value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder='Your password' />
          </label>
          <span ref={passwordInp} > <RiErrorWarningLine /> &nbsp; Password should be at least 8 characters long.</span>
        </div>

        <div className="checkbox-wrapper-42">
          <input id="cbx-42" type="checkbox" />
          <label className="cbx" for="cbx-42"></label>
          <label className="lbl" for="cbx-42">I agree to HackerRank's <Link to="/" >Terms of Service</Link> and <Link to="/" >Privacy Policy.</Link></label>
        </div>

        <Button>Create an Account</Button>
      </form>
    </>
  )
}

export default SignUp;