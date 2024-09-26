/* eslint-disable react/prop-types */
import { useState } from 'react';
import './HabitItem.css';
import { FiCheck, FiTrash2, FiEdit} from "react-icons/fi";
import { GiAlliedStar } from "react-icons/gi";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function HabitItem (props) {     
    
    const [isEditing, setIsEditing] = useState(false)
    const [editHabitText, setEditHabitText] = useState('')
    const [editHabitJornada, setEditHabitJornada] = useState('')

    const handleEdit = () => {
        const habitTextUp = editHabitText[0].toUpperCase() + editHabitText.substring(1);
        setEditHabitText(habitTextUp)
        if (isEditing) {
            props.onEditHabit(props.index, habitTextUp, editHabitJornada)
        }        
        setIsEditing(!setIsEditing)
    }

    const handleCancelEdit = () => {
        setIsEditing(false);
        setEditHabitText(props.text);
        setEditHabitJornada(props.jornada);
    };

    const openEditing = () => {
        setIsEditing(!isEditing)
        setEditHabitText(props.text)
        setEditHabitJornada(props.jornada)
    }

    return (
        <li className= {`habitItem ${props.completed && 'habitItem--completed'}`}>

            {isEditing ? (
                <div className='editingItem'>
                    <div className='inputsContainer'>
                        <textarea
                            type="text"
                            value={editHabitText}
                            onChange={(e) => setEditHabitText(e.target.value)}
                        />

                        <select 
                            value={editHabitJornada}
                            onChange={(e) => setEditHabitJornada(e.target.value)}>                        
                                <option value="">Jornada</option>
                                <option value="Mañana">Mañana</option>
                                <option value="Tarde">Tarde</option>
                                <option value="Noche">Noche</option>
                        </select>
                    </div>
                    <div className='iconsContainer'>
                        <button className='iconCheckEdit' onClick={handleEdit}><FaCheck size={15}/></button>
                        <button className='iconCancelEdit'onClick={handleCancelEdit}><FaXmark size={19}/></button>
                    </div>
                </div> ):( 
                <>
                    <button 
                        className= {`buttonCheck ${!props.completed && 'buttonCheck--incomplete'}`}
                        onClick={() => props.onCompleteHabit(props.index)}            
                        ><FiCheck/>
                    </button>
                    
                    <p id='textHabit' onClick={() => props.onCompleteHabit(props.index)}>
                        {props.text}
                        <small>{props.jornada}</small> 
                    </p>              
                    
                    
                        <button 
                            className='buttonEdit'
                            onClick={openEditing}
                            ><FiEdit/>
                        </button>

                        <button             
                            className={`buttonDelete ${props.completed && 'buttonDelete--complete'}`}
                            onClick={() => props.onDeleteHabit(props.index)}
                            ><FiTrash2/>                            
                        </button> 

                        {props.completed === true 
                            ? <div className='iconStar'><GiAlliedStar size={20}/></div>
                            : <div/>}
                    

                    
                </> )
            }
        </li>
    )           
};

export {HabitItem};