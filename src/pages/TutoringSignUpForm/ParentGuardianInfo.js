import React, { Component } from 'react'

export class ParentGuardianInfo extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }
  render() {
    const {values, handleChange } = this.props;
    return (
      <div className='m-3'>
        <br />
        <br />
        <h1 className='title'>Parent/Guardian Info</h1>
        <p>Now, let's fill out some information, this is so we can remind your child. If you feel that this is unessecery, please skip this page.</p>
        <div className="field">
          <label className="label">Parent/Guardian Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Full Name" onChange={handleChange('studentName')} defaultValue={values.studentName}/>
          </div>
        </div>
        <br />
        <div className="field">
          <label className="label">Parent/Guardian Email</label>
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
        <div className="field">
          <label className="label">Parent/Guardian Address</label>
          <div className="control">
            <input className="input" type="text" placeholder="123 Street Name Dr." onChange={handleChange('studentAddress')} defaultValue={values.studentAddress}/>
          </div>
        </div>        
        <button className="button is-warning" onClick={this.continue}>Next</button>
        <button className="button" onClick={this.back}>Back</button>
        <progress class="progress" value="2" max="4"></progress>
      </div>
      
    )
  }
}

export default ParentGuardianInfo