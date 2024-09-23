/* eslint-disable react/prop-types */
import { useState } from 'react';
import './HabitItem.css';
import { FiCheck, FiTrash2, FiEdit, FiX } from "react-icons/fi";

function HabitItem (props) {     
    
    const [isEditing, setIsEditing] = useState(false)
    const [editHabitText, setEditHabitText] = useState('')
    const [editHabitJornada, setEditHabitJornada] = useState('')

    const handleEdit = () => {
        if (isEditing) {
            props.onEditHabit(props.index, editHabitText, editHabitJornada)
        }
        setIsEditing(!setIsEditing)
        console.log(editHabitText)
        console.log(editHabitJornada)
        console.log(props.index)
    }

    return (
        <li className= {`habitItem ${props.completed && 'habitItem--completed'}`}>

            {isEditing ? (
                <div>
                    <input 
                        type="text"
                        value={editHabitText}
                        onChange={(e) => setEditHabitText(e.target.value)}
                        placeholder="Editar hábito..."
                    />

                    <select 
                        value={editHabitJornada}
                        onChange={(e) => setEditHabitJornada(e.target.value)}>                        
                            <option value="">Jornada</option>
                            <option value="Mañana">Mañana</option>
                            <option value="Tarde">Tarde</option>
                            <option value="Noche">Noche</option>
                    </select>

                    <button onClick={handleEdit}><FiCheck/></button>
                    <button><FiX/></button>
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
                        onClick={() => setIsEditing(!isEditing)}
                        ><FiEdit/>
                    </button>

                    <button             
                        className={`buttonDelete ${props.completed && 'buttonDelete--complete'}`}
                        onClick={() => props.onDeleteHabit(props.index)}
                        ><FiTrash2/>
                    </button> 
                </> )
            }
        </li>
    )           
};

export {HabitItem};