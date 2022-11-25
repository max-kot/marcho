import $ from "../../../node_modules/jquery/dist/jquery.js";
window.jQuery = $;
import "../../../node_modules/slick-carousel/slick/slick.js";

$('.hero-slider').slick({
	dots: true,
	infinite: true,
	fade: true,
	arrows: false,
	autoplay: true,
	speed: 800,
	autoplaySpeed: 2000,
});

$('.product-thumb').slick({
	arrows: false,
	asNavFor: '.product-gallery',
	slidesToShow: 4,
	vertical: true,
	focusOnSelect: true,
	responsive: [
		{
			breakpoint: 1001,
			settings: {
				//arrows: true,
				vertical: false,
			}
		},
	],
}
)
$('.product-gallery').slick({
	arrows: false,
	asNavFor: '.product-thumb',
	fade: true,

})