import React from 'react'

const Catering = () => {
  return (
    <section className="feature-catering">
      <div className="feature-wrapper">
        <h1>Catering is also available!</h1>
        <h2>WE'LL BRING YOU MONAS TO YOU</h2>
        <h2>let us bring you all our flavors to you. We offer full-service catering for every event</h2>
      </div>
      <form className="feature-form">
        <label className="feature-label">Full Name <br/>
            <textarea type="text" placeholder="Full Name" />
        </label >
        <label className="feature-label">Phone Number <br/>
          <textarea type ="text" placeholder="Phone Number" />
        </label>
        <label className="feature-label">Email <br/>
          <textarea type ="text" placeholder="Email"/>
        </label>
        <label className="feature-label">Message <br/>
          <textarea type="text" placeholder="Message" />
        </label>
      </form>
    </section>
  )
}

export default Catering
