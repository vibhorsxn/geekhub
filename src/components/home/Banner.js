import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = ({ url, image }) => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src=" "
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src=" "
                        alt="Third slide"
                    />


                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Banner
