import React, { useState } from 'react';
import '../styles/ContactStyles.css';
import { motion } from "framer-motion";
import backgroundImage from "../images/data-background.avif"


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
        <motion.div
            className="container"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                minHeight: "100vh", // Ensure the background covers the entire viewport
            }}
            initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and a slight y-offset upwards
            animate={{ opacity: 1, y: 0, transition: { duration: 1}  }} // Animate to full opacity and y-offset 0
            exit={{ opacity: 0, y: 20, transition: { duration: 1}  }} // Exit animation, you can adjust this
            >
            <motion.h1
                className="fade-in-text"
                initial={{ opacity: 0, y: -20 }} // Start with opacity 0 and a slight y-offset upwards
                animate={{ opacity: 1, y: 0, transition: { duration: 1}  }} // Animate to full opacity and y-offset 0
            >
                Contact
            </motion.h1>
            <div className="contactForm">
                <div className="contactContent" >
                    <div className="formHeader">
                        Contact
                    </div>
                    <form >
                        <label htmlFor="name" className="sr-only">Name</label>
                        <input type="text" name="name" id="name" placeholder="name" onChange={handleChange} required/>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input type="text" name="email" id="email" placeholder="Email" onChange={handleChange} required/>
                        <label htmlFor="message" className="sr-only">Message</label>
                        <input type="text" name="message" id="message" placeholder="Message" onChange={handleChange} required/>                  
                        <button className="submitButton">Edit/Submit</button>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
