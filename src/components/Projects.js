import React from "react";
import '../styles/PageStyles.css';
import { motion } from "framer-motion";
import backgroundImage from "../images/data-background.avif"



const Projects = () => {
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
            <div>
                <motion.h1
                    className="fade-in-text"
                    initial={{ opacity: 0, y: -20 }} // Start with opacity 0 and a slight y-offset upwards
                    animate={{ opacity: 1, y: 0, transition: { duration: 1}  }} // Animate to full opacity and y-offset 0
                >
                    Projects
                </motion.h1>
            </div>
        </motion.div>
    );
};

export default Projects;
