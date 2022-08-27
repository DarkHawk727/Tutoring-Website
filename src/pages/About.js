import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import CountUp from 'react-countup';

import 'aos';
import "aos/dist/aos.css";
import Aos from 'aos';

import lottie from 'lottie-web';


const About = () => {
  // data-aos={""} 
  Aos.init({
    duration: 1300,
    once: true,
  });

  const mattProfile = useRef(null);

  useEffect(() => {
      lottie.loadAnimation({
          container: mattProfile.current, // the dom element that will contain the animation
          loop: true,
          autoplay: true,
          height: '75%',
          width: '75%',
          animationData: require("../images/zg2Yyzzq7U.json") // the path to the animation json
      });
      return () => lottie.destroy();
  } , []);

  return (
<div className='m-3'>
  <section class="section is-large">
    <h1 data-aos={"fade-down"} class="title">Making tutoring easier and more efficient. </h1>
    <h2 data-aos={"fade-down"} class="subtitle">
      Bringing a new way to tutor, and a new way to learn.
    </h2>
    <button data-aos={"fade-down"} class="button is-warning is-large is-primary" style={{"background-color": "#C6AC8F", "color": "#ffffff"}}>
    <Link to="/Contact" style={{"color": "#ffffff"}}>Get Started</Link>
    </button>
  </section>
  <section class="section is-medium">
    <div className='columns is-vcentered'>
      <div data-aos={"fade-right"} className='column'>
        <h1 className='title'>We're changing the whole game </h1>
        <p className="is-size-5">
            Matt has worked at the Toronto Tutoring Alliance, Oxford Learning, Academy for Math and English, Tutor Doctor, and MacBridge Academy. Through these experiences, he has learned what the best teaching styles are depending on the students' needs and learning styles. When teaching students he always tries to present concepts through relatable experiences and interests for memory association.
        </p>
      </div>
      <div data-aos={"fade-left"} className='column'>
        <figure class="image">
            <div data-aos ={"fade-left"} className="container" ref={mattProfile} />
        </figure>
      </div>
    </div>
  </section>
  <nav class="level">
    <div class="level-item has-text-centered">
      <div>
      <CountUp end={72} duration={3} /> +
        <p class="heading">Students</p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <CountUp end={3200} duration={4} /> +
        <p class="heading">Hours Tutored</p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
      <CountUp end={75} duration={3} /> +
        <p class="heading">Subjects Offered</p>
      </div>
    </div>
  </nav>
</div>
  )
}

export default About