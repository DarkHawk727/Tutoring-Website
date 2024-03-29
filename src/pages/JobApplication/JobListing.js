import React, { Component } from 'react';

import { motion } from 'framer-motion';

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
                        Here at Matt Starai Tutoring we are always looking for new and exciting members for our tutoring staff.
                    </p>
                    <h2 class="title is-3">Introduction</h2>
                    <p>
                        We currently have a need for tutors in the Greater Toronto Area, who are highly competent at supporting all students, based on specific needs. These are contractual positions with varied hours and session times, if you wish to tutor in-peson, you must be responsible for transportation accomodations.
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
                        <li>Completed the subject (class) you wish to tutor in with a grade of 85% and above.</li>
                        <li>Fluent English reading, writing, and speaking skills.</li>
                        <li>Ability to travel to students' location (if need be)</li>
                        <li>Availability / Flexibility to coordinate sessions.</li>
                        <li>Must have passable internet skills, knowledge of Zoom, bramble.io, and browser of choice.</li>
                    </ul>
                    <p>Please attach your resume in the email.</p>
                    <motion.button className="button is-large" style={{ "background-color": "#C6AC8F", "color": "#ffffff" }} whileHover={{ scale: 1.1 }} onClick={this.continue}>Apply Now</motion.button>
                </div>
            </div>
        )
    }
}

export default JobListing