import $ from "../core";

$.prototype.tabs = function () {
	for (let i = 0; i < this.length; i++) {
		$(this[i]).on("click", () => {
			$(this[i])
				.addClass("tabs-item--active")
				.fadeIn(1500, "block")
				.siblings()
				.removeClass("tabs-item--active")
				.closest(".tabs")
				.find(".tabs-content")
				.removeClass("tabs-content--active")
				.eq($(this[i]).index())
				.addClass("tabs-content--active");
		});
	}
};

$("[data-tabpanel] .tabs-item").tabs();
