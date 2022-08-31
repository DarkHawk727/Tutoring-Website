import React, { Component } from "react";
import "bulma-pricingtable/dist/css/bulma-pricingtable.min.css";
import { motion } from "framer-motion";

export class PaymentForm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    return (
      <div className="m-3 mt-6">
        <br />
        <br />
        <h1 className="title">Payment Information</h1>
        <div class="pricing-table is-comparative">
          <div class="pricing-plan is-features">
            <div class="plan-header">Features</div>
            <div class="plan-price">
              <span class="plan-price-amount">&nbsp;</span>
            </div>
            <div class="plan-items">
              <div class="plan-item">One-on-one</div>
              <div class="plan-item">Format</div>
              <div class="plan-item">Additional Assignments</div>
              <div class="plan-item">Emergency Sessions</div>
            </div>
            <div class="plan-footer"></div>
          </div>
          <div class="pricing-plan">
            <div class="plan-header">Starter</div>
            <div class="plan-price">
              <span class="plan-price-amount">
                <span class="plan-price-currency">$</span>20
              </span>
              /hr
            </div>
            <div class="plan-items">
              <div class="plan-item" data-feature="Storage">
                -
              </div>
              <div class="plan-item" data-feature="Domains">
                Online
              </div>
              <div class="plan-item" data-feature="Bandwidth">
                -
              </div>
              <div class="plan-item" data-feature="Email Boxes">
                -
              </div>
            </div>
            <div class="plan-footer">
              <motion.button
                class="button is-fullwidth"
                style={{ "background-color": "#C6AC8F", color: "#ffffff" }}
                whileHover={{ scale: 1.1 }}
                onClick={this.continue}
              >
                Choose
              </motion.button>
            </div>
          </div>

          <div class="pricing-plan">
            <div class="plan-header">Standard</div>
            <div class="plan-price">
              <span class="plan-price-amount">
                <span class="plan-price-currency">$</span>40
              </span>
              /hr
            </div>
            <div class="plan-items">
              <div class="plan-item" data-feature="Storage">
                2 hrs.
              </div>
              <div class="plan-item" data-feature="Domains">
                Online & In-person
              </div>
              <div class="plan-item" data-feature="Bandwidth">
                1 per session
              </div>
              <div class="plan-item" data-feature="Email Boxes">
                -
              </div>
            </div>
            <div class="plan-footer">
              <motion.button
                class="button is-fullwidth"
                style={{ "background-color": "#C6AC8F", color: "#ffffff" }}
                whileHover={{ scale: 1.1 }}
                onClick={this.continue}
              >
                Choose
              </motion.button>
            </div>
          </div>

          <div class="pricing-plan">
            <div class="plan-header">Intensive</div>
            <div class="plan-price">
              <span class="plan-price-amount">
                <span class="plan-price-currency">$</span>60
              </span>
              /hr
            </div>
            <div class="plan-items">
              <div class="plan-item" data-feature="Storage">
                10+ hrs.
              </div>
              <div class="plan-item" data-feature="Domains">
                50
              </div>
              <div class="plan-item" data-feature="Bandwidth">
                Available upon request
              </div>
              <div class="plan-item" data-feature="Email Boxes">
                5 hrs.
              </div>
            </div>
            <div class="plan-footer">
              <motion.button
                class="button is-fullwidth"
                style={{ "background-color": "#C6AC8F", color: "#ffffff" }}
                whileHover={{ scale: 1.1 }}
                onClick={this.continue}
              >
                Choose
              </motion.button>
            </div>
          </div>
        </div>
        <br />
        <motion.button
          className="button"
          onClick={this.back}
          whileHover={{ scale: 1.1 }}
        >
          Back
        </motion.button>
        <progress class="progress" value="4" max="4"></progress>
      </div>
    );
  }
}

export default PaymentForm;
