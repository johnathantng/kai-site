import React, { useState, useEffect, useRef } from 'react';

function Carousel(props) {

    const [count, setCount] = useState(0);
    const [carouselImage, setCarouselImage] = useState(0);
    const [fade, setFade] = useState("");

    const carouselView = useRef();
    const carouselIndex = useRef();

    useEffect(() => {
        setFade("fade-in")
        carouselIndexLogic();
    }, [count])

    const carouselIndexLogic = () => {      
        //logic for index-dot to update as well as images to fade in
        const currentImage = carouselView.current.querySelectorAll("div");
        const currentIndex = carouselIndex.current.querySelectorAll("span");
        currentIndex.forEach((index) => {
            index.className = index.className.replace(" active", "");
        })
        currentIndex[count].className += " active";
        setCarouselImage(galleryImages[count]);

    }

    const galleryImages = [
        // props.imageOne,
        // props.imageTwo
        1,2,3,4,5
    ]

    const carouselBack = () => {
        if (count == 0) {
            setCount(galleryImages.length - 1);
            setCarouselImage(galleryImages[galleryImages.length - 1]);
            setFade("");
        } else {
            setCount(count - 1);
            setCarouselImage(galleryImages[count - 1]);
            setFade("");
        }
    }

    const carouselNext = () => {
        if (count >= galleryImages.length - 1) {
            setCount(0);
            setCarouselImage(galleryImages[0]);
            setFade("");
        } else {
            setCount(count + 1);
            setCarouselImage(galleryImages[count + 1]);
            setFade("");
        }
    }

    const handleIndexClick = (index) => {
        setCount(index);
        setFade("");
    }

    return (
        <div className="carousel-container">
            <div onClick={() => carouselBack()}>back</div>
                <div ref={carouselView} className="carousel-view">            
                    <div className={`carouselImage ${fade}`}>
                        {carouselImage}
                    </div>
                </div>
            <div onClick={() => carouselNext()}>forward</div>
            <div ref={carouselIndex} className="carousel-index">
                <span className="index-dot" onClick={() => handleIndexClick(0)}></span>
                <span className="index-dot" onClick={() => handleIndexClick(1)}></span>
                <span className="index-dot" onClick={() => handleIndexClick(2)}></span>
                <span className="index-dot" onClick={() => handleIndexClick(3)}></span>
                <span className="index-dot" onClick={() => handleIndexClick(4)}></span>
            </div>
        </div>
    );
}

export default Carousel;