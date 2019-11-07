import React, { useState, useEffect, useRef } from 'react';

function Carousel(props) {

    const [count, setCount] = useState(0);
    const [carouselLegend, setCarouselLegend] = useState("lune");
    const [carouselImage, setCarouselImage] = useState(0);
    const [fade, setFade] = useState("");

    const carouselView = useRef();
    const carouselIndex = useRef();

    useEffect(() => {
        setCarouselLegend(carouselLegendIndex[count]);
        setFade("fade-in");
        carouselIndexLogic();
    }, [count])

    const carouselIndexLogic = () => {      
        //logic for index-dot to update as well as images to fade in
        const currentIndex = carouselIndex.current.querySelectorAll("span");
        currentIndex.forEach((index) => {
            index.className = index.className.replace(" active", "");
        })
        currentIndex[count].className += " active";
        setCarouselImage(galleryImages[count]);

    }

    const carouselLegendIndex = [
        "01. Infyonboard","02. Glide","03. LUNE","04. risd id rebrand", "05. YELORT"
    ]

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
                    <div className="carousel-legend">
                        {carouselLegend}
                    </div>       
                    <div className={`carousel-image ${fade}`}>
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