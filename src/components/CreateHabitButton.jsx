import React from 'react';

function CreateHabitButton({ onAddHabit }) {
  const manejarClick = () => {
    const newHabit = { text: 'Nuevo Hábito', streak: '0 días', completed: false };
    onAddHabit(newHabit);
  };

  return (
    <button onClick={manejarClick} style={estiloBoton}>
      Agregar Hábito
    </button>
  );
}

const estiloBoton = {
  backgroundColor: '#EEC94C',
  border: '1px solid grey',
  color: 'white',
  padding: '15px 32px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '4px 2px',
  cursor: 'pointer',
  borderRadius: '12px',
};



export default CreateHabitButton;