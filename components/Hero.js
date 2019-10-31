import React, { useState, useEffect } from 'react';

import ParallaxComponent from './ParallaxComponent';

function Hero() {
    return (
        <div className="hero-container">
            <ParallaxComponent
                top={0}
                speed={0.6}
            >
                <div className="hero-text">
                    Hello.
                </div>
            </ParallaxComponent>
        </div>
    );
}

export default Hero;