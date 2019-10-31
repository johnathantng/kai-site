import React, { useState, useEffect, useRef } from 'react';

function CarouselLegend({ count }) {

    const [newStyle, setNewStyle] = useState({});

    const legend = useRef();

    useEffect(() => {
        const listItems = legend.current.querySelectorAll(".legend div");
        console.log(listItems[count]);
        listItems[count].style.background = "white";
    })

    return (
        <div className="carousel-legend-container">
            <div ref={legend} className="legend">
                <div> beep </div>
                <div> beep </div>
                <div> beep </div>
            </div>
        </div>
    );
}

export default CarouselLegend;