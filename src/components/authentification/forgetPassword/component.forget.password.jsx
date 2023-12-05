import React from "react";

const ComponentForgetPassword = ({
	form,
	steps,
	setForm,
	nexStep,
	errorRequest,
	handleOtherEmail,
	isLoadingWithThisEmail,
	handleContinueWithThisEmail,
}) => {
	return (
		<>
			<p className="p-h1">{steps.title}</p>
			<p className="p-h3 text-center">{steps.subtitle}</p>
			{errorRequest && (
				<p className="text-center p-label p-error">{errorRequest}</p>
			)}
			{steps.components &&
				React.cloneElement(steps.components, {
					form: form,
					setForm: setForm,
					nexStep: nexStep,
					onOtherEmail: handleOtherEmail,
					onContinue: handleContinueWithThisEmail,
					isLoadingWithThisEmail: isLoadingWithThisEmail,
				})}
		</>
	);
};

export default ComponentForgetPassword;
