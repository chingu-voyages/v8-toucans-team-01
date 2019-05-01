import React from "react"
import "./LeftArrow"
import "./RightArrow"

export default class Slider extends Component {
    constructor(props){
        super(props)

        this.state ={}
    }

    goToPrevImage =() =>{

    }

    goToNextImage =() =>{

    }

    render(){
        return (
            <div className="slider">
            <Images />
            
            <LeftArrow 
                goToPrevImage ={this.goToNextImage}
                />

            <RightArrow 
              goToNextImage ={this.goToNextImage}
            />

            </div>
        )
    }
}