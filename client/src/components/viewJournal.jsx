import React from 'react';
import axios from 'axios'
export default class Journal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            calories: "",
            fatgrams: "",
            dietaryfiber: "",
            points: "",
            day: "",
            dailyTotal: 0,
            dailyPointsAllowed: '',
            total: "",
            journalID:"",
            pointsTotal: [],
            id: this.props.id,
            user: this.props.user,
            email: this.props.email,
            password: this.props.password,
            previousEntries:false,
            previousdailyTotal:"",
            previousday:""

        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmitCalculate = this.onSubmitCalculate.bind(this);
        this.onChangeCalories = this.onChangeCalories.bind(this);
        this.onChangeFatGrams = this.onChangeFatGrams.bind(this);
        this.onChangeDietaryFiber = this.onChangeDietaryFiber.bind(this);
        this.onSubmitDiaryEntries = this.onSubmitDiaryEntries.bind(this);
        this.onChangeday = this.onChangeday.bind(this)
        this.onChangeDailyTotal = this.onChangeDailyTotal.bind(this)
        this.onChangeTotal = this.onChangeTotal.bind(this)
        this.addToJournal = this.addToJournal.bind(this)
    }
    componentDidMount() {
     let userId = this.props.id
        axios.get(`http://localhost:3001/user/journal/${userId}`)
            .then(response => {
                if (response.data===false) {
                 window.location =`/user_menu/${userId}`
                   
                }
                this.setState({ results: response.data })
             console.log(this.state.results)
                   this.setState({
                       dailyPointsAllowed:this.state.results[0].dailyPointsAllowed,
                        journalID:this.state.results[0]._id,
                        previousday:this.state.results[0].day,
                        previousdailyTotal:this.state.results[0].dailyTotal
                   })  
                   })
                             }

    previousEntry(){
     
        if(this.state.previousdailyTotal>0){
         return<div><h5 className="text-danger underline">Previous Entry</h5>
               <h6>Day: {this.state.previousday}</h6>
                <h6>Total: {this.state.previousdailyTotal}</h6>
                </div>
        }
    }

    onChangeDailyTotal(e) { 
        this.setState({
            dailyTotal: e.target.value
        })

    }
    onChangeCalories(e) {
        this.setState({
            calories: e.target.value
        })
    }
    onChangeFatGrams(e) {
        this.setState({
            fatgrams: e.target.value
        })
    }
    onChangeDietaryFiber(e) {
        this.setState({
            dietaryfiber: e.target.value
        })
    }
    onChangeday(e) {
        this.setState({
            day: e.target.value
        })
    }
    onChangeTotal(e) {
        this.setState({
            total: e.target.value
        })

    }
   
    onSubmitDiaryEntries(e) {
        e.preventDefault()
        let total = Number(this.state.total)
        let pointsTotal = this.state.pointsTotal
        pointsTotal.push(total)
        console.log(pointsTotal)
        let sum = pointsTotal.reduce((a, n) => (a + Number(n)), 0);
        console.log(sum)
        this.setState({
            dailyTotal: sum,
       
        })
      
      
       this.messageForm.reset()
        
    }

    addToJournal(e) {
        e.preventDefault()
   
        let dailyPointsAllowed = this.state.results[0].dailyPointsAllowed
        let journalID= this.state.journalID
       
  
   let userId = this.props.id

        let journal = {
            day: this.state.day,
            dailyTotal: this.state.dailyTotal,
            dailyPointsAllowed: dailyPointsAllowed,
            user:userId, 
            date:  new Date()
          
        }
    
        axios.post(`http://localhost:3001/user/update_journal/${journalID}` , journal).then(res => console.log(res.data)).catch(err=>console.log(err))
        window.location =`/user_menu/${userId}`
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.handleGet(this.state.results)
    }
  
  
    onSubmitCalculate(e) {
        e.preventDefault()
        if (this.state.dietaryfiber > 4) {
            let cal = this.state.calories / 50
            let fat = this.state.fatgrams / 12
            let fiber = .8
            let total = cal + fat - fiber
            console.log(Math.ceil(total))
            this.setState({
                points: Math.ceil(total),
                calories:'',
                fatgrams:"",
                dietaryfiber:""
            })
        }
        else {
            let cal = this.state.calories / 50
            let fat = this.state.fatgrams / 12
            let fiber = this.state.dietaryfiber / 5
            let total = cal + fat - fiber
            console.log(Math.ceil(total))
            this.setState({
                points: Math.ceil(total),
                calories:"",
                fatgrams:"",
                dietaryfiber:""
            })
        }
    }
    exceedTotal(){
    
        if(this.state.dailyTotal<=this.state.dailyPointsAllowed){
            return<h3>Total:{this.state.dailyTotal}</h3>
        }else{
            return<h3 className="text-danger">Total Exceeded:{this.state.dailyTotal}</h3>
        
    }
}
    displayPoints() {
        if (this.state.points) {
            return <div>
                <p className="mb-0 text-bold">Food Choice: {" "}  <span className="text-danger underline">{this.state.points} points</span> </p>
                   <span>(per serving)</span> 
            </div>
        }
    }
    render() {
        return (
        <div> 
            <p className="underline menuLink text-primary"><a href={'/user_menu/' +this.props.id }>Back To My Menu</a></p>
            <div className='container text-center'>
           
            <br /><h1 className="red-shadow underline bold">Daily Food Journal</h1><br />
               <h1>{this.props.user}</h1> <h2>Daily Points: <span className="underline text-primary">{this.state.dailyPointsAllowed}</span></h2> 
              <div>
                {this.previousEntry()}
              </div>
               <div className="row">
               <br />
               <br />
                <div className="border col-md-5"> 
                <br />
                <h3 className="underline">Daily Entry</h3><br />
                   <form onSubmit={this.addToJournal}>
                   <label> Day: </label>
                        <select name="day" value={this.state.value} onChange={this.onChangeday} >
                            <option>Pick Day</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                            <option value="Sunday">Sunday</option>
                        </select>
                    </form>

                    <form id='myForm' className="form"  ref={ form => this.messageForm = form } onSubmit={this.onSubmitDiaryEntries}>
                    <div className="form-group">
                    <label>Points Consumed: </label>
                    <input placeholder="Enter Points" type="number" onChange={this.onChangeTotal} />
                            <input type="submit" value="+" className='btn btn-sm btn-primary' />
                        </div></form>
                    <form onSubmit={this.onSubmitDiaryEntries} className='hideMe'><input type="number" onChange={this.state.dailytotal} defaultValue={this.state.dailyTotal} />
                    </form>
                    {this.exceedTotal()}
                    <div className="form-group">
                        <input type="submit" value="Add to Journal" className='btn btn-sm btn-primary' onClick={this.addToJournal} />
                    </div>
                </div>
                <div className="col-md-2"></div>
                <div className="border col-md-5"><br />
                <h3 className="underline">Find Food Points</h3>
                <br />
                <form onSubmit={this.onSubmitCalculate} >
                    <label>Claories:</label>
                    <input type="number" value={this.state.calories} onChange={this.onChangeCalories} placeholder="Enter Calories" />< br />
                    <label>Fat Grams:</label>
                    <input type="number" value={this.state.fatgrams} onChange={this.onChangeFatGrams} placeholder="Enter Fat Grams" />< br />
                    <label>Fiber:</label>
                    <input type="number" value={this.state.dietaryfiber} onChange={this.onChangeDietaryFiber} placeholder="Enter Fiber" />
                    <div className="form-group">
                        <input type="submit" value="Get Points" className='btn btn-sm btn-primary' />
                    </div>
                </form>
                   {this.displayPoints()}
                </div>
                </div> 
            </div>
            </div>
        )
    }
}









