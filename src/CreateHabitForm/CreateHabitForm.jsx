import './CreateHabitForm.css';

function CreateHabitForm (props) {
    
    const onSubmit = (e) => {
        e.preventDefault();
        props.onAddHabit(props.newHabitValue, props.newHabitJornada);   
        props.setNewHabitValue('')     
        props.setNewHabitJornada('')
        props.setOpenModal(false);
    }   

    const onCancel = () => {
        props.setOpenModal(false);
    }

    const onChange = (e) => {
        props.setNewHabitValue (e.target.value)
    }

    return (
            <form onSubmit={onSubmit}>

                <label>Escribe tu nuevo hábito</label>

                <textarea 
                    placeholder="Correr 30 minutos antes de empezar el día"
                    value={props.newHabitValue}
                    onChange={onChange}
                />

                <select 
                    value={props.newHabitJornada} 
                    onChange={(e) => props.setNewHabitJornada(e.target.value)}                    
                    >
                        <option value="">Jornada</option>
                        <option value="Mañana">Mañana</option>
                        <option value="Tarde">Tarde</option>
                        <option value="Noche">Noche</option>
                </select>

                <div className="HabitForm-buttonContainer">

                    <button 
                        type='button'
                        className="HabitForm-button HabitForm-button--cancel"
                        onClick={onCancel}
                    >Cancelar</button >     

                    <button 
                        type='submit'
                        className="HabitForm-button HabitForm-button--add"
                    >Añadir</button>
                </div>
            </form>
    )
}

export {CreateHabitForm};