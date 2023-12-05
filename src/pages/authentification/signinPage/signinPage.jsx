import React from "react";
import SigninForm from "../../../components/authentification/signinForm/signinForm";
const SignInPage = () => {
	const [justEntered, setJustEntered] = React.useState(true);

	React.useEffect(() => {
		if (justEntered) {
			setJustEntered(false);
			sessionStorage.removeItem("currentStep");
			sessionStorage.removeItem("formData");
		}
	}, [justEntered]);

	return (
		<div className="components">
			<SigninForm />{" "}
		</div>
	);
};
export default SignInPage;
