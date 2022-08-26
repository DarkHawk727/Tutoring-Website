import React, { Component } from 'react'

export class StudentInfo extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    const {values, handleChange } = this.props;
    return (
      <div className='m-3'>
        <br />
        <br />
        <h1 className='title'>Student Info</h1>
        <p>We're so excited to help you achieve your academic goals! Let's just fill out some basic informaiton.</p>
        <div className="field">
          <label className="label">Student Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Full Name" onChange={handleChange('studentName')} defaultValue={values.studentName}/>
          </div>
        </div>
        <br />
        <div className="field">
          <label className="label">Student Email</label>
          <div className="control">
            <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com" onChange={handleChange('studentEmail')} defaultValue={values.studentEmail}/>
          </div>
        </div>
        <br />
        <div class="field has-addons">
        <p class="control">
          <a class="button is-static">
            +1
          </a>
        </p>
        <p class="control is-expanded">
          <input class="input" type="tel" placeholder="Your phone number" onChange={handleChange('studentPhoneNumber')} defaultValue={values.studentPhoneNumber}/>
        </p>
      </div>
      <p>If you are interested in in-person tutoring, please share the address of your house or a local coffee shop or library.</p>
        <div className="field">
          <label className="label">Student Address</label>
          <div className="control">
            <input className="input" type="text" placeholder="123 Street Name Dr." onChange={handleChange('studentAddress')} defaultValue={values.studentAddress}/>
          </div>
        </div>        
        <button className="button is-warning" onClick={this.continue}>Next</button>
        <progress class="progress" value="1" max="4"></progress>
      </div>
      
    )
  }
}

export default StudentInfo