import './CreateHabitButton.css';

function CreateHabitButton ({setOpenModal, setCurrentDate}) {

    const pruebaCurrentDate = () => {
        const today = new Date()
        today.setDate(today.getDate() + 1)
        setCurrentDate(today)
    }
    
    return (
        <div className="CreateHabitButtonContainer">
            <button 
            className="CreateHabitButton"
            onClick={(e) => {
                setOpenModal(state => !state)
                pruebaCurrentDate()
            }}            
        >+</button>
        </div>
        
    )
}

export {CreateHabitButton};