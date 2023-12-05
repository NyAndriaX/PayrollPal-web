import LoadingGif from "../../../assets/loading-cercle-dots.gif";
import { useSearchParams } from "../../../hooks/useSearchParams";

const ComponentSelectedEmail = ({
	onContinue,
	isLoadingWithThisEmail,
	onOtherEmail,
}) => {
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
				<button className="btn-secondary" onClick={() => onContinue({ email })}>
					{isLoadingWithThisEmail ? (
						<img
							src={LoadingGif}
							alt="chargement..."
							style={{ width: "40px" }}
						/>
					) : (
						"Pour suivre"
					)}
				</button>
				<button className="btn-primary" onClick={() => onOtherEmail()}>
					Autre
				</button>
			</div>
		</>
	);
};
export default ComponentSelectedEmail;
