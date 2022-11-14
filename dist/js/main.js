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
import './modules/_shop-views.js';

// filters btn

const filterBtn = document.querySelector('.filter-btn-active');
const filterBlock = document.querySelector('.shop__filter');
const shopContent = document.querySelector('.shop__content');

filterBtn.addEventListener('click', function () {
	filterBtn.classList.toggle('filter-btn-active--active');
	filterBlock.classList.toggle('shop__filter--active');
})