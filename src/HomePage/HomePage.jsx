/* eslint-disable react/prop-types */
import { DateBar } from "../DateBar/DateBar";
import { EmptyHabits } from "../EmptyHabits/EmptyHabits";
import { HabitList } from "../HabitList/HabitList";
import { CreateHabitButton } from "../CreateHabitButton/CreateHabitButton";
import { CreateHabitForm } from "../CreateHabitForm/CreateHabitForm";
import { Modal } from "../Modal/Modal";
import "./HomePage.css";

function HomePage (props) {
    return (

        <div className='HomePage-container'>        
        <div>
          <DateBar/> 
        </div> 

        {props.habits.length === 0 && <EmptyHabits openModal={props.openModal}/>}
        
        {props.habits.length != 0 && (
          <HabitList
          habits={props.habits} 
          onCompleteHabit={props.onCompleteHabit}
          onDeleteHabit={props.onDeleteHabit}
        />
        )}

        <CreateHabitButton 
          setOpenModal={props.setOpenModal}
          onAddHabit={(e) => props.onAddHabit(e.target.value)}
        />

        {props.openModal && (
          <Modal>
            <CreateHabitForm 
              setOpenModal={props.setOpenModal}
              onAddHabit={props.onAddHabit}
              newHabitValue={props.newHabitValue}
              setNewHabitValue={props.setNewHabitValue}
            />
          </Modal>  
        )}
      </div>

    )
}

export {HomePage};