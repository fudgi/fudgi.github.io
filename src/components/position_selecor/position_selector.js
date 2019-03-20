import React from 'react'
import './position_selector.css'

class PositionSelector extends React.Component {
    render(){
        let active = "position active";
        let classNameArray = ["position", "position", "position"];
        classNameArray[this.props.position] = active;
        return(
            <div className="position-selector">
                <div className={classNameArray[0]}></div>
                <div className={classNameArray[1]}></div>
                <div className={classNameArray[2]}></div>
            </div>
        )
    }
}

export default PositionSelector;