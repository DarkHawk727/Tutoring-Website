import React, { Component } from 'react'

export class JobListing extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      }
  render() {
    return (
    <div className='m-3 mt-6'>
        <h1 class="title is-1">Tutor Application</h1>
        <div className="content has-text-justified">
            <p>
                Here at Matt Starai Tutoring we are always looking for new and exciting members of our tutoring staff. We have a variety of positions available, look below for some of the positions we are currently hiring for.
            </p>
            <h2 class="title is-3">Introduction</h2>
            <p>
                We currently have a need for tutors in the Greater Toronto Area, who are highly competent at supporting all students, based on specific needs. These are contractual position with varied hours and session times and requires candidates to have reliable transportation to travel to tutoring locations.
            </p>
            <h2 class="title is-3">Roles and Responsibilities</h2>
            <ul>
                <li>Explain approaches to solving a problem</li>
                <li>Teach and/or reinforce concepts taught in schools.</li>
                <li>Help with test or quiz preparation.</li>
                <li>Help with homework.</li>
                <li>Provide extra study materials and/or resources upon request.</li>

            </ul>
            <h2 class="title is-3">Requirements</h2>
            <ul>
                <li>Must have passed the subject you wish to tutor in with a high grade (85%+).</li>
                <li>Fluent English reading, writing, and speaking skills.</li>
                <li>Ability to travel to students' location (if need be)</li>
                <li>Availability / Flexibility to coordinate sessions.</li>
                <li>Must have passable internet skills, knowledge of Zoom, bramble.io, and browser of choice.</li>
            </ul>
            <p>You will attach your resume in the email.</p>
            <button className="button is-warning is-large" onClick={this.continue}>Apply Now</button>
        </div>
    </div>
    )
  }
}

export default JobListing