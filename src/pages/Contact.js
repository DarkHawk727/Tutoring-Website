import {React, useState} from 'react'


const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [grade, setGrade] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [referral, setReferral] = useState("");
    const [address, setAddress] = useState("");
    const [subject, setSubject] = useState("");
    const [additionalInformation, setAdditionalInformation] = useState("");
    const [parentName, setparentName] = useState("");
    const [parentEmail, setparentEmail] = useState("");
    const [parentPhoneNumber, setparentPhoneNumber] = useState("");

    const handleSubmit = () => {
        var emailBody = "Student Name: " + name + "%0A" + "Student Email: " + email + "%0A" + "Grade: " + grade + "%0A" + "Student Phone Number: " + phoneNumber + "%0A" + "Referrer: " + referral + "%0A" + "Address: " + address + "%0A" + "Subject(s): " + subject + "%0A" + "Additional Information: " + additionalInformation + "%0A" + "Parent Name: " + parentName + "%0A" + "Parent Email: " + parentEmail + "%0A" + "Parent Phone Number: " + parentPhoneNumber;
        var mail = document.createElement("a");
        mail.href = "mailto:matt_starai@hotmail.com?subject=Tutoring Request Form&body=" + "PLEASE ATTATCH ANY RESOURCES PERTAINING TO YOUR COURSES TO THIS EMAIL!" + "%0A %0A" + emailBody;
        mail.click();

      }

  return (
    <div className='m-3'>
        <h1 class="title ">Schedule a Session</h1>
        <p>
            This form will lead to an email being sent to Matt Starai Tutoring.
        </p>
        <h2>Student Information</h2>
        <form>
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Student Name</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <p className="control is-expanded">
                            <input className="input" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}></input>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control is-expanded">
                            <input className="input" type="email" placeholder="name@email.com" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        </p>
                    </div>
                    <div className="field">   
                        <input class="input" type="text" placeholder="Grade Level" value={grade} onChange={(e) => setGrade(e.target.value)}></input>
                    </div>
                </div>
            </div>
            <div className="field is-horizontal">
                <div className="field-label"></div>
                <div className="field-body">
                    <div className="field is-expanded">
                        <div className="field has-addons">
                            <p className="control">
                                <a className="button is-static">
                                +1
                                </a>
                            </p>
                            <p className="control is-expanded">
                                <input className="input" type="tel" placeholder="Your phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}></input>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="field is-horizontal">
                <div className="field-label">
                    <label className="label">If you have been referred, please indicate who: </label>
                </div>
                <div className="field-body">
                    <div className="field is-narrow">
                        <div className="control">
                            <input className="input" type="text" placeholder="Name" value={referral} onChange={(e) => setReferral(e.target.value)}></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className="field is-horizontal">
                <div className="field-label">
                    <label className="label">If you are interested in in-person tutoring, please write your Address or the address of a conveniant location: </label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <input className="input" type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)}></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Subject(s)</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <input className="input" type="text" placeholder="Please add course code(s) if possible" value={subject} onChange={(e) => setSubject(e.target.value)}></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Additional Information</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <textarea className="textarea" placeholder="Please write any extra information pertaining to your course(s) (Institution, Unit, Chapter, etc.). Additionally, please also write your goals with these tutoring sessions (e.g. improve a grade, excell in a class, etc.)" value={additionalInformation} onChange={(e) => setAdditionalInformation(e.target.value)}></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <h3>Parent Information</h3>
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Parent Name</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <p className="control is-expanded">
                            <input className="input" type="text" placeholder="Name" value={parentName} onChange={(e) => setparentName(e.target.value)}></input>
                            <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control is-expanded">
                            <input className="input" type="email" placeholder="name@email.com" value={parentEmail} onChange={(e) => setparentEmail(e.target.value)}></input>
                            <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                            </span>
                            <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="field is-horizontal">
                <div className="field-label"></div>
                <div className="field-body">
                    <div className="field is-expanded">
                        <div className="field has-addons">
                            <p className="control">
                                <a className="button is-static">
                                +1
                                </a>
                            </p>
                            <p className="control is-expanded">
                                <input className="input" type="tel" placeholder="Your phone number" value={parentPhoneNumber} onChange={(e) => setparentPhoneNumber(e.target.value)}></input>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="field is-horizontal">
                <div className="field-label">
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <button className="button is-primary is-large" onClick={handleSubmit}>
                                Send Form
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Contact

// Add a comment to the email, that says something like "Please attatch any extra resources pertaining to your course(s)."