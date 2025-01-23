import React, {useState} from 'react'
import "./Contact.css";

const Contact = () => {
    const [userData,setUserData] = useState({
        name:"",
         email:"",
         phone:"",
    })

    let name, value;
    const handleChange = (e) =>{
        name = e.target.name;
        value = e.target.value;

        setUserData({...userData, [name]: value});
    }

    const submitData = async (e) =>{
        e.preventDefault();

        
        const {name,email, phone} = userData;

        try{
       
        const res =  await fetch("https://ecommerce-881df-default-rtdb.firebaseio.com/userRecods.json",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                name,
                email,
                phone
            }),
        }
    )
       
    const resData = await res.json();
console.log(resData);


    if(res.ok){
        setUserData({
            name:"",
            email:"",
            phone:"",
        })
        alert("Data Stored");
    }else{
        alert("Failed to store data. Please try again.");
    }
           
    }catch (error){
        alert("An error occurred: " + error.message);
    }
}

  return (
    <div className="contact-container">
    <h1>Get in touch!</h1>
    <form onSubmit={submitData} className="contact-form">
     
      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={userData.name}
        onChange={handleChange}
        required
      />
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
    </form>
  </div>


  )
}

export default Contact
