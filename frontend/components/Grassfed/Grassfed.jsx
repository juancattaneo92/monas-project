import React, { Component } from 'react'


export class Grassfed extends Component {
    

    render() {
        
        return (
            <section className="feature-1">
                <div className="feature-wrapper">
                    <div className="grass-fed-blurb-container">
                        <h2 className="feature-title">Why Grassfed Matters</h2>
                    <p className="grass-fed-blurb" > 

Mona's Burgers are made with Non-Antibiotic, 100% grass-fed beef from cows only from Niman Ranch, never frozen, delivered every single day...</p>
                        <button className="action-button learn-more-button">Learn More</button>
                </div>
                <div className="feature-image-container">
                    <img className="feature-1-image"src={ window.feature_1_url} alt=""/>
                    </div>
                    </div>
            </section>
        )
    }
}

export default Grassfed
