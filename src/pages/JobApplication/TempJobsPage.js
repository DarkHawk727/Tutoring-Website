import React, { Component} from 'react'

import 'aos';
import "aos/dist/aos.css";
import Aos from 'aos';

export class TempJobsPage extends Component {
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }
    
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    } 

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }
  render() {
    Aos.init({
        duration: 1300,
        once: true,
        });

    return(
        <div>
            <section class="section is-large">
                <h1 data-aos={"fade-down"} class="title">Job Application</h1>
                <h2 data-aos={"fade-down"} class="subtitle">
                    Thank you for choosing Matt Starai Tutoring. Please contact us at <a href='mailto:matt_starai@hotmail.com'>matt_starai@hotmail.com</a> for more information.
                </h2>
            </section>
        </div>
    )
  }
}

export default TempJobsPage