import { A11y, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Event } from '../../constants/historyEndpoints';

import 'swiper/css';
import 'swiper/css/navigation';
import './DatesSlider.scss';

export const DatesSlider = ({ events }: { events: Event[] }) => {
	const between = window.innerWidth > 768 ? 101 : 30;

	return (
		<Swiper
			className='events-slider-container'
			slidesPerView={'auto'}
			spaceBetween={between}
			direction='horizontal'
			modules={[Navigation, A11y]}
			navigation
		>
			{events.map(event => (
				<SwiperSlide>
					<div className='card'>
						<span>{event.year}</span>
						<p>{event.desc}</p>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
