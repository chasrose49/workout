import React, { Component } from 'react'
import "../index.css"
import axios from 'axios'


export default class CalculatePoints extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            id: this.props.id,
            user: this.props.user,
            email: this.props.email,
            password: this.props.password,
            gender: "",
            age: "",
            weight: "",
            height: "",
            dailyPointsAllowed: "",
            activity: "",
            calculateClick: false,
            date: ""
        }
        this.onChangeUser = this.onChangeUser.bind(this)
        this.onChangeWeight = this.onChangeWeight.bind(this)
        this.onChangeGender = this.onChangeGender.bind(this)
        this.onChangeAge = this.onChangeAge.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onChangeHeight = this.onChangeHeight.bind(this)
        this.onChangeActivity = this.onChangeActivity.bind(this)
        this.onSubmitJournal = this.onSubmitJournal.bind(this)
    }

// componentDidMount(){
//     axios.get(`http://localhost:3001/user/journal/${this.props.match.params.user}`).then(response => {
//           console.log(response)
            
//         }).catch((error) => {
//             throw error;
//         })  
// }

    onChangeUser(e) {
        this.setState({
            user: e.target.value
        })
    }
    onChangeGender(e) {
        this.setState({
            gender: e.target.value
        })
    }
    onChangeAge(e) {
        this.setState({
            age: e.target.value
        })
    }
    onChangeWeight(e) {
        this.setState({
            weight: e.target.value
        })
    }
    onChangeHeight(e) {
        this.setState({
            height: e.target.value
        })
    }
    onChangeActivity(e) {
        this.setState({
            activity: e.target.value
        })
    }

    onChangeDailyPoints(e) {
        this.setState({
            dailyPointsAllowed: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault();

        let gender = Number(this.state.gender)
        let age = Number(this.state.age)
        let weight = Number(this.state.weight.slice(0, 2))
        let height = Number(this.state.height)
        let activity = Number(this.state.activity)
        this.setState({
            dailyPointsAllowed: Math.ceil(gender + age + weight + height + activity),
            calculateClick: true
        })

    }

    onSubmitJournal(e) {
        e.preventDefault();

        const journal = {
            user: this.props.user,
            dailyPointsAllowed: this.state.dailyPointsAllowed,
            date: new Date()

        }
        let id = this.props.id
        console.log(journal)
        axios.post(`http://localhost:3001/user/create_journal/${id}`, journal).then(response => console.log(response.data))
    }

    displayPoints() {
        if (this.state.dailyPointsAllowed) {
            return <div className="text-center"><br />
                <p className="underline menuLink text-primary"><a href={'/user_menu/' + this.props.id}>Back To My Menu</a></p><br />
                <br />
                <br />
                <br />
                <form onSubmit={this.onSubmitJournal}>
                    <div className="jumbotron"><h1 className="text-danger">Welcome</h1>
                        <h2>{this.state.user}</h2>
                    </div>
                    <h3>Your daily points will be  {" "}</h3>
                    <h1 className="text-danger">{this.state.dailyPointsAllowed}</h1>
                    <input className="hideMe" name='user'
                        placeholder={this.state.user}
                        value={this.state.user}
                        onChange={this.onChangeUser}
                    ></input><input className="hideMe" name='dailyPointsAllowed'
                        placeholder={this.state.dailyPointsAllowed}
                        required
                        value={this.state.dailyPointsAllowed}
                        onChange={this.onChangeDailyPoints}
                    ></input>
                    <br />
                    <div className="form-group text-center">
                        <input type="submit" value="Create My Journal" className='btn btn-primary' />
                    </div>
                </form>
            </div>
        }
    }
    render() {
        if (this.state.calculateClick === true) {
            return <div>
                {this.displayPoints()}
            </div>
        }
        else {
            return (
                <div className="container text-center"><br />
                    <p className="underline menuLink text-primary"><a href={'/user_menu/' + this.props.id}>Back To My Menu</a></p><br />

                    <h1>Find Your Daily Points</h1>
                    <form onSubmit={this.onSubmit}>
                        <h1><label id="nameLabel">User:{this.state.user}</label></h1>
                        <input type='user' className="hideMe"
                            placeholder="email"
                            required
                            value={this.state.user}
                            onChange={this.onChangeUser}
                        ></input>< br />
                        <label id="nameLabel">Gender:</label>
                        <select name="gender" value={this.state.value} onChange={this.onChangeGender}>
                            <option value="8">Male</option>
                            <option value="2">Female</option>
                            <option value="12">Nursing Mother</option>
                        </select><br />
                        <label id="nameLabel">Age:</label>
                        <select name="age" value={this.state.value} onChange={this.onChangeAge}>
                            <option value="4">17-26</option>
                            <option value="3">27-37</option>
                            <option value="2">38-47</option>
                            <option value="1">48-57</option>
                            <option value="0">Over 58</option>
                        </select><br />
                        <label id="nameLabel">Weight:</label>
                        <input type='weight'
                            placeholder="Numbers"
                            required
                            value={this.state.weight}
                            onChange={this.onChangeWeight}
                        ></input>< br />
                        <label id="nameLabel">Height:</label>
                        <select name="height" value={this.state.value} onChange={this.onChangeHeight}>
                            <option value="4">Under 5'</option>
                            <option value="3">5'- 5'9 </option>
                            <option value="0">Over 5'10</option>
                        </select><br />
                        <label id="nameLabel">Activity:</label>
                        <select name="height" value={this.state.value} onChange={this.onChangeActivity}>
                            <option value="0">I Sit All Day</option>
                            <option value="2">I Sit Most Of The Day</option>
                            <option value="4">I Walk Most Of The Day</option>
                            <option value="6">I Am Very Active All Day</option>

                        </select><br />
                        <div className="form-group">
                            <input type="submit" value="Calculate" className='btn btn-primary' />
                        </div>
                    </form>


                    <p>To Start a Points Journal calculate your daily points first</p>
                </div>)
        }

    }












}