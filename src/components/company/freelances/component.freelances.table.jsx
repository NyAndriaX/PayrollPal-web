import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import ConfirmationDeleteModal from "../../common/ConfirmationDeleteModal";

const ComponentFreelancesTable = ({
	data,
	deleteOnePlacementInThisEntreprise,
}) => {
	const [isDeleteModalOpen, setDeleteModalOpen] = React.useState(false);

	const onDelete = async (placementId) => {
		const idFreelance = data.Freelance.id;
		const idEntreprise = data.entreprise.id;
		try {
			await deleteOnePlacementInThisEntreprise(idEntreprise, idFreelance);
		} catch (error) {
			console.log(error);
			throw error;
		}
	};

	const openDeleteModalOpen = () => {
		setDeleteModalOpen(true);
	};
	const closeDeleteModal = () => {
		setDeleteModalOpen(false);
	};

	return (
		<>
			<tr key={data.id}>
				<td style={{ textAlign: "start" }}>
					{data.Freelance.nom} {data.Freelance.prenom}
				</td>
				<td>{data.tjm}</td>
				<td>{data.Freelance.tel}</td>
				<td>
					{" "}
					<div
						className={
							data.Freelance.poste === "FullStack"
								? "fullStack-class"
								: data.Freelance.poste === "Backend"
								? "backend-class"
								: "frontend-class"
						}>
						{data.Freelance.poste}
					</div>
				</td>
				<td className="content-btn-action">
					<button onClick={openDeleteModalOpen}>
						<FontAwesomeIcon icon={faTrash} />
					</button>
					<button>
						<FontAwesomeIcon icon={faCircleInfo} />
					</button>
				</td>
			</tr>

			<ConfirmationDeleteModal
				isOpen={isDeleteModalOpen}
				onRequestClose={closeDeleteModal}
				onDelete={onDelete}
			/>
		</>
	);
};
export default ComponentFreelancesTable;
