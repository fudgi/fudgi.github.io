import React from 'react'
import ice from '../../../img/ice.svg'
import scheme_tab2 from '../../../img/scheme2.png'
import './tab_2.css'

class Tab2 extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="tab tab_2">
                    <div className="tab_title">Смертельный октет</div>
                    <img src={scheme_tab2} className="scheme"/>
                    <object type="image/svg+xml" data={ice} className="ice ice1" />
                    <object type="image/svg+xml" data={ice} className="ice ice2" />
                    <object type="image/svg+xml" data={ice} className="ice ice3" />
                </div>
            </React.Fragment>
        )
    }
}

export default Tab2