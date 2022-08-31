import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import "aos";
import "aos/dist/aos.css";
import Aos from "aos";

import { motion } from "framer-motion";

import uwaterloo from "../images/universities/uwaterloo.jpg";
import uoft from "../images/universities/uoft.png";
import ubc from "../images/universities/ubc.jpg";
import uottawa from "../images/universities/uottawa.png";
import mcgill from "../images/universities/mcgill.png";
import mcmaster from "../images/universities/mcmaster.png";
import queens from "../images/universities/queens.jpg";
import tmu from "../images/universities/tmu.png";
import uofa from "../images/universities/uofa.jpg";
import dalhousie from "../images/universities/dalhousie.jpg";

import lottie from "lottie-web";

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
      height: "75%",
      width: "75%",
      animationData: require("../images/FIS0OsL3Kl.json"), // the path to the animation json
    });
    return () => lottie.destroy();
  }, []);

  useEffect(() => {
    lottie.loadAnimation({
      container: onlineLogo.current, // the dom element that will contain the animation
      loop: true,
      autoplay: true,
      height: "25%",
      width: "25%",
      animationData: require("../images/XlDxwc4TRN.json"), // the path to the animation json
    });
    return () => lottie.destroy();
  }, []);

  useEffect(() => {
    lottie.loadAnimation({
      container: tutorMatching.current, // the dom element that will contain the animation
      loop: true,
      autoplay: true,
      height: "25%",
      width: "25%",
      animationData: require("../images/4wunda1IxN.json"), // the path to the animation json
    });
    return () => lottie.destroy();
  }, []);

  useEffect(() => {
    lottie.loadAnimation({
      container: subjectOfferings.current, // the dom element that will contain the animation
      loop: true,
      autoplay: true,
      height: "25%",
      width: "25%",
      animationData: require("../images/OQyrZtyUKK.json"), // the path to the animation json
    });
    return () => lottie.destroy();
  }, []);

  return (
    <div>
      <section className="hero mt-5">
        <div className="hero-body $grey-lighter">
          <div className="columns is-vcentered">
            <div className="column is-half">
              <h1 data-aos={"fade-up"} className="title">
                New ways to tutor and new ways to learn.
              </h1>
              <motion.button
                whileHover={{ scale: 1.1 }}
                class="button is-large"
                data-aos={"fade-up"}
                style={{ "background-color": "#C6AC8F", color: "#ffffff" }}
              >
                <Link to="/Contact" style={{ color: "#ffffff" }}>
                  Schedule a Session
                </Link>
              </motion.button>
            </div>
            <div className="column is-half">
              <figure class="image">
                <div
                  data-aos={"fade-left"}
                  className="container"
                  ref={heroImage}
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section className="section is-medium">
        <h1 className="title">Why are we the best?</h1>
        <div class="columns">
          <div class="column" color="">
            <div data-aos={"fade-up-right"} class="card">
              <div class="card-image">
                <figure class="image">
                  <div className="container" ref={onlineLogo} />
                </figure>
              </div>
              <div class="card-content">
                <h5 class="title is-5">Online and In-person Sessions</h5>
                <div class="content">
                  We offer both online and in-person sessions. Online sessions
                  are done through Zoom, and in-person sessions can be
                  coordinated at your convenience.
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
                <h5 class="title is-5">Expert Tutor Matching</h5>
                <div class="content">
                  We match you with the best tutor for your needs. We do this
                  based on your budget, specific requirements, and availability.
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
                <h5 class="title is-5">Subject Offerings</h5>
                <div class="content">
                  We offer a huge breadth of subjects from kindergarten to even
                  highschool+ classes. Our most popular subjects are in Math,
                  the Sciences, and English. Click <Link to="/FAQ">here</Link>{" "}
                  for a more comphrensive list.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section is-medium">
        <h1 className="title">What our students say</h1>
        <div class="columns">
          <div class="column">
            <div data-aos={"fade-up"} class="card">
              <div class="card-content">
                <p class="title">
                  My sons have had the privilege of having Matthew’s tutoring
                  expertise over the past few years. He was incremental in
                  putting them on a focussed academic path. Their greatest
                  successes have been in the secondary courses that Matthew
                  tutored them in. Having had previous experiences with other
                  tutors, it was clear that Matthew was able to recognize the
                  different learning styles of my sons and was able to engage
                  them in ways where others had not been successful. Matthew was
                  always calm and concise in his lesson delivery and made my
                  sons stay on task in positive ways. He was always on time,
                  reliable and flexible. In the end, his assistance in their
                  learning has left them with confidence in their abilities and
                  a hope for future learning successes. I would highly recommend
                  Matthew and have to other teaching colleagues. We are so
                  grateful to have had Matthew’s expertise and assistance
                  through some very difficult learning times. Thank you,
                  Matthew!
                </p>
                <p class="subtitle">Nancy M.</p>
              </div>
            </div>
          </div>
          <div class="column">
            <div data-aos={"fade-up"} class="card">
              <div class="card-content">
                <p class="title">
                  Matt is a good person. He is always patient and understanding.
                  He can present materials in a clear, simple way to ensure you
                  understand what you're learning, which makes him a great
                  teacher. Having worked with Matt as a tutor for a number of
                  years, I would highly recommend him.
                </p>
                <p class="subtitle">Haider A.</p>
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
            <motion.div class="card" whileHover={{ y: -7 }}>
              <div class="card-image">
                <figure class="image is-2by1">
                  <img src={ubc} alt="University of British Columbia Logo" />
                </figure>
              </div>
            </motion.div>
          </div>
          <div class="column">
            <motion.div class="card" whileHover={{ y: -7 }}>
              <div class="card-image">
                <figure class="image is-2by1">
                  <img src={uoft} alt="University of Toronto Logo" />
                </figure>
              </div>
            </motion.div>
          </div>
          <div class="column">
            <motion.div class="card" whileHover={{ y: -7 }}>
              <div class="card-image">
                <figure class="image is-2by1">
                  <img src={mcmaster} alt="McMaster University Logo" />
                </figure>
              </div>
            </motion.div>
          </div>
          <div class="column">
            <motion.div class="card" whileHover={{ y: -7 }}>
              <div class="card-image">
                <figure class="image is-2by1">
                  <img src={uwaterloo} alt="Univeristy of Waterloo Logo" />
                </figure>
              </div>
            </motion.div>
          </div>
          <div class="column">
            <motion.div class="card" whileHover={{ y: -7 }}>
              <div class="card-image">
                <figure class="image is-is-2by1">
                  <img src={uottawa} alt="University of Ottawa Logo" />
                </figure>
              </div>
            </motion.div>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <motion.div class="card" whileHover={{ y: -7 }}>
              <div class="card-image">
                <figure class="image is-2by1">
                  <img src={dalhousie} alt="Dalhousie Logo" />
                </figure>
              </div>
            </motion.div>
          </div>
          <div class="column">
            <motion.div class="card" whileHover={{ y: -7 }}>
              <div class="card-image">
                <figure class="image is-2by1">
                  <img src={queens} alt="Queen's University Logo" />
                </figure>
              </div>
            </motion.div>
          </div>
          <div class="column">
            <motion.div class="card" whileHover={{ y: -7 }}>
              <div class="card-image">
                <figure class="image is-2by1">
                  <img src={uofa} alt="University of Alberta Logo" />
                </figure>
              </div>
            </motion.div>
          </div>
          <div class="column">
            <motion.div class="card" whileHover={{ y: -7 }}>
              <div class="card-image">
                <figure class="image is-2by1">
                  <img src={mcgill} alt="McGill Logo" />
                </figure>
              </div>
            </motion.div>
          </div>
          <div class="column">
            <motion.div class="card" whileHover={{ y: -7 }}>
              <div class="card-image">
                <figure class="image is-is-2by1">
                  <img src={tmu} alt="Toronto Metropolitan University Logo" />
                </figure>
              </div>
            </motion.div>
          </div>
        </div>
        <p className="has-text-centered">As well as many others!</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          class="button is-large"
          style={{ "background-color": "#C6AC8F", color: "#ffffff" }}
        >
          <Link to="/Contact" style={{ color: "#ffffff" }}>
            Schedule a Session
          </Link>
        </motion.button>
      </section>
    </div>
  );
};

export default Homepage;

/*
$almond: #EAE0D5;
$black: #0A0908;
$gunmetal: #22333B;
$khaki: #22333B;
$umber: #5E503F;
*/
