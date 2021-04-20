import React from 'react';
import '../App.css';
import {FaPlus, FaSearch, FaCross} from 'react-icons/fa';
const Icons = (props) => {
    switch (props.name) {
        case 'cross':
            return <FaCross className="icon" />
        case 'plus':
            return <FaPlus className="icon" />
        case 'search':
            return <FaSearch className="icon" />
        default:
            return null;
    }
}
export default Icons;