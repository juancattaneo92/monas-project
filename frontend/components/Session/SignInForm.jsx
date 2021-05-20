import React from 'react'


class SignInForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        name: "",
        phone: "",
        password: "",
        email: "",
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  handleChange(field) { //update
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  // renderErrors() {
  //   return (
  //     <ul>
  //       {this.props.errors.map((error) => (
  //         <li error={error} key={`error-${error.id}`}></li>
  //       ))}
  //     </ul>
  //   );
  // }


  render() {
    return (
      <div className="session-form-wrapper mt-5">
        <div className="close-x" onClick={this.props.closeModal}>x</div>
        <form className="session-container" onSubmit={this.handleSubmit} >
          <div>
            <h2 className="session-title">{this.props.formType}</h2>
          </div>
          <div>
           
               <br />
              <input className="field" type="text" onChange={this.handleChange("email")} value={this.state.email} onChange={this.handleChange('email')} placeholder="Email" />
          
            
              <br />
            <input className="field" type="password" onChange={this.handleChange("password")} value={this.state.password} onChange={this.handleChange('password')} placeholder="Password" />
              <br/>
            <button className="action-button-a" type="submit" value={this.props.formType}>{this.props.formType}</button>
            <br/>
            <h2 className="change-form">New to Monas? 
              <a>{this.props.otherForm}</a>
            </h2>
            {/* <div className="" >{this.renderErrors()}</div> */}
          </div>
        </form>
        
      </div>
    )
  }
}


export default SignInForm
