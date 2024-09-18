/* eslint-disable react/prop-types */
import '../styles/HabitItem.css'
import { FiCheck , FiSettings } from "react-icons/fi";

function HabitItem (props) {

    return (
        <li className= {`habitItem ${props.completed && 'habitItem--completed'}`}>
            <button 
                className= {`buttonCheck ${!props.completed && 'buttonCheck--incomplete'}`}
                onClick={props.onCompleteHabit}
            >
                <FiCheck/>
            </button>
            <p>{props.text}</p>               
            <button className='buttonSettings'><FiSettings/></button>
        </li>
    )           
};

export {HabitItem};