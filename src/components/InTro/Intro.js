import React from 'react'
import './Intro.css';
import bg from '../../assets/anugyapic1.png'
import {Link} from 'react-scroll';
import btnImg from '../../assets/bag.png'
import Typewriter from "typewriter-effect";


const Intro = () => {
  return (
    <div>
      <section id="intro">
      <div className="introContent">
       <span className='hello'>Hello,</span>
       <span className="introText">I am <span className="introName">Anugya Shirvastava</span> <br/><Typewriter
       options={{
         loop: true,
       }}
       onInit={(typewriter) => {
         typewriter
           .typeString("Web Developer")
           .pauseFor(1000)
           .deleteAll()
           .typeString("Website Designer")
           .pauseFor(1000)
           .deleteAll()
           .start();
       }}
     /> </span>
       <p className="introPara">I am a skilled web developer and designer with experience in creating <br /> virtually appealing and user friendly websites</p>
       <Link><button className="btn"><img src={btnImg} alt="Remote" className='btnImg'/>Hire Me</button></Link>
      </div>
      <img src={bg} alt="Remote" className="bg" />
      </section>
    </div>
  )
}

export default Intro;
