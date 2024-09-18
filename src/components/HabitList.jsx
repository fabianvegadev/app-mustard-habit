import { HabitItem } from "./HabitItem";

function HabitList () {

    const defaultHabits = [
        {text: 'Caminar', streak: "5 días consecutivos"},
        {text: 'Madrugar', streak: "7 días consecutivos"},
        {text: 'Comer Saludable', streak: "3 días consecutivos"},
        {text: 'Dormir temprano', streak: "1 días consecutivos"}
      ];

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