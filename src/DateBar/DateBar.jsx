import { useState, useEffect } from 'react';
import './DateBar.css'; 
import { FaRegCheckCircle } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const daysOfWeek = ['D', 'L', 'Ma', 'Mi', 'J', 'V', 'S'];

const DateBar = (props) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [efectCurrentDay, setEfectCurrentDay] = useState(new Date().getDate()); // Estado para el día seleccionado

  // Función para obtener los días con las fechas correspondientes
  const getDaysWithDates = (date) => {
    const daysWithDates = [];
    const today = new Date(date);

    for (let i = 0; i < 7; i++) {
      const day = new Date(today);
      day.setDate(today.getDate() - today.getDay() + i);
      daysWithDates.push({
        name: daysOfWeek[i],
        dayNumber: day.getDate(),
        monthNumber: (day.getMonth() + 1),
        yearNumber: day.getFullYear(),
        fullDate: day // Guardamos la fecha completa
      });
    }
    return daysWithDates;
  };


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

  const daysWithDates = getDaysWithDates(currentDate);

  // Resaltar el día actual automáticamente
  useEffect(() => {
    const today = new Date();
    setEfectCurrentDay(today.getDate()); // Actualizar el día seleccionado con el día actual
  }, [currentDate]);  

  return (
    <div className="date-bar-container">
      <button onClick={handlePreviousWeek} className="date-bar-button">
        <FiArrowLeft/>
      </button>

      {daysWithDates.map((item, index) => (
        <div 
          title={`Habits_${item.dayNumber}/${item.monthNumber}/${item.yearNumber}`}
          onClick={(e) => props.selectDay (e)}
          key={index}           
          className={
            `date-bar-day 
            ${(props.habits.every((habit) => habit.completed === true) & item.dayNumber === efectCurrentDay & props.habits.length != 0)
              ? 'felicitaciones'
              : item.dayNumber === efectCurrentDay
                && 'currentDay'}            
            ${(props.selectedDay === `Habits_${item.dayNumber}/${item.monthNumber}/${item.yearNumber}` 
              & item.dayNumber != efectCurrentDay)
                && 'selectedDay'} 
                `}
        >
          {(props.habits.every((habit) => habit.completed === true) & item.dayNumber === efectCurrentDay & props.habits.length != 0) 
            ? <div className='IconCheck'> <FaRegCheckCircle/> </div> 
            : <div/>}          
          <div className='text-date'>{item.name}</div>
        </div>
      ))}

      <button onClick={handleNextWeek} className="date-bar-button">
        <FiArrowRight/>
      </button>
    </div>
  );
};

export {DateBar};
