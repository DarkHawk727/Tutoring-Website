import React, { Component } from 'react'
import BasicInfo from './BasicInfo'
import InterviewQuestions from './InterviewQuestions'
import JobSuccess from './JobSuccess'
import JobListing from './JobListing'


export class Jobs extends Component {
    
    state = {
        step: 1,
        name: '',
        email: '',
        gender: '',
        phoneNumber: '',
        address: '',
        education: '',
        teachableSubjects: '',
        availableTime: '',
        referral: '',
        bio: '',
        zoomExperience: '',
        teachingStyle: '',
        obstacles: '',
        achievements: '',
        effectiveTutor: '',
        vulnerableSector: '',
        additionalThoughts: '',
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }
    
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    } 

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

  render() {
    const { step } = this.state;
    const { name, email, gender, phoneNumber, address, education, availableTime, teachableSubjects, referral, bio, zoomExperience, teachingStyle, obstacles, achievements, effectiveTutor, vulnerableSector, additionalThoughts } = this.state;
    const values = { name, email, gender, phoneNumber, address, education, availableTime, teachableSubjects, referral, bio, zoomExperience, teachingStyle, obstacles, achievements, effectiveTutor, vulnerableSector, additionalThoughts };

    switch(step) {
        case 1:
            return (
                <JobListing
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            )
        case 2:
            return (
                <BasicInfo
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
                />
            )
        case 3:
            return (
                <InterviewQuestions 
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
                />
            )
        case 4:
            return (
                <JobSuccess />
            )
    }
  }
}

export default Jobs