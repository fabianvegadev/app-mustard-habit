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

  const [newHabitJornada, setNewHabitJornada] = useState('');

  const onAddHabit = (text, jornada) => {
    var idHabit = Math.random()
    const newHabits = [...habits];  
    const habitText = text[0].toUpperCase() + text.substring(1);
    newHabits.unshift({
        key: idHabit,
        text: habitText,
        jornada: jornada,
        streak: 0,
        completed: false,
    })
    saveHabit(newHabits);
  }

  const onCompleteHabit = (index) => {
    const newHabits = [...habits];
    newHabits[index].completed = !newHabits[index].completed;
    newHabits.sort( (i) => i.completed ? 1 : -1) 
    saveHabit(newHabits);
  }

  const onDeleteHabit = (index) => {
    const newHabits = [...habits];
    newHabits.splice(newHabits[index], 1);
    saveHabit(newHabits);
  }

  const onEditHabit = (index, editHabitText, editHabitJornada) => {
    const editHabits = habits.map((habit, idx) => {
      if (idx === index) {
        return {...habit,  text: editHabitText, jornada: editHabitJornada, streak: 0, complete: false}
      }
      return habit;
    });
    saveHabit(editHabits);
  }

  return (
    <BrowserRouter>
      <div>
        <NavBar/> 
      </div> 

      <div className='NavigationContainer'>
        <Routes>
          <Route path='/' element={
            <HomePage 
            openModal={openModal}
            setOpenModal={setOpenModal}
            newHabitValue={newHabitValue}
            setNewHabitValue={setNewHabitValue}
            newHabitJornada={newHabitJornada}
            setNewHabitJornada={setNewHabitJornada}
            habits={habits}
            onAddHabit={onAddHabit}
            onCompleteHabit={onCompleteHabit}
            onDeleteHabit={onDeleteHabit}
            onEditHabit={onEditHabit}
          />}/>

          <Route path='/calendar' element={
            <HabitCalendar 
          />}/>        

        </Routes>
      </div>
        
    </BrowserRouter>
  )
}

export default App
