import React from "react";
import { FreelWaitDataContext } from "../../../../context/admin/freelWait/freelWaitContext";
import FreelWaitCard from "./freelwait.card";
import NotData from "../../../common/NotData";

const FreelWaitCardList = () => {
	const [isAcceptModalOpen, setAcceptModalOpen] = React.useState(false);
	const [isDeleteModalOpen, setDeleteModalOpen] = React.useState(false);
	const { freelanceData, validateFreelance, deleteFreelanceWait } =
		React.useContext(FreelWaitDataContext);
	const data = Object.values(freelanceData);

	const onValidation = async (id) => {
		await validateFreelance(id);
	};
	const onDelete = async (id) => {
		await deleteFreelanceWait(id);
	};

	const openAcceptModal = () => {
		setAcceptModalOpen(true);
	};
	const closeAcceptModal = () => {
		setAcceptModalOpen(false);
	};

	const openDeleteModal = () => {
		setDeleteModalOpen(true);
	};

	const closeDeleteModal = () => {
		setDeleteModalOpen(false);
	};
	return (
		<div className="justify-space-between">
			{data.length > 0 ? (
				data?.map((data) => (
					<>
						<FreelWaitCard
							data={data}
							openAcceptModal={openAcceptModal}
							closeAcceptModal={closeAcceptModal}
							openDeleteModal={openDeleteModal}
							closeDeleteModal={closeDeleteModal}
							isDeleteModalOpen={isDeleteModalOpen}
							isAcceptModalOpen={isAcceptModalOpen}
							onValidation={onValidation}
							onDelete={onDelete}
						/>
					</>
				))
			) : (
				<NotData />
			)}
		</div>
	);
};

export default FreelWaitCardList;
