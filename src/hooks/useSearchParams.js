import { useLocation } from "react-router-dom";

export const useSearchParams = (params) => {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const fullValue = searchParams.get(params);
	if (fullValue) {
		const email = fullValue.replace(/^"(.*)"$/, "$1");
		return email;
	}
	return null;
};
