import React from "react";
import "../styles/PageStyles.css";
import { motion } from "framer-motion";
import backgroundImage from "../images/data-background.avif"


const About = () => {
    return (
        <div
            className="container"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                minHeight: "100vh", 
            }}
        >
            <div>
                <motion.h1
                    className="fade-in-text"
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0, transition: { duration: 1} }} 
                >
                    About
                </motion.h1>
            </div>
        </div>
    );
};

export default About;

