const setClassName = (attributes) => {
	const { size, split } = attributes;

	return `stack ${size} ${split ? `has-${split}-split` : ''}`;
};

export default setClassName;
