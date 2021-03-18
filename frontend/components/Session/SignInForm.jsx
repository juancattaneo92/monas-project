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
        <div className="" onClick={this.props.closeModal}>x</div>
        <form onSubmit={this.handleSubmit} >
          <div>
            <h2 className="">{this.props.formType}</h2>
            <h2 className="">{this.props.otherForm}</h2>
          </div>
          <div>
            {/* <label>Name
                        <br />
              <input className="" type="text" onChange={this.handleChange("name")} value={this.state.name} onChange={this.handleChange('name')} placeholder="Name" />
            </label>
            <label>Phone
                        <br />
              <input className="" type="text" onChange={this.handleChange("phone")} value={this.state.phone} onChange={this.handleChange('phone')} placeholder="Phone" />
            </label> */}
           
               <br />
              <input className="" type="text" onChange={this.handleChange("email")} value={this.state.email} onChange={this.handleChange('email')} placeholder="Email" />
          
            
              <br />
              <input className="" type="password" onChange={this.handleChange("password")} value={this.state.password} onChange={this.handleChange('password')} placeholder="Password" />
            <button className="" type="submit" value={this.props.formType}>{this.props.formType}</button>
            {/* <div className="" >{this.renderErrors()}</div> */}
          </div>
        </form>
        
      </div>
    )
  }
}


export default SignInForm
