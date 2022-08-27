import 'aos';
import "aos/dist/aos.css";
import Aos from 'aos';

import React, { Component } from 'react'
export class JobSuccess extends Component {
  render() {    
    Aos.init({
        duration: 1300,
        once: true,
        });
    return (
        <div>
        <section class="section is-large">
            <h1 data-aos={"fade-down"} class="title">Job Application Submitted</h1>
            <h2 data-aos={"fade-down"} class="subtitle">
                Thank you for applying to our job opportunity. We will be in touch with you soon.
            </h2>
            <div className="column">
            </div>

        </section>

    </div>
    )
  }
}

export default JobSuccess