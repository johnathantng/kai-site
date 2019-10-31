import React, { useState, useEffect, useRef } from 'react';

function CarouselLegend({ count }) {

    const legend = useRef();

    useEffect(() => {
        const listItems = legend.current.querySelectorAll(".legend div");
        switch(count) {
            case 0:
                listItems[0].style.background = "white";
                break;
            case 1:
                listItems[1].style.background = "white";
                break;
            case 2:
                listItems[2].style.background = "white";
                break;
            default:
                listItems[count].style.background = "null";
        }
    })

    return (
        <div className="carousel-legend-container">
            <div ref={legend} className="legend">
                <div> beep </div>
                <div> beep </div>
                <div> beep </div>
                <div> beep </div> 
                <div> beep </div>
            </div>
        </div>
    );
}

export default CarouselLegend;