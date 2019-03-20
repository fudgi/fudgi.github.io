import React from 'react'
import ice from '../../../img/ice.svg'
import scheme_tab3 from '../../../img/scheme3.png'
import './tab_3.css'

class Tab3 extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="tab tab_3">
                    <div className="tab_title">Звенья патогенеза СД2</div>
                    <img src={scheme_tab3} className="scheme"/>
                    <object type="image/svg+xml" data={ice} className="ice ice1" />
                    <object type="image/svg+xml" data={ice} className="ice ice2" />
                    <object type="image/svg+xml" data={ice} className="ice ice3" />
                </div>
            </React.Fragment>
        )
    }
}

export default Tab3