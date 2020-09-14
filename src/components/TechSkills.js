import React from 'react';
import Skills from './Skills';

export const TechSkills = () => (
    <div className="tech-skills-container">
        <div className="tech-skills">
            <h2>Technical Skills</h2>
            <Skills 
                title={"Applications"} 
                subject={"Machine Learning"}
                userRating={1}
                bizRating={4}
                overallRating={25}
            />
        </div>
    </div>
);

export default TechSkills;