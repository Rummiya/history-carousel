import { HistoryCarousel } from '../../components/history-carousel/HistoryCarousel ';
import { historyEndpoints } from '../../constants/historyEndpoints';

export const Home = () => {
	return (
		<div>
			<HistoryCarousel data={historyEndpoints} title={'Исторические даты'} />
			<HistoryCarousel
				data={[
					{
						id: 1,
						label: 'История',
						dates: [1986, 1991],
						events: [
							{ year: 1986, desc: 'Принятие новой конституции' },
							{ year: 1987, desc: 'Мирное соглашение' },
							{ year: 1988, desc: 'Революционные протесты' },
							{ year: 1989, desc: 'Значимое политическое событие' },
							{ year: 1990, desc: 'Принятие новой конституции' },
							{ year: 1991, desc: 'Переименование города' },
						],
					},
					{
						id: 2,
						label: 'Наука',
						dates: [2000, 2005],
						events: [
							{ year: 2000, desc: 'Разработка вакцины' },
							{ year: 2001, desc: 'Разработка новой теории в астрофизике' },
							{ year: 2002, desc: 'Открытие экзопланеты' },
							{ year: 2003, desc: 'Открытие экзопланеты' },
							{ year: 2004, desc: 'Разработка вакцины' },
							{ year: 2005, desc: 'Разработка вакцины' },
						],
					},
					{
						id: 3,
						label: 'Образование',
						dates: [2006, 2010],
						events: [
							{ year: 2006, desc: 'Открытие университетского кампуса' },
							{ year: 2007, desc: 'Внедрение цифровых технологий в обучение' },
							{ year: 2008, desc: 'Внедрение цифровых технологий в обучение' },
							{
								year: 2009,
								desc: 'Запуск нового образовательного онлайн-курса',
							},
							{ year: 2010, desc: 'Расширение международных обменов' },
						],
					},
				]}
				title={'Эндпоинты'}
			/>
		</div>
	);
};
