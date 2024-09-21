import DateBar  from './components/DateBar'; 
import CreateHabitButton  from './components/CreateHabitButton'; 
import { HabitList }  from './components/HabitList';
import './App.css';

const defaultHabits = [
  {text: 'Caminar', streak: "5 días consecutivos", completed: false},
  {text: 'Madrugar', streak: "7 días consecutivos", completed: false},
  {text: 'Comer Saludable', streak: "3 días consecutivos", completed: false},
  {text: 'Dormir temprano', streak: "1 días consecutivo", completed: false}
];

function App() {

  const handleAddHabit = (newHabit) => {
    console.log('Nuevo hábito agregado:', newHabit);
  };

  return (
    <div>
      <DateBar/> 
      <CreateHabitButton onAddHabit={handleAddHabit}/> 
      <HabitList defaultHabits={defaultHabits}/>
    </div>
  );
}

export default App;
