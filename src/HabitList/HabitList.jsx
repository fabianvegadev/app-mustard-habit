/* eslint-disable react/prop-types */
import { useContext } from "react";
import { MustardHabitContext } from "../Context";
import "./HabitList.css";
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

function HabitList() {
	const context = useContext(MustardHabitContext);

	return (
		<ul className="HabitList">
			{context.habits.map(
				(habit, index) =>
					habit.date === context.selectedDay && (
						<HabitItem
							key={habit.key}
							text={habit.text}
							index={index}
							time={habit.time}
							streak={habit.streak}
							completed={habit.completed}
						></HabitItem>
					)
			)}
		</ul>
	);
}

export { HabitList };
