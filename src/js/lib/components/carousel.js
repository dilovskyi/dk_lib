import $ from "../core";

$.prototype.carousel = function (
	sliderWrap = ".carousel-inner",
	sliderContainer = ".carousel-slides",
	sliderItem = ".carousel-item"
) {
	for (let i = 0; i < this.length; i++) {
		const width = window.getComputedStyle(this[i].querySelector(sliderWrap)).width;
		const slides = this[i].querySelectorAll(sliderItem);
		const slidesField = this[i].querySelector(sliderContainer);

		slidesField.style.width = 100 * slides.length + "%";
		slides.forEach((slide) => {
			slide.style.width = width;
		});

		let offset = 0;

		$(this[i].querySelector('[data-slide="next"]')).click((e) => {
			e.preventDefault();
			if (offset === +width.replace(/\D/g, "") * (slides.length - 1)) {
				offset = 0;
			} else {
				offset += +width.replace(/\D/g, "");
			}
			slidesField.style.transform = `translateX(-${offset}px)`;
		});

		$(this[i].querySelector('[data-slide="prev"]')).click((e) => {
			e.preventDefault();
			if (offset === 0) {
				offset = +width.replace(/\D/g, "") * (slides.length - 1);
			} else {
				offset -= +width.replace(/\D/g, "");
			}
			slidesField.style.transform = `translateX(-${offset}px)`;
		});
	}
};
$(".carousel").carousel();
