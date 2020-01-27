import React, { useState, useEffect, StrictMode } from 'react';

import ParallaxComponent from './ParallaxComponent';
import Carousel from './Carousel';

import sunImage from '../static/images/parallax-images/kai-website-sun.png';
import slide1 from '../static/images/parallax-images/kai-slide-1.png';
import slide2 from '../static/images/parallax-images/kai-slide-2.png';
import slide3 from '../static/images/parallax-images/kai-slide-3.png';
import slide4 from '../static/images/parallax-images/kai-slide-4.png';
import slide5 from '../static/images/parallax-images/kai-slide-5.png';
import slide6 from '../static/images/parallax-images/kai-slide-6.png';

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
                <ParallaxComponent
                    top={0}
                    speed={0.8}
                >
                    <img 
                        src={slide2}
                        className="slide-2"
                    />
                </ParallaxComponent>
                <ParallaxComponent
                    top={0}
                    speed={0.5}
                >
                    <img 
                        src={slide3}
                        className="slide-3"
                    />
                </ParallaxComponent>
            </div>
        </div>
    );
}

export default Hero;