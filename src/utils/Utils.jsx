import { Link, NavLink, Outlet } from "react-router-dom";
import "./Utils.scss";
import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

const CodingCard = ({ title, text, link, linkText, icon, image }) => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])


  return (
    <>
      <div className='coding-item'>
        <div className='coding__item--content'>
          <h2> {title} </h2>
          <p> {text} </p>
          <Link to={link} > <span>{linkText}</span> <i>{icon}</i> </Link>
        </div>

        <div className='coding__item--img' data-aos="fade-left" >
          <img src={image} alt="coding image" />
        </div>
      </div>
    </>
  )
}


const RegisterForm = () => {
  return (
    <>
      <div className="register__form--wrapper">
        <div className="register__route--link">
          <NavLink end to="/auth/sign-up" className={({ isActive }) => isActive ? "link link--active" : "link"} >Sign up</NavLink>
          <NavLink end to="/auth" className={({ isActive }) => isActive ? "link link--active" : "link"} >Log in</NavLink>
        </div>

        <div className="outlet_routes">
          <Outlet />
        </div>
      </div>
    </>
  )
}



export { CodingCard, RegisterForm };