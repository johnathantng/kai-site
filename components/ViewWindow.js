import React, { useState, useEffect } from 'react';

import Landing from '../components/Landing';
import Hero from '../components/Hero';
import About from '../components/About';    

function ViewWindow() {

    const [renderLanding, setRenderLanding] = useState(true);  
    console.log(renderLanding)

    setTimeout(() => setRenderLanding(false), 6000);
    
    const handleRender = () => {
        if (renderLanding) {
            return (
                <Landing />
            );
        } else {
            return (
                <div>
                    <Hero />
                    <About />
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