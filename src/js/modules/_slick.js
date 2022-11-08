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