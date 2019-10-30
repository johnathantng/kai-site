import React, { useState, useEffect } from 'react';
import ParallaxComponent from './ParallaxComponent';

function Hero() {
    return (
        <div className="hero-container">
            <ParallaxComponent
                top={0}
                speed="10"
            >
                Hello.
            </ParallaxComponent>
        </div>
    );
}

export default Hero;