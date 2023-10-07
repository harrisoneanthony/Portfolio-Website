import React from "react";
import '../static/styles/ProjectsStyles.css';
import { motion } from "framer-motion";
import backgroundImage from "../static/images/data-background.avif";
import ProjectCard from "./ProjectCard"; // Adjust the path to match the actual location of your ProjectCard component
import projectsData from "./ProjectsData"; // Import the project data
// import 'bootstrap/dist/css/bootstrap.css';


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
                    animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                >
                    Projects
                </motion.h1>
            </div>

            {/* Map over the projectsData array and render a ProjectCard for each project */}
            <motion.div 
                className="row"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            >
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        name={project.name}
                        technologiesUsed={project.technologiesUsed}
                        githubLink={project.githubLink}
                        imagePaths={project.imagePaths}
                        videoLink={project.videoLink}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default Projects;
