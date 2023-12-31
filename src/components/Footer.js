import React, {useState} from "react";
import '../static/styles/FooterStyles.css'
import GmailIcon from '../static/images/email_icon.png';
import GitHubIcon from '../static/images/github_icon.png';
import LinkedInIcon from '../static/images/linkedin_icon.png';


const Footer = () => {
    const [isGmailHovered, setGmailHovered] = useState(false);
    const [isGitHubHovered, setGitHubHovered] = useState(false);
    const [isLinkedInHovered, setLinkedInHovered] = useState(false);

    return (
        <div className="footer-container">
            <div className="footer-l">
                <h3 id="left-text">Website powered by:</h3>
                <i className="devicon-react-original-wordmark colored react-icon"></i>
            </div>
            <div className="footer-r">
                <h3>Follow me on:</h3>
                <div className="contact-links">
                    <a
                        className="links"
                        href="mailto:harrisoneanthony@gmail.com"
                        onMouseEnter={() => setGmailHovered(true)}
                        onMouseLeave={() => setGmailHovered(false)}
                    >
                        <img
                            className={`icons ${isGmailHovered ? 'hovered' : ''}`}
                            src={GmailIcon}
                            alt="Gmail"
                        />
                    </a>
                    <a
                        className="links"
                        href="https://github.com/harrisoneanthony"
                        onMouseEnter={() => setGitHubHovered(true)}
                        onMouseLeave={() => setGitHubHovered(false)}
                    >
                        <img
                            className={`icons ${isGitHubHovered ? 'hovered' : ''}`}
                            src={GitHubIcon}
                            alt="GitHub"
                        />
                    </a>
                    <a
                        className="links"
                        href="https://www.linkedin.com/in/harrison-anthony-914763141/"
                        onMouseEnter={() => setLinkedInHovered(true)}
                        onMouseLeave={() => setLinkedInHovered(false)}
                    >
                        <img
                            className={`icons ${isLinkedInHovered ? 'hovered' : ''}`}
                            src={LinkedInIcon}
                            alt="LinkedIn"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;