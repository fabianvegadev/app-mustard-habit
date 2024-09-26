import { useState, useEffect } from 'react';
import './DateBar.css'; 
import { FaRegCheckCircle } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const daysOfWeek = ['D', 'L', 'Ma', 'Mi', 'J', 'V', 'S'];

const DateBar = (props) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [efectCurrentDay, setEfectCurrentDay] = useState(new Date().toLocaleDateString()); // Estado para el día seleccionado

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
    setEfectCurrentDay(today.toLocaleDateString()); // Actualizar el día seleccionado con el día actual
  }, [currentDate]);  


  // Valida si las fechas de logros coinciden con las fechas del array de la navbar y cambia el valor de la propiedad allCompleted en el array
  useEffect(() => {
    props.logros.map((logro) => {
      daysWithDates.map( (day) => {
        if (logro.date === day.fullDate) {
          day.allCompleted = true
        }
      })
    })  
    console.log(daysWithDates)
  }, [props.logros])

  

  return (
    <div className="date-bar-container">
      <button onClick={handlePreviousWeek} className="date-bar-button">
        <FiArrowLeft/>
      </button>

      {daysWithDates.map((item, index) => (
        console.log(item),
        <div 
          title={[item.fullDate]}
          onClick={(e) => props.selectDay (e)}
          key={index}           
          className={
            `date-bar-day 
            ${(item.allCompleted == true
              & props.habits.length != 0)
              ? 'felicitaciones'
              : item.fullDate === efectCurrentDay
                && 'currentDay'}            
            ${(props.selectedDay === (item.fullDate) 
              & item.fullDate != efectCurrentDay)
                && 'selectedDay'} 
                `}
        >
          {(item.allCompleted === true & props.habits.length != 0) 
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
