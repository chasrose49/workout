import React, { Component } from 'react';
import { createUser } from '../api'
import { Link } from 'react-router-dom/cjs/react-router-dom';

//create component and export at the same time
export default class CreateAccount extends Component {
    constructor(props) {
        super(props);
        //set original state to empty string
        this.state = {
            name: '',
            password: '',
            matched:false,
            user:[],
            matchedUserId:"",
            matchedUserName:"",
          }
        //binding on change functions to reset state 
        this.onChangeUser = this.onChangeUser.bind(this);

        this.onChangePassword = this.onChangePassword.bind(this)
        //binding submit 
        this.onSubmit = this.onSubmit.bind(this);
    }//end constructor 

    ///creating onChange event functions to grab value from the form and setState to use in database

    onChangeUser(e) {
        this.setState({
            name: e.target.value
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
            name: this.state.name,
            password: this.state.password,

        }
    createUser(newUser).then((res)=> {
   console.log(res.data)
         this.setState({
             matched:true,
            user:res.data
            })
            this.state.user.map(property=>{
                console.log(property.name)
                return this.setState({
                   matchedUserId:property._id,
                   matchedUserName:property.name
                 
                })
            })
         }).catch(err => console.log(err))
       };

    render() {
   if(this.state.matched===true){
let link= "/user/"+this.state.matchedUserId
        return <div>
<h1> Welcome {this.state.matchedUserName}</h1>
<p>To see your Tracker <Link to={link}>Click Here</Link></p>
 </div>
 }
   
        return (
            <div>
           Create/log In
                <div className="container"><br />
                    <form onSubmit={this.onSubmit}>
                        <label id="nameLabel">User Name:</label>
                        <input type='text'
                            placeholder="Last,First, M"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeUser}
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
            </div>

          
        )//return
    }//render
}//component




