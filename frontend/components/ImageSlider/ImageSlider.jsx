import React, { useState, useRef, useEffect } from 'react'
import {FaArrowCircleLeft} from "react-icons/fa"
import { FaArrowCircleRight } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"


const ImageSlider = ({slides}) => { 

    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);
    const fadeAnimation = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } },
        exit: {opacity:0}
    }
    
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
            <AnimatePresence>
            {slides.map((slide, index) => {
                return (
                <div  key={index} className="slide">
                        { index === current && (
                            <div className="image-wrapper">
                                <motion.img className="hero-image" src={slide.imageUrl} alt={slide.alt}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={ fadeAnimation}
                                />
                                
                                <div className="call-to-action">
                                    <div className="caption-wrapper">
                                        <p data-aos="fade-down" data-aos-duration="600" className="hero-caption" >{slide.caption}</p>
                                        <p data-aos="fade-down" data-aos-duration="600"data-aos-delay="200" className="hero-info">{slide.info}</p>
                                        <button data-aos='zoom-out' data-aos-duration='500'data-aos-delay="500" className="action-button-a">View Menu</button>
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
                            </AnimatePresence>
                
        </div>
    )
}

export default ImageSlider
