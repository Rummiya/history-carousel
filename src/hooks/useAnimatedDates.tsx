import { useState } from 'react';
import { HistoryEndpoint } from '../constants/historyEndpoints';
import { animateNumbers } from '../utils';

export const useAnimatedDates = ({ data }: { data: HistoryEndpoint[] }) => {
	const [animatedDates, setAnimatedDates] = useState(data[0].dates);

	const startAnimation = (index: number) => {
		const [newDate1, newDate2] = data[index].dates;

		animateNumbers(animatedDates[0], newDate1, val =>
			setAnimatedDates(prev => [val, prev[1]])
		);

		animateNumbers(animatedDates[1], newDate2, val =>
			setAnimatedDates(prev => [prev[0], val])
		);
	};

	return {
		startAnimation,
		animatedDates,
		setAnimatedDates,
	};
};
