/* eslint-disable react/prop-types */
import { useContext } from "react";
import { MustardHabitContext } from "../Context";
import { useState } from "react";
import "./HabitItem.css";
import { FiCheck, FiTrash2, FiEdit } from "react-icons/fi";
import { GiAlliedStar } from "react-icons/gi";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function HabitItem(props) {
	const context = useContext(MustardHabitContext);
	const { text, index, time, completed } = props;
	const [isEditing, setIsEditing] = useState(false);
	const [editHabitText, setEditHabitText] = useState("");
	const [editHabitTime, setEditHabitTime] = useState("");

	const handleEdit = () => {
		const habitTextUp =
			editHabitText[0].toUpperCase() + editHabitText.substring(1);
		setEditHabitText(habitTextUp);
		if (isEditing) {
			context.onEditHabit(context.index, habitTextUp, editHabitTime);
		}
		setIsEditing(!setIsEditing);
	};

	const handleCancelEdit = () => {
		setIsEditing(false);
		setEditHabitText(text);
		setEditHabitTime(time);
	};

	const openEditing = () => {
		setIsEditing(!isEditing);
		setEditHabitText(text);
		setEditHabitTime(time);
	};

	return (
		<li className={`habitItem ${completed && "habitItem--completed"}`}>
			{isEditing ? (
				<div className="editingItem">
					<div className="inputsContainer">
						<textarea
							type="text"
							value={editHabitText}
							onChange={(e) => setEditHabitText(e.target.value)}
						/>

						<select
							value={editHabitTime}
							onChange={(e) => setEditHabitTime(e.target.value)}
						>
							<option value="">Time</option>
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
						className={`buttonCheck ${!completed && "buttonCheck--incomplete"}`}
						onClick={() => context.onCompleteHabit(index)}
					>
						<FiCheck />
					</button>

					<p
						id="textHabit"
						onClick={() => context.onCompleteHabit(context.index)}
					>
						{text}
						<small>{time}</small>
					</p>

					<button className="buttonEdit" onClick={openEditing}>
						<FiEdit />
					</button>

					<button
						className={`buttonDelete ${completed && "buttonDelete--complete"}`}
						onClick={() => context.onDeleteHabit(context.index)}
					>
						<FiTrash2 />
					</button>

					{completed === true ? (
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
