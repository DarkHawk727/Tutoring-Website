import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
            <p>We're so excited to help you achieve your academic goals! Let's just fill out some basic information.</p>
            <div class="field is-horizontal">
                <div class="field-label is-expanded">
                    <label class="label">Full Name</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <p class="control is-expanded has-icons-left">
                            <input class="input" type="text" placeholder="Name" />
                            <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
                            </span>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control is-expanded has-icons-left has-icons-right">
                            <input class="input" type="email" placeholder="Email"/>
                            <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="field is-horizontal">
                <div class="field-label"></div>
                <div class="field-body">
                    <div class="field is-expanded">
                        <div class="field has-addons">
                            <p class="control">
                                <a class="button is-static">
                                +44
                                </a>
                            </p>
                            <p class="control is-expanded">
                                <input class="input" type="tel" placeholder="Your phone number" />
                            </p>
                        </div>
                        <p class="help">Do not enter the first zero</p>
                    </div>
                </div>
            </div>
            <div class="field is-horizontal">
                <div class="field-label is-expanded">
                    <label class="label">Format</label>
                </div>
                <div class="field-body">
                    <div class="field is-narrow">
                        <div class="control">
                            <div class="select is-fullwidth">
                                <select>
                                    <option>Online</option>
                                    <option>In-person</option>
                                    <option>Unsure</option>
                                    <option>Both</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="field is-horizontal">
                <div class="field-label is-expanded">
                    <label class="label">Address (if applicable)</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <input class="input" type="text" placeholder="e.g. 123 Street Name, POSTAL CODE" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="field is-horizontal">
                <div class="field-label is-expanded">
                    <label class="label">Subject</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <input class="input" type="text" placeholder="e.g. High School Calculus" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="field is-horizontal">
                <div class="field-label is-expanded">
                    <label class="label">What are your goals for tutoring?</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <textarea class="textarea" placeholder="Explain how we can help you"></textarea>
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <h1 className='title'>Parent/Guardian Info</h1>
            <p>Now we'll fill out your parent's information.</p>
            <div class="field is-horizontal">
                <div class="field-label is-expanded">
                    <label class="label">Full Name</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <p class="control is-expanded has-icons-left">
                            <input class="input" type="text" placeholder="Name" />
                            <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
                            </span>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control is-expanded has-icons-left has-icons-right">
                            <input class="input" type="email" placeholder="Email"/>
                            <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="field is-horizontal">
                <div class="field-label"></div>
                <div class="field-body">
                    <div class="field is-expanded">
                        <div class="field has-addons">
                            <p class="control">
                                <a class="button is-static">
                                +44
                                </a>
                            </p>
                            <p class="control is-expanded">
                                <input class="input" type="tel" placeholder="Your phone number" />
                            </p>
                        </div>
                        <p class="help">Do not enter the first zero</p>
                    </div>
                </div>
            </div>
            <div class="field is-horizontal">
                <div class="field-label is-expanded">
                    <label class="label">What are your goals for your child's tutoring?</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <textarea class="textarea" placeholder="Explain how we can help you"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="field is-horizontal">
                <div class="field-label">
                </div>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <button className="button " style={{"background-color": "#C6AC8F", "color": "#ffffff"}} onClick={this.continue}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
            <progress class="progress" value="1" max="4"></progress>
        </div>
    )
  }
}

export default StudentInfo