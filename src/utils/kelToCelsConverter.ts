export const kelToCelsConverter = (deg: number): number => {
	return +(deg - 273.15).toFixed(1);
};
