import React, { Component } from 'react'
import ImageSlider from '../ImageSlider/ImageSlider'

export class Hero extends Component {
    constructor(props) { 
        super(props)
    }

    
    render() {
        return (
            <section className="hero-section">
                <ImageSlider slides={ this.props.slides} />
            </section>
        )
    }
}

export default Hero
