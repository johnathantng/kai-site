import React, { useState, useEffect, useRef } from 'react';

function ParallaxComponent(props) {

    const [newStyle, setNewStyle] = useState({})

    const parallaxElement = useRef();

    useEffect(() => {
        console.log(parallaxElement.current.style);    
        setNewStyle({
            speed: props.speed || 1,
    
            width: '100%',
            height: props.height || '100%',
    
            position: 'absolute',
            zIndex: props.zindex || '0',
    
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: props.color || null,
    
            backgroundImage: `url(${props.image})`
        })
        const handleScroll = () => {
            const speed = props.speed;
            const top = props.top;
    
            //calculate new top
            //get current scroll level, # of pixels from absolute top
            const pageTop = window.scrollY;
            const newTop = (top - (pageTop * speed));
    
            //set new top position
            parallaxElement.current.style.top = `${newTop}px`;
            //this.refs.parallaxEffect.style.transform = `translate3d(0, ${newTop}px, 0)`;
    
            console.log("top", top);
            console.log("new top", newTop);
    
            //throttle function
            {
            /* 
            throttle(fn, wait) {
                let time = Date.now();
    
                return function() {
                if  ((time + wait -Date.now()) < 0) {
                    fn()
                    time = Date.now()
                }
                }
            }
            */
        }
      }

      window.addEventListener("scroll", handleScroll);
        
    return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (
        <div
            ref = {parallaxElement}
            style = {newStyle}
        >
            {props.children}
        </div>
    );
}

export default ParallaxComponent;