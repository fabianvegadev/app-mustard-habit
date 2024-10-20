import './CreateHabitButton.css';

function CreateHabitButton ({setOpenModal}) {

    
    return (
        <div className="CreateHabitButtonContainer">
            <button 
            className="CreateHabitButton"
            onClick={() => {
                setOpenModal(state => !state)
            }}            
        >+</button>
        </div>
        
    )
}

export {CreateHabitButton};