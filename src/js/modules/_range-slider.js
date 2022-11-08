import $ from "../../../node_modules/jquery/dist/jquery.js";
import "../../../node_modules/ion-rangeslider/js/ion.rangeSlider.js";

$(".filter-price__range-slider").ionRangeSlider({
	onStart: function (data) {
		$(".filter-price__price-from").text(data.from)
		$(".filter-price__price-to").text(data.to)
	},
	onChange: function (data) {
		$(".filter-price__price-from").text(data.from)
		$(".filter-price__price-to").text(data.to)
	},
});