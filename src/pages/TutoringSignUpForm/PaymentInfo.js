import React, { Component } from 'react'

export class PaymentForm extends Component {
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
        <h1 className='title'>Payment Informmation</h1>
        <p>Coming Soon</p>
        <button className="button is-warning" onClick={this.continue}>Submit</button>
        <button className="button" onClick={this.back}>Back</button>
        <progress class="progress" value="4" max="4"></progress>
      </div>
    )
  }
}

export default PaymentForm