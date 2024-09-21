import './EmptyHabits.css';
import { FiArrowDownRight } from "react-icons/fi";

function EmptyHabits ({openModal}) {

    return (
        <div className='MessageContainer'>
            <h2>
                Crea tu primer hábito
            </h2>

            <div className='ArrowContainer'>
                {!openModal && <FiArrowDownRight className='ArrowCreateHabit'/>}                    
            </div>
        </div>
    )
}

export {EmptyHabits};