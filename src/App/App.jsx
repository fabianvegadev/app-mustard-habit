import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DateBar } from '../DateBar/DateBar'
import { CreateHabitForm } from '../CreateHabitForm/CreateHabitForm';
import { HabitList } from '../HabitList/HabitList'
import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { CreateHabitButton } from '../CreateHabitButton/CreateHabitButton';
import { NavBar } from '../NavBar/NavBar';
import { EmptyHabits } from '../EmptyHabits/EmptyHabits';
import { HabitCalendar } from '../HabitCalendar/HabitCalendar';

import './App.css'

function useLocalStorage (itemName, initianValue) {
    
  const localStorageItem = localStorage.getItem(itemName)
  
  let parsedItem;
  
  if (localStorageItem) {
      parsedItem = JSON.parse(localStorageItem);  
  } else {
      localStorage.setItem(itemName, JSON.stringify(initianValue))
      parsedItem = initianValue;
  }   

  const [item, setItem] = useState(parsedItem);
  
  const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem)
  }

  return [item, saveItem]

}

function App() {

  const [openModal, setOpenModal] = useState (false)

  const [habits, saveHabit] = useLocalStorage('Habits_v1', []);   
  
  const [newHabitValue, setNewHabitValue] = useState('');

  const onAddHabit = (text) => {
    var idHabit = Math.random()
    const newHabits = [...habits];  
    const habitText = text[0].toUpperCase() + text.substring(1);
    newHabits.unshift({
        key: idHabit,
        text: habitText,
        streak: 0,
        completed: false,
    })
    console.log(idHabit)
    console.log(newHabits)
    text = ''

    saveHabit(newHabits);
}

const onCompleteHabit = (text) => {
  const newHabits = [...habits];
  const habitIndex = newHabits.findIndex(
      (habit) => habit.text == text
  );
  newHabits[habitIndex].completed = true;
  newHabits.sort( (i) => i.completed ? 1 : -1) 
  saveHabit(newHabits);
  console.log (habits.length)

}

const onDeleteHabit = (text) => {
  const newHabits = [...habits];
  const habitIndex = newHabits.findIndex(
      (habit) => habit.text == text
  );
  newHabits.splice(habitIndex, 1);
  saveHabit(newHabits);
}


  return (
    <BrowserRouter>
      <div>
        <NavBar/> 
      </div>        

      <div className='Navigation'>

        <DateBar/> 


        {habits.length === 0 && <EmptyHabits openModal={openModal}/>}
        
        {habits.length != 0 && (
          <HabitList
          habits={habits} 
          onCompleteHabit={onCompleteHabit}
          onDeleteHabit={onDeleteHabit}
        />
        )}

        <CreateHabitButton 
          setOpenModal={setOpenModal}
          onAddHabit={(e) => onAddHabit(e.target.value)}
        />

        {openModal && (
          <Modal>
            <CreateHabitForm 
              setOpenModal={setOpenModal}
              onAddHabit={onAddHabit}
              newHabitValue={newHabitValue}
              setNewHabitValue={setNewHabitValue}
            />
          </Modal>  
        )}
      </div>
      <h2>Calendario de Tareas Completadas</h2>
      <HabitCalendar />
      
    </BrowserRouter>
  )
}

export default App
