"use client"

import { useState } from "react"
import "./Contact.css"

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [submitStatus, setSubmitStatus] = useState({ message: "", isError: false })

  let name, value
  const handleChange = (e) => {
    name = e.target.name
    value = e.target.value

    setUserData({ ...userData, [name]: value })
  }

  const submitData = async (e) => {
    e.preventDefault()

    const { name, email, phone } = userData

    try {
      
      const res = await fetch("https://ecom-4091c-default-rtdb.firebaseio.com/userRecods.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
        }),
      })

  
      if (!res.ok) {
        // Store in localStorage as a fallback
        const localData = JSON.parse(localStorage.getItem("contactSubmissions") || "[]")
        localData.push({ name, email, phone, date: new Date().toISOString() })
        localStorage.setItem("contactSubmissions", JSON.stringify(localData))

        setSubmitStatus({
          message: "Data stored locally (Firebase connection failed)",
          isError: false,
        })
      } else {
        const resData = await res.json()
        console.log(resData)
        setSubmitStatus({ message: "Data submitted successfully!", isError: false })
      }

      // Clear   form 
      setUserData({
        name: "",
        email: "",
        phone: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus({
        message: "An error occurred. Data stored locally as backup.",
        isError: true,
      })

      // Store in localStorage as a fallback
      const localData = JSON.parse(localStorage.getItem("contactSubmissions") || "[]")
      localData.push({ name, email, phone, date: new Date().toISOString() })
      localStorage.setItem("contactSubmissions", JSON.stringify(localData))
    }
  }

  return (
    <div className="contact-container">
      <h1 className="get-touch">Get in touch!</h1>
      <form onSubmit={submitData} className="contact-form">
        <input type="text" name="name" placeholder="Your name" value={userData.name} onChange={handleChange} required />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={userData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your phone number"
          value={userData.phone}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>

        {submitStatus.message && (
          <div className={`status-message ${submitStatus.isError ? "error" : "success"}`}>{submitStatus.message}</div>
        )}
      </form>
    </div>
  )
}

export default Contact



