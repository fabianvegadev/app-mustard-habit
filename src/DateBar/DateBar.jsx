import { useContext } from "react";
import { MustardHabitContext } from "../Context";
import { FaRegCheckCircle } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "./DateBar.css";

const daysOfWeek = ["D", "L", "Ma", "Mi", "J", "V", "S"];
const monthsOfYear = [
	"ENE",
	"FEB",
	"MAR",
	"ABR",
	"MAY",
	"JUN",
	"JUL",
	"AGO",
	"SEP",
	"OCT",
	"NOV",
	"DIC",
];

const DateBar = () => {
	const context = useContext(MustardHabitContext);

	const getShowDaysWithDates = (date) => {
		const showDaysWithDates = [];
		const today = new Date(date);
		for (let i = 0; i < 7; i++) {
			const day = new Date(today);
			day.setDate(today.getDate() - today.getDay() + i);
			var month = monthsOfYear[day.getMonth()];
			var year = day.getFullYear();
			const fullDay = day.toLocaleDateString();
			context.daysWithDates.map((d) => {
				if (fullDay === d.fullDate) {
					showDaysWithDates.push({
						name: daysOfWeek[i],
						day: day.getDate(),
						fullDate: d.fullDate,
						allCompleted: d.allCompleted,
					});
				}
			});
		}
		return [showDaysWithDates, month, year];
	};

	const [showDaysWithDates, month, year] = getShowDaysWithDates(
		context.changeWeek
	);

	return (
		<div className="datebarContainer">
			<div className="arrowContainer">
				<b className="month">{month}</b>
				<button onClick={context.handlePreviousWeek}>
					<FiArrowLeft />
				</button>
			</div>

			<div className="datebarCenterContainer">
				{showDaysWithDates.map((item, index) => (
					<div key={index} className="dayContainer">
						<b>{item.day}</b>
						<button
							title={[item.fullDate]}
							onClick={(e) => context.selectDay(e)}
							className={`${
								item.allCompleted == true &&
								context.habits.length != 0 &&
								"allCompleted"
							}
                            ${
															context.selectedDay === item.fullDate &&
															"selectedDay"
														}`}
						>
							{item.name}
							{item.allCompleted === true && context.habits.length != 0 ? (
								<FaRegCheckCircle className="IconCheck" size={16} />
							) : (
								<div></div>
							)}
						</button>
					</div>
				))}
			</div>

			<div className="arrowContainer">
				<b className="year">{year}</b>
				<button onClick={context.handleNextWeek}>
					<FiArrowRight />
				</button>
			</div>
		</div>
	);
};

export { DateBar };
