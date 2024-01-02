import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
    constructor(){
        super();


        //setting an initial state
        this.state={
            currIndex : 0
        }
    }

    IncreaseCount=()=>{
        if(this.state.currIndex >= images.length - 1){
            this.setState({
                currIndex:0
            });
        }else{
            this.setState({
                currIndex : this.state.currIndex + 1
            })
        }
    }

    DecreaseCount=()=>{
        if(this.state.currIndex <= 0){
            this.setState({
                currIndex : 2
            });
        }else{
            this.setState({
                currIndex : this.state.currIndex - 1
            })
        }
    }

    render(){
        return <>
            <div className="carousel-container flex " >
                <div className="leftArrow arrowDiv flex" onClick={this.DecreaseCount} >
                    <ArrowBackIosIcon/>
                </div>
                <h2 className="Title flex" >{images[this.state.currIndex].title}</h2>
                <img src={images[this.state.currIndex].img} alt="" />
                <h2 className="Caption flex" >{images[this.state.currIndex].subtitle}</h2>
                <div className="rightArrow arrowDiv flex" onClick={this.IncreaseCount} >
                    < ArrowForwardIosIcon/>
                </div>
            </div>
        </>
    }
}

export default Carousel;