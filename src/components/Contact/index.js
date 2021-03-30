import React, { useState } from "react";



function Contact() {
  const [info, setInfo] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e) => {

  }

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value })
  }


  return (
    <section>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label for="name">Name:</label>
          <input
            type="text"
            name="name"
            value={info.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label for="email">Email address:</label>
          <input
            type="email"
            name="email"
            value={info.email}
            onChange={handleChange}
          />
        </div>
        <div>
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
        <button type="submit">Submit</button>
      </form>
    </section>
  )


}



export default Contact;