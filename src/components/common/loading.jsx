import React from "react";
import loadingData from "../../assets/animation/loarding-dots.json";
import Lottie from "react-lottie";

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: loadingData,
};
const Loading = () => {
	return (
		<div style={{ width: "100%" }}>
			<Lottie options={defaultOptions} height={200} width={200} />
		</div>
	);
};
export default Loading;
