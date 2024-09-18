import { HabitList } from './components/HabitList'
import './App.css'

const defaultHabits = [
  {text: 'Caminar', streak: "5 días consecutivos"},
  {text: 'Madrugar', streak: "7 días consecutivos"},
  {text: 'Comer Saludable', streak: "3 días consecutivos"},
  {text: 'Dormir temprano', streak: "1 días consecutivos"}
];

function App() {

  

  return (
    <>
      <HabitList defaultHabits={defaultHabits}/>
    </>
  )
}

export default App
