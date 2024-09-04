import React from 'react';
import './Experience.css';
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
    });
  }, []);
  return (
    <div className="experience-container" data-aos="zoom-in-up">
      <h1 className="exTitle">My Experience</h1>
      <div className="job">
        <h2>Current Job</h2>
        <div className="job-details">
          <h3>Altima Solutions, Bengaluru</h3>
          <p>Currently working as a Frontend Developer and Designer at Altima Solutions, Bengaluru.</p>
        </div>
      </div>
      <div className="job">
        <h2>Internship</h2>
        <div className="job-details">
          <h3>Phazor Orb Private Limited, Bengaluru</h3>
          <p>Completed an internship as a Frontend Developer at Phazor Orb Private Limited, Bengaluru.</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
