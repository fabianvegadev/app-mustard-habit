/* eslint-disable react/prop-types */
import './HabitItem.css';
import { FiCheck , FiSettings } from "react-icons/fi";

function HabitItem (props) {    

    return (
        <li className= {`habitItem ${props.completed && 'habitItem--completed'}`}>
            
            <button 
                className= {`buttonCheck ${!props.completed && 'buttonCheck--incomplete'}`}
                onClick={props.onCompleteHabit}            
            ><FiCheck/>
            </button>

            <p onClick={props.onCompleteHabit}>{props.text}</p>    

            <div id='ModalSettings'></div>

            <button             
                className={`buttonSettings ${props.completed && 'buttonSettings--complete'}`}
                onClick={(props.onDeleteHabit)}
            ><FiSettings/></button>   
            
        </li>
    )           
};

export {HabitItem};