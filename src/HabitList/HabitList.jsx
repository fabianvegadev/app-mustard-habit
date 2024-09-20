/* eslint-disable react/prop-types */
import './HabitList.css';
import { HabitItem } from "../HabitItem/HabitItem";
import { useState } from 'react';

// const defaultHabits = [
//   {text: 'Caminar', streak: "5 días consecutivos", completed: false},
//   {text: 'Madrugar', streak: "7 días consecutivos", completed: false},
//   {text: 'Lavar baño', streak: "5 días consecutivos", completed: false},
//   {text: 'Asear habitació', streak: "7 días consecutivos", completed: false},
//   {text: 'Leer', streak: "5 días consecutivos", completed: false},
//   {text: 'Lavar moto', streak: "7 días consecutivos", completed: false},
//   {text: 'Comer Saludable', streak: "3 días consecutivos", completed: false},
//   {text: 'Dormir temprano', streak: "1 días consecutivos", completed: false}
// ];

// localStorage.setItem('Habits_v1', JSON.stringify(defaultHabits));
// localStorage.removeItem('Habits_V1')



function HabitList ({habits, onCompleteHabit, onDeleteHabit}) {

    return (
        <ul className="HabitList">
            {habits.map((habit) => 
            <HabitItem 
                key={habit.key} 
                text={habit.text} 
                streak={habit.streak} 
                completed={habit.completed}
                onCompleteHabit={() => onCompleteHabit(habit.text)}
                onDeleteHabit={() => onDeleteHabit(habit.text)}
            />
            )}
        </ul>
        
    )
};

export {HabitList};