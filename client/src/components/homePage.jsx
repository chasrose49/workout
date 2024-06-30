import React, { Component } from 'react';
import "../index.css"
import Nav from "./navbar"
export default class About extends Component {
    render() {
        return (   
        <div > 
     <Nav /> 
     
        <div className="container">
       <br /><br /><br />
            <h3 className="text-center underline homePageHeader">Welcome to Personal Trainer</h3><br />
            <h2 className="text-center">Build your own workouts</h2>
            <h2 className="text-center">Build your own food journal</h2>
            <br />
            <h2 className="text-danger text-center blue-shadow ">Be Your Own Personal Trainer</h2>
            <div className="container-fluid"><br/>
                <div className='row'>
                    <div className='col-sm-4 '> <img src={require('../images/dumbellbar.jpeg')} className="img-fluid homepic" alt="partner push ups" /></div>
                    <div className='col-sm-4'> <img src={require('../images/cake_phone.jpeg')} className="img-fluid homepic" alt="partner push ups" /></div>
                    <div className='col-sm-4'> <img src={require('../images/sunsetrun.jpeg')} className="img-fluid homepic" alt="partner push ups" /></div>
                </div>
            </div><br/>

          <h1 className="text-center">Learn to keep yourself stay on track</h1>
       </div>
       </div>   
        )
    }
}