import React, { Component } from 'react';
import "../index.css"
export default class About extends Component {
    render() {
        return (
            <div className="container-fluid" >
                <br />
              <div className='row'>
             <div className="col text-center main-text font-italic">   <br />
                        <h3 className="underline bold">How App Works</h3>
                        <p>Build your workouts</p>
                        <p>View your workouts </p>
                        <p>Track your reps</p>
                    </div>
                    <div className="col text-center main-text font-italic"> <br />
                        <h3 className="underline bold">Suggested Equipment</h3>
                        <p>Towel or Workout Mat</p>
                        <p>Any Watch or Stop Watch</p>
                        <p>Water Bottle</p>
                    </div>
                </div>
                <p className="small-red-drink text-center underline">*Equipment not necessary</p>
                <div className='text-center'>
                    <img src={require('../images/partners.jpeg')} className="img-fluid" alt="partner push ups" />
                </div>
            </div>
        )
    }
}
