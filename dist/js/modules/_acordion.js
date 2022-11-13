const titleBtn = document.querySelectorAll('.footer-menu__title');
const titleList = document.querySelectorAll('.footer-menu__list')

titleBtn.forEach(function (item) {
	item.addEventListener('click', function () {
		this.nextElementSibling.classList.toggle('active');
		this.classList.toggle('active')
	})
})

