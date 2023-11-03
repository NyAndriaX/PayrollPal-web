import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenNib } from "@fortawesome/free-solid-svg-icons";
import ConfirmationDeleteModal from "../../../common/ConfirmationDeleteModal";
import { useCompanyData } from "../../../../context/admin/company/companyContext";
import ComponentUpdateModalCompany from "./component.update.modal.company";

const ComponentTableCompany = ({ item }) => {
	const { deleteUserCompany } = useCompanyData();
	const [isOpenModalDelete, setOpenModalDelete] = React.useState(false);
	const [isOpenModalForm, setOpenModalForm] = React.useState(false);

	const openModalForm = () => {
		setOpenModalForm(true);
	};

	const closeModalForm = () => {
		setOpenModalForm(false);
	};

	const openModalDelete = () => {
		setOpenModalDelete(true);
	};

	const closeModalDelete = () => {
		setOpenModalDelete(false);
	};

	return (
		<>
			<tr key={item._id}>
				<td>{item.raisonSocial}</td>
				<td>
					{item.nomRepresentant} {item.prenomRepresentant}
				</td>
				<td>{item.emailRepresentant}</td>
				<td>{item.isEmailConfirmed ? "validé" : "non validé"}</td>
				<td className="content-btn-action">
					<button onClick={openModalDelete}>
						<FontAwesomeIcon icon={faTrash} />
					</button>
					<button onClick={openModalForm}>
						<FontAwesomeIcon icon={faPenNib} />
					</button>
				</td>
			</tr>
			<ConfirmationDeleteModal
				isOpen={isOpenModalDelete}
				onRequestClose={closeModalDelete}
				onDelete={() => deleteUserCompany(item._id, item.roles)}
			/>
			<ComponentUpdateModalCompany
				isOpen={isOpenModalForm}
				onRequestClose={closeModalForm}
				item={item}
			/>
		</>
	);
};

export default ComponentTableCompany;
