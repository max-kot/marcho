/*---SLick---*/
$('.hero-slider').slick({
	dots: true,
	infinite: true,
	fade: true,
	arrows: false,
	autoplay: true,
	speed: 800,
	autoplaySpeed: 2000,
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




