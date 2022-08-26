import React, { Component} from 'react'

import 'aos';
import "aos/dist/aos.css";
import Aos from 'aos';

export class SignUpSuccess extends Component {
  render() {
    Aos.init({
        duration: 1300,
        once: true,
        });

    return(
        <div>
            <section class="section is-large">
                <h1 data-aos={"fade-down"} class="title">Tutoring Consultation Session Booked!</h1>
                <h2 data-aos={"fade-down"} class="subtitle">
                    Thank you for choosing Matt Starai Tutoring. We will be in touch with you soon.
                </h2>
            </section>
        </div>
    )
  }
}

export default SignUpSuccess