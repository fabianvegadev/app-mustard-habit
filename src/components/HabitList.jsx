/* eslint-disable react/prop-types */
import { HabitItem } from "./HabitItem";

function HabitList ({defaultHabits}) {

    

    return (
        <ul>
            {defaultHabits.map((habit) => 
            <HabitItem key={habit.text} text={habit.text} streak={habit.streak}/>
            )}
            {console.log (defaultHabits)}

        </ul>
        
    )
};

export {HabitList};