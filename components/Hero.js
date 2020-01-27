import React, { useState, useEffect, StrictMode } from 'react';

import ParallaxComponent from './ParallaxComponent';
import Carousel from './Carousel';

import sunImage from '../static/images/parallax-images/kai-website-sun.png';
import slide1 from '../static/images/parallax-images/kai-slide-1.png';

function Hero() {
    return (
        <div>
            <div className="hero-container">
                <ParallaxComponent
                    top={0}
                    speed={0.6}
                >
                    <img 
                        src={sunImage} 
                        className="sun-image"
                    />
                </ParallaxComponent>
                <ParallaxComponent
                    top={0}
                    speed={1.2}
                >
                    <img 
                        src={slide1}
                        className="slide-1"
                    />
                </ParallaxComponent>
            </div>
        </div>
    );
}

export default Hero;