import React, { useState } from 'react';
import '../static/styles/ContactStyles.css';
import { motion } from "framer-motion";
import backgroundImage from "../static/images/data-background.avif"


function Contact(){
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div
            className="container"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                minHeight: "100vh", // Ensure the background covers the entire viewport
            }}
        >
            <motion.div 
                className="contactForm"
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0, transition: { duration: 1} }}
                >
                <div className="contactContent" >
                    <div className="formHeader">
                        Contact
                    </div>
                    <form className="formBody">
                        <label htmlFor="name" className="sr-only">Name</label>
                        <input type="text" name="name" id="name" placeholder="name" onChange={handleChange} required/>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input type="text" name="email" id="email" placeholder="Email" onChange={handleChange} required/>
                        <label htmlFor="message" className="sr-only">Message</label>
                        <input type="text" name="message" id="message" placeholder="Message" onChange={handleChange} required/>                  
                        <button className="submitButton">Edit/Submit</button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
