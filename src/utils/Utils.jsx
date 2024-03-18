import { Link } from "react-router-dom";
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


export { CodingCard };