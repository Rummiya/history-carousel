import { FC } from 'react';
import { HistoryEndpoint } from '../../constants/historyEndpoints';
import './Navigation.scss';

interface Props {
	data: HistoryEndpoint[];
	activeIndex: number;
	handleClick: (index: number) => void;
}

export const Navigation: FC<Props> = ({ data, activeIndex, handleClick }) => {
	const handleController = (direction: 'back' | 'next') => {
		const newIdx = direction === 'back' ? activeIndex - 1 : activeIndex + 1;

		if (newIdx >= 0 && newIdx < data.length) {
			handleClick(newIdx);
		}
	};

	return (
		<div className='navigation'>
			<span className='pagination'>
				0{activeIndex + 1}/0{data.length}
			</span>

			<div className='controllers'>
				<button
					onClick={() => handleController('back')}
					disabled={activeIndex === 0}
				>
					<img src='/arrow.svg' alt='arrow' />
				</button>
				<button
					onClick={() => handleController('next')}
					disabled={activeIndex === 5}
				>
					<img src='/arrow.svg' alt='arrow' />
				</button>
			</div>
		</div>
	);
};
