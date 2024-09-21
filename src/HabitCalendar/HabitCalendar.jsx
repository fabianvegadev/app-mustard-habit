import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Importa el estilo predeterminado de react-calendar
import './HabitCalendar.css';

const HabitCalendar = () => {
  const [selectedDate, setSelectedDate] = useState([]); // Fecha seleccionada en el calendario
  const [completedDates, setCompletedDates] = useState([]); // Fechas completadas
  const [text, setText] = useState(''); // Texto ingresado en el cuadro de texto

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

  // Manejar el cambio en el cuadro de texto
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '5px' }}>
      <h4>Selecciona la fecha en la cual completaste tu hábito</h4>

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

      {/* Cuadro de texto para ingresar información */}
      <div style={{ marginTop: '20px' }}>
        <h4>Escribe tu habito:</h4>
        <textarea
          value={text}
          onChange={handleTextChange}
          rows="2"
          cols="10"
          placeholder="Escribe aquí..."
          style={{ width: '90px', padding: '2px', fontSize: '9px' }}
        />
        <p>Texto ingresado: {text}</p>
      </div>

      {/* Lista de fechas completadas */}
      <h3>Fechas completadas:</h3>
      <ul>
        {completedDates.map((date, index) => (
          <li key={index}>{date}</li>
        ))}
      </ul>
    </div>
  );
};

export { HabitCalendar } ;