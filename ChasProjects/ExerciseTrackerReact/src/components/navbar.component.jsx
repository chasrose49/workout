import React, { Component } from "react";
import { Link } from 'react-router-dom';



export default class Navbar extends Component {

    render() {

        return (

            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                  <img src={require('../fortracker.jpeg')} id="logo" className="navbar-item" alt="logo" height="135px" />
                <div className="navbar-nav">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item ">
                            <Link to="/list" className="nav-link">Exercises</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Exercise Log</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Create User</Link>
                        </li>
                       <li className="navbar-item">
                        <Link className="nav-link" to="/rate">Rate App</Link>
                          </li>
                        
                    </ul>   
                       
                </div>
            </nav>
        );
    };
};