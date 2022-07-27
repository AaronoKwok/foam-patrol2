import React, {useState} from "react" 
import barrel from "../images/barrel.png"
import coupleBus from "../images/couplebus.png" 
import sunsetlb from "../images/sunsetlb.png"  
import emptywave from "../images/emptywave.png"  



import Carousel from 'react-bootstrap/Carousel';

function BackScene() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={barrel}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={coupleBus}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={emptywave}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default BackScene;