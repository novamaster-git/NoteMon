import React, {Fragment} from 'react';
import {FaTimes} from 'react-icons/fa';
import '../App.css';
const Cards = (props) => {
return(
    <Fragment>
       {  props.data.length > 0 ? props.data.map((notes, index) => {
            return(
        <div className="card">
            <h2>{JSON.parse(notes).title}</h2>
            <div>Words : {JSON.parse(notes).wordsLength}</div>
            <h2 className="cross" onClick={(index) => {props.method(index)}}><FaTimes /></h2>
            <h4>{index}</h4>
        </div>
            )
        }) : <h1>Nothing</h1>
       }
        
    </Fragment>
)
} 
export default Cards;