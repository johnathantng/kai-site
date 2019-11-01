import React, { useState, useEffect, useRef } from 'react';

function Carousel(props) {

    const [count, setCount] = useState(0);
    const [carouselImage, setCarouselImage] = useState(0);

    const carouselIndex = useRef();

    useEffect(() => {
        const currentIndex = carouselIndex.current.querySelectorAll("span");
        currentIndex.forEach((index) => {
            console.log(index.className);
            index.className = index.className.replace(" active", "");
        })
        currentIndex[count].className += " active";
    })

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
            <div ref={carouselIndex} className="carousel-index">
                <span className="index-dot" onClick={() => setCount(0)}></span>
                <span className="index-dot" onClick={() => setCount(1)}></span>
                <span className="index-dot" onClick={() => setCount(2)}></span>
                <span className="index-dot" onClick={() => setCount(3)}></span>
                <span className="index-dot" onClick={() => setCount(4)}></span>
            </div>
        </div>
    );
}

export default Carousel;