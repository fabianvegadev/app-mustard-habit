import './CreateHabitButton.css';

function CreateHabitButton ({setOpenModal}) {

    return (
        <div className="CreateHabitButtonContainer">
            <button 
            className="CreateHabitButton"
            onClick={(e) => {
                setOpenModal(state => !state)
            }}            
        >+</button>
        </div>
        
    )
}

export {CreateHabitButton};