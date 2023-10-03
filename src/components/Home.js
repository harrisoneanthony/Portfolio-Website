import React from "react";
import "../static/styles/PageStyles.css";
import { motion } from "framer-motion";
import backgroundImage from "../static/images/data-background.avif"

const Home = () => {
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
        >
            <div>
                <motion.h1
                initial={{ opacity: 0, y: -20 }} // Start with opacity 0 and a slight y-offset downwards
                animate={{ opacity: 1, y: 0, transition: { duration: 1}  }} // Animate to full opacity and y-offset 0
                className="fade-in-text"
                >
                Welcome to Home
                </motion.h1>
            </div>
        </motion.div>
    );
};

export default Home;
