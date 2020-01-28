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
import About from './About';

function Hero() {
    return (
        <div>
            <div className="hero-container">
                <ParallaxComponent
                    top={0}
                    speed={0}
                >
                    <img 
                        src={sunImage} 
                        className="sun-image"
                    />
                </ParallaxComponent>
                <ParallaxComponent
                    top={0}
                    speed={0.2}
                >
                    <img 
                        src={slide1}
                        className="slide-1"
                    />
                </ParallaxComponent>
                <ParallaxComponent
                    top={0}
                    speed={0.3}
                >
                    <img 
                        src={slide2}
                        className="slide-2"
                    />
                </ParallaxComponent>
                <ParallaxComponent
                    top={0}
                    speed={0.8}
                >
                    <img 
                        src={slide3}
                        className="slide-3"
                    />
                </ParallaxComponent>
                <ParallaxComponent
                    top={0}
                    speed={1.0}
                >
                    <img 
                        src={slide4}
                        className="slide-4"
                    />
                </ParallaxComponent>
                <ParallaxComponent
                    top={0}
                    speed={1.2}
                >
                    <img 
                        src={slide5}
                        className="slide-5"
                    />
                </ParallaxComponent>
                <ParallaxComponent
                    top={0}
                    speed={1.4}
                >
                    <img 
                        src={slide6}
                        className="slide-6"
                    />
                </ParallaxComponent>
            </div>
        </div>
    );
}

export default Hero;