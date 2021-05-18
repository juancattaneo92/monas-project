import React, { Component } from 'react'


export class About extends Component {


    render() {

        return (
            <section className="about">
                <div className="container">
                    <div class="about-wrapper">
                        <div className="about-image">
                            <img data-aos='zoom-in' data-aos-duration='500' src={window.mugshot} alt="" />
                        </div>
                        <div data-aos='zoom-in' data-aos-duration='500' className="about-content">
                            <h2 className="about-title">Our Story</h2>
                            <p className="grass-fed-blurb" >
                                Opened in July 2014 in Walnut Creek, California, Mona's Burgers has developed quite the reputation for its unique combination of gourmet burgers and specialty shakes. We hand-select all of our wines and beers and test every combination to bring you the perfectly crafted mouth watering burgers you've come to expect at Mona's. <br/>
                                If Da Vinci were still around, this would be his favorite burger spot, guaranteed.</p>
                            <button data-aos='zoom-out' data-aos-duration='500' data-aos-delay="100" className="action-button-b learn-more-button">Contact</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About