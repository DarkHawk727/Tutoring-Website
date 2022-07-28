import React from 'react'
import { Link } from 'react-router-dom'
import character_047 from '../images/character-0471x.svg'


const About = () => {
  return (
<div className='m-3'>
  <section class="section is-large">
    <h1 class="title">Making tutoring easier and more efficient. </h1>
    <h2 class="subtitle">
      Brining a new way to tutor, and a new way to learn.
    </h2>
    <button class="button is-large is-responsive is-primary">
    <Link to="/Contact">Get Started</Link>
    </button>
  </section>
  <section class="section is-medium">
    <div className='columns is-vcentered'>
      <div className='column'>
        <h1 className='title'>We're changing the whole game </h1>
        <p>
            Matt has worked at the Toronto Tutoring Alliance, Oxford Learning, Academy for Math and English, Tutor Doctor, and MacBridge Academy. Through these experiences, he has learned what the best teaching styles are depending on the students' needs and learning styles. When teaching students he always tries to present concepts through relatable experiences and interests for memory association.
        </p>
      </div>
      <div className='column'>
        <figure class="image">
          <img src={character_047}></img>
        </figure>
      </div>
    </div>
  </section>
  <nav class="level">
    <div class="level-item has-text-centered">
      <div>
        <p class="title">72</p>
        <p class="heading">Students</p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="title">1389</p>
        <p class="heading">Hours Tutored</p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="title">150+</p>
        <p class="heading">Subjects Offered</p>
      </div>
    </div>
  </nav>
</div>
  )
}

export default About