import React, { Component } from 'react';
import axios from 'axios';
import "../index.css"
import Exercise from './viewWorkouts'
import WorkoutInstructions from './workoutInstructions'




export default class UserWorkouts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exercises: [],
            userId: '',
            showInstructions: false,
            showWorkouts: false

        }
        this.handleShowInstructions = this.handleShowInstructions.bind(this)
        this.deleteExercise = this.deleteExercise.bind(this)
        this.handleShowWorkouts = this.handleShowWorkouts.bind(this)
     
    }
    componentDidMount() {
        axios.get(`http://localhost:3001/user/user_workouts/` + this.props.match.params.id)
            .then(response => {
           
                this.setState({
                    exercises: response.data
                })

                this.setState({
                    userId: this.state.exercises[0].user[0]._id
                })

            }).catch(function (error) {
                console.log(error)
            })
    }

    exerciseList() {
        return this.state.exercises.map(currentexercise => {
            return <Exercise exercise={currentexercise}
                deleteExercise={this.deleteExercise}
                key={currentexercise._id} />;
        })
    }

  
  deleteExercise(id) {
        console.log(id)
        axios.delete('http://localhost:3001/user/delete/' + id)
            .then(res => console.log(res.data));
        this.setState({
            exercises: this.state.exercises.filter(el => el._id !== id)
        })
    }

    handleShowInstructions() {
        this.setState({
            showInstructions: true
        })
    }
    handleShowWorkouts() {
        this.setState({
            showInstructions: false
        })
    }


    render() {
        if (this.state.showInstructions === true) {
            return <div>
                <p><span onClick={this.handleShowWorkouts} className="text-primary underline text-center">Go Back</span></p>
                <WorkoutInstructions /></div>
        }
        return (
            <div><br />
                <p className="underline menuLink text-primary"><a href={'/user_menu/' + this.state.userId}>Back To My Menu</a></p>
                <div className="workoutHeader"><br />
                    <h1 className="text-center userHeader">{this.state.user} Workouts </h1>
                    <p className="text-center">*Workout set up and instructions
                <span onClick={this.handleShowInstructions} className="text-primary underline text-center"> Click Here</span></p>
                    <div className="text-center">{this.exerciseList()}</div>
                </div>
            </div>
        )

    }
}