import $ from "../core";

$.prototype.on = function (eventName, callback) {
	if (!eventName || !callback) {
		return this;
	}
	for (let i = 0; i < this.length; i++) {
		this[i].addEventListener(eventName, callback);
	}
	return this;
};

$.prototype.off = function (eventName, callback) {
	if (!eventName || !callback) {
		return this;
	}
	for (let i = 0; i < this.length; i++) {
		this[i].removeEventListener(eventName, callback);
	}
	return this;
};

$.prototype.click = function (callback) {
	for (let i = 0; i < this.length; i++) {
		if (callback) {
			this[i].addEventListener("click", callback);
		} else {
			this[i].click();
		}
	}
	return this;
};
