import React, { Component } from "react";
import { Link } from 'react-router-dom';



export default class Footer extends Component {

    render() {
return(

<footer className="navbar navbar-dark bg-dark navbar-expand-lg fixed-bottom container">
<div className="text-white">
    Last Mile 2020
</div>

<Link to='/' className="text-white navbar-link">Home</Link>


</footer>
         
         );
    };
};