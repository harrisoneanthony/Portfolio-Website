import React from "react";
import '../styles/PageStyles.css';
import { motion } from "framer-motion";
import backgroundImage from "../images/data-background.avif"



const Projects = () => {
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
            <div>
                <motion.h1
                    className="fade-in-text"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 1} }}
                >
                    Projects
                </motion.h1>
            </div>
        </div>
    );
};

export default Projects;
