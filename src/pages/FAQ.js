import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import add from "../images/add-424x241x-2.svg";
import bulmaCollapsible from "@creativebulma/bulma-collapsible";

const FAQ = () => {
  // Find DOM node from ID
  // Find DOM node from ID
  const bulmaCollapsibleElement = document.getElementById("to-collapse");
  if (bulmaCollapsibleElement) {
    // Instanciate bulmaCollapsible component on the node
    new bulmaCollapsible(bulmaCollapsibleElement);

    // Call method directly on bulmaCollapsible instance registered on the node
    bulmaCollapsibleElement.bulmaCollapsible("collapsed");
  }

  return (
    <div className="m-3 mt-6">
      <br />
      <br />
      <h1 className="title">Frequently Asked Questions</h1>
      <p>Have Questions? We're here to help.</p>
      <br />
      <div id="accordion_first">
        <article class="message">
          <div class="message-header">
            <p>
              How do I get started?{"  "}
            </p>
          </div>
          <div
            id="collapsible-message-accordion-3"
            class="message-body is-collapsible"
            data-parent="accordion_first"
          >
            <div class="message-body-content">
              You can contact us using the site. Clicking the Schedule a Session
              button will lead you to a form where you fill in basic details
              about you/your child's needs as well as contact information. We
              will then email you for further correspondance. We will be happy
              to set up a time to meet and discuss your needs.
            </div>
          </div>
        </article>
        <article class="message">
          <div class="message-header">
            <p>
              What subjects do we tutor?{" "}
            </p>
          </div>
          <div
            id="collapsible-message-accordion-1"
            class="message-body is-collapsible"
            data-parent="accordion_first"
          >
            <div class="message-body-content">
              We offer tutoring in the following subjects from the elementary to
              college/university level:
              <ul>
                <li>Mathematics (Grades 1-12+)</li>
                <li>English (Grades 1-12+)</li>
                <li>Chemistry, Physics, and Biology (Grades 11-12+)</li>
                <li>Science (Grades 1-10)</li>
                <li>Accounting (Grades 11-12+)</li>
                <li>Economics (Grades 11-12+)</li>
                <li>Computer Science & Engineering (Grades 11-12+)</li>
              </ul>
              Please email us with any questions about our subject offerings.
            </div>
          </div>
        </article>
        <article class="message">
          <div class="message-header">
            <p>
              What is the cost of tutoring?{" "}
            </p>
          </div>
          <div
            id="collapsible-message-accordion-2"
            class="message-body is-collapsible"
            data-parent="accordion_first"
          >
            <div class="message-body-content">
              The price of tutoring varies depending on the subject, number of
              hours, format, and tutor. If you have any questions or if your
              subject is not listed please email us.{" "}
            </div>
          </div>
        </article>
        <article class="message">
          <div class="message-header">
            <p>
              What site do you use for tutoring?{" "}
            </p>
          </div>
          <div
            id="collapsible-message-accordion-3"
            class="message-body is-collapsible"
            data-parent="accordion_first"
          >
            <div class="message-body-content">
              We use Zoom for our online lessons. We also make use of{" "}
              <a href="https://about.bramble.io/">bramble.io</a> so that the
              student and tutor can write on the same page, resources
              permitting.
            </div>
          </div>
        </article>
        <article class="message">
          <div class="message-header">
            <p>
              Can you tutor in my home?{" "}
            </p>
          </div>
          <div
            id="collapsible-message-accordion-3"
            class="message-body is-collapsible"
            data-parent="accordion_first"
          >
            <div class="message-body-content">
              Yes, we can. Please contact us for more information.
              Alternatively, we can tutor at a local library or coffee shop.
            </div>
          </div>
        </article>
        <article class="message">
          <div class="message-header">
            <p>
              How do I pay for tutoring?{" "}
            </p>
          </div>
          <div
            id="collapsible-message-accordion-3"
            class="message-body is-collapsible"
            data-parent="accordion_first"
          >
            <div class="message-body-content">
              We currently accept eTransfer or PayPal.
            </div>
          </div>
        </article>
        <article class="message">
          <div class="message-header">
            <p>
              How do I cancel tutoring?{" "}
            </p>
          </div>
          <div
            id="collapsible-message-accordion-3"
            class="message-body is-collapsible"
            data-parent="accordion_first"
          >
            <div class="message-body-content">
              You can cancel your tutoring at any time. We will apply a fee if
              the tutoring is cancelled less than 24 hours before the session.
              Please contact us at <a href="mailto">matt_starai@hotmail.com</a>.
            </div>
          </div>
        </article>
        <article class="message">
          <div class="message-header">
            <p>
              Can you tutor in-person?{" "}
            </p>
          </div>
          <div
            id="collapsible-message-accordion-3"
            class="message-body is-collapsible"
            data-parent="accordion_first"
          >
            <div class="message-body-content">
              Yes, we can tutor at a local library or coffee shop. Please
              contact us for more information.
            </div>
          </div>
        </article>
      </div>
      <br />
      <p>
        Have another question? Get in touch at{" "}
        <a href="mailto">matt_starai@hotmail</a>.
      </p>
      <br />
      <motion.button
        whileHover={{ scale: 1.1 }}
        class="button is-large"
        style={{ "background-color": "#C6AC8F", color: "#ffffff" }}
      >
        <Link to="/Contact" style={{ color: "#ffffff" }}>
          Schedule a Session
        </Link>
      </motion.button>
    </div>
  );
};

export default FAQ;
