import { HabitList } from './components/HabitList'
import './App.css'

const defaultHabits = [
  {text: 'Caminar', streak: "5 días consecutivos", completed: false},
  {text: 'Madrugar', streak: "7 días consecutivos", completed: false},
  {text: 'Comer Saludable', streak: "3 días consecutivos", completed: false},
  {text: 'Dormir temprano', streak: "1 días consecutivos", completed: false}
];

function App() {

  return (
    <>
      <HabitList 
        defaultHabits={defaultHabits}
       />
    </>
  )
}

export default App
