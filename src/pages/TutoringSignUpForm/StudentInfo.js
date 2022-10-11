import React, { Component } from "react";

import { motion } from "framer-motion";

import { getFunctions, httpsCallable } from "firebase/functions";

export class StudentInfo extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
    const message = {
        studentName: this.props.values.studentName,
        studentEmail: this.props.values.studentEmail,
        gradeLevel: this.props.values.gradeLevel,
        studentPhoneNumber: this.props.values.studentPhoneNumber,
        studentAddress: this.props.values.studentAddress,
        format: this.props.values.format,
        referral: this.props.values.referral,
        desiredSubjects: this.props.values.desiredSubjects,
        studentReferral: this.props.values.studentReferral,
        heard: this.props.values.heard,
        additionalInfo: this.props.values.additionalInfo,
        parentName: this.props.values.parentName,
        parentEmail: this.props.values.parentEmail,
        parentPhoneNumber: this.props.values.parentPhoneNumber,
        parentAdditionalInfo: this.props.values.parentAdditionalInfo,
    }
    const messageHTML = `
        <html>
        <h1>Student Info</h1>
        <strong>Student Name:</strong> ${message.studentName}<br />
        <strong>Student Email:</strong> ${message.studentEmail}<br />
        <strong>Grade Level:</strong> ${message.gradeLevel}<br />
        <strong>Student Phone Number:</strong> ${message.studentPhoneNumber}<br />
        <strong>Format:</strong> ${message.format}<br />
        <strong>Address:</strong> ${message.studentAddress}<br />
        <strong>Preferred Subjects:</strong> ${message.desiredSubjects}<br />
        <strong>Referral:</strong> ${message.studentReferral}<br />
        <strong>How they heard about us:</strong> ${message.heard}<br />
        <strong>What are your goals for tutoring?</strong> ${message.additionalInfo}<br />
        <h1>Parent Info</h1>
        <strong>Parent Name:</strong> ${message.parentName}<br />
        <strong>Parent Email:</strong> ${message.parentEmail}<br />
        <strong>Parent Phone Number:</strong> ${message.parentPhoneNumber}<br />
        <strong>Parent Additional Info:</strong> ${message.parentAdditionalInfo}<br />
        </html>
    `;
    const functions = getFunctions();
    const sendEmail = httpsCallable(functions, 'sendMail');
    sendEmail({ emailAddress: message.parentEmail, message: messageHTML, subject: "New Tutoring Sign up" })
      .then((result) => {
        // Read result of the Cloud Function.
        /** @type {any} */
        const data = result.data;
        const sanitizedMessage = data.text;
      });
    


  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="m-3">
        <br />
        <br />
        <h1 className="title">Student Info</h1>
        <p>
          We're so excited to help you achieve your academic goals! Let's just
          fill out some basic information.
        </p>
        <div className="field is-horizontal">
          <div className="field-label is-expanded">
            <label className="label">Basic Information</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control is-expanded">
                <input className="input" type="text" placeholder="Name" onChange={handleChange("studentName")} defaultValue={values.studentName}/>
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control is-expanded">
                <input className="input" type="email" placeholder="Email"  onChange={handleChange("studentEmail")} defaultValue={values.studentEmail}/>
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control is-expanded">
                <input className="input" type="email" placeholder="Grade"  onChange={handleChange("gradeLevel")} defaultValue={values.gradeLevel}/>
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label"><label className="label">Phone Number</label></div>
          <div className="field-body">
            <div className="field is-expanded">
              <div className="field has-addons">
                <p className="control is-expanded">
                  <input
                    className="input"
                    type="tel"
                    placeholder="Your phone number"
                    onChange={handleChange("studentPhoneNumber")} defaultValue={values.studentPhoneNumber}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-expanded">
            <label className="label">Format</label>
          </div>
          <div className="field-body">
            <div className="field is-narrow">
              <div className="control">
                <div className="select is-fullwidth" onChange={handleChange("format")} defaultValue={values.format}>
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
        <div className="field is-horizontal">
          <div className="field-label is-expanded">
            <label className="label">Address (if applicable)</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="e.g. 123 Street Name, POSTAL CODE"
                  onChange={handleChange("studentAddress")}
                  defaultValue={values.studentAddress}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-expanded">
            <label className="label">Subject</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="e.g. High School Calculus"
                  onChange={handleChange("desiredSubjects")}
                  defaultValue={values.desiredSubjects}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-expanded">
            <label className="label">Referral (if applicable)</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Please provide the name of the person who referred you"
                  onChange={handleChange("studentReferral")}
                  defaultValue={values.studentReferral}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label">
            <label className="label">How did you hear about us?</label>
            </div>
          <div className="field-body">
            <div className="field is-expanded">
              <div className="field has-addons">
                <p className="control is-expanded">
                  <input
                    className="input"
                    type="tel"
                    placeholder="I heard about you through..."
                    onChange={handleChange("heard")}
                    defaultValue={values.heard}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-expanded">
            <label className="label">What are your goals for tutoring?</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Explain how we can help you"
                  onChange={handleChange("additionalInfo")}
                  defaultValue={values.additionalInfo}
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <br />
        <h1 className="title">Parent/Guardian Info</h1>
        <p>Now we'll fill out your parent's information.</p>
        <div className="field is-horizontal">
          <div className="field-label is-expanded">
            <label className="label">Full Name</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control is-expanded has-icons-left">
                <input className="input" type="text" placeholder="Name" onChange={handleChange("parentName")} defaultValue={values.parentName}/>
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control is-expanded has-icons-left has-icons-right">
                <input className="input" type="email" placeholder="Email" onChange={handleChange("parentEmail")} defaultValue={values.parentEmail}/>
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label"></div>
          <div className="field-body">
            <div className="field is-expanded">
              <div className="field has-addons">
                <p className="control">
                  <a className="button is-static">+44</a>
                </p>
                <p className="control is-expanded">
                  <input
                    className="input"
                    type="tel"
                    placeholder="Your phone number"
                    onChange={handleChange("parentPhoneNumber")} defaultValue={values.parentPhoneNumber}
                  />
                </p>
              </div>
              <p className="help">Do not enter the first zero</p>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-expanded">
            <label className="label">
              What are your goals for your child's tutoring?
            </label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Explain how we can help you"
                    onChange={handleChange("parentAdditionalInfo")} defaultValue={values.parentAdditionalInfo}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <br />
        <motion.button
          className="button"
          style={{ "background-color": "#C6AC8F", color: "#ffffff" }}
          whileHover={{ scale: 1.1 }}
          onClick={this.continue}
        >
          Submit
        </motion.button>
        <br />
        <br />
        <progress className="progress" value="1" max="2"></progress>
      </div>
    );
  }
}

export default StudentInfo;
