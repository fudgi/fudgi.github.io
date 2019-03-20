import React from 'react'
import './expanding_point.css'

class ExpandingPoint extends React.Component{
    render(){
        let styles = {
            width: this.props.size, 
            height: this.props.size, 
            top: this.props.topOffset, 
            left: this.props.leftOffset
        };
        return(
            <div className="expending_point" style={styles}>
                <div className="inner_point"></div>
                <div className="inner_second_point"></div>
            </div>
        )
    }
}

export default ExpandingPoint;