import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import HomePage from './components/homePage'
import AboutWorkoutPage from './components/aboutWorkoutPage';
// import NavBarPage from './components/navbar';
import CreateAccount from './components/createAccount';
import LogIn from './components/login';
import CreateWorkout from './components/createWorkouts';
import UpdateWorkout from './components/updateWorkout';
import UserWorkouts from './components/userWorkouts'
import WorkoutInstructions from './components/workoutInstructions'
import CalculateBMI from './components/calculateBMI';
import FoodPoints from './components/foodPoints';
import Menu from './components/menu';
import  CreateJournal from './components/calculatePoints'


function App() {
  return (
    <Router>
      {/* <NavBarPage /> */}
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/about_bmi' component={CalculateBMI} />
        <Route path='/about_workouts' component={AboutWorkoutPage} />
        <Route path='/find_food_points' component={FoodPoints} />
        <Route path='/create_new_account' component={CreateAccount} />
        <Route path='/workout_instructions' component={WorkoutInstructions} />
        <Route path='/login' component={LogIn} />
        {/* dynamic route */}
        <Route path="/update_workouts/:id" component={UpdateWorkout} />
        <Route path='/user_menu/:id' component={Menu} />
        <Route path='/journal/:id' component={CreateJournal} />
        <Route path='/user_workouts/:id' component={UserWorkouts} />
        <Route path='/create_workout/:id' component={CreateWorkout} />
      </Switch>

    </Router>
  )
};
export default App;