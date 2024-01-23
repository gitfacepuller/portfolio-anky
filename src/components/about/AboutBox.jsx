import React from 'react'

const AboutBox = () => {
  return (
<div className='about__boxes grid'>
    <div className='about__box'>
        <i className='about__icon icon-fire'></i>
        <div>
            <h3 className="about__title">6</h3>
            <span className="about__subtitle">WebSites Build</span>
        </div>
    </div>

    <div className='about__box'>
        <i className='about__icon icon-people'></i>
        <div>
            <h3 className="about__title">3</h3>
            <span className="about__subtitle">Working Project</span>
        </div>
    </div>

    <div className='about__box'>
        <i className='about__icon icon-cup'></i>
        <div>
            <h3 className="about__title">925</h3>
            <span className="about__subtitle">Cup of Coffee</span>
        </div>
    </div>

    <div className='about__box'>
        <i className='about__icon icon-badge'></i>
        <div>
            <h3 className="about__title">2895</h3>
            <span className="about__subtitle">Photos Clicked</span>
        </div>
    </div>
</div> )
}

export default AboutBox