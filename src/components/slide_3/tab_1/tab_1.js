import React from 'react'
import ice from '../../../img/ice.svg'
import scheme_tab1 from '../../../img/tab_1.png'
import './tab_1.css'

class Tab1 extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="tab tab_1">
                    <div className="tab_title">Звенья патогенеза СД2</div>
                    <img src={scheme_tab1} className="scheme"/>
                    <object type="image/svg+xml" data={ice} className="ice ice1" />
                    <object type="image/svg+xml" data={ice} className="ice ice2" />
                    <object type="image/svg+xml" data={ice} className="ice ice3" />
                </div>
            </React.Fragment>
        )
    }
}

export default Tab1