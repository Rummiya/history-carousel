import { FC } from 'react';
import { HistoryEndpoint } from '../../constants/historyEndpoints';
import { getCircularCoords } from '../../utils';

import './Wheel.scss';

interface Props {
	data: HistoryEndpoint[];
	handleClick: (index: number) => void;
	rotation: number;
	activeIndex: number;
}

export const Wheel: FC<Props> = ({
	data,
	handleClick,
	rotation,
	activeIndex,
}) => {
	const coords = getCircularCoords(data.length, 265, -60);

	return (
		<div
			className='wheel'
			style={{ transform: `translate(-50%) rotate(${rotation}deg)` }}
		>
			{data.map(({ id }, index) => {
				return (
					<button
						key={id}
						onClick={() => handleClick(index)}
						className={`dot ${index === activeIndex ? 'active' : ''}`}
						style={{
							top: `calc(50% + ${coords[index].y}px)`,
							left: `calc(50% + ${coords[index].x}px)`,
							transform: `translate(-50%, -50%) rotate(${-rotation}deg)`, // компенсация вращения
						}}
					>
						<span>{index + 1}</span>
					</button>
				);
			})}
		</div>
	);
};
