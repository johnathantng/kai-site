import React, { useState, useEffect } from 'react';

import ParallaxComponent from './ParallaxComponent';
import Carousel from './Carousel';

function Hero() {
    return (
        <div className="hero-container">
            <ParallaxComponent
                top={0}
                speed={0.6}
            >
                <div className="hero-text">
                    <Carousel />
                </div>
            </ParallaxComponent>
        </div>
    );
}

export default Hero;