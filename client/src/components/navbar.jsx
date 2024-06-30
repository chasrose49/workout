import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "../index.css"


export default class NavBarPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home: false,
            workouts: false,
            journal: false,
            login: false,
             text:"Log In"

        };
        this.LogInDisplay = this.LogInDisplay.bind(this);
        this.homeDisplay = this.homeDisplay.bind(this);
        this.journalDisplay = this.journalDisplay.bind(this);
        this.workoutDisplay = this.workoutDisplay.bind(this)
        this.changeText=this.changeText.bind(this)
    };

    LogInDisplay() {
        this.setState({
            login: true
        })
    };
    homeDisplay() {
        this.setState({
            login: false,
            journal: false,
            workouts: false
        })
    };
    journalDisplay() {
        this.setState({
            journal: true
        })
    }
    workoutDisplay() {
        this.setState({
            workouts: true
        })
    }
    changeText(){
      
    }


    render() {
        if (this.state.login === true) {
            return <div>
                <nav className="navbar bg-dark changedNav">
                   <h1 className="shadow"><Link to='/login' className='nav-links text-danger text-bold' onClick={this.changeText}>{this.state.text}</Link></h1> 
                   <h1 className="shadow"> <Link to="/create_new_account" className='nav-links text-danger text-bold' >Create Account</Link></h1>
                   <h1 className="shadow"><Link to="/" className='nav-links text-danger text-bold'  onClick={this.homeDisplay}>Home</Link></h1> 
                </nav>
            </div>
        }


        if (this.state.workouts === true) {
            return <div>
                <nav className="navbar bg-dark changedNav">
                   <h1 className="shadow"> <Link to="/about_workouts" className='nav-links text-danger text-bold' >About Workouts</Link></h1>
                   <h1 className="shadow"><Link to="/workout_instructions" className='nav-links text-danger text-bold' >Workout Instructions</Link></h1> 
                    <h1 className="shadow"><Link to="/" className='nav-links text-danger text-bold' onClick={this.homeDisplay}>Home</Link></h1>
                </nav>
            </div>


        }
        if (this.state.journal === true){
            return <div>
            <nav className="navbar bg-dark changedNav">
                <h1 className="shadow"><Link to="/about_bmi" className='nav-links text-danger text-bold'>About BMI</Link></h1>
                <h1 className="shadow"><Link to='/find_food_points' className='nav-links text-danger text-bold'>Food Points</Link></h1>
               <h1 className="shadow"><Link to="/" className="nav-links text-danger text-bold" onClick={this.homeDisplay}>Home</Link></h1> 
            </nav>
        </div>

        }


        return (
            <div className="App">
                <nav className="navbar bg-dark homeNav">
                    <img src={require('../images/logo.jpeg')} id="logo" className="img-fluid" alt="logo" />
                    <h3 className='nav-links text-white red-shadow' onClick={this.LogInDisplay}>Account</h3>
                    <h3 className='nav-links text-white red-shadow'  onClick={this.workoutDisplay}>Workouts</h3>
                    <h3 className='nav-links text-white red-shadow' onClick={this.journalDisplay}>Journal</h3>
                </nav>



            </div>
        )
    }
}