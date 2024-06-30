import React, { Component } from 'react';
import Nav from "./navbar"
export default class CalculateBMI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: "",
            weight: "",
            bmi: ""
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeWeight = this.onChangeWeight.bind(this);
        this.onChangeHeight = this.onChangeHeight.bind(this);
 }
   
    onChangeHeight(e) {
        this.setState({
            height: e.target.value
        })
    }
    onChangeWeight(e) {
        this.setState({
            weight: e.target.value
        })
    }
   onSubmit(e) {
        e.preventDefault()
        let bodyMassIndex = (this.state.weight / (this.state.height * this.state.height)) * 703


        console.log(bodyMassIndex.toFixed(2))
        this.setState({
            bmi: bodyMassIndex.toFixed(2)
        })

    }
  displayBMI() {
        if (this.state.bmi) {
            return <div>
                <p> Your Body Mass Index is {" "}
                    {this.state.bmi}</p>
                </div>  
          }       
        }

    render() {

        return (<div>
         <Nav />
            <div className="container text-center"><br />
                <h1 className="red-shadow underline header">How Body Mass Index Is Used</h1><br />
                <p className="howBMI text-center">BMI can be a screening tool, but it does not diagnose the body fatness or health of an individual. To determine if BMI is a health risk, a healthcare provider performs further assessments. Such assessments include skinfold thickness measurements, evaluations of diet, physical activity, and family history.</p>
                <h4 className="text-center">Why Is BMI Used To Measure Overweight And Obesity?</h4> 
                <p className="whyBMI text-center">Because calculation requires only height and weight, BMI is an inexpensive and easy tool. To see the formula based on either kilograms and meters or pounds and inches</p>
                <h4 className="text-center">Other ways to assess excess body fatness besides BMI?</h4>
                <p className="otherTools text-center">Other methods to measure body fatness include skinfold thickness measurements (with calipers), underwater weighing, bioelectrical impedance, dual-energy x-ray absorptiometry (DXA), and isotope dilution 1,2,3. However, these methods are not always readily available, and they are either expensive or need to be conducted by highly trained personnel. Furthermore, many of these methods can be difficult to standardize across observers or machines, complicating comparisons across studies and time periods.</p>
                <p className="text-center "><span ><small>To learn more about the trends of adult obesity, visit Adult Obesity Facts.</small></span></p><br/>
              <h1 className='text-center underline red-shadow'>Check Your BMI</h1>
                <form onSubmit={this.onSubmit} className="text-center">
                    <label>Height:</label>
                    <input type="number" value={this.state.height} onChange={this.onChangeHeight} placeholder="Enter Inches" />< br />
                    <label>Weight:</label>
                    <input type="number" value={this.state.weight} onChange={this.onChangeWeight} placeholder="Enter Pounds" />
                    <div className="form-group">
                        <input type="submit" value="Check" className='btn btn-primary' />
                    </div>
                </form>

                <h1 className='text-primary red-shadow'>{this.displayBMI()}</h1>
</div>
            </div>
        )
    }

}
