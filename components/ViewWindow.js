import React, { useState, useEffect, useRef } from 'react';

import Landing from '../components/Landing';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import ParallaxComponent from './ParallaxComponent';

function ViewWindow() {

    const [renderLanding, setRenderLanding] = useState(true);

    setTimeout(() => setRenderLanding(false), 6000);
    
    const handleRender = () => {
        if (renderLanding) {
            return (
                <Landing />
            );
        } else {
            return (
                <div className="view-window">
                    <div id="hero">
                        <Hero />
                    </div>
                    <ParallaxComponent                        
                        top="250%"
                        speed={1.2}
                        zIndex={2}
                        color="#171717"
                    >
                        <About />
                        <Projects />
                    </ParallaxComponent>
                </div>
            );
        }
    }

    return (
        <div>
            {handleRender()}
        </div>
    );

}

export default ViewWindow;