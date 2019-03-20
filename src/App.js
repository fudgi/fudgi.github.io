import React, { Component } from 'react';

import PositionSelector from './components/position_selecor/position_selector'
import DownPointer from './components/down_pointer/down_pointer'
import Slide_1 from './components/slide_1/slide_1'
import Slide_2 from './components/slide_2/slide_2'
import Slide_3 from './components/slide_3/slide_3'

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      position: 0,
      isTouched: false,
      startPositionY: 0
    }
    this.downPointerClickHandler = this.downPointerClickHandler.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
  }

  downPointerClickHandler(){
    let newPosition = this.state.position + 1;
    if(newPosition >=2) newPosition = 2;
    this.setState({position: newPosition});
  }

  onTouchStart(e){
    this.setState({isTouched: true, startPositionY: e.changedTouches[0].screenY});
  }

  onTouchEnd(e){
    this.setState({isTouched: false});
  }

  onTouchMove(e){
    if(this.state.isTouched) {
      let newScreenPosition;
      let differenceForReaction = 30;
      let positionDifference = this.state.startPositionY - e.changedTouches[0].screenY;
      switch(this.state.position){
        case 0:
          if(positionDifference >= differenceForReaction) newScreenPosition = 1;
          break;
        case 1:
          if(positionDifference >= differenceForReaction) newScreenPosition = 2;
          else if (positionDifference <= -differenceForReaction) newScreenPosition = 0;
          break;
        case 2:
          if(positionDifference <= -differenceForReaction) newScreenPosition = 1; 
          break;
        }
        if(typeof newScreenPosition !== 'undefined'){
          this.setState({position: newScreenPosition, isTouched: false});
        }
    }
  }

  render() {
    let scrollDownTo = this.state.position * document.documentElement.clientHeight;
    let animationMovement;
    switch(this.state.position){
      case 0:
        animationMovement=['','down','down'];
        break;
      case 1:
        animationMovement=['top', '', 'down'];
        break;
      case 2:
        animationMovement=['top','top',''];
        break;
    }
    return (
      <React.Fragment>
        <div className="container" style={{marginTop:`-${scrollDownTo}px`}} onTouchStart={this.onTouchStart} onTouchEnd={this.onTouchEnd} onTouchMove={this.onTouchMove}>
          <PositionSelector position={this.state.position}/>
          <Slide_1 command={animationMovement[0]}/>
          <Slide_2 command={animationMovement[1]}/>
          <Slide_3 command={animationMovement[2]} />
        </div>
        {this.state.position != 2? <DownPointer clickHandler={this.downPointerClickHandler} /> :<DownPointer command={1} clickHandler={this.downPointerClickHandler}/>}
      </React.Fragment>
    );
  }
}

export default App;
