export const initializeLocalStorage = () => {
	const habitsInLocalStorage = localStorage.getItem("habits");
	const achievementsInLocalStorage = localStorage.getItem("achievements");
	const dayWithDatesInLocalStorage = localStorage.getItem("dayWithDates");

	if (!habitsInLocalStorage) {
		localStorage.setItem("habits", JSON.stringify({}));
	}

	if (!achievementsInLocalStorage) {
		localStorage.setItem("achievements", JSON.stringify({}));
	}

	if (!dayWithDatesInLocalStorage) {
		localStorage.setItem("dayWithDates", JSON.stringify({}));
	}
};
