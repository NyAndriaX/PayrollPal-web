import React, { useState, useEffect } from "react";
import Select from "react-select";

const DynamicSelect = ({ data, onSelect }) => {
	const [selectedOption, setSelectedOption] = useState(null);
	const [options, setOptions] = useState([]);

	useEffect(() => {
		const dynamicOptions = data.map((item) => ({
			value: item.id,
			label:
				item.prenom && item.nom
					? `${item.prenom} ${item.nom}`
					: item.raisonSocial,
		}));

		setOptions(dynamicOptions);
	}, [data]);

	const handleSelectChange = (selectedOption) => {
		setSelectedOption(selectedOption);
		if (onSelect) {
			onSelect(selectedOption);
		}
	};

	return (
		<div>
			<Select
				value={selectedOption}
				onChange={handleSelectChange}
				options={options}
			/>
		</div>
	);
};

export default DynamicSelect;
