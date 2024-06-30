import React, { Component } from 'react';
import axios from 'axios'

const Ratings = props => (
    <tr>
        <td>{props.ratings.username}</td>
        <td>{props.ratings.starsSelected } </td>

    </tr>
)
export default class RatingsList extends Component {
    constructor(props) {
        super(props);
        this.state = { ratings: [] }
    }
    componentDidMount() {
        axios.get('http://localhost:3003/rate')
            .then(response => {
                this.setState({
                    ratings: response.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    exerciseList() {
        return this.state.ratings.map(currentratings => {
            return <Ratings ratings={currentratings}

                key={currentratings._id} />;
        })
    }
    render() {
        return (<div>
            <h3>Ratings</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Username</th>
                        <th>Stars</th>
                    </tr>
                </thead>
                <tbody>
                    {this.exerciseList()}
                </tbody>
            </table>
        </div>
        )
    }
}