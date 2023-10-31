import React from "react";
import notData from "../../assets/animation/data-not-found.json";
import Lottie from "react-lottie";

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: notData,
};

const NotData = () => {
	return (
		<div
			style={{
				width: "100%",
				height: "70vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<Lottie options={defaultOptions} height={130} width={130} />
		</div>
	);
};

export default NotData;
