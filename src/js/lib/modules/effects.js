import $ from "../core";

$.prototype.animateOverTime = function (duration, fade, finalAnimation) {
	let timeStart = 0;
	function _animateOverTime(time) {
		if (timeStart == 0) {
			timeStart = time;
		}
		let timeElapsed = time - timeStart;
		let complection = Math.min(timeElapsed / duration, 1);
		fade(complection);

		if (timeElapsed < duration) {
			requestAnimationFrame(_animateOverTime);
		} else {
			if (typeof finalAnimation == "function") {
				finalAnimation();
			}
		}
	}
	return _animateOverTime;
};

$.prototype._fadeIn = function (duration, display, finalAnimation, i) {
	this[i].style.display = display || "block";
	const _fade = (complection) => {
		this[i].style.opacity = complection;
	};
	requestAnimationFrame(this.animateOverTime(duration, _fade, finalAnimation));
};
$.prototype._fadeOut = function (duration, finalAnimation, i) {
	const _fade = (complection) => {
		this[i].style.opacity = 1 - complection;
		if (complection === 1) {
			this[i].style.display = "none";
		}
	};
	requestAnimationFrame(this.animateOverTime(duration, _fade, finalAnimation));
};

$.prototype.fadeIn = function (duration, display, finalAnimation) {
	for (let i = 0; i < this.length; i++) {
		this._fadeIn(duration, display, finalAnimation, i);
	}
	return this;
};
$.prototype.fadeOut = function (duration, finalAnimation) {
	for (let i = 0; i < this.length; i++) {
		this._fadeOut(duration, finalAnimation, i);
	}
	return this;
};
$.prototype.fadeToggle = function (duration, display, finalAnimation) {
	for (let i = 0; i < this.length; i++) {
		if (window.getComputedStyle(this[i]).display === "none") {
			this._fadeIn(duration, display, finalAnimation, i);
		} else {
			this._fadeOut(duration, finalAnimation, i);
		}
	}
	return this;
};
