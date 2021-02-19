/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/lib/components/dropdown.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/dropdown.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    const id = this[i].getAttribute("id");
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`[data-toggle-id="${id}"]`).fadeToggle(300);
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(".dropdown-toggle").dropdown();

/***/ }),

/***/ "./src/js/lib/components/modal.js":
/*!****************************************!*\
  !*** ./src/js/lib/components/modal.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.modal = function (created) {
  for (let i = 0; i < this.length; i++) {
    const target = this[i].getAttribute("data-target");
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(e => {
      e.preventDefault();
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeIn(500);
      document.body.style.overflow = "hidden";
    });
    const id = document.querySelector(target);
    const closeElemens = document.querySelectorAll(`${target} [data-close]`);
    closeElemens.forEach(element => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(element).click(() => {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(1500);

        if (created && id.style.opacity === 0) {
          id.remove();
        }

        document.body.style.overflow = "";
      });
    });
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).click(e => {
      if (e.target.classList.contains("modal")) {
        Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(500);
        document.body.style.overflow = "";

        if (created) {
          id.remove();
        }
      }
    });
  }
};

Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-toggle="modal"]').modal();

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.createModal = function ({
  text,
  btns
}) {
  for (let i = 0; i < this.length; i++) {
    let modal = document.createElement("div");
    modal.classList.add("modal");
    modal.setAttribute("id", this[i].getAttribute("data-target").slice(1));
    modal.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-content">
        <button class="close" data-close>
          <span>&times;</span>
        </button>
        <div class="modal-header">
          <div class="modal-title">${text.title}</div>
        </div>
        <div class="modal-body">
        ${text.body}
        </div>
        <div class="modal-footer">

        </div>
      </div>
    </div>`;
    const buttons = [];

    for (let j = 0; j < btns.count; j++) {
      let btn = document.createElement("button");
      btn.textContent = btns.settings[j][0];
      btn.classList.add("btn", ...btns.settings[j][1]);

      if (btns.settings[j][2]) {
        btn.setAttribute("data-close", "true");
      }

      if (btns.settings[j][3] && typeof btns.settings[j][3] === "function") {
        btn.addEventListener("click", btns.settings[j][3]);
      }

      buttons.push(btn);
    }

    modal.querySelector(".modal-footer").append(...buttons);
    document.body.append(modal);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).modal(true);
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i].getAttribute("data-target")).fadeIn(500);
  }
};

/***/ }),

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const $ = function (selector) {
  return new $.prototype.init(selector);
};

$.prototype.init = function (selector) {
  if (!selector) {
    return this;
  }

  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this;
  }

  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length;
  return this;
};

$.prototype.init.prototype = $.prototype;
window.$ = $;
/* harmony default export */ __webpack_exports__["default"] = ($);

/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/handlers */ "./src/js/lib/modules/handlers.js");
/* harmony import */ var _modules_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/attributes */ "./src/js/lib/modules/attributes.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/actions */ "./src/js/lib/modules/actions.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/effects */ "./src/js/lib/modules/effects.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/lib/components/dropdown.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modal */ "./src/js/lib/components/modal.js");









/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/lib/modules/actions.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/actions.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");
 //Получить html из элемента или вставить, если передать как аргумент

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }

  return this;
}; //Получить элемент по индексу


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function (i) {
  const swap = this[i];
  const objLength = Object.keys(this).length;

  for (let i = 0; i < objLength; i++) {
    delete this[i];
  }

  this[0] = swap;
  this.length = 1;
  return this;
}; // Получить индекс на котором расположен элемент


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function () {
  const parent = this[0].parentNode;
  const childs = [...parent.children];
  return childs.findIndex(item => {
    return item == this[0];
  });
}; //Получить массив подходящих элементов


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.find = function (selector) {
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
}; //Получить массив ближайших элементов Selector. False, если не нашли


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closest = function (selector) {
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
}; //получить массив соседей элемента, не включая него. Вызывается на одном элементе


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.siblings = function () {
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

/***/ }),

/***/ "./src/js/lib/modules/attributes.js":
/*!******************************************!*\
  !*** ./src/js/lib/modules/attributes.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addAttribute = function (name = "", value = "") {
  for (let i = 0; i < this.length; i++) {
    if (this[i].hasAttribute(name, value)) {
      continue;
    }

    this[i].setAttribute(name, value);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeAttribute = function (name) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].hasAttribute(name)) {
      continue;
    }

    this[i].removeAttribute(name);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleAttribute = function (name = "", value = "") {
  for (let i = 0; i < this.length; i++) {
    if (this[i].hasAttribute(name)) {
      this[i].removeAttribute(name);
    } else if (name && !this[i].hasAttribute(name)) {
      this[i].setAttribute(name, value);
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    this[i].classList.add(...classNames);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    this[i].classList.remove(...classNames);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function (className) {
  for (let i = 0; i < this.length; i++) {
    this[i].classList.toggle(className);
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = "";
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = "none";
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggle = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    if (this[i].style.display === "none") {
      this[i].style.display = "";
    } else {
      this[i].style.display = "none";
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/effects.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/effects.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animateOverTime = function (duration, fade, finalAnimation) {
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

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype._fadeIn = function (duration, display, finalAnimation, i) {
  this[i].style.display = display || "block";

  const _fade = complection => {
    this[i].style.opacity = complection;
  };

  requestAnimationFrame(this.animateOverTime(duration, _fade, finalAnimation));
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype._fadeOut = function (duration, finalAnimation, i) {
  const _fade = complection => {
    this[i].style.opacity = 1 - complection;

    if (complection === 1) {
      this[i].style.display = "none";
    }
  };

  requestAnimationFrame(this.animateOverTime(duration, _fade, finalAnimation));
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function (duration, display, finalAnimation) {
  for (let i = 0; i < this.length; i++) {
    this._fadeIn(duration, display, finalAnimation, i);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function (duration, finalAnimation) {
  for (let i = 0; i < this.length; i++) {
    this._fadeOut(duration, finalAnimation, i);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeToggle = function (duration, display, finalAnimation) {
  for (let i = 0; i < this.length; i++) {
    if (window.getComputedStyle(this[i]).display === "none") {
      this._fadeIn(duration, display, finalAnimation, i);
    } else {
      this._fadeOut(duration, finalAnimation, i);
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/handlers.js":
/*!****************************************!*\
  !*** ./src/js/lib/modules/handlers.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(eventName, callback);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(eventName, callback);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function (hendler) {
  for (let i = 0; i < this.length; i++) {
    if (hendler) {
      this[i].addEventListener("click", hendler);
    } else {
      this[i].click();
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");


Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])("#trigger").click(() => {
  Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])("#trigger").createModal({
    text: {
      title: "Modal title",
      body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus alias ut velit expedita molestiae iste
        `
    },
    btns: {
      count: 2,
      settings: [["Close", ["btns-danger", "mr-10"], true], ["Save changes", ["btn-success"], false, () => alert("Данные созранены")]]
    }
  });
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map