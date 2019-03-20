import React from 'react'
import ExpendingPoint from '../expanding_point/expanding_point'
import DownPointer from '../down_pointer/down_pointer'
import './slide_1.css'

class Slide_1 extends React.Component{
    render(){
        return(
            <div className="slide first-slide background">
               <div className={`container-for-move ${this.props.command}`}>
                    <h1 className="title">Всегда ли цели терапии СД2<br/> на поверхности?</h1>

                    <p className="point-titles" style={{top: "273px", left: "625px"}}>Цель по HbA1c</p>
                    <ExpendingPoint size={"50px"} topOffset={"262px"} leftOffset={"563px"}/>

                    <p className="point-titles" style={{top: "387px", left: "225px"}}>Гипокликемия</p>
                    <ExpendingPoint size={"35px"} topOffset={"420px"} leftOffset={"270px"}/>

                    <p className="point-titles" style={{top: "497px", left: "373px"}}>Осложнения СД</p>
                    <ExpendingPoint size={"20px"} topOffset={"532px"} leftOffset={"478px"}/>

                    <p className="point-titles" style={{top: "478px", left: "790px"}}>СС риски</p>
                    <ExpendingPoint size={"20px"} topOffset={"512px"} leftOffset={"820px"}/>
                </div>
            </div>
        )
    }
}

export default Slide_1