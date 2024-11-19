/* eslint-disable react/prop-types */
import { useContext } from "react";
import { MustardHabitContext } from "../Context";
import { useState } from "react";
import "./HabitItem.css";
import { FiCheck, FiTrash2, FiEdit } from "react-icons/fi";
import { GiAlliedStar } from "react-icons/gi";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function HabitItem() {
	const context = useContext(MustardHabitContext);
	const [isEditing, setIsEditing] = useState(false);
	const [editHabitText, setEditHabitText] = useState("");
	const [editHabitJornada, setEditHabitJornada] = useState("");

	const handleEdit = () => {
		const habitTextUp =
			editHabitText[0].toUpperCase() + editHabitText.substring(1);
		setEditHabitText(habitTextUp);
		if (isEditing) {
			context.onEditHabit(context.index, habitTextUp, editHabitJornada);
		}
		setIsEditing(!setIsEditing);
	};

	const handleCancelEdit = () => {
		setIsEditing(false);
		setEditHabitText(context.text);
		setEditHabitJornada(context.jornada);
	};

	const openEditing = () => {
		setIsEditing(!isEditing);
		setEditHabitText(context.text);
		setEditHabitJornada(context.jornada);
	};

	return (
		<li className={`habitItem ${context.completed && "habitItem--completed"}`}>
			{isEditing ? (
				<div className="editingItem">
					<div className="inputsContainer">
						<textarea
							type="text"
							value={editHabitText}
							onChange={(e) => setEditHabitText(e.target.value)}
						/>

						<select
							value={editHabitJornada}
							onChange={(e) => setEditHabitJornada(e.target.value)}
						>
							<option value="">Jornada</option>
							<option value="Mañana">Mañana</option>
							<option value="Tarde">Tarde</option>
							<option value="Noche">Noche</option>
						</select>
					</div>
					<div className="iconsContainer">
						<button className="iconCheckEdit" onClick={handleEdit}>
							<FaCheck size={15} />
						</button>
						<button className="iconCancelEdit" onClick={handleCancelEdit}>
							<FaXmark size={19} />
						</button>
					</div>
				</div>
			) : (
				<>
					<button
						className={`buttonCheck ${
							!context.completed && "buttonCheck--incomplete"
						}`}
						onClick={() => context.onCompleteHabit(context.index)}
					>
						<FiCheck />
					</button>

					<p
						id="textHabit"
						onClick={() => context.onCompleteHabit(context.index)}
					>
						{context.text}
						<small>{context.jornada}</small>
					</p>

					<button className="buttonEdit" onClick={openEditing}>
						<FiEdit />
					</button>

					<button
						className={`buttonDelete ${
							context.completed && "buttonDelete--complete"
						}`}
						onClick={() => context.onDeleteHabit(context.index)}
					>
						<FiTrash2 />
					</button>

					{context.completed === true ? (
						<div className="iconStar">
							<GiAlliedStar size={20} />
						</div>
					) : (
						<div />
					)}
				</>
			)}
		</li>
	);
}

export { HabitItem };
