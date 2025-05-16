import { FC } from 'react';
import { HistoryEndpoint } from '../../constants/historyEndpoints';

import './PaginationBullets.scss';

interface Props {
	data: HistoryEndpoint[];
	activeIndex: number;
	handleClick: (index: number) => void;
}

export const PaginationBullets: FC<Props> = ({
	data,
	activeIndex,
	handleClick,
}) => {
	return (
		<div className='pagination-bullets'>
			{data.map(({ id }, index) => (
				<button
					onClick={() => handleClick(index)}
					className={`pagination-bullet ${
						activeIndex === index ? 'active' : ''
					}`}
					key={id}
				></button>
			))}
		</div>
	);
};
