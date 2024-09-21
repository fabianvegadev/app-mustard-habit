import './CreateHabitForm.css';

function CreateHabitForm ({setOpenModal, onAddHabit, newHabitValue, setNewHabitValue}) {
    
    const onSubmit = (e) => {
        e.preventDefault();
        onAddHabit(newHabitValue);   
        setNewHabitValue('')     
        setOpenModal(false);
    }   

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (e) => {
        setNewHabitValue (e.target.value)
    }

    return (
            <form onSubmit={onSubmit}>

                <label>Escribe tu nuevo hábito</label>

                <textarea 
                    placeholder="Correr 30 minutos antes de empezar el día"
                    value={newHabitValue}
                    onChange={onChange}
                />

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