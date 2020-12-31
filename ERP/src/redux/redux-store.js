import {createStore} from "redux";

/* Типы задач (taskType)
1 - Проектирование
2 - Разработка
3 - Тестирование
4 - Доработки
5 - Маркетинг
6 - SEO

Статусы: 
new - новая
work - в работе
test - тестирование
delay - отложена
close - закрыта
resolve - решена

Последние изменения: 
open - открыта
change - изменили сроки
close - закрыта
resolve - решена

*/

const initialState = {

	members: [
		'Патон Евгений', 
		'Патон Борис', 
		'Глушко Валентин',
		'Келдыш Мстислав',
		'Курчатов Игорь', 
		'Кондратюк Юрий', 
		'Королёв Сергей'
	],

	membersNicks: [
		'PatonE', 
		'PatonB', 
		'Glushko',
		'Keldysh',
		'Kurchatov', 
		'Kondratuk', 
		'Korolyov'
	],

	membersPhoto: ['', '', 'Glushko.jpg', 'Keldysh.jpg', 'Kurchatov.jpg', 'Kondratuk.jpg', 'Korolyov.jpg'],

	membersData: [
		{
			position: 'CEO',
			registrationDate: '02.02.2020',
			department: 'general',
			lastActivity: '15.05.2020',
			city: 'Dnepr',
			dateOfBirth: '21.07.1985',
			email: 'qwerty@gmail.com',
			workPhone: '378-12-71',
			mobilePhone: '+380991273876',
			skype: 'stor23',
			telegram: '@prime',
			workTime: '9.00 - 18.00'
		},
		{
			position: 'Project manager',
			registrationDate: '03.04.2020',
			department: 'general',
			lastActivity: '14.05.2020',
			city: 'Dnepr',
			dateOfBirth: '12.04.1995',
			email: 'yser@gmail.com',
			workPhone: '374-22-01',
			mobilePhone: '+380991113576',
			skype: '3drug',
			telegram: '@second',
			workTime: '9.00 - 18.00'
		},
		{
			position: 'Developer',
			registrationDate: '23.12.2019',
			department: 'general',
			lastActivity: '10.05.2020',
			city: 'Dnepr',
			dateOfBirth: '28.03.1990',
			email: '123friend@gmail.com',
			workPhone: '324-00-91',
			mobilePhone: '+380961112279',
			skype: 'rugermax',
			telegram: '@third',
			workTime: '9.00 - 18.00'
		},
		{
			position: 'Developer',
			registrationDate: '02.12.2019',
			department: 'general',
			lastActivity: '11.05.2020',
			city: 'Dnepr',
			dateOfBirth: '08.11.1978',
			email: 'rokerjoker@gmail.com',
			workPhone: '204-10-91',
			mobilePhone: '+380668315479',
			skype: 'rokerjoker',
			telegram: '@kollega',
			workTime: '9.00 - 18.00'
		},
		{
			position: 'QA',
			registrationDate: '18.11.2019',
			department: 'general',
			lastActivity: '14.05.2020',
			city: 'Dnepr',
			dateOfBirth: '04.10.1998',
			email: 'marty@gmail.com',
			workPhone: '214-73-86',
			mobilePhone: '+380738675579',
			skype: 'rokoko',
			telegram: '@kosti',
			workTime: '9.00 - 18.00'
		},
		{
			position: 'SEO-specialist',
			registrationDate: '10.02.2020',
			department: 'general',
			lastActivity: '18.05.2020',
			city: 'Dnepr',
			dateOfBirth: '16.02.1991',
			email: 'martincampbell@yandex.ru',
			workPhone: '214-73-59',
			mobilePhone: '+380668615479',
			skype: 'rantapapa',
			telegram: '@trebuyu',
			workTime: '9.00 - 18.00'
		},
		{
			position: 'salesman',
			registrationDate: '30.08.2019',
			department: 'general',
			lastActivity: '19.05.2020',
			city: 'Dnepr',
			dateOfBirth: '30.06.1989',
			email: 'astronavt@yandex.ru',
			workPhone: '214-73-63',
			mobilePhone: '+380968612779',
			skype: 'bobobob',
			telegram: '@bobobob',
			workTime: '9.00 - 18.00'
		}
	],

	lastNews: [
		'Закрыта задача #48376',
		'Закрыта задача #48377',
		'Перенесены сроки у задачи #48378'
	],
	
	taskNumber: [ 48376, 48377, 48378, 48379, 52343, 52344, 52345, 52347 ],
	
	taskType: [ 'Разработка', 'Тестирование', 'Доработки', 'Разработка', 'Разработка', 'Маркетинг', 'SEO', 'Тестирование'],
	
	taskStatus: ['Решена', 'Закрыта', 'Решена', 'В работе', 'Тестирование', 'Отложена', 'В работе', 'В работе'],
	
	taskTopic: [
		'Изменить способ авторизации клиента',
		'Протестировть форму поиска на странице карты',
		'Изменить страницу дополнительной информации',
		'Создать функционал страницы клиента согласно дизайну',
		'Протестировать окно микрорайонов',
		'Маркетинговые исследования',
		'Изменение фона изображения на главной странице',
		'Произвести тестирование раздела "О районе"'
	],
	
	taskDate: ['02.04.2020', '03.04.2020', '05.05.2020', '10.05.2020', '01.05.2020', '22.04.2020', '23.05.2020', '23.05.2020'],

	taskChangeDate: ['06.05.2020', '08.05.2020', '16.05.2020', '20.05.2020', '21.05.2020', '21.05.2020', '23.05.2020', '24.05.2020'],
	
	taskLastChange: ['resolve', 'close', 'change', 'change', 'change', 'change', 'change', 'resolve'],
	
	taskResponsible: [5, 1, 0, 2, 2, 5, 5, 6],	// тут индексы из массива members

	taskText: ['Сейчас на странице авторизации клиента есть 2 поля: email, password. Необходимо изменить 1е поле на login. Так же необходимо добавить ссылку на сервис восстановления пароля. Данная задача с макетами и ограничениями будет прописана отдельно.', 
		'Провести компонентное и интеграционное тестирование формы поиска на странице карты. Проверить функционал по критериям охвата условий. Создать стандартный тест-комплект на тестирование функционала, разместить его в папке для тест-комплектов в разделе данного функционала.',
		'Изменить старницу дополнительной информации согласно утверждённого дизайна: переместить кнопку запуска сортировки, шрифт отображаемой информации на размер 12 и убрать колонку ответственных.',
		'Создать функционал страницы клиента согласно макету, дизайну и тех. заданию (файлы прилагаются). Недостающий материал будет включаться в работу по стандартной схеме (сроки доработок утверждены).',
		'Создать тест-комплект и протестировать функционал окна микрорайнов. Особое внимание уделить функциональному тестированию, тестированию удобства использования и безопасности.',
		'Провести маркетинговые иссследования и выявить наиболее предпочтительные виды меню для пользователей из ранее утверждённых на собрании руководителей отделов. ',
		'Создать план продвижения раздела "Гид по району" всеми возможными способами. Особое внимание уделить ссылочному продвижению раздела и продвижению в соц. сетях. Обозначить необходимый бюджет и сроки выведения раздела в топ-3 по утверждённому списку запросов для поисковой системы Google. Сформулировать планы и цифры для достижения главного критерия: 500 посетителей в день.',
		'Произвести тестирование раздела "О районе". Проверить функционал по критериям охвата условий. Создать стандартный тест-комплект на тестирование функционала, разместить его в папке для тест-комплектов в разделе данного функционала.'
	],

	userName: 'Мстислав',

	channels: ['Общий', 'Рабочие группы', 'Задачи'],

	membersDialogs: {
		PatonE: [
			{	message: 'Привет. Расскажи пжл, как проходит тестирование блока "О районах". Есть какие-то проблемы?',
				member: 'owner',
				date: '17.05.2020',
				time: '8:25' },

			{	message: 'Может, чем-то помочь?',
				member: 'owner',
				date: '17.05.2020',
				time: '8:25' },
			
			{	message: 'Нет. Всё норм. Сегодня встретимся и я тебе расскажу.',
				member: 'guest',
				date: '17.05.2020',
				time: '9:30' }

		],

		PatonB: [
			{	message: 'Здравствуй. Надо поздравить сегодня Лену с днём рождения.',
				member: 'guest',
				date: '07.05.2020',
				time: '10:30' },
			
			{	message: 'Какую Лену?',
				member: 'owner',
				date: '07.05.2020',
				time: '10:37' },

			{	message: 'Ну, как какую?! Нашу одноклассницу. Говорили с тобой',
				member: 'guest',
				date: '07.05.2020',
				time: '10:40' },

			{	message: 'Да, точно. Говорили. Сегодня в 18.00 встречаемся.',
				member: 'owner',
				date: '07.05.2020',
				time: '11:00' }
		],

		Glushko: [
			{	message: 'Привет. Что у нас по задаче с изменением способа авторизации? Кто будет тестировать?',
				member: 'owner',
				date: '08.05.2020',
				time: '11:00' },

			{	message: 'Идём по плану. Королёв',
				member: 'guest',
				date: '08.05.2020',
				time: '11:00' },

			{	message: 'Хорошо. Когда подойдём к тестированию?',
				member: 'owner',
				date: '08.05.2020',
				time: '11:00' },

			{	message: 'Уже скоро',
				member: 'guest',
				date: '08.05.2020',
				time: '11:00' },

			{	message: 'Как только, так сразу. )',
				member: 'guest',
				date: '08.05.2020',
				time: '11:00' }
		],

		Keldysh: [
			{	message: 'Мы в Пт едем на семинар в Киев?',
				member: 'guest',
				date: '10.05.2020',
				time: '16:00' },

			{	message: 'Да.',
				member: 'owner',
				date: '10.05.2020',
				time: '16:11' },

			{	message: 'Распоряжение о том, что нас отпускают с 14.00 есть?',
				member: 'guest',
				date: '10.05.2020',
				time: '16:14' },

			{	message: 'Да',
				member: 'owner',
				date: '10.05.2020',
				time: '16:37' },

			{	message: 'Да, всё подписано. не волнуйся.',
				member: 'owner',
				date: '10.05.2020',
				time: '16:38' }
		],

		Kurchatov: [
			{	message: 'Привет. А что у нас по 1й задаче?',
				member: 'guest',
				date: '12.05.2020',
				time: '14:01' },

			{	message: 'Всё нормально. Доделываю её',
				member: 'owner',
				date: '12.05.2020',
				time: '14:11' },

			{	message: 'Хорошо. Как доделаешь - дай знать.',
				member: 'guest',
				date: '12.05.2020',
				time: '14:14' }
		],

		Kondratuk: [
			{	message: 'Скажи пжл, новый сеошник у нас скоро появится?',
				member: 'guest',
				date: '12.05.2020',
				time: '11:11' },

			{	message: 'Не знаю точно. Кадровики ничего не говорят пока.',
				member: 'owner',
				date: '12.05.2020',
				time: '15:03' },

			{	message: 'Можешь узнать у ни? Работы много. Зашиваемся.',
				member: 'guest',
				date: '12.05.2020',
				time: '15:27' },

			{	message: 'Хорошо. Сегодня-завтра всё выясню.',
				member: 'owner',
				date: '12.05.2020',
				time: '15:44' }
		],

		Korolyov: [
			{	message: 'Скажи пжл, ты сегодня дотестируешь страницу "О районе"?',
				member: 'owner',
				date: '14.05.2020',
				time: '12:47' },

			{	message: 'Нет. Сегодня не успею.',
				member: 'guest',
				date: '14.05.2020',
				time: '12:48' },

			{	message: 'А что так? Какие-то сложности?',
				member: 'owner',
				date: '14.05.2020',
				time: '12:53' },

			{	message: 'Да. Есть. Всё изложил в приложении к тест-плану.',
				member: 'guest',
				date: '14.05.2020',
				time: '12:57' }
		]
		
	},

	comments: [
		[
			{
				member: 'Патон Евгений',
				comment: 'Надо сдвинуть сроки выполнения на 5 дней вперёд.',
				date: '06.04.2020',
				time: '17:28'
			},

			{
				member: 'Кондратюк Юрий',
				comment: 'Сделано.',
				date: '07.04.2020',
				time: '14:02'
			}
		],

		[
			{
				member: 'Патон Борис',
				comment: 'Из-за невыполнения задачи, тестирование откладывается.',
				date: '07.04.2020',
				time: '12:08'
			},

			{
				member: 'Кондратюк Юрий',
				comment: 'Каковы сроки?',
				date: '07.04.2020',
				time: '16:34'
			},

			{
				member: 'Патон Борис',
				comment: '4 дня',
				date: '08.04.2020',
				time: '10:14'
			},

			{
				member: 'Кондратюк Юрий',
				comment: 'Хорошо.',
				date: '08.04.2020',
				time: '11:52'
			}
		],

		[
			{
				member: 'Королёв Сергей',
				comment: 'Сегодня перешлю все данные.',
				date: '17.05.2020',
				time: '11:34'
			},

			{
				member: 'Патон Евгений',
				comment: 'Договорились.',
				date: '17.05.2020',
				time: '13:12'
			}
		],

		[
			{
				member: 'Кондратюк Юрий',
				comment: 'Макет и дизайн были изменены.',
				date: '14.05.2020',
				time: '09:08'
			},

			{
				member: 'Глушко Валентин',
				comment: 'Когда получу новые исходники?',
				date: '14.05.2020',
				time: '11:02'
			},

			{
				member: 'Кондратюк Юрий',
				comment: 'Завтра',
				date: '14.05.2020',
				time: '11:19'
			}
		],

		[
			{
				member: 'Глушко Валентин',
				comment: 'Для создания тест-комплекта не хватает данных. Получу недостающие завтра. ',
				date: '03.05.2020',
				time: '14:44'
			},

			{
				member: 'Глушко Валентин',
				comment: 'Все данные получил. ДАльше всё буду выполнять по плану.',
				date: '04.05.2020',
				time: '11:02'
			}
		],

		[
			{
				member: 'Патон Евгений',
				comment: 'Задачу перевести на Кондратюка.',
				date: '24.04.2020',
				time: '16:49'
			},

			{
				member: 'Глушко Валентин',
				comment: 'Перевёл.',
				date: '25.04.2020',
				time: '11:02'
			}
		],

		[
			{
				member: 'Патон Евгений',
				comment: 'Задачу перевести на Кондратюка.',
				date: '24.04.2020',
				time: '16:49'
			},

			{
				member: 'Глушко Валентин',
				comment: 'Перевёл.',
				date: '25.04.2020',
				time: '11:02'
			}
		],

		[
			{
				member: 'Королёв Сергей',
				comment: 'Тестирование идёт по плану.',
				date: '28.05.2020',
				time: '16:49'
			},

			{
				member: 'Патон Евгений',
				comment: 'Хорошо. Продолжайте.',
				date: '28.05.2020',
				time: '17:07'
			}
		]
	]
}



