export const isEmpty = (prop) => {
	return (
		prop === false ||
		prop === null ||
		prop === undefined ||
		(Object.prototype.hasOwnProperty.call(prop, 'length') && prop.length === 0) ||
		(prop.constructor === Object && Object.keys(prop).length === 0)
	);
};