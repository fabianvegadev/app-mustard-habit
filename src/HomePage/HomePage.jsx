/* eslint-disable react/prop-types */
import { useContext } from "react";
import { MustardHabitContext } from "../Context";
import { DateBar } from "../DateBar/DateBar";
import { EmptyHabits } from "../EmptyHabits/EmptyHabits";
import { HabitList } from "../HabitList/HabitList";
import { CreateHabitButton } from "../CreateHabitButton/CreateHabitButton";
import { CreateHabitForm } from "../CreateHabitForm/CreateHabitForm";
import { Modal } from "../Modal/Modal";
import "./HomePage.css";

function HomePage() {
	const context = useContext(MustardHabitContext);

	return (
		<div className="HomePage-container">
			<div>
				<DateBar />
			</div>

			{context.habits.length === 0 ? <EmptyHabits /> : <HabitList />}

			{context.openModal && (
				<Modal>
					<CreateHabitForm />
				</Modal>
			)}
			<CreateHabitButton />
		</div>
	);
}

export { HomePage };
