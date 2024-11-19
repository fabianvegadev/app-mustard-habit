import { useContext } from "react";
import { MustardHabitContext } from "../Context";
import "./CreateHabitButton.css";

function CreateHabitButton() {
	const context = useContext(MustardHabitContext);
	return (
		<div className="CreateHabitButtonContainer">
			<button
				className="CreateHabitButton"
				onClick={() => {
					context.setOpenModal((state) => !state);
				}}
			>
				+
			</button>
		</div>
	);
}

export { CreateHabitButton };
