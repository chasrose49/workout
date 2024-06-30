import React, { Component } from 'react';
import axios from 'axios'
import "../index.css"

export default class UpdateWorkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            day: '',
            warmupname: "",
            warmupreps: "",
            warmupsets: "",
            ubname: "",
            ubreps: "",
            ubsets: "",
            lbname: "",
            lbreps: "",
            lbsets: "",
            cname: "",
            creps: "",
            csets: "",
            user: "",
            showWorkouts: false,
            exercises: [],
            updated: false
        }
        this.onChangeUser = this.onChangeUser.bind(this);
        this.onChangeDay = this.onChangeDay.bind(this);
        this.onChangeWarmUpName = this.onChangeWarmUpName.bind(this);
        this.onChangeWarmUpReps = this.onChangeWarmUpReps.bind(this);
        this.onChangeWarmUpSets = this.onChangeWarmUpSets.bind(this);
        this.onChangeUBName = this.onChangeUBName.bind(this);
        this.onChangeUBSets = this.onChangeUBSets.bind(this);
        this.onChangeUBReps = this.onChangeUBReps.bind(this);
        this.onChangeLBName = this.onChangeLBName.bind(this);
        this.onChangeLBReps = this.onChangeLBReps.bind(this);
        this.onChangeLBSets = this.onChangeLBSets.bind(this);
        this.onChangeCName = this.onChangeCName.bind(this);
        this.onChangeCReps = this.onChangeCReps.bind(this);
        this.onChangeCSets = this.onChangeCSets.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    componentDidMount() {
        axios.get(`http://localhost:3001/user/update_workouts/` + this.props.match.params.id)
            .then(response => {
                console.log(response.data)
                this.setState({
                    day: response.data.day,
                    warmupname: response.data.warmup.warmupname,
                    warmupreps: response.data.warmup.warmupreps,
                    warmupsets: response.data.warmup.warmupsets,
                    ubname: response.data.upperbody.ubname,
                    ubreps: response.data.upperbody.ubreps,
                    ubsets: response.data.upperbody.ubsets,
                    lbname: response.data.lowerbody.lbname,
                    lbreps: response.data.lowerbody.lbreps,
                    lbsets: response.data.lowerbody.lbsets,
                    cname: response.data.core.cname,
                    creps: response.data.core.creps,
                    csets: response.data.core.csets,
                    user: response.data.user
                })
            }).catch(function (error) {
                console.log(error)
            })
    }
    onChangeDay(e) {
        this.setState({
            day: e.target.value
        })
    }
    onChangeUser(e) {
        this.setState({
            user: e.target.value
        })
    }
    onChangeWarmUpName(e) {
        this.setState({
            warmupname: e.target.value
        })
    }
    onChangeWarmUpReps(e) {
        this.setState({
            warmupreps: e.target.value
        })
    }
    onChangeWarmUpSets(e) {
        this.setState({
            warmupsets: e.target.value
        })
    }
    onChangeUBName(e) {
        this.setState({
            ubname: e.target.value
        })
    }
    onChangeUBReps(e) {
        this.setState({
            ubreps: e.target.value
        })
    }
    onChangeUBSets(e) {
        this.setState({
            ubsets: e.target.value
        })
    }
    onChangeLBName(e) {
        this.setState({
            lbname: e.target.value
        })
    }
    onChangeLBReps(e) {
        this.setState({
            lbreps: e.target.value
        })
    }
    onChangeLBSets(e) {
        this.setState({
            lbsets: e.target.value
        })
    }
    onChangeCName(e) {
        this.setState({
            cname: e.target.value
        })
    }
    onChangeCReps(e) {
        this.setState({
            creps: e.target.value
        })
    }
    onChangeCSets(e) {
        this.setState({
            csets: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const workouts = {
            day: this.state.day,
            warmupname: this.state.warmupname,
            warmupreps: this.state.warmupreps,
            warmupsets: this.state.warmupsets,
            ubname: this.state.ubname,
            ubreps: this.state.ubreps,
            ubsets: this.state.ubsets,
            lbname: this.state.lbname,
            lbreps: this.state.lbreps,
            lbsets: this.state.lbsets,
            cname: this.state.cname,
            creps: this.state.creps,
            csets: this.state.csets,
            user: this.state.user
        }
        console.log(workouts)
        axios.post(`http://localhost:3001/user/update_workouts/` + this.props.match.params.id, workouts).then(res => console.log(res.data)).catch(err => {
            console.log(err)
        })
        this.setState({
            updated: true
        })

    }//on submit 
    render() {
        if (this.state.updated === true) {
            return <div className='container text-center'><br />
                <h1>You have updated {this.state.day}'s workout </h1>
                <a href={'/user_workouts/' + this.state.user}>Go To My Workouts</a>
            </div>
        }
        return (<div><br />
            <form className="container" onSubmit={this.onSubmit}>
                <input className="hideMe" onChange={this.onChangeUser} value={this.state.user} />  <input className="hideMe" onChange={this.onChangeDay} value={this.state.day} />
                <h1 className='text-center'>Update {this.state.day} Workout</h1>
                <label id="nameLabel">Warm-Up:</label>
                <select name="warmupname" value={this.state.value} onChange={this.onChangeWarmUpName}>
                    <option value="Burpees">Pick A Warm-Up Move</option>
                    <option value="Burpees">Burpees</option>
                    <option value="Jumping Jacks">Jumping Jacks</option>
                    <option value="Mountain Climbers">Mountain Climbers</option>
                    <option value="High Knees">High Knees</option>
                </select>
                <label id="nameLabel">Reps:</label>
                <select type="radio" name="warmupreps" value={this.state.value} onChange={this.onChangeWarmUpReps}>
                    <option value="25">Pick Your Reps</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="75">75</option>
                </select>
                <label id="nameLabel">Sets:</label>
                <select type="radio" name="warmupsets" value={this.state.value} onChange={this.onChangeWarmUpSets}>
                    <option value="1">Pick Your Sets</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <label id="nameLabel">Upper-Body</label>
                <select name="ubname" value={this.state.value} onChange={this.onChangeUBName}>
                    <option value="Push Ups">Pick Your Upper-Body Move</option>
                    <option value="Push Ups">Push Ups</option>
                    <option value="Dips">Dips</option>
                    <option vlaue="Plank Up/Down">Plank Up/Down</option>
                    <option vlaue="Diamond Push Ups">Diamond Push Ups</option>
                </select>
                <label>Reps:</label>
                <select name="ubreps" value={this.state.value} onChange={this.onChangeUBReps}>
                    <option value="25">Pick Your Reps</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="75">75</option>
                </select>
                <label id="nameLabel">Sets:</label>
                <select name="ubsets" value={this.state.value} onChange={this.onChangeUBSets}>
                    <option value="4">Pick Your Sets</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select><br />
                <label id="nameLabel">Core:</label>
                <select name="cname" value={this.state.value} onChange={this.onChangeCName}>
                    <option value="Regular Sit Ups">Pick Your Core Move</option>
                    <option value="Regular Sit Ups">Regular Sit Ups</option>
                    <option value="Alternating Sit Ups">Alternating Sit Ups</option>
                    <option vlaue="Crunches">Crunches</option>
                    <option vlaue="Body Rolls">Body Rolls</option>
                </select>
                <label>Reps:</label>
                <select name="creps" value={this.state.value} onChange={this.onChangeCReps}>
                    <option value="25">Pick Your Reps</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="75">75</option>
                </select>
                <label id="nameLabel">Sets:</label>
                <select name="csets" value={this.state.value} onChange={this.onChangeCSets}>
                    <option value="4">Pick Your Sets</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select> <br />
                <label id="nameLabel">Lower-Body:</label>
                <select name="lbname" value={this.state.value} onChange={this.onChangeLBName}>
                    <option value="Regular Squats">Pick Your Lower-Body Move</option>
                    <option value="Regular Squats">Regular Squats</option>
                    <option value="Alternating Front Lunges">Alternating Front Lunges</option>
                    <option vlaue="Sumo Squats">Sumo Squats</option>
                    <option vlaue="Squat W/ Alternating Front Kicks ">Squat W/ Alternating Front Kicks</option>
                </select>
                <label>Reps:</label>
                <select name="lbreps" value={this.state.value} onChange={this.onChangeLBReps}>
                    <option value="25">Pick Your Reps</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="75">75</option>
                </select>
                <label id="nameLabel">Sets:</label>
                <select name="lbsets" value={this.state.value} onChange={this.onChangeLBSets}>
                    <option value="4">Pick Your Sets</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select> <br />
                <div className="form-group">
                    <input type="submit" value="Update" className='btn btn-primary' />
                </div>
            </form>
        </div>
        )
    }
}//this is component
