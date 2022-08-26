import React, { Component } from 'react'

export class InterviewQuestions extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }
  render() {
    const {values, handleChange } = this.props;
    return (
      <div className='m-3 mt-6'>
        <h1 className='title'>Resume and Interview Questions</h1>
        <p>Now that we have your basic information, we really want to get to know <em>you</em>.</p>

        <h2 className="title is-4">What is your Educational Background?</h2>
        <textarea className="textarea" placeholder="e.g. B.S. in Education with a Minor in Mathematics" onChange={handleChange('education')} defaultValue={values.education}/>
        <br />
        <h2 className="title is-4">Tell us about yourself - we want to get to know you better. Tell us about your hobbies and interests!</h2>
        <textarea className="textarea" placeholder='What sorts of things do you like to do for fun?' onChange={handleChange('bio')} defaultValue={values.bio}/>
        <br />
        <h2 className="title is-4">Teachable subjects - we would like to know what subjects you can teach. If possible, please also indicate the grade level of the subjects you are able to teach.</h2>
        <textarea className="textarea" placeholder='e.g. Highschool Math, English, etc.' onChange={handleChange('teachableSubjects')} defaultValue={values.teachableSubjects}/>
        <br />
        <h2 className="title is-4">Approximate hours per week available - we do not have a minimum hour requirement. Tell us what is best for you. (If possible, please also indicate the time and days of the week you are available.)</h2>
        <textarea className="textarea" placeholder='e.g. Weekdays 4-9, Sundays 1-2' onChange={handleChange('availableTime')} defaultValue={values.availableTime}/>
        <br />
        <h2 className="title is-4">Please indicate if you have been referred to us by anyone. If so, please indicate who.</h2>
        <textarea className="textarea" placeholder='Full Name' onChange={handleChange('referral')} defaultValue={values.referral}/>
        <br />
        <h2 className="title is-4">Do you have Zoom experience? (Yes/No)</h2>
        <div class="control">
          <label class="radio">
            <input type="radio" name="answer" onChange={handleChange('zoomExperience')} defaultValue={values.zoomExperience}/>
            Yes
          </label>
          <label class="radio">
            <input type="radio" name="answer" onChange={handleChange('zoomExperience')} defaultValue={values.zoomExperience}/>
            No
          </label>
        </div>
        <h2 className="title is-4">How would you describe your teaching style?</h2>
        <textarea className="textarea" placeholder='I would describe my teaching style as...' onChange={handleChange('teachingStyle')} defaultValue={values.teachingStyle}/>
        <br />
        <h2 className="title is-4">Please give an example of how you overcame an obstacle.</h2>
        <textarea className="textarea" placeholder='I overcame....' onChange={handleChange('obstacles')} defaultValue={values.obstacles}/>
        <br />
        <h2 className="title is-4">What professional and/or personal achievements are you proud of?.</h2>
        <textarea className="textarea" placeholder='I am most proud of...' onChange={handleChange('achievements')} defaultValue={values.achievements}/>
        <br />
        <h2 className="title is-4">What makes you an effective tutor/teacher?</h2>
        <textarea className="textarea" placeholder='I am an effective tutor because...' onChange={handleChange('effectiveTutor')} defaultValue={values.effectiveTutor}/>
        <br />
        <h2 className="title is-4">Additional thoughts or comments.</h2>
        <textarea className="textarea" onChange={handleChange('additionalThoughts')} defaultValue={values.additionalThoughts}/>
        <br />
        <h2 className="title is-4">Please upload your resume:</h2>
        <div class="file has-name is-boxed">
          <label class="file-label">
            <input class="file-input" type="file" name="resume" />
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label">
                Choose a file…
              </span>
            </span>
            <span class="file-name">
              Screen Shot 2017-07-29 at 15.54.25.png
            </span>
          </label>
        </div>
        <br />
        <button className="button is-warning" onClick={this.continue}>Submit Application</button>
        <button className="button" onClick={this.back}>Back</button>
        <progress class="progress" value="2" max="2"></progress>
      </div>
    )
  }
}

export default InterviewQuestions