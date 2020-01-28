import React, { useState, useEffect } from 'react';

function About() {
    return (
        <div className="about-container">
            <div className="about-text-container">
                <span className="about-heading">
                    NICE TO MEET YOU
                </span>
                <span className="about-text">
                    <p>
                        I am a Rhode Island School of Design graduate with a passion 
                        for UI/UX design and branding identities. I love creating 
                        experiences for people through innovative design and products.
                    </p>
                    <p>
                        Throughout the course of my education and work experiences, 
                        I have developed an interdisciplinary skillset that allows me to 
                        design solutions to problems in an effective and empathetic way.
                    </p>
                    <p>
                        When I'm not working, I enjoy illustrating, creating mood boards
                        and watching cat videos on YouTube. 
                    </p>
                </span>
            </div>
        </div>
    );
}

export default About;