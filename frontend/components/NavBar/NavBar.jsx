import React, { Component } from 'react'

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            name: "",
            phone: "",
            password: "",
            email: "",
        };

    }

    handleSubmit(e) {
        e.preventDefault();
        
        console.log(this.state, "_____________________")
        this.props.signup(this.state)
    }

    handleChange(field) {
        return (e) =>
            this.setState({
                [field]: e.currentTarget.value,
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input type="text" onChange={this.handleChange("name")} value={this.state.name} placeholder="Name" />
                <input type="text" onChange={this.handleChange("phone")} value={this.state.phone} placeholder="phone" />
                <input type="text" onChange={this.handleChange("email")} value={this.state.email} placeholder="email" />
                <input type="password" onChange={this.handleChange("password")} value={this.state.password} placeholder="password" />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default NavBar


