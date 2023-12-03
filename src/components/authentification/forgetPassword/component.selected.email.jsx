import { useSearchParams } from "../../../hooks/useSearchParams";

const ComponentSelectedEmail = ({ onContinue, onOtherEmail }) => {
	const email = useSearchParams("e");

	return (
		<>
			<p className="p-h3" style={{ padding: "0px 20px", margin: "20px 0px" }}>
				L'email que vous souhaitez récupérer est-il{" "}
				<span className="p-a">{email}</span> ? Si vous souhaitez modifier le mot
				de passe pour cette adresse e-mail, cliquez sur "Pour suivre". Sinon,
				cliquez sur "Autre".
			</p>
			<div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
				<button className="btn-secondary" onClick={() => onContinue()}>
					Pour suivre
				</button>
				<button className="btn-primary" onClick={() => onOtherEmail()}>
					Autre
				</button>
			</div>
		</>
	);
};
export default ComponentSelectedEmail;
