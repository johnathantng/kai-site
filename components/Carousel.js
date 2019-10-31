import React, { useState, useEffect } from 'react';

function Carousel(props) {

    const [count, setCount] = useState(0);
    const [carouselImage, setCarouselImage] = useState(0);

    const galleryImages = [
        // props.imageOne,
        // props.imageTwo
        0,1
    ]

    const carouselBack = () => {
        if (count == 0) {
            setCount(galleryImages.length - 1);
            setCarouselImage(galleryImages[count]);
        } else {
            setCount(count - 1);
            setCarouselImage(galleryImages[count]);
        }
    }

    return (
        <div className="carousel-container">
            <div onClick={() => carouselBack()}>back</div>
                <div className="carousel-view">
                    {carouselImage}
                </div>
            <span>forward</span>
        </div>
    );
}

export default Carousel;