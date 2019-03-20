import React from 'react'
import './slide_3.css'
import ProgressBar from '../progress_bar/progress_bar'
import Tab1 from './tab_1/tab_1'
import Tab2 from './tab_2/tab_2'
import Tab3 from './tab_3/tab_3'

class Slide_3 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            tab: 0
        }
        this.tabSlideHandler = this.tabSlideHandler.bind(this);
    }

    tabSlideHandler(offsetPercantage){
        let resultTab;
        if(offsetPercantage < 0.25) resultTab = 0;
        else if (0.25 <= offsetPercantage && offsetPercantage<= 0.66) resultTab = 1
        else resultTab = 2
        this.setState({tab: resultTab})
    }

    render(){
        return(
            <div className="slide third-slide background">
                <div className={`tab-container container-for-move ${this.props.command}`} style={{marginLeft:`${this.state.tab * (-100)}%`}}>
                    <Tab1 />
                    <Tab2 />
                    <Tab3 />
                </div>
                <ProgressBar currentOffset={this.state.tab * 0.5} tabSlideHandler={this.tabSlideHandler}/>
            </div>
        )
    }
}

export default Slide_3