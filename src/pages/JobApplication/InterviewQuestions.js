import React, { useState } from "react";

import { motion } from "framer-motion";

import { getFunctions, httpsCallable } from "firebase/functions";

const InterviewQuestions = (props) => {
  const { values, handleChange } = props;
  const [selectedFile, setSelectedFile] = useState(null);
  const continueForm = async (e) => {
    const message = {
      name: values.name,
      email: values.email,
      gender: values.gender,
      phoneNumber: values.phoneNumber,
      address: values.address,
      education: values.education,
      teachableSubjects: values.teachableSubjects,
      availableTime: values.availableTime,
      referral: values.referral,
      bio: values.bio,
      zoomExperience: values.zoomExperience,
      teachingStyle:  values.teachingStyle,
      obstacles: values.obstacles,
      achievements: values.achievements,
      effectiveTutor: values.effectiveTutor,
      vulnerableSector: values.vulnerableSector,
      additionalThoughts: values.additionalThoughts,
  }
  const messageHTML = `
      <html>
      <h1>Basic Information:</h1>
      <strong>Name:</strong> ${message.name}<br />
      <strong>Email:</strong> ${message.email}<br />
      <strong>Gender:</strong> ${message.gender}<br />
      <strong>Phone Number:</strong> ${message.phoneNumber}<br />
      <strong>Address:</strong> ${message.address}<br />
      <strong>Education:</strong> ${message.education}<br />
      <h1> Tutoring Preferences:</h1>
      <strong>Zoom Experience:</strong> ${message.zoomExperience}<br />
      <strong>Teachable Subjects:</strong> ${message.teachableSubjects}<br />
      <strong>Available Time:</strong> ${message.availableTime}<br />
      <h1>References:</h1>
      <strong>Referral:</strong> ${message.referral}<br />
      <h1>Interview Questions:</h1>
      <h2>Tell us about yourself - we want to get to know you better. Tell us about your hobbies and interests!</h2>
      <p>${message.bio}</p><br />
      <h2>How would you describe your teaching style?</h2>
      <p>${message.teachingStyle}</p><br />
      <h2>Give an example of a time when you overcame an obstacle.</h2>
      <p>${message.obstacles}</p><br />
      <h2>What professional/personal achievements are you proud of?</h2>
      <p>${message.achievements}</p><br />
      <h2>What makes you an effective tutor/teacher?</h2>
      <p>${message.effectiveTutor}</p><br />

      <h1>Additional Thoughts:</h1>
      <p>${message.additionalThoughts}</p><br />

      <p>Applicant Vulnerable Sector: ${message.vulnerableSector}</p>
      </html>
  `;
    e.preventDefault();
    const functions = getFunctions();
    const sendEmail = httpsCallable(functions, 'sendMail');
    const attachment = await getBase64(selectedFile);
      sendEmail({ emailAddress: message.email, message: messageHTML, subject: "New Job Applicant", attachment: attachment })
      .then((result) => {
        // Read result of the Cloud Function.
        /** @type {any} */
        const data = result.data;
        const sanitizedMessage = data.text;
      });
    props.nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        let encoded = reader.result.toString().replace(/^data:(.*,)?/, '');
        if ((encoded.length % 4) > 0) {
          encoded += '='.repeat(4 - (encoded.length % 4));
        }
        resolve(encoded);
      };
      reader.onerror = error => reject(error);
    });
  }
  
    return (
      <div className="m-3 mt-6">
        <h1 className="title">Resume and Interview Questions</h1>
        <p>
          Now that we have your basic information, we really want to get to know{" "}
          <em>you</em>.
        </p>

        <h2 className="title is-4 is-pulled-left is-pulled-left">
          What is your Educational Background?
        </h2>
        <textarea
          className="textarea"
          placeholder="e.g. B.S. in Education with a Minor in Mathematics"
          onChange={handleChange("education")}
          defaultValue={values.education}
        />
        <br />
        <h2 className="title is-4 is-pulled-left">
          Tell us about yourself - we want to get to know you better. Tell us
          about your hobbies and interests!
        </h2>
        <textarea
          className="textarea"
          placeholder="What sorts of things do you like to do for fun?"
          onChange={handleChange("bio")}
          defaultValue={values.bio}
        />
        <br />
        <h2 className="title is-4 is-pulled-left">
          Teachable subjects - we would like to know what subjects you can
          teach. If possible, please also indicate the grade level of the
          subjects you are able to teach.
        </h2>
        <textarea
          className="textarea"
          placeholder="e.g. Highschool Math, English, etc."
          onChange={handleChange("teachableSubjects")}
          defaultValue={values.teachableSubjects}
        />
        <br />
        <h2 className="title is-4 is-pulled-left">
          Approximate hours per week available - (Please also indicate the time
          and days of the week you are available.)
        </h2>
        <textarea
          className="textarea"
          placeholder="e.g. Weekdays 4-9, Sundays 1-2"
          onChange={handleChange("availableTime")}
          defaultValue={values.availableTime}
        />
        <br />
        <h2 className="title is-4 is-pulled-left">
          Please indicate if you have been referred to us by anyone. If so,
          please indicate who.
        </h2>
        <textarea
          className="textarea"
          placeholder="Full Name"
          onChange={handleChange("referral")}
          defaultValue={values.referral}
        />
        <br />
        <h2 className="title is-4  is-pulled-left">
          Do you have Zoom experience? (Yes/No)
        </h2>
        <div class="control ">
          <label class="radio  is-pulled-left">
            <input
              type="radio"
              name="answer"
              onChange={handleChange("zoomExperience")}
              defaultValue={values.zoomExperience}
            />
            Yes
          </label>
          <label class="radio  is-pulled-left">
            <input
              type="radio"
              name="answer"
              onChange={handleChange("zoomExperience")}
              defaultValue={values.zoomExperience}
            />
            No
          </label>
          <br />
          <br />
        </div>
        <h2 className="title is-4 is-pulled-left">
          How would you describe your teaching style?
        </h2>
        <textarea
          className="textarea"
          placeholder="I would describe my teaching style as..."
          onChange={handleChange("teachingStyle")}
          defaultValue={values.teachingStyle}
        />
        <br />
        <h2 className="title is-4 is-pulled-left">
          Please give an example of how you overcame an obstacle.
        </h2>
        <textarea
          className="textarea"
          placeholder="I overcame...."
          onChange={handleChange("obstacles")}
          defaultValue={values.obstacles}
        />
        <br />
        <h2 className="title is-4 is-pulled-left">
          What professional and/or personal achievements are you proud of?
        </h2>
        <textarea
          className="textarea"
          placeholder="I am most proud of..."
          onChange={handleChange("achievements")}
          defaultValue={values.achievements}
        />
        <br />
        <h2 className="title is-4 is-pulled-left">
          What makes you an effective tutor/teacher?
        </h2>
        <textarea
          className="textarea"
          placeholder="I am an effective tutor because..."
          onChange={handleChange("effectiveTutor")}
          defaultValue={values.effectiveTutor}
        />
        <br />
        <h2 className="title is-4 is-pulled-left">
          Additional thoughts or comments.
        </h2>
        <textarea
          className="textarea"
          onChange={handleChange("additionalThoughts")}
          defaultValue={values.additionalThoughts}
        />
        <br />
        <h2 className="title is-4">Please upload your resume:</h2>
        <br />
        <div class="file has-name is-boxed is-centered">
          <label class="file-label">
            <input class="file-input" type="file" name="resume" onChange={(e) =>  {
              e.preventDefault();
              setSelectedFile(e.target.files[0])}
            }/>
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label">Choose a file…</span>
            </span>
            <span class="file-name" >{selectedFile? selectedFile.name: "resume.pdf"}</span>
          </label>
        </div>
        <br />
        <div className="columns">
          <div className="column">
            <motion.button
              className="button"
              style={{ "background-color": "#C6AC8F", color: "#ffffff" }}
              whileHover={{ scale: 1.1 }}
              onClick={continueForm}
            >
              Submit Application
            </motion.button>
          </div>
          <div className="column">
            <motion.button
              className="button"
              whileHover={{ scale: 1.1 }}
              onClick={back}
            >
              Back
            </motion.button>
          </div>
        </div>
        <progress class="progress" value="2" max="2"></progress>
      </div>
    );
  }

export default InterviewQuestions;
