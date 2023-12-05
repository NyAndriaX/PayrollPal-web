import React from "react";
import ConfirmationDeleteModal from "../../../common/ConfirmationDeleteModal";
import ComponentModalPlacement from "./component.modal.placement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenNib } from "@fortawesome/free-solid-svg-icons";
import { usePlacementData } from "../../../../context/admin/placement/placementContext";

const ComponentTablePlacement = ({ item }) => {
	const { deletePlacement, putPlacement } = usePlacementData();
	const [isOpenDelete, setOpenDelete] = React.useState(false);
	const [isOpenModalEdit, setOpenModalEdit] = React.useState(false);

	const transformData = (data) => ({
		idFreelance: data?.Freelance.id,
		idFreelanceChasseur: data?.FreelanceChasseur.id,
		idEntreprise: data?.Entreprise.id,
		revenuMensuelFreelanceChasseur: `${data?.FreelanceChasseurRevenu}`,
	});

	const onSubmit = (data) => {
		const formData = transformData(data);
		const { placementId } = data;
		putPlacement(formData, placementId);
	};

	const openDeleteModal = () => {
		setOpenDelete(true);
	};

	const closeDeleteModal = () => {
		setOpenDelete(false);
	};

	const openModalEdit = () => {
		setOpenModalEdit(true);
	};

	const closeModalEdit = () => {
		setOpenModalEdit(false);
	};

	return (
		<>
			<tr key={item._id}>
				<td style={{ textAlign: "start" }}>{item.entreprise?.raisonSocial}</td>
				<td>
					{item.Freelance?.nom} {item.Freelance?.prenom}
				</td>
				<td>
					{item.FreelanceChasseur?.nom} {item.FreelanceChasseur?.prenom}
				</td>
				<td>{item.tjm}</td>
				<td className="content-btn-action">
					<button onClick={openDeleteModal}>
						<FontAwesomeIcon icon={faTrash} />
					</button>
					<button onClick={openModalEdit}>
						<FontAwesomeIcon icon={faPenNib} />
					</button>
				</td>
			</tr>

			<ConfirmationDeleteModal
				isOpen={isOpenDelete}
				onRequestClose={closeDeleteModal}
				onDelete={() => deletePlacement(item._id)}
			/>
			<ComponentModalPlacement
				isOpen={isOpenModalEdit}
				onRequestClose={closeModalEdit}
				item={item}
				onSubmit={onSubmit}
			/>
		</>
	);
};

export default ComponentTablePlacement;
