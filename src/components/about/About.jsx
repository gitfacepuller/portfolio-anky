import React from 'react';
import './about.css';
import Image from "../../assets/avatar-2.png";
import AboutBox from './AboutBox';
const About = () => {
  return (
    <section className="about container section" id='about'>
      <h1 className="section__title">About Me</h1>

      <div className="about__container grid">


        <img src={Image} alt="" className="about__img"/>
      
        <div className="about__data grid">
        <div className="about__info">
          <p className="about__description">Welcome to my corner of the web! I'm Ankur Gautam, 
          Greetings! I'm Ankur Gautam, a self-taught front-end developer. I'm on a mission to transform creative ideas into visually stunning and user-friendly websites, one click at a time! </p>
          <a href="https://docs.google.com/document/d/1-DEhOswrM4kpgWhlt0jYv5c7YA7CtT1HUT9xp2TtRnU/edit" target='_blank' className="btn">Download CV</a>
        </div>
      <div className="about__skills grid">
        <div className='skills__data'>
          <div className="skills__title">
            <h3 className="skills_name">Development</h3>
            <span className="skills__number">90%</span>
          </div>
          <div className="skills__bar">
          <span className="skills__percentage development"></span>
        </div>
      </div>

  

      <div className='skills__data'>
          <div className="skills__title">
            <h3 className="skills_name">Cloud</h3>
            <span className="skills__number">60%</span>
          </div>
          <div className="skills__bar">
          <span className="skills__percentage ui__design"></span>
        </div>
      </div>

      <div className='skills__data'>
          <div className="skills__title">
            <h3 className="skills_name">Photography</h3>
            <span className="skills__number">70%</span>
          </div>
          <div className="skills__bar">
          <span className="skills__percentage photography"></span>
        </div>
      </div>
      </div>
      </div>
      </div>
      <AboutBox />
    </section>
    
  )
}

export default About
