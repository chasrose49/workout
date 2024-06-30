// app.component.jsx

import React, { Component } from "react";
import css from "./app.component.css";
import MyInfo from "./myInfo"
import Quiz from './QuizMain'
import MyQuiz from "./QuizMain";



class MyComponent extends Component {
  render() {
    return( <div className={css.intro}>
    <MyInfo />
   <MyQuiz />
    </div>);
  }
}

export default MyComponent;