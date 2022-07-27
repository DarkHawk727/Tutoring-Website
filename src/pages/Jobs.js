import {React, useState} from 'react'

const Jobs = () => {
    const [additionalInformation, setAdditionalInformation] = useState("");

    const handleSubmit = () => {
        var emailBody = "additionalInformation: " + additionalInformation + "%0A";
        var mail = document.createElement("a");
        mail.href = "mailto:arjunsarao727@gmail.com?subject=Tutoring Job Application Form&body=" + "PLEASE ATTACH YOUR RESUME TO THIS EMAIL!" + "%0A" + emailBody;
        mail.click();

      }

  return (
<div className='m-3'>
    <h1 class="title is-1">Tutor Application</h1>
    <div className="content has-text-justified">
        <p>
            Here at Matt Starai Tutoring we are always looking for new and exciting members of our tutoring staff. We have a variety of positions available, look below for some of the positions we are currently hiring for.
        </p>
        <h2 class="title is-3">Introduction</h2>
        <p>
            We currently have a need for tutors in the Hamilton area , who are highly competent at supporting all students, based on specific needs. These are contractual position with varied hours and session times and requires candidates to have reliable transportation to travel to tutoring locations.
        </p>
        <h2 class="title is-3">Roles and Responsibilities</h2>
        <ul>
            <li>Donec blandit a lorem id convallis.</li>
            <li>Cras gravida arcu at diam gravida gravida.</li>
            <li>Integer in vulutpat libero.</li>
            <li>Donec a diam tellus.</li>
            <li>Aenean nec tortor orci.</li>
            <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
            <li>Vivamus maximus ultricies pulvinar.</li>
        </ul>
        <h2 class="title is-3">Requirements</h2>
        <ul>
            <li>Donec blandit a lorem id convallis.</li>
            <li>Cras gravida arcu at diam gravida gravida.</li>
            <li>Integer in vulutpat libero.</li>
            <li>Donec a diam tellus.</li>
            <li>Aenean nec tortor orci.</li>
            <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
            <li>Vivamus maximus ultricies pulvinar.</li>
        </ul>
        <h2 class="title is-3">What subjects would you prefer to tutor?</h2>
        <textarea className="textarea" placeholder="Please indicate what subjects you would prefer to tutor." value={additionalInformation} onChange={(e) => setAdditionalInformation(e.target.value)}></textarea>
        <br />
        <button className="button is-primary is-large" onClick={handleSubmit}>
            Send Form
        </button>
    </div>
</div>
  )
}

export default Jobs
// This should be similar to the contact pages, but with a different layout.