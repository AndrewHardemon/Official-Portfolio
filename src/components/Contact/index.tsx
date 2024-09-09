import React, { FC, useState } from "react";
// import nodemailer from "nodemailer";
import "./index.css"


const Contact: FC = () => {
  const [info, setInfo] = useState({ name: "", email: "", subject: "", message: "" })
  const disabled = Object.values(info).reduce((acc, curr) => !!curr && acc, true)
  //! Currently having issues with nodemailer
  // const handleSubmit = async () => {
  //   let transporter = nodemailer.createTransport({
  //     host: "smtp.example.com",
  //     port: 587,
  //     secure: true,
  //     auth: {
  //       user: process.env.USER,
  //       pass: process.env.PASS
  //     }
  //   })
  //   // transporter.verify((err,succ)=>{
  //   //   if(err) console.log(err)
  //   //   else {
  //   //     console.log("Server is ready to take messages")
  //   //   }
  //   // })
  //   let myInfo: any = await transporter.sendMail({
  //     from: info.email,
  //     to: process.env.MY_EMAIL,
  //     subject: info.subject,
  //     text: info.message
  //   })

  //   console.log("Message sent: %s: " + nodemailer.getTestMessageUrl(myInfo))
  // }

  const handleChange = (e: any) => {
    setInfo({ ...info, [e.target.name]: e.target.value })
  }


  return (
      <section className="grid col-start-1 col-end-3 w-100" id="contact-container">
        <form className="w-2/3 mx-auto bg-blue-900 p-5 w-100" id="form-container" onSubmit={e => e.preventDefault()}>
        <h2>Contact</h2>
          <div className="relative z-0 w-full mb-5 group">
              <input 
                type="email" 
                name="email" 
                id="email" 
                className="block py-2.5 px-0 w-full text-md text-gray-200 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                placeholder=" "
                value={info.email}
                onChange={handleChange}
                required 
              />
              <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
          </div>
          <div className="grid md:grid-cols-1 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  className="block py-2.5 px-0 w-full text-md text-gray-200 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                  placeholder=" "                 
                  value={info.name}
                  onChange={handleChange} 
                  required
                />
                <label htmlFor="name" className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
            </div>
          </div>
          <div className="grid md:grid-cols-1 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
                <input 
                  type="text" 
                  name="subject" 
                  id="subject" 
                  className="block py-2.5 px-0 w-full text-md text-gray-200 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                  placeholder=" "                 
                  value={info.name}
                  onChange={handleChange} 
                  required
                />
                <label htmlFor="subject" className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Subject</label>
            </div>
          </div>
          <div className="grid md:grid-cols-1 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <label htmlFor="message" className="block mb-2 text-md font-medium text-gray-200 dark:text-white">Message</label>
              <textarea
                rows={5}
                name="message" 
                id="message" 
                className="block p-2.5 w-full text-md text-gray-200 bg-gray-700 rounded-lg border border-gray-600 focus:ring-blue-500 focus:border-blue-500"
                placeholder=" "
                value={info.message}
                onChange={handleChange}
                required 
              ></textarea>
            </div>
            <a href={disabled ? `mailto:andrewhardemon@gmail.com?subject=${info.subject}&body=${info.message}` : "#invalid"} className="m-auto">
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </a>
          </div>
        </form>
        {/* {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )} */}
      </section>
  )
}



export default Contact;