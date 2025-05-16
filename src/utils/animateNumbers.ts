export const animateNumbers = (
	from: number,
	to: number,
	setter: (v: number) => void
) => {
	let current = from;
	const step = (to - from) / 20; // 20 шагов

	const interval = setInterval(() => {
		current += step;
		if ((step > 0 && current >= to) || (step < 0 && current <= to)) {
			current = to;
			clearInterval(interval);
		}
		setter(Math.round(current));
	}, 20); // каждый 20 мс
};
