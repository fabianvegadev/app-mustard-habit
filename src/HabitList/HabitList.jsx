/* eslint-disable react/prop-types */
import './HabitList.css';
import { HabitItem } from "../HabitItem/HabitItem";
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



function HabitList (props) {
    

    return (
        <ul className="HabitList">

            {props.habits.map((habit, index) => 
            <HabitItem 
                key={habit.key} 
                text={habit.text}
                index={index}
                jornada={habit.jornada} 
                streak={habit.streak} 
                completed={habit.completed}
                onCompleteHabit={props.onCompleteHabit}
                onDeleteHabit={props.onDeleteHabit}
                onEditHabit={props.onEditHabit}
                setNewHabitValue={props.setNewHabitValue}

            ></HabitItem>
            )}
            
        </ul>
        
    )
};

export {HabitList};