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
