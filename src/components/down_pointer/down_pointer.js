import React from 'react'
import './down_pointer.css'
import arrow from '../../img/arrow.svg'

class DownPointer extends React.Component {
    handleClick(){
        this.props.clickHandler();
    }
    render(){
        return(
            <React.Fragment>
                <div className={this.props.command? "down-pointer-container hide": "down-pointer-container"} onClick={this.handleClick.bind(this)}>
                    <div className="down-pointer">
                        <p className="text">Листайте вниз</p>
                        <object type="image/svg+xml" data={arrow} className="arrow" />
                    </div>
                    <div className={this.props.command? "down-light hide":"down-light"}>
                        <div className="light"></div>
                        <div className="light"></div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default DownPointer