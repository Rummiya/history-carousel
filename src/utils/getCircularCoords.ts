export const getCircularCoords = (
	count: number,
	radius: number,
	startAngle = -90 // начало с "верха", по аналогии с 12 часами
) => {
	const angleStep = (2 * Math.PI) / count;

	return Array.from({ length: count }).map((_, i) => {
		const angle = angleStep * i + (startAngle * Math.PI) / 180;
		const x = radius * Math.cos(angle);
		const y = radius * Math.sin(angle);
		return { x, y, angle: (angle * 180) / Math.PI };
	});
};
