import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Importa el estilo predeterminado de react-calendar
import './HabitCalendar.css';

const HabitCalendar = () => {
  const [selectedDate, setSelectedDate] = useState([]); // Fecha seleccionada en el calendario
  const [completedDates] = useState([]); // Fechas completadas

  // Manejar el cambio de fecha seleccionada
  /* const onDateChange = (date) => {
    setSelectedDate(date);
  }; */
  const onDateChange = (date) => {
    setSelectedDate((preDate)=>{
      const preSelect = preDate.find(day => day.getTime() == date.getTime);
      if (preSelect) {
        preDate.filter(day => day.getTime() != date.getTime())
      } else{
        return [...preDate, date]
      }
      
    });
  };

  return (
    <div className='generalContainer' style={{ textAlign: 'center', marginTop: '5px' }}>

      <br></br>
      <br></br>
      <div className='titleContainer'>
        <h2>Calendario de logros</h2>
      </div>

      {/* Contenedor del calendario */} 
      <div> 
        <Calendar
          onChange={onDateChange}
          value={selectedDate}
          // tileClassName: Marca las fechas completadas en verde
          tileClassName={({ date }) => {
            if (completedDates.includes(date.toDateString())) {
              return 'completado';
            }
            return null;
          }}
        />
      </div>
      

      
    </div>
  );
};

export { HabitCalendar } ;