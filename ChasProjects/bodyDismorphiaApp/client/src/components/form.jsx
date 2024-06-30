import React, { Component } from 'react';
import {createJournalEntry} from "../api"

export default class CreateJournal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            weight: "",
            chest: "",
          daysExercised: "",
           waist: "",
           biceps: "",
          hips: "",
          thighs:"",
          
        }
        this.onChangeDayExercised = this.onChangeDayExercised.bind(this);
     
        this.onChangeWeight = this.onChangeWeight.bind(this);
        this.onChangeChest = this.onChangeChest.bind(this);
        this.onChangeWaist = this.onChangeWaist.bind(this);
        this.onChangeBiceps = this.onChangeBiceps.bind(this);
        this.onChangeHips = this.onChangeHips.bind(this);
        this.onChangeThighs = this.onChangeThighs.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChangeDayExercised(e) {
        this.setState({
            daysExercised: e.target.value
        })
    }
    onChangeWeight(e) {
        this.setState({
            weight: e.target.value
        })
    }
    onChangeChest(e) {
        this.setState({
           chest: e.target.value
        })
    }
    onChangeWaist(e) {
        this.setState({
            waist: e.target.value
        })
    }
    onChangeBiceps(e) {
        this.setState({
          biceps: e.target.value
        })
    }
    onChangeHips(e) {
        this.setState({
           hips: e.target.value
        })
    }
    onChangeThighs(e) {
        this.setState({
          thighs: e.target.value
        })
    }
 
   
    onSubmit(e) {
        e.preventDefault();
        let userId=this.props.match.params.id
        const JournalEntry = {
            daysExercised: this.state.daysExercised,
            weight: this.state.weight,
            waist: this.state.waist,
            biceps: this.state.biceps,
            hips: this.state.hips,
            thighs: this.state.thighs,
           date:this.state.date,
           chest:this.state.chest
        
        }
     createJournalEntry(userId,JournalEntry).then((response)=>{
       console.log(response.data)
        window.location=`/user/${userId}`

        }).catch(console.log("error"))
    }//on submit 
    render() {

        return (<div >
            <form onSubmit={this.onSubmit}>
                <h1 >Create Workout</h1>
                <label >Days Exercised:</label>
               <input name="daysExercised" type="number" value={this.state.value} onChange={this.onChangeDayExercised} /><br />
               <label >Weight:</label>
                <input name="weight" type="number" value={this.state.value} onChange={this.onChangeWeight} /><br />

                <label >Chests Measurments:</label>
                <input name="chest" type="number" value={this.state.value} onChange={this.onChangeChest} /><br />
                <label >Waist Measurments:</label>
                <input name="waist" type="number" value={this.state.value} onChange={this.onChangeWaist} /><br />
                <label >Bicep Measurments:</label>
                <input name="biceps" type="number" value={this.state.value} onChange={this.onChangeBiceps} /><br />
                <label >Hips Measurments:</label>
                <input name="hips" type="number" value={this.state.value} onChange={this.onChangeHips} /><br />
                <label >Thigh Measurments:</label>
                <input name="thighs" type="number" value={this.state.value} onChange={this.onChangeThighs} /><br />


                 <input type="submit"/>
            </form>
            
        </div>
        )
    }
}//this is component