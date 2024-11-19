import { useContext } from "react";
import { MustardHabitContext } from "../Context";
import "./CreateHabitForm.css";

function CreateHabitForm() {
	const context = useContext(MustardHabitContext);

	const onSubmit = (e) => {
		e.preventDefault();
		context.onAddHabit(context.newHabitValue, context.newHabitJornada);
		context.setNewHabitValue("");
		context.setNewHabitJornada("");
		context.setOpenModal(false);
	};

	const onCancel = () => {
		context.setOpenModal(false);
	};

	const onChange = (e) => {
		context.setNewHabitValue(e.target.value);
	};

	return (
		<form onSubmit={onSubmit}>
			<label>Escribe tu nuevo hábito</label>

			<textarea
				placeholder="Correr 30 minutos antes de empezar el día"
				value={context.newHabitValue}
				onChange={onChange}
			/>

			<select
				value={context.newHabitJornada}
				onChange={(e) => context.setNewHabitJornada(e.target.value)}
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
