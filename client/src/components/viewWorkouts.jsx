import React from 'react';
import "../index.css";


const Exercise = props => (
<div className="viewWorkouts container">
<div className="text-center border workouts"><br />
   <h4 className="text-center">{props.exercise.day}</h4>
    <div className="row">
          <div className="col-md-4 underline"><h6>Move</h6></div>
          <div className="col-md-4 underline"><h6>Sets</h6></div>
          <div className="col-md-4 underline"><h6>Reps</h6></div>
        </div>
      <div className="row">
        <div className="col-md-4">{props.exercise.warmup.warmupname}</div>
        <div className="col-md-4">{props.exercise.warmup.warmupsets }</div>
        <div className="col-md-4">{props.exercise.warmup.warmupreps}</div>
      </div>
      <div className="row">
        <div className="col-md-4">{props.exercise.upperbody.ubname}
        </div>
        <div className="col-md-4">{props.exercise.upperbody.ubsets}
        </div>
        <div className="col-md-4">{props.exercise.upperbody.ubreps}
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">{props.exercise.lowerbody.lbname}
        </div>
        <div className="col-md-4">{props.exercise.lowerbody.lbsets}
        </div>
        <div className="col-md-4">{props.exercise.lowerbody.lbreps}
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">{props.exercise.core.cname}
        </div>
        <div className="col-md-4">{props.exercise.core.csets}
        </div>
        <div className="col-md-4">{props.exercise.core.creps}
        </div>
      </div><br />
      <div className='text-center'>
        <button ><a href={'/update_workouts/' + props.exercise._id}>Edit</a></button>|
            <button className="text-danger"
                onClick={() => { props.deleteExercise(props.exercise._id) }}>Delete</button></div><br />
      <p className="text-center font-weight-bold ">Workout Time Aproximatley {(props.exercise.warmup.warmupsets+props.exercise.upperbody.ubsets+props.exercise.lowerbody.lbsets+ props.exercise.core.csets)*30/60+(props.exercise.warmup.warmupsets+props.exercise.upperbody.ubsets+props.exercise.lowerbody.lbsets+ props.exercise.core.csets)} Minutes</p>
    <p className="text-center">*Please remember to rest 30 seconds between sets</p>
    <p className="text-center small-red-drink">**Drink plenty of fluid</p>
    </div>< br />
 </div>
  
  
    )
export default Exercise;
 

   

 