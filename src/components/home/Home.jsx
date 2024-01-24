import React from 'react';
import './home.css';
import Me from "../../assets/avatar-1.png";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';


const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src ={Me} alt="" classname="home__img"/>
        <h1 className="home__name">Ankur Gautam</h1>
        <span className="home__education">I'am Front-End developer</span>
        <HeaderSocials />
        <a href='https://www.linkedin.com/in/ankur-gautam-/' target="_blank" className='btn'>Hire Me</a>
        <ScrollDown />
        </div>
       
       
      
      </section>
      
  )
}

export default Home
