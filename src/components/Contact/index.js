import React, { useState } from "react";
import nodemailer from "nodemailer";
import "./index.css"


function Contact() {
  const [info, setInfo] = useState({ name: "", email: "", subject: "", message: "" })
  const disabled = Object.values(info).reduce((acc, curr) => curr && acc, true)
  // Currently having issues with nodemailer
  const handleSubmit = async (e) => {
    let transporter = nodemailer.createTransport({
      host: "smtp.example.com",
      port: 587,
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS
      }
    })
    // transporter.verify((err,succ)=>{
    //   if(err) console.log(err)
    //   else {
    //     console.log("Server is ready to take messages")
    //   }
    // })
    let info = await transporter.sendMail({
      from: info.email,
      to: process.env.MY_EMAIL,
      subject: info.subject,
      text: info.message
    })
    console.log("Message sent: %s: " + nodemailer.getTestMessageUrl(info))
  }

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value })
  }


  return (
    <div className="flex-container">
      <section className="contact-container">
        <form id="contact-form" onSubmit={e => e.preventDefault()}>
          <div id="inner-contact-form">
            <div className="contact_form">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                value={info.name}
                onChange={handleChange}
              />
            </div>
            <div className="contact_form">
              <label htmlFor="email">Email address:</label>
              <input
                type="email"
                name="email"
                value={info.email}
                onChange={handleChange}
              />
            </div>
            <div className="contact_form">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                name="subject"
                value={info.subject}
                onChange={handleChange}
              />
            </div>
            <div className="contact_form">
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                rows="5"
                value={info.message}
                onChange={handleChange}
              />
            </div>
            {/* {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )} */}
          </div>
          <div className="email-button-container">
            <a className="email-button"  href={disabled ? `mailto:andrewhardemon@gmail.com?subject=${info.subject}&body=${info.message}` : "#invalid"}>
              {/* <button style={{marginTop: "10px"}} type="click">Submit</button> */}
              Submit
            </a>
          </div>
        </form>
      </section>
    </div>
  )


}



export default Contact;