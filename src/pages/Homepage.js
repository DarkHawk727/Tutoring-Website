import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import 'aos';
import "aos/dist/aos.css";
import Aos from 'aos';

import waterloo from '../images/waterloo.jpg';
import mcmaster from '../images/mcmaster.png';
import toronto from '../images/toronto.png';
// import uottawa from '../images/uottawa.png';
// import ubc from '../images/ubc.png';

import lottie from 'lottie-web';

const Homepage = () => {
  Aos.init({
    duration: 1300,
    once: true,
  });

  const heroImage = useRef(null);
  const onlineLogo = useRef(null);
  const tutorMatching = useRef(null);
  const subjectOfferings = useRef(null);

  useEffect(() => {
      lottie.loadAnimation({
          container: heroImage.current, // the dom element that will contain the animation
          loop: true,
          autoplay: true,
          height: '75%',
          width: '75%',
          animationData: require("../images/FIS0OsL3Kl.json") // the path to the animation json
      });
      return () => lottie.destroy();
  } , []);

  useEffect(() => {
    lottie.loadAnimation({
        container: onlineLogo.current, // the dom element that will contain the animation
        loop: true,
        autoplay: true,
        height: '25%',
        width: '25%',
        animationData: require("../images/XlDxwc4TRN.json") // the path to the animation json
    });
    return () => lottie.destroy();
} , []);

useEffect(() => {
    lottie.loadAnimation({
        container: tutorMatching.current, // the dom element that will contain the animation
        loop: true,
        autoplay: true,
        height: '25%',
        width: '25%',
        animationData: require("../images/4wunda1IxN.json") // the path to the animation json
    });
    return () => lottie.destroy();
} , []);

  useEffect(() => {
    lottie.loadAnimation({
        container: subjectOfferings.current, // the dom element that will contain the animation
        loop: true,
        autoplay: true,
        height: '25%',
        width: '25%',
        animationData: require("../images/OQyrZtyUKK.json") // the path to the animation json
    });
    return () => lottie.destroy();
} , []);

  return (
<div>
    <section className="hero mt-5">
        <div className="hero-body $grey-lighter">
            <div className="columns is-vcentered">
                <div className="column is-half">
                    <h1 data-aos={"fade-up"} className="title">
                        Making tutoring easier and more efficient.
                    </h1>
                    <button data-aos={"fade-up"} class="button is-large" style={{"background-color": "#C6AC8F", "color": "#ffffff"}}>
                        <Link to="/Contact" style={{"color": "#ffffff"}}>Schedule a Session</Link>
                    </button>
                </div>
                <div className="column is-half">
                    <figure class="image">
                        <div data-aos ={"fade-left"} className="container" ref={heroImage} />
                    </figure>
                </div>
            </div>
        </div>
    </section>
    <section className="section is-medium">
        <h1 className="title">
            Why are we the best?
        </h1>
        <div class="columns">
            <div class="column" color="">
                <div data-aos={"fade-up-right"} class="card">
                    <div class="card-image">
                        <figure class="image">
                            <div className="container" ref={onlineLogo} />
                        </figure>
                    </div>
                    <div class="card-content">
                        <h5 class="title is-5">
                            Online and In-person Sessions
                        </h5>
                        <div class="content">
                            We offer both online and in-person sessions (Depending on location). Online sessions are done through Zoom, and in-person sessions can be coordinated at your convenience.
                        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div data-aos={"fade-up"} class="card">
                    <div class="card-image">
                        <figure class="image">
                            <div className="container" ref={tutorMatching} />
                        </figure>
                    </div>
                    <div class="card-content">
                        <h5 class="title is-5">
                            Expert Tutor Matching
                        </h5>
                        <div class="content">
                            We match you with the best tutor for your needs. We do this based on your budget, specific requirements, and availability.
                        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div data-aos={"fade-up-left"} class="card">
                    <div class="card-image">
                        <figure class="image">
                            <div className="container" ref={subjectOfferings} />
                        </figure>
                    </div>
                    <div class="card-content">
                        <h5 class="title is-5">
                            Subject Offerings
                        </h5>
                        <div class="content">
                            We offer a huge breadth of subjects from kindergarten to even highschool+ classes. Our most popular subjects are in Math, the Sciences, and English.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="section is-medium">
        <h1 className="title">
            What our students say
        </h1>
        <div class="columns">
            <div class="column">
                <div data-aos={"zoom-in"} class="card">
                    <div class="card-content">
                        <p class="title">
                            “Matt has been super helpful with my Advanced Functions class, I wouldn't have passed without him!”
                        </p>
                        <p class="subtitle">
                            Sarah B.
                        </p>
                    </div>
                </div>
            </div>
            <div class="column">
                <div data-aos={"zoom-in"} class="card">
                    <div class="card-content">
                        <p class="title">
                            “During the pandemic, Matt was able to help me one-on-one with my chemistry homework when my teacher couldn't.”
                        </p>
                        <p class="subtitle">
                            Jeff Y.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="section is-medium">
        <h3 className="subtitle">
            We have helped people qualify for the following institutions:
        </h3>
        <div class="columns">
            <div class="column">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-2by1">
                            <img src="https://www.artefactual.com/wp-content/uploads/2018/10/ubc-logo-2018-narrowsig-blue-rgb300.jpg" alt="UBC Logo" />
                        </figure>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-2by1">
                            <img src={ toronto} alt="UofT Logo" />
                        </figure>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-2by1">
                            <img src={ mcmaster } alt="McMaster Logo" />
                        </figure>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-2by1">
                            <img src={waterloo} alt="Waterloo Logo" />
                        </figure>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-is-2by1">
                            <img src="https://www.uottawa.ca/brand/sites/www.uottawa.ca.brand/files/4_2_0_horizontal_logo.png" alt="Placeholder image" />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
        <p className="has-text-centered">
            As well as many others!
        </p>
        <button class="button is-large" style={{"background-color": "#C6AC8F", "color": "#ffffff"}}>
            <Link to="/Contact" style={{"color": "#ffffff"}}>Schedule a Session</Link>
        </button>
    </section>
</div>
  )
}

export default Homepage

/*
$almond: #EAE0D5;
$black: #0A0908;
$gunmetal: #22333B;
$khaki: #22333B;
$umber: #5E503F;
*/

