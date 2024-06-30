import React, { Component } from 'react';
import "../index.css"
export default class WorkoutInstructions extends Component {
    render() {
        return (
            <div className="container"><br/>
               <div className="row text-center border">
                        <ol className="col-sm-6"><br/>
                            <li className="font-weight-bold text-danger underline">Static Set Up</li>
                            <li className="small">Start With Warmup</li>
                            <li className="small">Complete Each Set of Reps</li>
                            <li className="small">Resting 30 Seconds Between Sets</li>
                            <li className="small">Repeat With Each Exercise Move</li>
                        </ol>
                        <ol className="col-sm-6"><br/>
                            <li className="font-weight-bold text-danger underline">Alternating Set Up</li>
                            <li className="small">Start With Warmup</li> 
                            <li className='small'>Alternate Each Exercise Move</li>
                            <li className="small">Completeing 1 Set of Reps for Each Move</li>
                            <li className="small">Resting 30 Seconds Between Sets</li>
                        </ol>
                      </div><br />
                  <div id="definitions">
                    <p className="small text-center"><span className="font-weight-bold text-danger underline">Warmups</span></p>
                    <p className="small"><span className="font-weight-bold"><i>Burpee:</i></span> Begin in a standing position.
                        Move into a squat position with your hands on the ground. (count 1) Kick your feet back into a plank position, while keeping your arms extended. (count 2)Immediately return your feet into squat position.(count 3) Stand up from the squat position (count 4)</p>
                    <p className="small"><span className="font-weight-bold"><i>Jumping Jack:</i></span> A calisthenic jump done from a standing position with legs together and arms at the sides to a position with the legs apart and the arms over the head.</p>
                    <p className="small"><span className="font-weight-bold"><i>Mountain Climber:</i></span> Start in plank position bringing one knee to chest, return to plank position, repeat other side, alternating knees in rapid movements.</p>
                    <p className="small"><span className="font-weight-bold"><i>High Knee:</i></span> Stand, feet shoulder width apart, hands by your side. Bring one knee just above your waist. Lower and repeat with oppisite Knee. Repeat, going back and forth in rapid movements</p>
                    <p className="small text-center"><span className="font-weight-bold text-danger underline">Upper Body</span></p>
                    <p className="small"><span className="font-weight-bold"><i>Push Up:</i></span> A person lies facing the floor and,keeping their back straight,hands at side, flat on ground, placed at shoulders, then raises their body by pressing down on their hands, lower body back down.</p>
                    <p className="small"><span className="font-weight-bold"><i>Dip:</i></span> Start in sitting position, hands on each side,palms facing down fingers towards toes, bend knees so your feet are flat on ground, raise body as high as possible off ground, then bend elbows only to 90 degree anlge lowering body just above ground, then push back up.</p>
                    <p className="small"><span className="font-weight-bold"><i>Plank Up/Down:</i></span> Start in high plank postition, then lower body to elbows, then back up to hands.</p>
                    <p className="small"><span className="font-weight-bold"><i>Diamond Push Up:</i></span> Start in push up position, only
                        bring your hands together beneath chest and place them so that thumbs and index fingers touch, forming a diamond, then raises their body by pressing down on their hands, lower body back down.</p>
                    <p className="font-weight-bold text-center small text-danger underline">Lower Body</p>
                    <p className="small"><span className="font-weight-bold"><i>Regular Squat:</i></span> Stand with feet shoulder width
                        apart, then crouch or sit with one's knees bent and one's heels close to or touching one's buttocks or the back of one's thighs, return to standing position.</p>
                    <p className="small"><span className="font-weight-bold"><i>Alternating Lunge:</i></span> Standing, both feet together,hands on hip. Step one foot forward so that and bringing both knees to a 90 degree angle, then return to standing position bring feet back together, alternating sides. </p>
                    <p className="small"><span className="font-weight-bold"><i>Sumo Squat:</i></span> Stand with feet as far apart as possible,then crouch or sit with one's knees bent and one's heels close to or touching one's buttocks or the back of one's thighs, return to standing position </p>
                    <p className="small"><span className="font-weight-bold"><i>Squat w/Front-Kick:</i></span> Stand with feet shoulder width apart, then crouch or sit with one's knees bent and one's heels close to or touching one's buttocks or the back of one's thighs, return to standing position and kicking one leg in front, then repeat with alternating legs on kick.</p>
                    <p className="small text-center"><span className="font-weight-bold text-danger underline">Core</span></p>
                    <p className="small"><span className="font-weight-bold"><i>Reqular Sit Up:</i></span>Lay on back, place hands at temples,bend knees so that feet are flat on ground then sit up until elbows touch knees lower back to floor.</p>
                    <p className="small"><span className="font-weight-bold"><i>Alternating Sit Up:</i></span> Lay on back, place hands at
                        temples, bend knees so that feet are flat on ground then sit up until elbows almost touch knees, twist body to one side and back, lower back to floor, repeat twisting body to other side. </p>
                    <p className="small"><span className="font-weight-bold"><i>Crunch:</i></span> Lay on back, place hands at temples,bend knees so that feet are flat on ground, crunch in bringing elbows and knees together, lower back to floor</p>
                    <p className="small"><span className="font-weight-bold"><i>Body Roll:</i></span> Lay on back, arms above head and legs
                        extended, sit up keeping arms above head and legs flat on floor, fold to touch hands to toes then return to laying position. </p>
                </div>
           </div>  //    {lastclosing div}
           )
    }
}
