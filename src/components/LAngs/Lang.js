import React, { useEffect } from 'react';
import './Lang.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const skills = [
  { name: 'JavaScript', percentage: 90 },
  { name: 'React.js', percentage: 85 },
  { name: 'CSS', percentage: 80 },
  { name: 'HTML', percentage: 95 },
  { name: 'Node.js, Express js', percentage: 75 },
  { name: 'SQL, MongoDb', percentage: 70 }
];

const Lang = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
    });
    const handleScroll = () => {
      const elements = document.querySelectorAll('.skill-bar-inner');
      elements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight) {
          el.style.width = `${el.getAttribute('data-percentage')}%`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="skills-container"  data-aos="fade-left">
      <h1 className="langTitle">My Skills</h1>
      <div className="skills">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <h3 className="skill-name">{skill.name}</h3>
            <div className="skill-bar">
              <div
                className="skill-bar-inner"
                data-percentage={skill.percentage}
                style={{ width: '0%' }}
              ></div>
            </div>
            <span className="skill-percentage">{skill.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lang;
