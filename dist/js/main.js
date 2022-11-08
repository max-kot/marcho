import $ from "../../node_modules/jquery/dist/jquery.js";
window.jQuery = $;


import "../../node_modules/slick-carousel/slick/slick.js";

import { Fancybox } from "../../node_modules/@fancyapps/ui/dist/fancybox.esm.js";

import "../../node_modules/jquery.formstyler-modern/jquery.formStylerModern.js";

import "../../node_modules/ion-rangeslider/js/ion.rangeSlider.js";

$(".filter-price__range-slider").ionRangeSlider({
	onStart: function (data) {
		$(".filter-price__price-from").text(data.from)
		$(".filter-price__price-to").text(data.to)
	},
	onChange: function (data) {
		$(".filter-price__price-from").text(data.from)
		$(".filter-price__price-to").text(data.to)
	},
});

// Styler
$('.content-select__select').styler();

// Slick slider
$('.hero-slider').slick({
	dots: true,
	infinite: true,
	fade: true,
	arrows: false,
	autoplay: true,
	speed: 800,
	autoplaySpeed: 2000,
});


// Fancybox
Fancybox.bind("[data-fancybox]", {
	// Your options go here
});


/*---Menu---*/
const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu__list');
const body = document.querySelector('body');
const menuLinks = document.querySelectorAll('.menu a')

menuBtn.addEventListener('click', function () {
	body.classList.toggle('no-scroll');
	menuList.classList.toggle('active');
	menuBtn.classList.toggle('active');

})
menuLinks.forEach(function (link) {
	link.addEventListener('click', function () {
		menuList.classList.remove('active');
		body.classList.remove('no-scroll');
		menuBtn.classList.remove('active');
	})
})

/*---Acardion ---*/
const titleBtn = document.querySelectorAll('.footer-menu__title');
const titleList = document.querySelectorAll('.footer-menu__list')

titleBtn.forEach(function (item) {
	item.addEventListener('click', function () {
		this.nextElementSibling.classList.toggle('active');
		this.classList.toggle('active')
	})
})

// Star Rating @Фрилансер по Жизни
const ratingAll = document.querySelectorAll('.rating');
if (ratingAll.length > 0) {
	initRating();
}
function initRating() {
	let ratingActive, ratingValue;
	// Проходим по всем рейтингам на странице
	for (let index = 0; index < ratingAll.length;
		index++) {
		const rating = ratingAll[index];
		initRating(rating);
	}

	// Инициализация конкретного рейтинга
	function initRating(rating) {
		initRatingVars(rating);

		setRatingActiveWidth();

		// возможность ставить рейтинг
		if (rating.classList.contains('rating--set')) {
			setRating(rating);
		}
	}

	// Инициализация переменных
	function initRatingVars(rating) {
		ratingActive = rating.querySelector('.rating__active');
		ratingValue = rating.querySelector('.rating__value');
	}

	// Изменяем ширину активных звёзд
	function setRatingActiveWidth(index = ratingValue.innerHTML) {
		const ratingActiveWidth = index / 0.05; // звёзд 5 => 0.05
		ratingActive.style.width = `${ratingActiveWidth}%`;
	}

	// Возможность указывать оценку
	function setRating(rating) {
		// получаем массив радио-кнопок
		const allRatingButtons = rating.querySelectorAll('.rating__button');

		for (let index = 0; index < allRatingButtons.length; index++) {
			const ratingButton = allRatingButtons[index];

			// события наведения мыши
			ratingButton.addEventListener('mouseenter', function (event) {
				// Обновление переменных
				initRatingVars(rating);
				// Обновление активных звёзд
				setRatingActiveWidth(ratingButton.value);
			})

			// события отходы мыши
			ratingButton.addEventListener('mouseleave', function (event) {
				// Обновление активных звёзд
				setRatingActiveWidth();
			})

			// событие при клике
			ratingButton.addEventListener('click', function (event) {
				// Обновление переменных
				initRatingVars(rating);

				if (rating.dataset.ajax) {
					// отправить на сервер
					//setRatingValue(ratingButton.value, rating); // нужно использовать ajax
				} else {
					// Отобразить указаную оценку
					ratingValue.innerHTML = index + 1;
					setRatingActiveWidth();
				}
			})
		}
	}
}


// Таймер обратного отсчёта
const date = document.querySelector('.counter__date').innerHTML;
const days = document.querySelector('.counter__days');
const hours = document.querySelector('.counter__hours');
const minutes = document.querySelector('.counter__minutes');
const seconds = document.querySelector('.counter__seconds');
const counterWrapper = document.querySelector('.counter__wrapper');
const loader = document.querySelector('.counter__loader');// значок загрузки

const nextDate = new Date(date);


function updateCounter() {
	const currentDate = new Date();
	const difference = nextDate - currentDate;// разница в милисек

	// переводим разницу в нужные форматы
	const daysLeft = Math.floor(difference / 1000 / 60 / 60 / 24);
	const hoursLeft = Math.floor(difference / 1000 / 60 / 60) % 24;
	const minutesLeft = Math.floor(difference / 1000 / 60) % 60;
	const secondsLeft = Math.floor(difference / 1000) % 60;

	// Добавляем данные на страницу
	days.innerText = daysLeft < 10 ? '0' + daysLeft : daysLeft;
	hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft; // если количество часов меньше 10 то добавляем 0 впереди
	minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
	seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
}

//updateCounter() // чтобы цифры сразу же отображались на странице при загрузке
setInterval(updateCounter, 1000);

setTimeout(function () {
	loader.remove();
	counterWrapper.classList.add('counter__wrapper--active')
}, 1000)

//// shop view mode

//const viewButtons = document.querySelectorAll('.filter-view__btn')

//viewButtons.forEach((button) => {
//	button.addEventListener('click', function () {
//		button.classList.remove('filter-view__btn--active');
//		button.classList.add('filter-view__btn--active')
//	})
//})
