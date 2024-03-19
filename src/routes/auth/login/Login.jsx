import { RiErrorWarningLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { GoLock } from "react-icons/go";
import { Button } from "../../../styled-components/StyledComponent";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import instance from "../../../api";
import { authData } from "../../../redux/feature/auth-slice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailInp = useRef();
  const passwordInp = useRef();

  const dispatch = useDispatch();

  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
  const PASSWORD_REGEX = /[a-zA-Z0-9]{8,}/;

  const handleSubmit = (e) => {
    e.preventDefault();

    EMAIL_REGEX.test(email) ? (emailInp.current.style = `visibility: hidden;`) : (emailInp.current.style = `visibility: visible;`);
    PASSWORD_REGEX.test(password) ? (passwordInp.current.style = `visibility: hidden;`) : (passwordInp.current.style = `visibility: visible;`);

    if (EMAIL_REGEX.test(email) && PASSWORD_REGEX.test(password)) {
      instance.post("auth/login", {
        email,
        password,
      }).then(response => {
        if (response.status === 201) {
          console.log(response)
          dispatch(authData(response.data.access_token))
          window.location.assign("/")
        }
      })
    }

    // state.data.forEach(el => {

    //   if (email === el.email && password === el.password) {
    //     EMAIL_REGEX.test(email) ? (emailInp.current.style = `visibility: hidden;`) : (emailInp.current.style = `visibility: visible;`);
    //     PASSWORD_REGEX.test(password) ? (passwordInp.current.style = `visibility: hidden;`) : (passwordInp.current.style = `visibility: visible;`);
    //     let is_error = 0

    //     for (let i in newUsersData) {
    //       if (newUsersData[i].email === email) {
    //         is_error = 1
    //       } else if (newUsersData[i].email == password) {
    //         is_error = 1
    //       }
    //     }

    //     if (is_error === 0) {
    //       console.log(is_error)
    //       window.location.assign("/")
    //     }
    //     setEmail("")
    //     setPassword("")
    //   }
    // })
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className='register__form--item'>
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

        <div className="checkbox__wrapper">
          <div className="checkbox-wrapper-42">
            <input id="cbx-42" type="checkbox" />
            <label className="cbx" htmlFor="cbx-42"></label>
            <label className="lbl" htmlFor="cbx-42">Remember me</label>
          </div>

          <Link to="/auth/sign-up">Forgot Password</Link>
        </div>

        <Button>Log In</Button>
      </form>
    </>
  )
}

export default Login;