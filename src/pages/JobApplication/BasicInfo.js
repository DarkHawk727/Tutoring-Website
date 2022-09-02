import React, { Component } from "react";

import { motion } from "framer-motion";

export class BasicInfo extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="m-3 mt-6">
        <h1 className="title">Basic Info</h1>
        <p>
          We're so excited to have you join our team! First we'll start with
          some basic info.
        </p>
        <div className="field">
          <label className="label is-pulled-left">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Full Name"
              onChange={handleChange("name")}
              defaultValue={values.name}
            />
          </div>
        </div>
        <br />
        <div className="field">
          <label className="label is-pulled-left">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="Email"
              onChange={handleChange("email")}
              defaultValue={values.email}
            />
          </div>
        </div>
        <br />
        <div class="field has-addons">
          <p class="control">
            <a class="button is-static" href="tel">
              +1
            </a>
          </p>
          <p class="control is-expanded">
            <input
              class="input"
              type="tel"
              placeholder="Your phone number"
              onChange={handleChange("phoneNumber")}
              defaultValue={values.phoneNumber}
            />
          </p>
        </div>
        <div className="field">
          <label className="label is-pulled-left">Address</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="123 Street Name Dr."
              onChange={handleChange("address")}
              defaultValue={values.address}
            />
          </div>
        </div>
        <motion.button
          className="button"
          style={{ "background-color": "#C6AC8F", color: "#ffffff" }}
          whileHover={{ scale: 1.1 }}
          onClick={this.continue}
        >
          Next
        </motion.button>
        <br />
        <br />
        <progress class="progress" value="1" max="2"></progress>
      </div>
    );
  }
}

export default BasicInfo;
