import React from 'react'
import waterloo from '../images/waterloo.jpg';
import mcmaster from '../images/mcmaster.png';
import toronto from '../images/toronto.png';
import computer_work from '../images/computer-work-41x.svg';
import group_communication from '../images/group-communication96x961x-2.svg';
import laptop from '../images/laptop-296x961x.svg';
import calculator from '../images/calculator96x961x-2.svg';
// import uottawa from '../images/uottawa.png';
// import ubc from '../images/ubc.png';




const Homepage = () => {
  return (
    <div>
    <section className="hero is-large is-primary">
        <div className="hero-body">
        <div className="columns">
            <div className="column is-half">
            <h1 className="title">
                Making tutoring easier and more efficient.
            </h1>
            </div>
            <div className="column is-half">
            <figure class="image is-2by1">
                <img src={computer_work} />
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
            <div class="card">
            <div class="card-image">
                <figure class="image is-2by1">
                <img src={laptop} alt="Placeholder image" />
                </figure>
            </div>
            <div class="card-content">
                <h5 class="title is-5">
                Online and In-person Sessions
                </h5>
                <div class="content">
                We offer both online and in-person sessions. Online sessions are done through Zoom, and in-person sessions can be coordinated at your convenience.
                </div>
            </div>
            </div>
        </div>
        <div class="column">
            <div class="card">
            <div class="card-image">
                <figure class="image is-2by1">
                <img src={ group_communication} alt="Placeholder image" />
                </figure>
            </div>
            <div class="card-content">
                <h5 class="title is-5">
                Expert Tutor Matching
                </h5>
                <div class="content">
                We match you with the best tutor in the area. We do this by looking at your skills and interests, and then we match you with the best tutor in the area.  
                </div>
            </div>
            </div>
        </div>
        <div class="column">
            <div class="card">
            <div class="card-image">
                <figure class="image is-2by1">
                <img src={ calculator } alt="Placeholder image" />
                </figure>
            </div>
            <div class="card-content">
                <h5 class="title is-5">
                Subject Offerings
                </h5>
                <div class="content">
                We offer a huge breadth of subjects from kindergarten to even university classes. Our most popular subjects are in Math, the Sciences, and English.
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
            <div class="card">
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
            <div class="card">
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
        <h3 className="subtitle">
        We have helped people from the following institutions:
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
    </section>
    </div>
  )
}

export default Homepage
