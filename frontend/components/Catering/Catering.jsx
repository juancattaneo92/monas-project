import React, {useState} from 'react'

//Add all things commented to allow send emails to the email of monas for catering and other concerns
//create an account to emailJS and then connect your email, add those ids and ready to go
// import emailjs from 'emailjs-com'
//instal => npm install emailjs-com --save

const Catering = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) =>{
      e.preventDefault();
        console.log("it works for now, it should send email")
    };

    // function sentEmail(e){
    //   e.preventDefault();

    //   emailjs.sendForm('YOUR SERVICE ID (GMAIL)', 'TEMPLATE ID CREATED AT emailJS', e.target, 'YOUR USER ID')
    //   .then((result) => {
    //       console.log(result.text)
    //   }, (error) => {
    //     console.log(error.text)  
    //   })
    // }

  return (
    <section className="feature-catering">
      <div className="feature-wrapper">
        <h1>Catering is also available!</h1>
        <h2>WE'LL BRING MONAS TO YOU</h2>
        <h2>let us bring you all our flavors to you. We offer full-service catering for every event</h2>
      </div>
      <form className="feature-form" onSubmit={handleSubmit}>
      {/* <form className="feature-form" onSubmit={sendEmail}> */}
          <input 
            type="text" 
            placeholder="Full Name" 
            name="fullName"
            value={fullName}
            onChange={()=>setFullName(e.target.value)}/><br />
          <input 
            type ="number" 
            placeholder="Phone Number" 
            name="phone"
            value={phone}
            onChange={()=>setPhone(e.target.value)}/><br />
          <input 
            type ="email" 
            placeholder="Email" 
            name="email"
            value={email}
            onChange={()=>setEmail(e.target.value)}/><br />
          <textarea 
            rows="10" 
            placeholder="Your Message" 
            name="message" 
            value={message}
            onChange={()=>setMessage(e.target.value)}/><br 
            />
          <button type="submit" className="action-button">Send</button>
      </form>
    </section>
  )
}

export default Catering
