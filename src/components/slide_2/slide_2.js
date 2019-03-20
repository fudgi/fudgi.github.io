import React from 'react'
import './slide_2.css'
import ice from '../../img/ice.svg'

class Slide_2 extends React.Component{
    render(){
        return(
            <div className="slide second-slide background">
                <div className={`container-for-move ${this.props.command}`}>
                    <h1 className="title">Основа терапии &mdash; <br/> патогенез СД2</h1>
                    <object type="image/svg+xml" data={ice} className="ice ice1" />
                    <object type="image/svg+xml" data={ice} className="ice ice2" />
                    <object type="image/svg+xml" data={ice} className="ice ice3" />
                    <object type="image/svg+xml" data={ice} className="ice ice4" />
                </div>
            </div>
        )
    }
}

export default Slide_2