import React, { Component } from 'react';
import axios from 'axios';
import CreateWorkout from './createWorkouts';
import Exercise from './viewWorkouts';
import "../index.css"
import CalculatePointsJournal from './calculatePoints';
import ViewJournal from './viewJournal';
import NavBar from './navbar'
//create component and export at the same time
export default class Menu extends Component {
    constructor(props) {
        super(props);
        //set original state to empty string
        this.state = {
            user: '',
            email: '',
            results: [],
            id: '',
            exercises: [],
            journal: [],
            create_workout: false,
            view_workouts: false,
            create_journal: false,
            view_journal: false
        }
        // bind functions
        this.createWorkouts = this.createWorkouts.bind(this);
        this.viewWorkouts = this.viewWorkouts.bind(this);
        this.createJournal = this.createJournal.bind(this);
        this.viewJournal = this.viewJournal.bind(this);
    }
    componentDidMount() {
        axios.get(`http://localhost:3001/user/user_menu/${this.props.match.params.id}`).then(response => {
            this.setState({
                results: response.data,
                user: this.state.results.user,
                email: this.state.results.email,
                id: this.state.results._id,
         })
          
        }).catch((error) => {
            throw error;
        })
    }
    viewWorkouts(e) {
        e.preventDefault()
        this.setState({
            view_workouts: true
        })
        let id = this.state.results._id
        window.location = `/user_workouts/${id}`
        console.log(id)
    }
    createWorkouts(e) {
        e.preventDefault()
        this.setState({
            create_workout: true
        })
    }
    createJournal(e) {
        e.preventDefault()
       
        this.setState({
            create_journal: true
        })
    }
    viewJournal(e) {
        e.preventDefault()
        this.setState({
            view_journal: true
        })
    }


    exerciseList() {
        return this.state.exercises.map(currentexercise => {
            return <Exercise exercise={currentexercise}
                deleteExercise={this.deleteExercise}
                key={currentexercise._id} />;
        })
    }
    render() {
        if (this.state.create_workout === true) {
            return <div><CreateWorkout user={this.state.results.user} password={this.state.results.password} id={this.state.results._id} email={this.state.results.email} />
                <p className="text-center text-success underline" onClick={this.viewWorkouts}> Go To My Workouts</p>
                <div className='container'>{this.exerciseList()}</div>
            </div>
        }
        if (this.state.create_journal === true) {
            return <div> <CalculatePointsJournal user={this.state.results.user} password={this.state.results.password} id={this.state.results._id} email={this.state.results.email} /></div>
        }
        if (this.state.view_journal === true) {
            return <div>
                <ViewJournal user={this.state.results.user} password={this.state.results.password} id={this.state.results._id} email={this.state.results.email} />
            </div>
        }
        return (<div>
<NavBar />
            <br />
            <div className='container'>
                <h1 className="text-center bold">Hello {this.state.results.user}</h1><br />
                <div className="row clickCards">
                    <div className='card col-sm-4' onClick={this.createWorkouts}>
                        <div className="card-header"> <p className="text-center">Create Workout</p></div>
                        <img src={require('../images/weight.jpeg')} className="img-fluid" alt="partner push ups" />
                        <h6 className="click text-center"><b>Click</b></h6>
                    </div>

                    <div className='card col-sm-4' onClick={this.viewWorkouts}>
                        <div className="card-header"><p className="text-center">View Workout</p></div>
                        <img src={require('../images/workoutbarbells.jpeg')} className="img-fluid" alt="partner push ups" />
                        <h6 className="click text-center"><b>Click</b></h6>
                    </div>
                </div>
            </div><br />
            <div className='container'>
                <div className="row clickCards">
                    <div className='card col-sm-4' onClick={this.createJournal}>
                        <div className="card-header"> <p className="text-center">Create Journal </p></div>
                        <img src={require('../images/journalentry.jpeg')} className="img-fluid" alt="partner push ups" />
                        <h6 className="click text-center"><b>Click</b></h6>
                    </div>

                    <div className='card col-sm-4' onClick={this.viewJournal}>
                        <div className="card-header"><p className="text-center">View Journal</p></div>
                        <img src={require('../images/journalbook.jpeg')} className="img-fluid" alt="partner push ups" />
                        <h6 className="click text-center"><b>Click</b></h6>
                    </div>
                </div>
            </div>

        </div>)
    }

}