import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Importa el estilo predeterminado de react-calendar
import './HabitCalendar.css';

const HabitCalendar = () => {
  const [selectedDate, setSelectedDate] = useState([]); // Fecha seleccionada en el calendario
  const [completedDates, setCompletedDates] = useState([]); // Fechas completadas

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

  // Marcar la fecha seleccionada como completada
  const marcarComoCompletado = () => {
    if (selectedDate && !completedDates.includes(selectedDate.toDateString())) {
      setCompletedDates([...completedDates, selectedDate.toDateString()]);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '5px' }}>

      <h2>Calendario de Tareas Completadas</h2>

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
      

      {/* Botón para marcar como completado */}
      <button
        onClick={marcarComoCompletado}
        style={{ marginTop: '8px', padding: '5px 9px', fontSize: '9px' }}
        disabled={!selectedDate}
      >
        Marcar como completado
      </button>

    </div>
  );
};

export { HabitCalendar } ;