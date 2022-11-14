const viewButtons = document.querySelectorAll('.filter-view__btn');
const viewButtonList = document.querySelector('.filter-view__btn-list');
const viewButtonGrid = document.querySelector('.filter-view__btn-grid');
const productList = document.querySelector('.content-products__list')


viewButtons.forEach((button) => {

	button.addEventListener('click', function () {
		viewButtons.forEach((button) => {
			button.classList.remove('filter-view__btn--active')
		})
		button.classList.add('filter-view__btn--active')
	})
})

viewButtonList.addEventListener('click', function () {
	productList.classList.add('content-products__list--list')
})
viewButtonGrid.addEventListener('click', function () {
	productList.classList.remove('content-products__list--list')
})