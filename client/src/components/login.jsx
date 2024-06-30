import React, { Component } from 'react';
import axios from 'axios';
import Nav from "./navbar"
import "../index.css"


//create component and export at the same time
export default class LogIn extends Component {
    constructor(props) {
        super(props);
        //set original state to empty string
        this.state = {
            user: '',
            email: '',
            password: '',
            results: [],
            login: false,
            id: '',
      
        }
        //binding on change functions to reset state 
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        //binding submit 
        this.onSubmit = this.onSubmit.bind(this);
        
    }//end constructor 
    ///creating onChange event functions to grab value from the form and setState to use in database
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    };
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    };
    onSubmit(e) {
        e.preventDefault()
        this.handleGet(this.state.results)
    }
    handleGet() {
        let email = this.state.email
        let loginPassword = this.state.password
        axios.get(`http://localhost:3001/user/login/${email}`).then(response => {
            this.setState({
                results: response.data
            })
            let databasePassword = this.state.results.password
            if (loginPassword === databasePassword) {
                this.setState({
                    login: true,
                    user: this.state.results.user,
                    password: databasePassword,
                    email: this.state.results.email,
                    id: this.state.results._id
                })
                console.log(this.state.results)
             window.location = `/user_menu/${this.state.id}`
            } else {
                console.log("no match")
            }
        }).catch((error) => {
            if (error) {
                window.location = `/create_new_account`
            }
        })
    }

    render() {

        return (<div>
            <Nav />
            <div className="container" ><br />
                <h1 className="text-center"><b>Log In</b></h1><br />
                <form onSubmit={this.onSubmit}>
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
                        placeholder="Enter Password"
                        required
                        className="form-control"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                    ></input><br />
                    <div className="form-group text-center">
                        <input type="submit" value="Log In" className='btn btn-primary' />
                    </div>
                </form><br />
                <div className="text-center">
                    <img src={require('../images/workoutbarbells.jpeg')} className="img-fluid borderImg" alt="partner push ups" />
                </div>
           </div> 
           </div>)
    }
}
