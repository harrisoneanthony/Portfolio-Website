import React from "react";
import {
    Route, 
    Routes,
    useLocation
} from "react-router-dom";

import Home from "./Home.js";
import Projects from "./Projects.js";
import About from "./About.js";
import Contact from "./Contact.js";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;