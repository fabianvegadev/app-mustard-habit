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

function useLocalStorage (itemName, initianValue) {
    
    const localStorageItem = localStorage.getItem(itemName)
    
    let parsedItem;
    
    if (localStorageItem) {
        parsedItem = JSON.parse(localStorageItem);  
    } else {
        localStorage.setItem(itemName, JSON.stringify(initianValue))
        parsedItem = initianValue;
    }   

    const [item, setItem] = useState(parsedItem);
    
    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem))
        setItem(newItem)
    }

    return [item, saveItem]

}


function HabitList () {

    const [habits, saveHabit] = useLocalStorage('Habits_v1', []);    

    const onCompleteHabit = (text) => {
        const newHabits = [...habits];
        const habitIndex = newHabits.findIndex(
            (habit) => habit.text == text
        );
        newHabits[habitIndex].completed = true;
        saveHabit(newHabits);
    }

    return (
        <ul className="HabitList">
            {habits.map((habit) => 
            <HabitItem 
                key={habit.text} 
                text={habit.text} 
                streak={habit.streak} 
                completed={habit.completed}
                onCompleteHabit={() => onCompleteHabit(habit.text)}
            />
            )}
        </ul>
        
    )
};

export {HabitList};