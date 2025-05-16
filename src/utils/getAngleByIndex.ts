export const getAngleByIndex = (index: number, total: number) => {
	const angleStep = 360 / total;
	return angleStep * index;
};
