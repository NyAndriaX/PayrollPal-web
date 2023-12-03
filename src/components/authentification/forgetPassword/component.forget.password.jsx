import React from "react";

const ComponentForgetPassword = ({
	form,
	steps,
	setForm,
	nexStep,
	handleOtherEmail,
	handleContinueWithThisEmail,
}) => {
	return (
		<>
			<p className="p-h1">{steps.title}</p>
			<p className="p-h3 text-center">{steps.subtitle}</p>
			{steps.components &&
				React.cloneElement(steps.components, {
					form: form,
					setForm: setForm,
					onContinue: handleContinueWithThisEmail,
					onOtherEmail: handleOtherEmail,
					nexStep: nexStep,
				})}
		</>
	);
};

export default ComponentForgetPassword;
