# dk_lib

### Install
Скачайте и установите файлы в свой проект.
<br>CSS - https://github.com/dilovskyi/dk_lib/blob/main/dist/assets/css/bundle.css
<br>Js - https://github.com/dilovskyi/dk_lib/blob/main/dist/js/bundle.js

<b>Реализовал концепцию внутренней работы готовых библиотек Java-script, для собственного понимания, как устроено "под капотом".</b>

[`lib.js`](https://github.com/dilovskyi/dilo_library/blob/main/src/js/lib/lib.js) - Содержит зависимости всех нижеперечисленных файлов. И последующий экспорт функции `$`, со всеми описаными методами в данной библиотеке</dd>

`$(".elem")` -Производит поиск элементов по Id, классу, дата-атрибуту, тегу. Возвращает все элементы, которые есть на странице в виде массива. Возвращает пустой массив, если аргумент не передан.
<br>Предусмотрена возможность "чейнинга". ( Вы можете использовать методы сразу после использования предыдущего.
<br>Файл: [core.js](https://github.com/dilovskyi/dilo_library/blob/main/src/js/lib/core.js).

# js/components
 `$(".elem").accordion(param1, param2, param3)` - Применяет метод для всех элементов с классом `elem`. 
<br>Принимает параметры:
<br>`param1` - Класс активности заголовка. <i>По умолч: accordion-head--active</i>
<br>`param2` - Класс активности описания. <i>По умолч: accordion-content--active</i>
<br>`param3` - Принимает значение в цифрах.<i>По умолч: 40</i>
<br>Пример: 
```html
<div class="accordion mt-20 mb-20 block-center">
	<div class="accordion-head"><span>Accommodation</span></div>
	<div class="accordion-content">
		<div class="accordion-inner">
			<p>Two nights at a 4* star hotel</p>
			<p>One night at a 4* star hotel</p>
			<p>One night on a traditional felucca sailing boat</p>
		</div>
	</div>
	<div class="accordion-head"><span>Guide</span></div>
	<div class="accordion-content">
		<div class="accordion-inner">
			<p>Guided tours of the Pyramids and Cairo city</p>
			<p>Guided tours of Aswan; Valley of the Kings; Kom Ombo, Edfu and Luxor Temples</p>
		</div>
	</div>
	<div class="accordion-head"><span>Additional Services </span></div>
	<div class="accordion-content">
		<div class="accordion-inner">Qualified English speaking</div>
	</div>
	<div class="accordion-head"><span>Transport</span></div>
	<div class="accordion-content">
		<div class="accordion-inner">Airport pickup and transfers Transportation in A/C bus</div>
	</div>
</div>
```
<br>Файл: [accordion.js](https://github.com/dilovskyi/dilo_library/blob/main/src/js/lib/components/accordion.js)
***
`$(".elem").carousel(param1, param2, param3)` - Применяеться на контейнере с каруселью, где все фото распололены в один ряд. Функционал реализован по принципу сдвигания контейнера с картинками и показ нужной области контейнера через "окно".
<br>Обязательное именнование:
<br>Принимает параметры:
<br>param1 - Класс видимой области карусели.(Обертка над контейнером с изображениями) <i>По умолч: .carousel-inner</i>
<br>param2 - Класс контейнера с изображениями <i>По умолч: ".carousel-slides"</i>
<br>param3 - Каждый отдельный элемент слайда<i>По умолч: ".carousel-item"</i>
<br>Пример:
```html 
<div class="container">
	<div class="carousel">
		<div class="carousel-inner">
			<div class="carousel-slides">
				<div class="carousel-item">
					<img src="https://cdn.tourradar.com/s3/tour/1500x800/89025_e55a55ed.jpg" alt="ee" />
				</div>
				<div class="carousel-item">
					<img src="https://cdn.tourradar.com/s3/tour/1500x800/89025_12a7c3ee.jpg" alt="ee" />
				</div>
				<div class="carousel-item">
					<img src="https://cdn.tourradar.com/s3/tour/1500x800/89025_98f18de8.jpg" alt="ee" />
				</div>
				<div class="carousel-item">
					<img src="https://cdn.tourradar.com/s3/tour/1500x800/89025_72cad4c3.jpg" alt="eee" />
				</div>
			</div>
			<a href="#" class="carousel-prev" data-slide="prev">
				<span class="carousel-prev-icon">&lt;</span>
			</a>
			<a href="#" class="carousel-next" data-slide="next">
				<span class="carousel-prev-icon">&gt;</span>
			</a>
		</div>
	</div>
</div>
```
<br>Файл: [carousel.js](https://github.com/dilovskyi/dilo_library/blob/main/src/js/lib/components/carousel.js)
***
`$(".elem").dropdown()` - Cкрывает/показывает(тоглит) элемент на страница, у которого указан data-атрибут такой, как ID у `elem`.
```html 
<div class="dropdown">
	<button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
	<div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
		<a href="#" class="dropdown-item">Action #1</a>
		<a href="#" class="dropdown-item">Action #2</a>
		<a href="#" class="dropdown-item">Action #3</a>
	</div>
</div>		
```
<br>Файл: [dropdown.js](https://github.com/dilovskyi/dilo_library/blob/main/src/js/lib/components/dropdown.js)
***
`$("#triggerModal").createModal(...` - Генерирует новое модальное окно на странице.
<br>ВАЖНО:Необходимо присвоить тригеру атрибут `data-toggle="modal"]`.
<br>При вызове, нужно передать настройки модального окна. 
<br>Пример:
```javascript
$("#triggerModal").on("click", () =>					//Событие клика
	$("#triggerModal").createModal({				//Инициализация окна
		text: { 
			title: "Modal title",				//Ваш заголовок модального окна
			body: "Description text",			//Ваше описание модального окна
		},
		btns: {
			count: 2, 					//Кол-во желаемых кнопок
			settings: [		
				["Close", ["btns-danger", "mr-10"], true],    
				["Save changes", ["btn-success"], false, () => alert("Данные созранены")],
			],	// [Текст кнопки, [классы для кнопки], true/false(закрывать при клике?), финальная функция()]
		},
	})
);
```
<br>Файл: [modal.js](https://github.com/dilovskyi/dilo_library/blob/main/src/js/lib/components/modal.js)
***
`$("[data-tabpanel] .tabs-item").tabs()` - Передайте заголовки Ваших табов и вызовите метод. Создайте верстку как в примере. Стилизуйте на свой вкус

<br>Пример: 
```html
<div class="tabs-panel" data-tabpanel>
	<div class="tabs-item tabs-item--active">Content 1</div>
	<div class="tabs-item">Content 2</div>
	<div class="tabs-item">Content 3</div>
</div>
<div class="tabs-content-wrap">
	<div class="tabs-content tabs-content--active">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quisquam architecto suscipit, ullam facilis
	</div>
	<div class="tabs-content">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quisquam architecto suscipit, ullam facilis
	</div>
	<div class="tabs-content">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quisquam architecto suscipit, ullam facilis
	</div>
</div>
```
***
`$().timer(".timer", new Date("2021-5-20"))` - Указываем блок таймера и конечную дату.
```html
<div class="timer">
	<div class="timer-block"><span id="days">12</span> дней</div>
	<div class="timer-block"><span id="hours">20</span> часов</div>
	<div class="timer-block"><span id="minutes">56</span> минут</div>
	<div class="timer-block"><span id="seconds">20</span> секунд</div>
</div>
```
<br>Файл: [timer.js](https://github.com/dilovskyi/dilo_library/blob/main/src/js/lib/components/timer.js)
# js/modules
### [actions.js](https://github.com/dilovskyi/dilo_library/blob/main/src/js/lib/modules/actions.js)
`$(elem).html(arg)` - Получает как аргумент то, что нужно вставить в элемент или возвращает, что что в него уже встравлено, если `arg` пуст.
***
`$(elem)eq(1)` - Возвращает элемент по указанному индексу.
***
`$().index()` - Возвращает индекс, по которому расположен элемент.
***
`$(parent).find(elem)` - Возвращает объект подходящих элементов.
***
`$(elem).find(parent)` - Получить ближайшего родителя с указанным классом/id/селектором/атрибутом. Если ничего не найдено - возвратит false
***
`$(elem).siblings()` - получить соседей элемента, не включая его самого.
### [attributes.js](https://github.com/dilovskyi/dilo_library/blob/main/src/js/lib/modules/attributes.js)
`$(elem).addAttribute(name, value)` - Устанавливает атрибут. Если значение не передано - пустая строка
 ***
`$(elem).addAttribute(name)` - Удаляет указанный атрибут
*** 
`$(elem).toggleAttribute(name, value)` - Если нет - добавляет, если есть удаляет указанный атрибут
### [classes.js](https://github.com/dilovskyi/dilo_library/blob/main/src/js/lib/modules/classes.js)
`$(elem).addClass(name)` - Устанавливает класс. Можно добавлять несколько передав массив классов.
 ***
`$(elem).removeClass(name)` - Удаляет класс. Можно удалять несколько передав массив классов.
*** 
`$(elem).toggleClass(name, value)` - Если нет - добавляет, если есть удаляет указанный класс.
### [display.js](https://github.com/dilovskyi/dilo_library/blob/main/src/js/lib/modules/display.js)
`$(elem).show()` - Скрывает элемент
***
`$(elem).hide()` - Показывает элемент
***
`$(elem).toggle()` - Изменить значение дисплей на противоположное элемент
### [effects.js](https://github.com/dilovskyi/dilo_library/blob/main/src/js/lib/modules/effects.js)
`$(elem).fadeIn(duration, display, fimalAnimation)` - Показывает элемент с указанными параметрами где
<br>duration - длительность появления.
<br>display - задает css свойсто display
<br>fimalAnimation - функция, которая вызывается после выполнения.
***
`$(elem).fadeOut(duration, fimalAnimation)` - Показывает элемент с указанными параметрами где
<br>duration - длительность появления.
<br>display - задает css свойсто display
<br>fimalAnimation - функция, которая вызывается после выполнения.
***
`$(elem).fadeOut(duration, fimalAnimation)` - Показывает элемент с указанными параметрами где
<br>duration - длительность появления.
<br>display - задает css свойсто display
<br>fimalAnimation - функция, которая вызывается после выполнения.
### [handlers.js](https://github.com/dilovskyi/dilo_library/blob/main/src/js/lib/modules/handlers.js)
# js/servises
### [requests.js](https://github.com/dilovskyi/dk_lib/blob/main/src/js/lib/services/requests.js)
`$().get(url, dataTypeAnswer = "json")` - Вызов get запроса
<br>url - на который нужно отправить завпрос
<br>dataTypeAnswer - тип, к котором нужно получить запрос. По умолчанию json
`$().post(url, data, dataTypeAnswer = "text")` - Вызов post запроса.
<br>url - на который нужно отправить завпрос
<br>data - данные, которые нужно передать
<br>dataTypeAnswer - тип, к котором нужно получить запрос. По умолчанию text
