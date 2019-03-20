import React from 'react'
import './progress_bar.css'
import progress from '../../img/progress-bar.png'
import polygon from '../../img/polygon.png'

class ProgressBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            startPositionX: 0,
            isDragged: false,
            barWidth: 0,
            currentOffset: 0
        }
        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.refProgressBar = React.createRef();
    }
    onTouchStart(e){
        e.target.classList.add("active");
        this.setState({isDragged: true, startPositionX: e.changedTouches[0].clientX});
    }
    onTouchEnd(e){
        e.target.classList.remove("active");
        let offset = this.state.barWidth * this.props.currentOffset;
        this.setState({isDragged:false, currentOffset: offset});
    }
    onTouchMove(e){
        if(this.state.isDragged){
            let positionDifference = e.changedTouches[0].clientX - this.state.startPositionX;
            let newOffset = this.state.currentOffset + positionDifference;
            let newStartPosition = this.state.startPositionX;

            if(newOffset >= this.state.barWidth) newOffset = this.state.barWidth
            else if(newOffset <= 0) newOffset = 0
            else newStartPosition += positionDifference;

            this.props.tabSlideHandler(newOffset/this.state.barWidth);
            this.setState({currentOffset: newOffset, startPositionX: newStartPosition});
        }
    }
    componentDidMount(){
        let progressBarWidth = this.refProgressBar.current.getBoundingClientRect().width;
        let offset = progressBarWidth * this.props.currentOffset;
        this.setState({barWidth: progressBarWidth, currentOffset: offset});
    }

    render(){
        return(
            <div className="progress-bar">
                <div className="slider">
                    <img src={progress} className="progress" id="progress" ref={this.refProgressBar}/>
                    <img src={polygon} className="polygon" style={{left: `${this.state.currentOffset}px`}} onTouchStart={this.onTouchStart} onTouchEnd={this.onTouchEnd} onTouchMove={this.onTouchMove}/>
                </div>
                <div className="years">
                <p>1998</p>
                <p>2009</p>
                <p>2016</p>
                </div>
            </div>
        )
    }
}
export default ProgressBar