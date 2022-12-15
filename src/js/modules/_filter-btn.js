const filterBtn = document.querySelector('.filter-btn-active');
const filterBlock = document.querySelector('.shop__filter');
const shopContent = document.querySelector('.shop__content');

const initFilterBtn = () => {
	filterBtn.addEventListener('click', function () {
		filterBtn.classList.toggle('filter-btn-active--active');
		filterBlock.classList.toggle('shop__filter--active');
	})
}

if (filterBtn) {
	initFilterBtn()
}
