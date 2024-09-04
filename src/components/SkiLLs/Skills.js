import React from 'react'
import './Skills.css'
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Reactimg from '../../assets/react.jpg'
import Frontend from '../../assets/frontend.jpg'
import Uiux from '../../assets/uiux.jpg'


const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
    });
  }, []);
  return (
    <section id="skills" data-aos="fade-up">
    <span className="skillTitle">What I do</span>
    <span className="skillDesc">I am a skillled and passionate web developer with experience in creating virtually appealing and user-friendly websites. I have a strong understanding of designining and developing. I am proficient in HTML, CSS, Javascript, React, Nodejs, Mongodb, Expressjs and sql as well as designing softwares such as Adobe Photoshop, Figma and illustartor.</span>
    <div className="skillBars">
    <div className="skillBar">
      <img src={Reactimg} alt="Remote" className="skillBarImg" />
      <div className="skillBarText">
      <h2>Web Development</h2>
      <p>I am a good web developer. I can make dynamic websites which are virtually appealing and user-friendly.</p>
      </div>
     </div>

    <div className="skillBar">
      <img src={Frontend} alt="Remote" className="skillBarImg" />
      <div className="skillBarText">
      <h2>Website Design</h2>
      <p>I can make responsive web layouts and make interactive web pages. Custom Development, Content Management Systems(CMS)</p>
      </div>
     </div>
    <div className="skillBar">
      <img src={Uiux} alt="Remote" className="skillBarImg" />
      <div className="skillBarText">
      <h2>UI/UX Designing</h2>
      <p>I can make attractive and user-friendly UI/UX designs. User Interface Design, User Experience Design, Prototyping and Wireframing.</p>
      </div>
     </div>
    </div>
    </section>
  )
}

export default Skills
