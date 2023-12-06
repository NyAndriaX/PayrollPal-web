export const useFormatedDate = (dateString = new Date().toISOString()) => {
	const date = new Date(dateString);

	if (isNaN(date.getTime())) {
		throw new Error("Invalid date");
	}

	const DAYS_OF_WEEK = [
		"Dimanche",
		"Lundi",
		"Mardi",
		"Mercredi",
		"Jeudi",
		"Vendredi",
		"Samedi",
	];
	const MONTHS = [
		"Janvier",
		"Février",
		"Mars",
		"Avril",
		"Mai",
		"Juin",
		"Juillet",
		"Août",
		"Septembre",
		"Octobre",
		"Novembre",
		"Décembre",
	];

	const dayOfWeek = DAYS_OF_WEEK[date.getDay()];
	const dayOfMonth = date.getDate();
	const month = MONTHS[date.getMonth()];
	const year = date.getFullYear();

	const formattedDate = `${dayOfWeek} ${dayOfMonth} ${month} ${year}`;

	return formattedDate;
};
