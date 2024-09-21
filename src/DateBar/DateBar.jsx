import { useState, useEffect } from 'react';
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import './DateBar.css'; 

const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

const DateBar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(new Date().getDate()); // Estado para el día seleccionado

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
    setSelectedDay(today.getDate()); // Actualizar el día seleccionado con el día actual
  }, [currentDate]);

  return (
    <div className="date-bar-container">
      <button onClick={handlePreviousWeek} className="date-bar-button">
        <i className="bi bi-arrow-left-circle-fill"><FiArrowLeft /></i>
      </button>

      {daysWithDates.map((item, index) => (
        <div 
          key={index} 
          className={`date-bar-day ${item.dayNumber === selectedDay ? 'selected' : ''}`}
        >
          <div>{item.name}</div>
          <div>{item.dayNumber}</div>
        </div>
      ))}

      <button onClick={handleNextWeek} className="date-bar-button">
        <i className="bi bi-arrow-right-circle-fill"><FiArrowRight /></i>
      </button>
    </div>
  );
};

export {DateBar};
