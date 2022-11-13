import $ from "../../node_modules/jquery/dist/jquery.js";
window.jQuery = $;

// Range-slider
import './modules/_range-slider.js';

// Styler
import './modules/_form-styler.js';

// Slick slider
import './modules/_slick.js';

// Fancybox
import './modules/_fancybox.js';

// Burger-menu
import './modules/_burger-menu.js';

// Acordion 
import './modules/_acordion.js';

// Star Rating @Фрилансер по Жизни
import './modules/_star-rating--byFreelancer.js'

// Таймер обратного отсчёта
import './modules/_countdown.js';

// shop view mode
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