import React from "react";
import bulmaCollapsible from "@creativebulma/bulma-collapsible";

const FAQ = () => {
  // Find DOM node from ID
  const bulmaCollapsibleElement = document.getElementById("to-collapse");
  if (bulmaCollapsibleElement) {
    // Instanciate bulmaCollapsible component on the node
    new bulmaCollapsible(bulmaCollapsibleElement);

    // Call method directly on bulmaCollapsible instance registered on the node
    bulmaCollapsibleElement.bulmaCollapsible("expand");
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
              What subjects do we tutor?{" "}
              <a href="#collapsible-message-accordion-1" data-action="collapse">
                Collapse/Expand
              </a>
            </p>
          </div>
          <div
            id="collapsible-message-accordion-1"
            class="message-body is-collapsible"
            data-parent="accordion_first"
          >
            <div class="message-body-content">
            We offer tutoring in the following subjects from the elementary to college/university level:
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
              <a href="#collapsible-message-accordion-2" data-action="collapse">
                Collapse/Expand
              </a>
            </p>
          </div>
          <div
            id="collapsible-message-accordion-2"
            class="message-body is-collapsible"
            data-parent="accordion_first"
          >
            <div class="message-body-content">
              The price of tutoring varies depending on the subject, number of hours, tutor, and format. Please contact for a quote for pricing.
            </div>
          </div>
        </article>
        <article class="message">
          <div class="message-header">
            <p>
              What site do you use for tutoring?{" "}
              <a href="#collapsible-message-accordion-3" data-action="collapse">
                Collapse/Expand
              </a>
            </p>
          </div>
          <div
            id="collapsible-message-accordion-3"
            class="message-body is-collapsible"
            data-parent="accordion_first"
          >
            <div class="message-body-content">
                We use Zoom for our online lessons. We also make use of <a href="https://about.bramble.io/">bramble.io</a>  so that the student and tutor can write on the same page, resources permitting.
            </div>
          </div>
        </article>
        <article class="message">
          <div class="message-header">
            <p>
             Can you tutor in my home?{" "}
              <a href="#collapsible-message-accordion-4" data-action="collapse">
                Collapse/Expand
              </a>
            </p>
          </div>
          <div
            id="collapsible-message-accordion-3"
            class="message-body is-collapsible"
            data-parent="accordion_first"
          >
            <div class="message-body-content">
                Yes, we can. Please contact us for more information. Alternatively, we can tutor at a local library or coffee shop.
            </div>
          </div>
        </article>
        <article class="message">
          <div class="message-header">
            <p>
              How do I get started?{" "}
              <a href="#collapsible-message-accordion-5" data-action="collapse">
                Collapse/Expand
              </a>
            </p>
          </div>
          <div
            id="collapsible-message-accordion-3"
            class="message-body is-collapsible"
            data-parent="accordion_first"
          >
            <div class="message-body-content">
                You can contact us using the site. Clicking the Schedule a Session button will lead you to a form where you fill in basic details about you/your child's needs as well as contact information. We will then email you for further correspondance. We will be happy to set up a time to meet and discuss your needs.
            </div>
          </div>
        </article>
        <article class="message">
          <div class="message-header">
            <p>
              How do I pay for tutoring?{" "}
              <a href="#collapsible-message-accordion-6" data-action="collapse">
                Collapse/Expand
              </a>
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
              <a href="#collapsible-message-accordion-7" data-action="collapse">
                Collapse/Expand
              </a>
            </p>
          </div>
          <div
            id="collapsible-message-accordion-3"
            class="message-body is-collapsible"
            data-parent="accordion_first"
          >
            <div class="message-body-content">
              You can cancel your tutoring at any time. We will apply a fee if the tutoring is cancelled less than 24 hours before the session. Please contact us at <a href="mailto">matt_starai@hotmail.com</a>.
            </div>
          </div>
        </article>
        <br />
        <p>Have another question? Get in touch at <a href="mailto">matt_starai@hotmail</a>.</p>
      </div>
    </div>
  );
};

export default FAQ;
