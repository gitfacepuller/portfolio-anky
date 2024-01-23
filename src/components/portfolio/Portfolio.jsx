import React, { useState } from 'react';
import "./portfolio.css";
import Menu from './Menu';

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setItems(updatedItems);
  }

  const showAllItems = () => {
    setItems(Menu);
  }

  return (
    <section className="work container section" id="portfolio">
      <h2 className='section__title'>Recent Works</h2>

      <div className="work__filters">
        <div className="span work__item" onClick={showAllItems}>Everything</div>
        <div className="span work__item" onClick={() => filterItem("Learning")}>Learning</div>
        <div className="span work__item" onClick={() => filterItem("Project")}>Project</div>
        <div className="span work__item" onClick={() => filterItem("Photography")}>Photography</div>

      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className='work__mask'></div>
              </div>

              <span className="work__category">
                {category}
              </span>
              <h3 className='work__title'>{title}</h3>
              <a href="" className="work__button">
                <i className="icon-link work"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
