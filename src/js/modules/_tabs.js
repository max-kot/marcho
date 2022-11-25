const tabLinkNode = document.querySelectorAll('.tab-link__link');
const tabContentNode = document.querySelectorAll('.tab-content__item');

tabLinkNode.forEach((link) => {
	link.addEventListener('click', function (e) {
		e.preventDefault(); // отрубает переход по ссылке
		tabLinkNode.forEach((link) => {
			link.classList.remove('tab-link__link--active')
		})

		link.classList.add('tab-link__link--active');

		tabContentNode.forEach((tab) => {
			tab.classList.remove('tab-content__item--active')
		})

		const tabContent = document.querySelector(link.dataset.link);
		tabContent.classList.add('tab-content__item--active')
	})
})
