import React, { useContext, useEffect } from "react";
import FreelWaitCardList from "../../../components/admin/freelWait/card/freelWait.card.list";
import { FreelWaitDataProvider } from "../../../context/admin/freelWait/freelWaitContext";

const FreelWaitPage = () => {
	return (
		<FreelWaitDataProvider>
			<FreelWaitCardList />
		</FreelWaitDataProvider>
	);
};
export default FreelWaitPage;
