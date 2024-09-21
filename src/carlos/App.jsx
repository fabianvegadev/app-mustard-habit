import { HabitList } from "../components/HabitList.jsx";
import "./App.css";
import React from "react";
import HabitCalendar from "./components/HabitCalendar.jsx";

const defaultHabits = [
  { text: "Caminar", streak: "5 días consecutivos" },
  { text: "Madrugar", streak: "7 días consecutivos" },
  { text: "Comer Saludable", streak: "3 días consecutivos" },
  { text: "Dormir temprano", streak: "1 días consecutivos" },
];

function App() {
  return (
    <div>
      <h2>Calendario de Tareas Completadas</h2>
      <HabitCalendar />
      <HabitList defaultHabits={defaultHabits} />
    </div>
  );
}

export default App;
