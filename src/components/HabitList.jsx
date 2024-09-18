/* eslint-disable react/prop-types */
import '../styles/HabitList.css';
import { HabitItem } from "./HabitItem";
import { useState } from 'react';


function HabitList ({defaultHabits}) {

    const [habits, setHabits] = useState(defaultHabits);

    const onCompleteHabit = (text) => {
        const newHabits = [...habits];
        const habitIndex = newHabits.findIndex(
          (habit) => habit.text == text
        );
        newHabits[habitIndex].completed = true;
        setHabits(newHabits);
      }

    return (
        <ul className="habitList">
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