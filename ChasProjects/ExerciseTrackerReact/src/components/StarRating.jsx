import React, { useEffect, Component } from 'react';
import './App.css'
import axios from 'axios'


const Star = ({ onClick, onMouseEnter, onMouseLeave, starId}) => {
    console.log(useEffect)
console.log(starId)
    let styleClass = "star-rating-blank";

    if (starId+1) {
        styleClass = "star-rating-filled"
 }else{styleClass = "star-rating-blank"}
   
    return (
        <p className="inline"
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <svg className={styleClass} height="55px" width="53px" viewBox="0 0 25 23">
                <polygon
                    strokeWidth="0"
                    points="4.732,0 6.194,2.963 9.463,3.438 7.098,5.745 7.656,9 4.732,7.463 1.807,9 2.366,5.745 0,3.438 3.269,2.963 " />
            </svg>
        </p>
    )
}

const stars = [1, 2, 3, 4, 5]
class StarRating extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            starsSelected: 0,

        }
        this.change = this.change.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeStarsSelected = this.onChangeStarsSelected.bind(this)
    }


    onChangeUserName(e) {
        this.setState({
            username: e.target.value
        })
    }
    onChangeStarsSelected(e) {
        this.setState({
            starsSelected: e.target.value
        })
    }

    change(starsSelected) {
        this.setState({ starsSelected })
    }



    onSubmit(e) {
        e.preventDefault()
        console.log("clicked")
        const rate = {
            username: this.state.username,
            starsSelected: this.state.starsSelected
        }
        console.log(rate)
        axios.post('http://localhost:3003/rate/add', rate)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        window.location = "/showRate"
    }

    render() {
        const { totalStars } = this.props
        const { starsSelected } = this.state
        const { styleClass } = this.state
      
        
        return (
            <div className="flex-container" >
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label />User Name:<br />

                    <input type="text"
                        name={this.state.username}
                        onChange={this.onChangeUserName}
                   required ></input><br />
                    <p></p>
                    {stars.map((n, i) =>
                        <Star className={styleClass}
                             key={i}
                            starId={i}
                            selected={i < starsSelected}
                            onClick={() => this.change(i + 1)
                            }
                        />
                    )}
                    <input name={this.state.starsSelected}
                        onChange={this.onChangeStarsSelected}
                        value={starsSelected}
                        id="starNumberInput"
                        type='text'
                        readOnly />
                    <p>{starsSelected} of {totalStars} stars</p>
                    <input type="submit" value="Sumbit" className="btn btn-primary" />

                </form>
            </div>
        )
    }

}

export default StarRating 