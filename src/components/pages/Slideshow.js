import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Slideshow() {
    const slideshow = [
        {
            id: 1,
            image: require('../../assets/images/barn.png')
        },
        {
            id: 2,
            image: require('../../assets/images/carousel/IMG_1089.png')
        },
        {
            id: 3,
            image: require('../../assets/images/carousel/66491323011__6C57BA4A-9089-4591-9DFF-F3679AD77E21.png')
        },
        {
            id: 4,
            image: require('../../assets/images/carousel/69291495874__B2CF114D-6AC6-4CC2-A384-BAC9F70AAE05.png')
        },
        {
            id: 5,
            image: require('../../assets/images/carousel/70594754093__85193C2E-7AEA-4585-A382-F385BAE330AA.png')
        },
        {
            id: 6,
            image: require('../../assets/images/carousel/IMG_0290.png')
        },
    ]
    return (
        <div className="slideShow">
            <h1>Happy Pets</h1>
            {/* <Carousel>
                {slideshow.map((data) =>
                    <div key={data.id}>
                        <Carousel.Item>
                            <p></p>
                        </Carousel.Item>
                    </div>
                )}

            </Carousel> */}
            <Carousel>
                <Carousel.Item>
                    <img
                    src={slideshow[0].image}
                    alt="slideShowImage"
                    className="slideshow-image"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    src={slideshow[1].image}
                    alt="slideShowImage"
                    className="slideshow-image"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    src={slideshow[2].image}
                    alt="slideShowImage"
                    className="slideshow-image"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    src={slideshow[3].image}
                    alt="slideShowImage"
                    className="slideshow-image"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    src={slideshow[4].image}
                    alt="slideShowImage"
                    className="slideshow-image"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    src={slideshow[5].image}
                    alt="slideShowImage"
                    className="slideshow-image"
                    />
                </Carousel.Item>
            </Carousel>   
        </div>
    )
}