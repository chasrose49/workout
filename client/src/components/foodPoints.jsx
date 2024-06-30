import React, { Component } from 'react';

export default class ConvertPoints extends Component {
    constructor(props) {
        super(props);
        this.state = {
            calories: "",
            fatgrams: "",
            dietaryfiber: "",
            points: ""
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeCalories = this.onChangeCalories.bind(this);
        this.onChangeFatGrams = this.onChangeFatGrams.bind(this);
        this.onChangeDietaryFiber = this.onChangeDietaryFiber.bind(this)

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

    onSubmit(e) {
        e.preventDefault()
        if (this.state.dietaryfiber < 4) {
            let cal = this.state.calories / 50
            let fat = this.state.fatgrams / 12
            let fiber = 4 / 5
            let total = cal + fat - fiber
            console.log(Math.ceil(total))
            this.setState({
                points: Math.ceil(total)
            })
        }
        else {
            let cal = this.state.calories / 50
            let fat = this.state.fatgrams / 12
            let fiber = this.state.dietaryfiber / 5
            let total = cal + fat - fiber
            console.log(Math.ceil(total))
            this.setState({
                points: Math.ceil(total)
            })

        }

    }


    displayPoints() {
        if (this.state.points) {
            return <div>
                <p> Your Food Choice is {" "}
                    {this.state.points} points per serving</p>
            </div>
        }
    }

    render() {
        return (
            <div className='text-center'><br/>
                <br />
                <h1 className="underline red-shadow">Calculate Food Points</h1>
                <p>This calculation is based on the Weight Watchers point system. </p>
                <p>Users find it easier to keep track of points rather than tracking calories, fat grams and etc.</p>
                <form onSubmit={this.onSubmit} >

                    <label className="text-danger">Calories: </label>
                    <input type="number" value={this.state.calories} onChange={this.onChangeCalories} placeholder="Enter Calories" />
                    <label className="text-danger">Fat Grams:</label>
                    <input type="number" value={this.state.fatgrams} onChange={this.onChangeFatGrams} placeholder="Enter Fat Grams" />
                    <label className="text-danger" >Fiber:</label>
                    <input type="number" value={this.state.dietaryfiber} onChange={this.onChangeDietaryFiber} placeholder="Enter Fiber" />
                    <div className="form-group">
                        <input type="submit" value="Create" className='btn btn-primary' />
                    </div>
                </form>
                <h1 className='text-primary red-shadow'>{this.displayPoints()}</h1><br />
                <div className="container">
                    <div className="text-center"><p>What Brunilda Nazario, MD, Says:</p>
                        <p>Does It Work? WW is one of the most well-researched weight loss programs available. And yes, it works. Many studies have shown that the plan can help you lose weight and keep it off. For instance, a study from The American Journal of Medicine showed that people doing WW lost more weight than those trying to drop pounds on their own. WW ranked first both for *Best Weight Loss Diet* and for *Best Commercial Diet Plan* in the 2019 rankings from U.S. News & World Report. Overall, it's an excellent, personalized program that focuses on wellness and building healthy habits. Weight loss is just a part of it. The WW program meets you where you are on your journey and helps you create a community of support.</p></div>
                </div>
                <h5 className="text-danger underline">To create journal go to Account and Log In or Create Account</h5>

            </div>
        )
    }
}
