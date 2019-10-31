import React, { useState, useEffect } from 'react';

import CarouselLegend from './CarouselLegend';

function Carousel(props) {

    const [count, setCount] = useState(0);
    const [carouselImage, setCarouselImage] = useState(0);
    console.log(count);

    const galleryImages = [
        // props.imageOne,
        // props.imageTwo
        'hello','two','three','four','last'
    ]

    const carouselBack = () => {
        if (count == 0) {
            setCount(galleryImages.length - 1);
            setCarouselImage(galleryImages[galleryImages.length - 1]);
        } else {
            setCount(count - 1);
            setCarouselImage(galleryImages[count - 1]);
        }
    }

    const carouselNext = () => {
        if (count >= galleryImages.length - 1) {
            setCount(0);
            setCarouselImage(galleryImages[0]);
        } else {
            setCount(count + 1);
            setCarouselImage(galleryImages[count + 1]);
        }
    }

    return (
        <div className="carousel-container">
            <div onClick={() => carouselBack()}>back</div>
                <div className="carousel-view">
                    {carouselImage}
                </div>
            <div onClick={() => carouselNext()}>forward</div>
        </div>
    );
}

export default Carousel;