import React, { Component } from 'react'


export class Grassfed extends Component {
    

    render() {
        
        return (
            <section className="feature-1">
                <div className="feature-wrapper">
                    <div data-aos='zoom-in' data-aos-duration='500' className="grass-fed-blurb-container">
                        <h2 className="feature-title">Why Grassfed Matters</h2>
                         <p className="grass-fed-blurb" > 
                        Mona's Burgers are made with 100% grass-fed beef from cows only from Niman Ranch, never frozen, delivered every single day...
                        <br />
                        At Niman Ranch, animals are never given antibiotics or added hormones – EVER and are only fed a high-quality, 100% vegetarian diet.
                        <br />
                        We believe at Mona's, quality comes first in everything we do, in our food, our service, and the overall consistency of your dining experience.</p>

                        <a href="https://www.nimanranch.com/" target="_blank" rel="noopener noreferrer" data-aos='zoom-out' data-aos-duration='500' data-aos-delay="100" className="action-button-a learn-more-button">Learn More</a>
                    </div>
                    <div className="feature-image-container">
                        <img data-aos='zoom-in' data-aos-duration='500' className="feature-1-image"src={ window.feature_1_url} alt=""/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Grassfed
