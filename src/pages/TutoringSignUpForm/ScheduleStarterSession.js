import React, { Component } from "react";
import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min';

export class ScheduleStarterSession extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    // Initialize all input of date type.
    const options = {
      type: "datetime",
      displayMode: "inline",
    }
    const calendars = bulmaCalendar.attach('[type="date"]', options);

    // Loop on each calendar initialized
    calendars.forEach((calendar) => {
      // Add listener to select event
      calendar.on("select", (date) => {
        console.log(date);
      });
    });

    // To access to bulmaCalendar instance of an element
    const element = document.querySelector("#my-element");
    if (element) {
      // bulmaCalendar instance is available as element.bulmaCalendar
      element.bulmaCalendar.on("select", (datepicker) => {
        console.log(datepicker.data.value());
      });
    }
    return (
      <div className="m-3">
        <br />
        <br />
        <h1 className="title">Consultation Session Booking</h1>
        <p>Coming Soon</p>
        <div id="display-inline" class="tab-content">
          <input class="input bulmaCalendar" type="date" data-display-mode="inline" />
        </div>


        <button
          className="button"
          style={{ "backgroundColor": "#C6AC8F", color: "#ffffff" }}
          onClick={this.continue}
        >
          Next
        </button>
        <button className="button" onClick={this.back}>
          Back
        </button>
        <progress className="progress" value="3" max="4"></progress>
      </div>
    );
  }
}

export default ScheduleStarterSession;