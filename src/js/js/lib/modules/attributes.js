import $ from "../core";

$.prototype.addAttribute = function (name = "", value = "") {
	for (let i = 0; i < this.length; i++) {
		if (this[i].hasAttribute(name, value)) {
			continue;
		}
		this[i].setAttribute(name, value);
	}
	return this;
};

$.prototype.removeAttribute = function (name) {
	for (let i = 0; i < this.length; i++) {
		if (!this[i].hasAttribute(name)) {
			continue;
		}
		this[i].removeAttribute(name);
	}
	return this;
};

$.prototype.toggleAttribute = function (name = "", value = "") {
	for (let i = 0; i < this.length; i++) {
		if (this[i].hasAttribute(name)) {
			this[i].removeAttribute(name);
		} else if (name && !this[i].hasAttribute(name)) {
			this[i].setAttribute(name, value);
		}
	}
	return this;
};
