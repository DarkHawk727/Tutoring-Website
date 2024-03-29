import React, { Component } from 'react'
import StudentInfo from './StudentInfo'
import TempPage from './TempPage'
// import PaymentInfo from './PaymentInfo'
// import ScheduleStarterSession from './ScheduleStarterSession'
import SignUpSuccess from './SignUpSuccess'


export class Contact extends Component {

    state = {
        step: 1,
        studentName: '',
        studentEmail: '',
        gradeLevel: '',
        studentPhoneNumber: '',
        studentAddress: '',
        format: '',
        desiredSubjects: '',
        studentReferral: '',
        heard: '',
        additionalInfo: '',
        parentName: '',
        parentEmail: '',
        parentPhoneNumber: '',
        parentAdditionalInfo: '',

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
        const { studentName, studentEmail, gradeLevel, studentPhoneNumber, studentAddress, format, desiredSubjects, studentReferral, heard, additionalInfo, parentName, parentEmail, parentPhoneNumber, parentAdditionalInfo } = this.state;
        const values = { studentName, studentEmail, gradeLevel, studentPhoneNumber, studentAddress, format, desiredSubjects, studentReferral, heard, additionalInfo, parentName, parentEmail, parentPhoneNumber, parentAdditionalInfo };

        switch (step) {
            case 1:
                return (
                    <StudentInfo
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            // case 2:
            //     return (
            //         <ScheduleStarterSession 
            //         nextStep={this.nextStep}
            //         prevStep={this.prevStep}
            //         handleChange={this.handleChange}
            //         values={values}
            //         />
            //     )
            // case 3:
            //     return (
            //         <PaymentInfo 
            //         nextStep={this.nextStep}
            //         prevStep={this.prevStep}
            //         handleChange={this.handleChange}
            //         values={values}
            //         />
            //     )
            case 2:
                return (
                    <SignUpSuccess />
                )

        }
    }
}

export default Contact