function initTimer() {
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
}

if (document.querySelector('.counter')) {
	initTimer();
}