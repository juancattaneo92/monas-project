import React, { Component } from 'react'


export class About extends Component {


    render() {

        return (
            <section className="feature-2">
                <div className="feature-wrapper">
                    <div className="feature-image-container">
                        <img data-aos='zoom-in' data-aos-duration='500' className="feature-2-image" src={window.mugshot} alt="" />
                    </div>
                    <div data-aos='zoom-in' data-aos-duration='500' className="grass-fed-blurb-container">
                        <h2 className="feature-title">About</h2>
                        <p className="grass-fed-blurb" >

                            Opened in July 2014 in Walnut Creek, California, Mona's Burgers has developed quite the reputation for its unique combination of gourmet burgers and specialty shakes. We hand-select all of our wines and beers and test every combination to bring you the perfectly crafted mouth watering burgers you've come to expect at Mona's. <br/>
If Da Vinci were still around, this would be his favorite burger spot, guaranteed.</p>
                        <button data-aos='zoom-out' data-aos-duration='500' data-aos-delay="100" className="action-button-b learn-more-button">Contact</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default About