import {React, useState} from 'react'

const Jobs = () => {
    const [additionalInformation, setAdditionalInformation] = useState("");

    const handleSubmit = () => {
        var emailForm = "PLEASE ATTACH YOUR RESUME TO THIS EMAIL!"
        + "%0A %0A" +
        "Name: "
        + "%0A" +
        "Email: "
        + "%0A" +
        "Phone Number: "
        + "%0A %0A" +
        "1. Tell us about yourself - we would like to get to know you better. Tell us about your hobbies and interests!"
        + "%0A %0A %0A" + 
        "2. Nearest major intersection - tutoring sessions take place in the client's home. It is helpful to know your location. "
        + "%0A %0A %0A" + 
        "3. Teachable subjects - we would like to know what subjects you are able to teach. If possible, please also indicate the grade level of the subjects you are able to teach."
        + "%0A %0A %0A" + 
        "4. Approximate hours per week available - we do not have a minimum hour requirement. Tell us what is best for you."
        + "%0A %0A %0A" + 
        "5. How would you describe your teaching style?"
        + "%0A %0A %0A" + 
        "6.	Give an example of how you overcame an obstacle - "
        + "%0A %0A %0A" + 
        "7.	What professional and/or personal achievements are you proud of?"
         + "%0A %0A %0A" + 
        "8.	What makes you an effective tutor/teacher?"
        + "%0A %0A %0A" + 
        "9.	Vulnerable sector check date? (if applicable)"
        + "%0A %0A %0A" + 
        "10.  Additional thoughts or comments"
        + "%0A %0A %0A";

        var mail = document.createElement("a");
        mail.href = "mailto:matt_starai@hotmail.com?subject=Tutoring Job Application Form&body=" + emailForm;
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
        <button className="button is-primary is-large" onClick={handleSubmit}>
            Send Form
        </button>
    </div>
</div>
  )
}

export default Jobs