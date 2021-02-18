import $ from "../core";

//Получить html из элемента или вставить, если передать как аргумент
$.prototype.html = function (content) {
	for (let i = 0; i < this.length; i++) {
		if (content) {
			this[i].innerHTML = content;
		} else {
			return this[i].innerHTML;
		}
	}
	return this;
};

//Получить элемент по индексу
$.prototype.eq = function (i) {
	const swap = this[i];
	const objLength = Object.keys(this).length;

	for (let i = 0; i < objLength; i++) {
		delete this[i];
	}

	this[0] = swap;
	this.length = 1;
	return this;
};

// Получить индекс на котором расположен элемент
$.prototype.index = function () {
	const parent = this[0].parentNode;
	const childs = [...parent.children];

	return childs.findIndex((item) => {
		return item == this[0];
	});
};
//Получить массив подходящих элементов
$.prototype.find = function (selector) {
	const copyObj = Object.assign({}, this);
	let numberOfItems = 0;
	let counter = 0;

	for (let i = 0; i < copyObj.length; i++) {
		const arr = copyObj[i].querySelectorAll(selector);

		if (arr.length == 0) {
			continue;
		}

		for (let j = 0; j < arr.length; j++) {
			this[counter] = arr[j];
			counter++;
		}
		numberOfItems += arr.length;
	}
	this.length = numberOfItems;
	const objLenth = Object.keys(this).length;

	for (; numberOfItems < objLenth; numberOfItems++) {
		delete this[numberOfItems];
	}
	return this;
};
//Получить массив ближайших элементов Selector. False, если не нашли
$.prototype.closest = function (selector) {
	let counter = 0;

	for (let i = 0; i < this.length; i++) {
		this[i] = this[i].closest(selector);

		if (this[i] === null) {
			this[i] = false;
		}
		counter++;
	}

	const objLenth = Object.keys(this).length;
	for (; counter < objLenth; counter++) {
		delete this[counter];
	}

	return this;
};
//получить массив соседей элемента, не включая него. Вызывается на одном элементе
$.prototype.siblings = function () {
	const copyObj = Object.assign({}, this);
	let numberOfItems = 0;
	let counter = 0;
	for (let i = 0; i < copyObj.length; i++) {
		const arr = copyObj[i].parentNode.children;

		for (let j = 0; j < arr.length; j++) {
			if (copyObj[i] === arr[j]) {
				continue;
			}
			this[counter] = arr[j];
			counter++;
		}
		numberOfItems += arr.length - 1;
	}

	this.length = numberOfItems;

	const objLength = Object.keys(this).length;

	for (; numberOfItems < objLength; numberOfItems++) {
		delete this[numberOfItems];
	}
	return this;
};