const reducer = (state = initialState, action) => {

	let day = new Date(),
		 newTaskNumber = [...state.taskNumber],
		 newTaskType = [...state.taskType],
		 newTaskStatus = [...state.taskStatus],
		 newTaskTopic = [...state.taskTopic],
		 newTaskDate = [...state.taskDate],
		 newTaskChangeDate = [...state.taskChangeDate],
		 newTaskLastChange = [...state.taskLastChange],
		 newTaskResponsible = [...state.taskResponsible],
		 newTextArr = [...state.taskText],
		 newComments = [...state.comments],
		 newMembersDialogs = {...state.membersDialogs};

	switch (action.type){
		case 'ADD_TASK':				

			newTaskNumber.push(newTaskNumber[newTaskNumber.length - 1] + 1);
			newTaskType[newTaskType.length] = action.taskType;
			newTaskStatus[newTaskStatus.length] = 'Новая';
			newTaskTopic[newTaskTopic.length] = action.topic;
			newTaskDate[newTaskDate.length] = `${day.getDate()}.${day.getMonth() + 1}.${day.getFullYear()}`;
			newTaskChangeDate[newTaskChangeDate.length] = newTaskDate[newTaskDate.length - 1];
			newTaskLastChange[newTaskLastChange.length] = newTaskDate[newTaskDate.length - 1];
			newTaskResponsible[newTaskResponsible.length] = 3;
			newTextArr.[newTextArr.length] = action.taskMainText;
			newComments.push([]);
			return {...state, taskNumber: [...newTaskNumber], taskType: [...newTaskType], taskStatus: [...newTaskStatus], taskTopic: [...newTaskTopic], taskDate: [...newTaskDate], taskChangeDate: [...newTaskChangeDate], taskLastChange: [...newTaskLastChange], taskResponsible: [...newTaskResponsible], textArr: [...newTextArr], comments: [...newComments]};

		case 'ADD_MESSAGE_TEXT':

			for(let key in newMembersDialogs){
				if( key === action.id){
					newMembersDialogs[key].push({
						message: action.text,
						member: 'owner',
						date: `${day.getDate()}.${day.getMonth() + 1}.${day.getFullYear()}`,
						time: `${day.getHours()}:${day.getMinutes()}`
					})
				}
			}

			return {...state, membersDialogs: {...newMembersDialogs}};

		case 'ADD_COMMENT':
			newComments.[action.commentsArray].push({
				member: action.member,
				comment: action.comment,
				date: `${day.getDate()}.${day.getMonth() + 1}.${day.getFullYear()}`,
				time: `${day.getHours()}:${day.getMinutes()}`
			});
			return {...state, comments: [...newComments]};

		default:
			return state;

	} 

	
}


let store = createStore(reducer); 			

export { store };

