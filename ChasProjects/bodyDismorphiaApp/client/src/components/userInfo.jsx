import React, { Component } from 'react';
import { showOne, showUserInfo } from "../api"

//create component and export at the same time
export default class User extends Component {
    constructor(props) {
        super(props);
        //set original state to empty string
        this.state = {
            results: [],
            noJournal: false,
            userInfo: [],
            userName: "",
            lastEntryDate: "",
            lastJournalEntry: "",
            nextEntryTime: false,
            totalWeight:""
        }
        this.showFormButton = this.showFormButton.bind(this)
    }//end constructor 

    componentDidMount() {
        let id = this.props.match.params.id
        showOne(id).then((res) => {
            this.setState({
                results: res.data
            })

            if (this.state.results.length > 0) {
                this.setState({
                    userInfo: this.state.results[0].user
                })
                this.state.userInfo.map(user => {
                    return this.setState({
                        userName: user.name
                    })
                })

                this.setState({
                    lastJournalEntry: this.state.results.slice(-1)
                })
                this.state.lastJournalEntry.map((entry) => {
                    let parsedDate = entry.date.slice(0, 10)
                    
                    return this.setState({
                        lastEntryDate: parsedDate
                    })
                })
                let previousDate = this.state.lastEntryDate
                let prevDateYear = previousDate.slice(0, 4)
                let prevDateMonth = previousDate.slice(5, 7)
                let prevDateDay = previousDate.slice(8)
                let newDate = new Date()
                let newDateYear = newDate.getFullYear()
                let newDateMonth = newDate.getMonth() + 1
                let newDateDay = newDate.getDate()
                if (parseInt(prevDateYear) === newDateYear) {
                    if (parseInt(prevDateMonth) === newDateMonth) {
                        if (Math.abs(parseInt(prevDateDay) - newDateDay < 7)) {
                            this.setState({
                                nextEntryTime: false
                            })
                        } else if (Math.abs(parseInt(prevDateDay) - newDateDay >= 7)) {
                            this.setState({
                                nextEntryTime: true
                            })
                        }
                    } else {
                        this.setState({
                            nextEntryTime: true
                        })
                    }
                } else {
                    this.setState({
                        nextEntryTime: true
                    })
                }
               
                let weightArray=[]
                this.state.results.map((item,i) => {
                 let weight=item.weight
                 console.log(i,weight)
                return weightArray.push(weight)
                
                 })
              } else {
                showUserInfo(id).then((res) => {

                    this.setState({
                        noJournal: true,
                        userInfo: res.data
                    })
                    this.setState({
                        userName: this.state.userInfo.name
                    })
                }).catch((err) => {
                    console.log(err)
                })
            }

        }).catch((err) => {
            if (err) {
                throw err
            }
        })
    }


    showFormButton() {
        let id = this.props.match.params.id
        if (this.state.newEntryTime === true) {
          
        }
          window.location = `/form/${id}`
    }

    journalList() {

        return this.state.results.map((item, i) => {
            let parsedDate = item.date.slice(0, 10)
            i = i + 1
            return <div className="col-sm-3" key={item._id}>
            <hr/>
                <h2> Entry #{i++}</h2>
                <hr />
                <p><b>Logged On:</b> {parsedDate}</p>
                <p><b>Exercised:</b>  {item.daysExercised} days</p>
                <p><b>Weight:</b> {item.weight} lbs</p>
                <hr/>
                <h4>Measurments</h4>
                <hr/>
                <p><b>Chest:</b> {item.measurements.chest} inches</p>
                <p><b>Bicep:</b> {item.measurements.biceps} inches</p>
                <p><b>Waist:</b> {item.measurements.waist} inches</p>
                <p><b>Hips</b>: {item.measurements.hips} inches</p>
                <p><b>Thigh:</b> {item.measurements.thighs} inches</p>
 </div>





        })
    }

    render() {

        if (this.state.noJournal === true) {
            return <div><h1>{this.state.userName}'s Weekly Tracker</h1> <h1>No Journal Entries</h1> <button onClick={this.showFormButton}>Add Entry</button>
            </div>
        }

        return (
            <div className="container"> <h1>{this.state.userName}'s Weekly Tracker</h1> <button onClick={this.showFormButton}>Add New Entry</button>
                <div className="row"> {this.journalList()} </div>
                  </div>
        )
         
    }
}