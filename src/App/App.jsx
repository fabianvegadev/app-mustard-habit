import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { NavBar } from '../NavBar/NavBar';
import { HabitCalendar } from '../HabitCalendar/HabitCalendar';
import { HomePage } from '../HomePage/HomePage';

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

      <Routes>

        <Route path='/' element={
          <HomePage 
          openModal={openModal}
          setOpenModal={setOpenModal}
          newHabitValue={newHabitValue}
          setNewHabitValue={setNewHabitValue}
          habits={habits}
          onAddHabit={onAddHabit}
          onCompleteHabit={onCompleteHabit}
          onDeleteHabit={onDeleteHabit}
        />}/>

        <Route path='/calendar' element={
          <HabitCalendar 
        />}/>        

      </Routes>

    </BrowserRouter>
  )
}

export default App
