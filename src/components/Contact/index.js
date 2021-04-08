import React, { useState } from "react";
import nodemailer from "nodemailer";


function Contact() {
  const [info, setInfo] = useState({ name: "", email: "", subject: "", message: "" })

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
    <section>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div style={{display: "grid", gridTemplateColumns: "20% 50%"}}>
          <label for="name">Name:</label>
          <input
            type="text"
            name="name"
            value={info.name}
            onChange={handleChange}
          />
        </div>
        <div style={{display: "grid", gridTemplateColumns: "20% 50%"}}>
          <label for="email">Email address:</label>
          <input
            type="email"
            name="email"
            value={info.email}
            onChange={handleChange}
          />
        </div>
        <div style={{display: "grid", gridTemplateColumns: "20% 50%"}}>
          <label for="subject">Subject:</label>
          <input
            type="text"
            name="subject"
            value={info.subject}
            onChange={handleChange}
          />
        </div>
        <div style={{display: "grid", gridTemplateColumns: "20% 50%"}}>
          <label for="message">Message:</label>
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
        <div style={{display:"grid", width: "87%"}}>
        <button style={{marginTop: "10px"}} type="submit">Submit</button>
        </div>
      </form>
    </section>
  )


}



export default Contact;