import ConfirmationDeleteModal from "../../../common/ConfirmationDeleteModal";
import ConfirmationAcceptModal from "../../../common/ConfirmationValidationModal";

const FreelWaitCard = ({
	data,
	openAcceptModal,
	closeAcceptModal,
	openDeleteModal,
	closeDeleteModal,
	isDeleteModalOpen,
	isAcceptModalOpen,
	onValidation,
	onDelete,
}) => {
	return (
		<div className="card" key={data._id}>
			<div style={{ marginBottom: "1rem" }}>
				<p className="p-h3 text-center" style={{ color: "black" }}>
					{data.prenom} {data.nom}
				</p>
				<p className="p-h3 text-center">
					{data.prenom} {data.nom}
				</p>
			</div>
			<p>Nom : {data.nom}</p>
			<p>Prenom : {data.prenom}</p>
			<p>Email : {data.email}</p>
			<div className="justify-space-between" style={{ marginTop: "1rem" }}>
				<button className="btn-secondary" onClick={openAcceptModal}>
					Accept
				</button>
				<button className="btn-primary" onClick={openDeleteModal}>
					Refuser
				</button>
			</div>
			<ConfirmationAcceptModal
				isOpen={isAcceptModalOpen}
				onRequestClose={closeAcceptModal}
				onAccept={() => onValidation(data._id)}
			/>
			<ConfirmationDeleteModal
				isOpen={isDeleteModalOpen}
				onRequestClose={closeDeleteModal}
				onDelete={() => onDelete(data._id)}
			/>
		</div>
	);
};
export default FreelWaitCard;
