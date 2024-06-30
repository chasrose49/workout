import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateUserAccount from './components/createAccount'
import UserInfo from "./components/userInfo"
import Form from "./components/form"
function App() {
    return (
        <Router>


 <Switch>
           

          <Route path='/' exact component={CreateUserAccount} />
          <Route path="/user/:id" component={UserInfo} />
          <Route path='/form/:id' component={Form} />
         
         </Switch>

        </Router>
    );
}

export default App;