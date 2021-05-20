import React from 'react'

const Catering = () => {
  return (
    <section className="feature-catering">
      <div className="feature-wrapper">
        <h1>Catering is also available!</h1>
        <h2>WE'LL BRING MONAS TO YOU</h2>
        <h2>let us bring you all our flavors to you. We offer full-service catering for every event</h2>
      </div>
      <form className="feature-form">
          <input type="text" placeholder="Full Name" /><br />
          <input type ="text" placeholder="Phone Number" /><br />
          <input type ="text" placeholder="Email"/><br />
          <textarea rows="10" placeholder="Your Message"/><br />
          <button className="action-button">Send</button>
      </form>
    </section>
  )
}

export default Catering
