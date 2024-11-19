import { useContext, useState } from "react";
import { MustardHabitContext } from "../Context";
import "./CreateHabitForm.css";

function CreateHabitForm() {
	const context = useContext(MustardHabitContext);
	const [newHabitValue, setNewHabitValue] = useState("");
	const [newHabitTime, setNewHabitTime] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();
		context.onAddHabit(newHabitValue, newHabitTime);
		context.setOpenModal(false);
	};

	const onCancel = () => {
		context.setOpenModal(false);
	};

	return (
		<form onSubmit={onSubmit}>
			<label>Escribe tu nuevo hábito</label>

			<textarea
				placeholder="Correr 30 minutos antes de empezar el día"
				value={newHabitValue}
				onChange={(e) => setNewHabitValue(e.target.value)}
			/>

			<select
				value={context.newHabitTime}
				onChange={(e) => setNewHabitTime(e.target.value)}
			>
				<option value="">Jornada</option>
				<option value="Mañana">Mañana</option>
				<option value="Tarde">Tarde</option>
				<option value="Noche">Noche</option>
			</select>

			<div className="HabitForm-buttonContainer">
				<button
					type="button"
					className="HabitForm-button HabitForm-button--cancel"
					onClick={onCancel}
				>
					Cancelar
				</button>

				<button
					type="submit"
					className="HabitForm-button HabitForm-button--add"
				>
					Añadir
				</button>
			</div>
		</form>
	);
}

export { CreateHabitForm };
