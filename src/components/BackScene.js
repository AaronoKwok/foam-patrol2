import React from "react" 
//import Carousel from 'react-bootstrap/Carousel';

import useWindowWidth from "../hooks/useWindowWidth"
import marWave from "../images/margarita-salyek-wave.png"

import BacksceneText from "./BacksceneText" 

function BackScene() {
    return (
        <div>
            {
               (useWindowWidth()) && 
               <div className="background">
                    <img className="background-image-mobile" src={marWave} alt="" />
                    <BacksceneText />                
                </div>
            }
            {
                (!useWindowWidth()) &&
                <div className="background">
                    <img className="background-image" src={marWave} alt="" />
                    <BacksceneText />                
                </div>
            }
        </div>
        
    )
}

export default BackScene;

   /*  CAROUSEL didnt work
   
   const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
    }
    
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100   "
                    src={barrel}
                    alt="First slide"
                />

                <Carousel.Caption>
                    <h3   >First slide label</h3>
                    <p    >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100   "
                    src={coupleBus}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3   >Second slide label</h3>
                    <p    >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100   "
                    src={emptywave}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3   >Third slide label</h3>
                    <p    >Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100   "
                    src={sunsetlb}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3   >Third slide label</h3>
                    <p    >Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    ); */