export const updateObject = (oldState, updateProperty) => {
	return {
		...oldState,
		...updateProperty
	};
};