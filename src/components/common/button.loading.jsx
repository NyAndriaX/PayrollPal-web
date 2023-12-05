import React from "react";
import loadingData from "../../assets/animation/loarding-dots.json";
import Lottie from "react-lottie";

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: loadingData,
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice",
	},
	pathFillColor: "#00ff00",
};

const ButtonLoading = () => {
	return (
		<div
			style={
				{
					// pointerEvents: "none",
				}
			}>
			<Lottie options={defaultOptions} height={200} width={200} />
		</div>
	);
};
export default ButtonLoading;
