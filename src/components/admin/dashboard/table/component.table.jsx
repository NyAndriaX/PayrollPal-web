import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const ComponentTable = ({ data, openDeleteModalOpen }) => {
	return (
		<tr key={data.id}>
			<td style={{ textAlign: "start" }}>
				{data.nom ? data.nom : data.representantNom}
			</td>
			<td>{data.prenom ? data.prenom : data.representantPrenom}</td>
			<td>{data.email ? data.email : data.representantEmail}</td>
			<td>
				<div
					className={
						data.roles === "ROLES_FREELANCE"
							? "freelance-class"
							: "company-class"
					}>
					{data.roles === "ROLES_FREELANCE" ? "Freelance" : "Company"}
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
	);
};

export default ComponentTable;
