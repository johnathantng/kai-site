import React, { useState, useEffect } from 'react';

import Landing from '../components/Landing';
import Hero from '../components/Hero';
import About from '../components/About';    

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
                    <div className="child">
                        <Hero />
                    </div>
                    <div className="child">
                        <About />
                    </div>
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