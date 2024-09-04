import React from 'react';
import './Works.css';
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pr1 from '../../assets/Portfolio-1.png';
import pr2 from '../../assets/Portfolio-2.png';
import pr3 from '../../assets/Portfolio-3.png';
import pr4 from '../../assets/Portfolio-4.png';
import pr5 from '../../assets/Portfolio-5.png';
import pr6 from '../../assets/Portfolio-6.png';

const projects = [
  {
    name: 'Sorting Visualizer',
    image: pr1,
    link: 'https://anugyashrivastava.github.io/Sorting-Visualizer/'
  },
  {
    name: 'Covid-19 Live Tracker',
    image: pr2,
    link: 'https://anugyashrivastava.github.io/Covid-19-Live-Tracker/'
  },
  {
    name: 'Recipe Blog',
    image: pr3,
    link: 'https://link_to_project.com'
  },
  {
    name: 'Movie Search App',
    image: pr4,
    link: 'https://link_to_project.com'
  },
  {
    name: 'Todo Task Manager',
    image: pr5,
    link: 'https://link_to_project.com'
  },
  {
    name: 'Escape Room',
    image: pr6,
    link: 'https://link_to_project.com'
  }
];

const Works= () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
    });
  }, []);
  return (
    <div className="portfolio-container" data-aos="flip-left">
      <span className="myTitle">My Portfolio</span>
      <p className="description">
        I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.
      </p>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.name} className="project-image" />
            <h3 className="project-name">{project.name}</h3>
            <a href={project.link} className="project-link">Show Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;
