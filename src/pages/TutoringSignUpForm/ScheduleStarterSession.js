import React, { Component } from 'react'

export class ScheduleStarterSession extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      }
    
      back = e => {
        e.preventDefault();
        this.props.prevStep();
      }

  render() {
    return (
      <div>
        <br />
        <br />
        <h1 className='title'>Consultation Session Booking</h1>
        <p>Coming Soon</p>
        <button className="button is-warning" onClick={this.continue}>Next</button>
        <button className="button" onClick={this.back}>Back</button>
        <progress class="progress" value="3" max="4"></progress>
      </div>
    )
  }
}

export default ScheduleStarterSession