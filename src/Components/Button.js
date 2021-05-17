import React from 'react';
// import {FaPlus} from 'react-icons/fa'
import Icons from './Icons';
const Button = (props) => {
    return(
        <button id={props.id} className={props.className} onClick={props.onClick}><Icons name={props.icon} />  {props.value}</button>
    )
}
export default Button;