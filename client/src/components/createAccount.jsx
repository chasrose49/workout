import React, { Component } from 'react';
import axios from 'axios';
import "../index.css"
import Nav from "./navbar"
//create component and export at the same time
export default class CreateAccount extends Component {
    constructor(props) {
        super(props);
        //set original state to empty string
        this.state = {
            user: '',
            email: '',
            password: ''
        }
        //binding on change functions to reset state 
        this.onChangeUser = this.onChangeUser.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this)
        //binding submit 
        this.onSubmit = this.onSubmit.bind(this);
    }//end constructor 

    ///creating onChange event functions to grab value from the form and setState to use in database
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    };
    onChangeUser(e) {
        this.setState({
            user: e.target.value
        });
    };
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    };

    //on submit using prevent default to stop page refresh
    onSubmit(e) {
        e.preventDefault();
        const newUser = {
            user: this.state.user,
            password: this.state.password,
            email: this.state.email
        }
        console.log(newUser)
        axios.post("http://localhost:3001/user/create_account", newUser)
            .then(res => console.log(res.data));
        window.location = `/login`
    };

    render() {
        return (
            <div>
                <Nav />
                <div className="container"><br />
                    <form onSubmit={this.onSubmit}>
                        <label id="nameLabel">User Name:</label>
                        <input type='text'
                            placeholder="Last,First, M"
                            required
                            className="form-control"
                            value={this.state.user}
                            onChange={this.onChangeUser}
                        ></input>
                        <label id="emailLabel">User Email:</label>
                        <input type='email'
                            placeholder="Email Required"
                            required
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        ></input>
                        <label id="passwordLabel">User Password:</label>
                        <input type='password'
                            placeholder="Create Password"
                            required
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                        ></input>    <br />
                        <div className=" text-center">
                            <input type="submit" value="Create" className='btn btn-primary' />
                        </div>
                    </form><br />
                </div>
                <div className="text-center"> <p className='small-red-drink'>* you will be requird to log in after your account has been created</p>
                    <img src={require('../images/signup.jpeg')} className="img-fluid borderImg" alt="book and pen" />
                </div>
   
            </div>
        )//return
    }//render
}//component




