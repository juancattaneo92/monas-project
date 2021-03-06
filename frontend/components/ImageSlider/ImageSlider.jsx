import React, { useState, useRef, useEffect } from 'react'
import {FaArrowCircleLeft} from "react-icons/fa"
import {FaArrowCircleRight} from "react-icons/fa"

const ImageSlider = ({slides}) => { 

    const [current, setCurrent] = useState(0);
    const length = slides.length;
      const timeout = useRef(null);
    
    // useEffect(() => {
    //     const nextSlide = () => { 
    //         setCurrent(current=> (current === length - 1 ? 0: current + 1))
    //     }
    //     timeout.current = setTimeout(nextSlide, 3000)
    //     return function () { 
    //         if (timeout.current) { 
    //             clearTimeout(timeout.current)
    //         }
    //     }
    // }, [current, length])

    const nextSlide = () => { 
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => { 
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    if (!Array.isArray(slides) || slides.length <= 0) return null;
    return (
        <div className="image-slider-container">
            {slides.map((slide, index) => {
                
                return (
                <div  key={index} className="slide">
                        { index === current && (
                            <div className="image-wrapper">
                                <img className="hero-image" src={slide.imageUrl} alt={slide.alt} />
                                <div className="call-to-action">
                                    <div className="caption-wrapper">
                                        <p className="hero-caption">{slide.caption}</p>
                                        <p className="hero-info">{slide.info}</p>
                                        <button className="action-button">View Menu</button>
                                    </div>
                                    <div className="hero-button-container">
                                        <div className="hero-button-wrapper">
                                        <FaArrowCircleLeft className="hero-buttons" onClick={nextSlide}/>
                                            <FaArrowCircleRight className="hero-buttons" onClick={prevSlide} />
                                            </div>
                                    </div>
                                </div>
                            </div>
                    )}
                </div>
               )
            })
            }
        </div>
    )
}

export default ImageSlider
