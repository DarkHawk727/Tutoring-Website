import React from 'react'
import { Link } from 'react-router-dom'
import character_047 from '../images/character-0471x.svg'


const About = () => {
  return (
<div className='m-3'>
  <section class="section is-large">
    <h1 class="title">We're changing the whole game </h1>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac sem libero. In sed ultricies mi. Fusce tempus aliquet eros, eget feugiat erat ultricies sit amet. Quisque dapibus, nisi quis dictum mollis, erat nisi aliquam massa, ut elementum nisl nibh id purus. Suspendisse ut feugiat nisl. Nulla facilisi. Donec justo ipsum, tristique sed fringilla quis, mattis nec ex. Pellentesque rhoncus fringilla lectus sit amet volutpat. Donec at dignissim quam, nec porta risus.
          Maecenas eu faucibus urna. Donec ut felis quis elit eleifend facilisis et id lorem. In at nibh sit amet mi ullamcorper dapibus. Integer pharetra vitae nisi sit amet rhoncus. Duis dui risus, vestibulum id dapibus eget, consectetur in arcu. Sed luctus velit vitae orci scelerisque mattis in sit amet quam. Aenean vel ornare purus, eget congue metus. Nulla facilisi. Sed quis dui gravida, hendrerit nunc non, iaculis lectus. Proin feugiat commodo ipsum, id lobortis arcu sagittis ut. Praesent pulvinar vel sapien vel aliquet. Aliquam sit amet feugiat elit, non aliquam elit. Quisque pellentesque sodales elit, vitae congue risus efficitur sed. Vivamus volutpat, urna vitae iaculis sollicitudin, turpis nibh pretium enim, non sollicitudin nibh dui interdum nisl.
          Vivamus vel venenatis dolor, sed pulvinar tellus. Aenean libero arcu, vulputate at felis non, elementum varius magna. In facilisis elit eu erat porta interdum vitae eget sapien. Etiam consectetur risus quis massa facilisis, at commodo urna ullamcorper. Aenean quis augue ac lorem ullamcorper rutrum. Maecenas lorem erat, pellentesque in lobortis et, volutpat vel leo. Nunc vitae nulla ornare, dapibus augue ut, dictum elit. Pellentesque quis pretium dolor. Curabitur bibendum felis eget dolor fringilla feugiat. Pellentesque condimentum elit et dapibus aliquam. Aliquam dictum lorem a turpis semper sagittis quis a ante. Cras quis sodales lacus. Aliquam pellentesque aliquet maximus. Duis consequat porta libero nec euismod.
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
// https://dribbble.com/shots/17900086/attachments/13077643?mode=media
// Try and quantify the amount of students, hours taught, # of subjects, etc.