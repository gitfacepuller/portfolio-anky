import React from 'react';
import './services.css';
import Image1 from '../../assets/service-1.svg';
import Image2 from '../../assets/service-2.svg';
import Image3 from '../../assets/service-3.svg';

const data = [
  {
    id: 1,
    image: Image1,
    title: 'Development',
    description: 'The strength of the web is its simplicity, and at the same time, its power. ',
  },
  {
    id: 2,
    image: Image2,
    title: 'CloudComputing',
    description: 'The cloud is for everyone. The cloud is a democracy.',
  },
  {
    id: 3,
    image: Image3,
    title: 'Photography',
    description: 'A photograph is a secret about a secret. The more it tells you, the less you know.',
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">ToolBox</h2>

      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
