import React, { useState, useEffect } from 'react';

import Carousel from './Carousel';


function Projects() {
    return (
        <div className="projects-container">
            <div className="projects-text-container">
                <span className="projects-text">A selection of my recent works</span>
            </div>
            <Carousel />
        </div>
    );
}

export default Projects;