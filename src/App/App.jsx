import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { NavBar } from '../NavBar/NavBar';
import { HabitCalendar } from '../HabitCalendar/HabitCalendar';
import { HomePage } from '../HomePage/HomePage';
import './App.css'

function useLocalStorage (itemName, initianValue) {
    
  const localStorageItem = localStorage.getItem(itemName);
  
  let parsedItem;
  
  if (localStorageItem) {
    parsedItem = JSON.parse(localStorageItem);  
  } else {
    localStorage.setItem(itemName, JSON.stringify(initianValue));
    parsedItem = initianValue;
  }  
  
  const [item, setItem] = useState(parsedItem);  
  
  const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
  }

  return [parsedItem, item, saveItem];
}

const daysOfWeek = ['D', 'L', 'Ma', 'Mi', 'J', 'V', 'S'];

function App() {
  
  const [selectedDay, setSelectedDay] = useState(new Date().toLocaleDateString());
  const [parsedHabits, habits, saveHabit] = useLocalStorage(`${selectedDay}`, []); 
  const [openModal, setOpenModal] = useState (false);  
  const [newHabitValue, setNewHabitValue] = useState('');  
  const [newHabitJornada, setNewHabitJornada] = useState('');
  const [, logros, saveLogros] = useLocalStorage ('logros', []);
  const [daysWithDates, setDaysWithDates] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date()); // Estado para el movimiento de la navbar
  const [efectCurrentDay, setEfectCurrentDay] = useState(new Date().toLocaleDateString()); // Estado para el día seleccionado

  const selectDay = (e) => {
    setSelectedDay(e.target.title);
    saveHabit(parsedHabits);
  };

  const onAddHabit = (text, jornada) => {
    var idHabit = (Math.random() * 10);
    const newHabits = [...habits];  
    const habitText = text[0].toUpperCase() + text.substring(1);
    newHabits.unshift({
        key: idHabit,
        text: habitText,
        jornada: jornada,
        streak: 0,
        completed: false,
    });
    
    saveHabit(newHabits);    
  }


  const onCompleteHabit = (index) => {
    const newHabits = [...habits];
    newHabits[index].completed = !newHabits[index].completed;
    newHabits.sort( (i) => i.completed ? 1 : -1);

    const newLogros = [...logros];
    const fullDate = new Date().toLocaleDateString();
    if ((newHabits.every((habit) => habit.completed === true)) & 
        (newLogros.every((logro) => logro.fullDate === fullDate))) {
          newLogros.push({
            date: fullDate
          }) 
    }
    
    saveHabit(newHabits);
    saveLogros(newLogros);  
    console.log(newLogros)
  }

  const onDeleteHabit = (key) => {
    const newHabits = [...habits];
    newHabits.splice(newHabits.key=key, 1);
    saveHabit(newHabits);
  }

  const onEditHabit = (index, editHabitText, editHabitJornada) => {
    const editHabits = [...habits]
    editHabits[index] = {...editHabits[index], text: editHabitText, jornada: editHabitJornada}
    saveHabit(editHabits);
  }  

   // Función para obtener los días con las fechas correspondientes
  const getDaysWithDates = (date) => {
    const daysWithDates = [];
    const today = new Date(date);
    for (let i = 0; i < 7; i++) {
      const day = new Date(today);
      day.setDate(today.getDate() - today.getDay() + i);
      daysWithDates.push({
        name: daysOfWeek[i],
        fullDate: day.toLocaleDateString(),
        allCompleted: false
      });
    }   
    return daysWithDates;
  };

  const inicialDaysWithDates = getDaysWithDates(currentDate);

  useEffect(() => {
  })

  // Función para retroceder una semana
  const handlePreviousWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  // Función para avanzar una semana
  const handleNextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  // Resaltar el día actual automáticamente
  useEffect(() => {
    const today = new Date();
    setEfectCurrentDay(today.toLocaleDateString()); // Actualizar el día seleccionado con el día actual
  }, [currentDate]); 

  // Valida si las fechas de logros coinciden con las fechas del array de la navbar y cambia el valor de la propiedad allCompleted en el array
  useEffect(() => {
    const newDaysWithDates = [...inicialDaysWithDates]
    logros.map((logro) => {
      newDaysWithDates.map( (day) => {
        if (logro.date === day.fullDate) {
          day.allCompleted = !day.allCompleted
        }
      })
    })
    setDaysWithDates(newDaysWithDates)  
    console.log(daysWithDates)
  }, [logros])

  console.log(daysWithDates)

  return (
    <BrowserRouter>
      <div>
        <NavBar/> 
      </div> 

      <div className='NavigationContainer'>
        <Routes>
          <Route path='/' element={
            <HomePage 
            logros={logros}
            selectDay={selectDay}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
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
