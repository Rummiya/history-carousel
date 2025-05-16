import { useState } from 'react';
import { useAnimatedDates } from '../../hooks/useAnimatedDates';

import { HistoryEndpoint } from '../../constants/historyEndpoints';

import { getAngleByIndex, wait } from '../../utils';

import { DatesSlider } from '../dates-slider/DatesSlider';
import { Navigation } from '../navigation/Navigation';
import { Wheel } from '../wheel/Wheel';

import { PaginationBullets } from '../pagination-bullets/PaginationBullets';
import './HistoryCarousel.scss';

const LABEL_HIDE_DURATION = 200;
const LABEL_SHOW_DELAY = 600;

export const HistoryCarousel = ({
	data,
	title,
}: {
	data: HistoryEndpoint[];
	title: string;
}) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [rotation, setRotation] = useState(0);
	const [showLabels, setShowLabels] = useState(true);

	const { animatedDates, startAnimation } = useAnimatedDates({
		data,
	});

	const activeData = data[activeIndex];

	const handleClick = async (index: number) => {
		const angle = getAngleByIndex(index, data.length);

		setShowLabels(false);
		setRotation(-angle);

		await wait(LABEL_HIDE_DURATION);
		setActiveIndex(index);

		startAnimation(index);

		await wait(LABEL_SHOW_DELAY);
		setShowLabels(true);
	};

	return (
		<div className='container'>
			<div className='content'>
				<div className='line line--horizontal'></div>
				<div className='line line--vertical'></div>

				<h1 className='title'>{title}</h1>

				<div className='history-carousel'>
					<Wheel
						data={data}
						activeIndex={activeIndex}
						handleClick={handleClick}
						rotation={rotation}
					/>

					<span className='label' style={{ opacity: showLabels ? 1 : 0 }}>
						{activeData.label}
					</span>

					<div className='dates'>
						<span>{animatedDates[0]}</span>
						<span>{animatedDates[1]}</span>
					</div>

					<div className='desk-nav'>
						<Navigation
							data={data}
							activeIndex={activeIndex}
							handleClick={handleClick}
						/>
					</div>

					<div className={`dates-slider ${showLabels ? '' : 'disabled'}`}>
						<span className='mob-label'>{activeData.label}</span>
						<DatesSlider events={activeData.events} />
					</div>

					<div className='mob-nav'>
						<Navigation
							data={data}
							activeIndex={activeIndex}
							handleClick={handleClick}
						/>
						<PaginationBullets
							data={data}
							handleClick={handleClick}
							activeIndex={activeIndex}
						/>
						<div></div>
					</div>
				</div>
			</div>
		</div>
	);
};
