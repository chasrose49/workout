import React from 'react';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from './components/navbar.component';
import ExercisesList from './components/exercises-list.component';
import EditExercises from './components/edit-exercise.component';
import CreateExercises from './components/create-exercise.component';
import CreateUsers from './components/create-user.component';
import Footer from './components/footer.component'
import StarRatings from'./components/StarRating';
import RatingsList from'./components/showRate-list.component';
import '../src/components/App.css'
import HomePage from './components/home'
import ErrorPage from './components/ErrorPage'



function App(){
return (
<Router>
<div className="container">
<Navbar />
<br/>
<Switch>
<Route path ='/' exact component={HomePage}/>
<Route path='/list'  component={ExercisesList} />
<Route path='/edit/:id'  component={EditExercises} />
<Route path='/create'  component={CreateExercises} />
<Route path='/user' component={CreateUsers} />
<Route path='/rate' component={StarRatings} />
<Route path='/showRate' component={RatingsList} />
<Route path='/score'/>
<Route component={ErrorPage}/>
</Switch>
</div>
<Footer />
</Router>
);
}

export default  App;