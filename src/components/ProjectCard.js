import React from 'react';
import '../static/styles/ProjectCard.css';

class ProjectCard extends React.Component {
    render() {
        const { name, technologiesUsed, githubLink, imagePaths, videoLink } = this.props;

        return (
        <div className="projectCard" onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave} style={{ backgroundColor: 'rgba(102, 96, 96, 0.7)' }}>
            <div className="cardBody">
                <img className="projectImage" src={imagePaths[0]} alt={imagePaths[1]} />
                <p className="careerText">{name}</p>
                <p>
                    Technologies Used:
                    <br/>
                    {technologiesUsed}
                </p>
                <div className='cardLinks'>
                    <a className="codeLink" href={githubLink} target="_blank" rel="noopener noreferrer">Code</a> 
                    <a className="codeLink" href={videoLink} target="_blank" rel="noopener noreferrer">Video</a>
                </div>
            </div>
        </div>
    );
}

  // ... handleMouseOver and handleMouseLeave methods if needed
}

export default ProjectCard;
