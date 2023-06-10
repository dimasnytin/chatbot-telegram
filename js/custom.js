/******/ (function(modules) { // webpackBootstrap
  /******/ 	// install a JSONP callback for chunk loading
  /******/ 	function webpackJsonpCallback(data) {
  /******/ 		var chunkIds = data[0];
  /******/ 		var moreModules = data[1];
  /******/ 		var executeModules = data[2];
  /******/
  /******/ 		// add "moreModules" to the modules object,
  /******/ 		// then flag all "chunkIds" as loaded and fire callback
  /******/ 		var moduleId, chunkId, i = 0, resolves = [];
  /******/ 		for(;i < chunkIds.length; i++) {
  /******/ 			chunkId = chunkIds[i];
  /******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
  /******/ 				resolves.push(installedChunks[chunkId][0]);
  /******/ 			}
  /******/ 			installedChunks[chunkId] = 0;
  /******/ 		}
  /******/ 		for(moduleId in moreModules) {
  /******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
  /******/ 				modules[moduleId] = moreModules[moduleId];
  /******/ 			}
  /******/ 		}
  /******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
  /******/
  /******/ 		while(resolves.length) {
  /******/ 			resolves.shift()();
  /******/ 		}
  /******/
  /******/ 		// add entry modules from loaded chunk to deferred list
  /******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
  /******/
  /******/ 		// run deferred modules when all chunks ready
  /******/ 		return checkDeferredModules();
  /******/ 	};
  /******/ 	function checkDeferredModules() {
  /******/ 		var result;
  /******/ 		for(var i = 0; i < deferredModules.length; i++) {
  /******/ 			var deferredModule = deferredModules[i];
  /******/ 			var fulfilled = true;
  /******/ 			for(var j = 1; j < deferredModule.length; j++) {
  /******/ 				var depId = deferredModule[j];
  /******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
  /******/ 			}
  /******/ 			if(fulfilled) {
  /******/ 				deferredModules.splice(i--, 1);
  /******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
  /******/ 			}
  /******/ 		}
  /******/
  /******/ 		return result;
  /******/ 	}
  /******/
  /******/ 	// The module cache
  /******/ 	var installedModules = {};
  /******/
  /******/ 	// object to store loaded and loading chunks
  /******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
  /******/ 	// Promise = chunk loading, 0 = chunk loaded
  /******/ 	var installedChunks = {
  /******/ 		"main": 0
  /******/ 	};
  /******/
  /******/ 	var deferredModules = [];
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
  /******/ 	__webpack_require__.p = "/";
  /******/
  /******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
  /******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
  /******/ 	jsonpArray.push = webpackJsonpCallback;
  /******/ 	jsonpArray = jsonpArray.slice();
  /******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
  /******/ 	var parentJsonpFunction = oldJsonpFunction;
  /******/
  /******/
  /******/ 	// add entry module to deferred list
  /******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
  /******/ 	// run deferred modules when ready
  /******/ 	return checkDeferredModules();
  /******/ })
  /************************************************************************/
  /******/ ({
  
  /***/ "./src/blocks/modules/development-of-chat-bots/development-of-chat-bots.js":
  /*!*********************************************************************************!*\
    !*** ./src/blocks/modules/development-of-chat-bots/development-of-chat-bots.js ***!
    \*********************************************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  
  
  /***/ }),
  
  /***/ "./src/blocks/modules/examples-of-our-bots/examples-of-our-bots.js":
  /*!*************************************************************************!*\
    !*** ./src/blocks/modules/examples-of-our-bots/examples-of-our-bots.js ***!
    \*************************************************************************/
  /*! no exports provided */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");
  
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.examples_of_our_bots__slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
  
  /***/ }),
  
  /***/ "./src/blocks/modules/footer/footer.js":
  /*!*********************************************!*\
    !*** ./src/blocks/modules/footer/footer.js ***!
    \*********************************************/
  /*! no exports provided */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parallax-js */ "./node_modules/parallax-js/dist/parallax.js");
  /* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parallax_js__WEBPACK_IMPORTED_MODULE_0__);
   // РћРїСЂРµРґРµР»СЏРµРј СЃРµР»РµРєС‚РѕСЂ РґР»СЏ РїР°СЂР°Р»Р°РєСЃР°
  
  var scene = document.querySelector('.footer__scene');
  var parallaxInstance = new parallax_js__WEBPACK_IMPORTED_MODULE_0___default.a(scene, {
    hoverOnly: true,
    frictionY: 0
  });
  
  (function () {
    'use strict';
  
    function trackScroll() {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight;
  
      if (scrolled > coords) {
        goTopBtn.classList.add('footer__top_button--show');
      }
  
      if (scrolled < coords) {
        goTopBtn.classList.remove('footer__top_button--show');
      }
    }
  
    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -50);
        setTimeout(backToTop, 0);
      }
    }
  
    var goTopBtn = document.querySelector('.footer__top_button');
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
  })();
  
  /***/ }),
  
  /***/ "./src/blocks/modules/header/header.js":
  /*!*********************************************!*\
    !*** ./src/blocks/modules/header/header.js ***!
    \*********************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  // РћС‚РѕР±СЂР°Р¶РµРЅРёРµ РјРµРЅСЋ РІ Р·Р°РІРёСЃРёРјРѕСЃС‚Рё РѕС‚ СЃРєСЂРѕР»Р°
  // РџРѕРёСЃРє С„СЂРµР№РјР° СЃ РјРµРЅСЋ
  var menuFrame = document.querySelector(".header__scroll");
  
  window.onscroll = function displayingMenu() {
    if (window.pageYOffset > 200) {
      // РџРѕРєР°Р·С‹РІР°РµС‚ РјРµРЅСЋ, РµСЃР»Рё РїРѕР»СЊР·РѕРІР°С‚РµР»СЊ РїСЂРѕСЃРєСЂРѕР»РёР» Р±РѕР»СЊС€Рµ СѓСЃС‚Р°РЅРѕРІР»РµРЅРЅРѕРіРѕ Р·РЅР°С‡РµРЅРёСЏ
      menuFrame.classList.add('scroll');
    } else {
      // СЃРєСЂС‹РІР°РµС‚ РјРµРЅСЋ, РµСЃР»Рё РїРѕР»СЊР·РѕРІР°С‚РµР»СЊ РїСЂРѕСЃРєСЂРѕР»РёР» РјРµРЅСЊС€Рµ СѓСЃС‚Р°РЅРѕРІР»РµРЅРЅРѕРіРѕ Р·РЅР°С‡РµРЅРёСЏ
      menuFrame.classList.remove('scroll');
    }
  }; // РџРѕРєР°Р· РїРѕР»РЅРѕРіРѕ СЃРїРёСЃРєР° РјРµРЅСЋ
  // РџРѕРёСЃРє РєРЅРѕРїРєРё Р±СѓСЂРіРµСЂР°
  
  
  var openMenuBtn = document.querySelector(".header__menu_open"); // РЎРѕРґРµСЂР¶РёРјРѕРµ РјРµРЅСЋ
  
  var menuBody = document.querySelector(".header__nav_body"); // Р’СЃРµ СЃСЃС‹Р»РєРё РІ РјРµРЅСЋ
  
  var menuItems = document.querySelectorAll('.nav__link'); // Р Р°СЃРєСЂС‹РІР°РµС‚ РјРµРЅСЋ РµСЃР»Рё Р±С‹Р»Рѕ РЅР°Р¶Р°С‚РёРµ РЅР° РєРЅРѕРїРєСѓ openMenuBtn
  

  openMenuBtn.onclick = function () {
    this.classList.toggle('is-open');
    menuBody.classList.toggle('is-open');
    
  }; // РЎРєСЂС‹РІР°РµРј РјРµРЅСЋ, РµСЃР»Рё Р±С‹Р» РєР»РёРє РЅР° СЃСЃС‹Р»РєСѓ
  
  
  menuItems.forEach(function (menuItem) {
    return menuItem.addEventListener("click", function (event) {
      openMenuBtn.classList.toggle('is-open');
      menuBody.classList.toggle('is-open');
    });
  }); // РџР»Р°РІРЅР°СЏ РїСЂРѕРєСЂСѓС‚РєР° РґРѕ СЏРєРѕСЂСЏ
  // РџРѕР»СѓС‡РµРЅРёРµ РІСЃРµС… СЏРєРѕСЂРµР№
  
  var anchors = document.querySelectorAll('a[href*="#"]'); // РџРµСЂРµР±РёСЂР°РµРј РїРѕР»СѓС‡РµРЅРЅС‹Рµ СЏРєРѕСЂСЏ
  
  anchors.forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var blockID = anchor.getAttribute('href').substr(1);
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  
  /***/ }),
  
  /***/ "./src/blocks/modules/integration-features/integration-features.js":
  /*!*************************************************************************!*\
    !*** ./src/blocks/modules/integration-features/integration-features.js ***!
    \*************************************************************************/
  /*! no exports provided */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parallax-js */ "./node_modules/parallax-js/dist/parallax.js");
  /* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parallax_js__WEBPACK_IMPORTED_MODULE_0__);
   // РћРїСЂРµРґРµР»СЏРµРј СЃРµР»РµРєС‚РѕСЂ РґР»СЏ РїР°СЂР°Р»Р°РєСЃР°
  
  var scene = document.querySelector('.integration_features__scene');
  var parallaxInstance = new parallax_js__WEBPACK_IMPORTED_MODULE_0___default.a(scene, {
    hoverOnly: true,
    frictionY: 0
  });
  
  /***/ }),
  
  /***/ "./src/blocks/modules/intro/intro.js":
  /*!*******************************************!*\
    !*** ./src/blocks/modules/intro/intro.js ***!
    \*******************************************/
  /*! no exports provided */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parallax-js */ "./node_modules/parallax-js/dist/parallax.js");
  /* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parallax_js__WEBPACK_IMPORTED_MODULE_0__);
   // РћРїСЂРµРґРµР»СЏРµРј СЃРµР»РµРєС‚РѕСЂ РґР»СЏ РїР°СЂР°Р»Р°РєСЃР°
  
  var scene = document.querySelector('.intro__scene');
  var parallaxInstance = new parallax_js__WEBPACK_IMPORTED_MODULE_0___default.a(scene, {
    hoverOnly: true,
    frictionY: 0
  }); // РџРѕР»СѓС‡Р°РµРј РЅСѓР¶РЅСѓСЋ СЃРµРєС†РёСЋ
  
  var heroItems = document.querySelectorAll(".intro__hero_items");
  
  var element = document.querySelector(".intro"),
      Visible = function Visible(target) {
    // Р’СЃРµ РїРѕР·РёС†РёРё СЌР»РµРјРµРЅС‚Р°
    var targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
        windowPosition = {
      // РџРѕР»СѓС‡Р°РµРј РїРѕР·РёС†РёРё РѕРєРЅР°
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };
  
    if ( // Р•СЃР»Рё РїРѕР·РёС†РёСЏ РЅРёР¶РЅРµР№ С‡Р°СЃС‚Рё СЌР»РµРјРµРЅС‚Р° Р±РѕР»СЊС€Рµ РїРѕР·РёС†РёРё РІРµСЂС…РЅРµР№ С‡Р°СЃС‚Рё РѕРєРЅР°, С‚Рѕ СЌР»РµРјРµРЅС‚ РІРёРґРµРЅ СЃРІРµСЂС…Сѓ
    targetPosition.bottom > windowPosition.top && // Р•СЃР»Рё РїРѕР·РёС†РёСЏ РІРµСЂС…РЅРµР№ С‡Р°СЃС‚Рё СЌР»РµРјРµРЅС‚Р° РјРµРЅСЊС€Рµ РїРѕР·РёС†РёРё РЅРёР¶РЅРµР№ С‡Р°СЃС‚Рё РѕРєРЅР°, С‚Рѕ СЌР»РµРјРµРЅС‚ РІРёРґРµРЅ СЃРЅРёР·Сѓ
    targetPosition.top < windowPosition.bottom && // Р•СЃР»Рё РїРѕР·РёС†РёСЏ РїСЂР°РІРѕР№ СЃС‚РѕСЂРѕРЅС‹ СЌР»РµРјРµРЅС‚Р° Р±РѕР»СЊС€Рµ РїРѕР·РёС†РёРё Р»РµРІРѕР№ С‡Р°СЃС‚Рё РѕРєРЅР°, С‚Рѕ СЌР»РµРјРµРЅС‚ РІРёРґРµРЅ СЃР»РµРІР°
    targetPosition.right > windowPosition.left && // Р•СЃР»Рё РїРѕР·РёС†РёСЏ Р»РµРІРѕР№ СЃС‚РѕСЂРѕРЅС‹ СЌР»РµРјРµРЅС‚Р° РјРµРЅСЊС€Рµ РїРѕР·РёС†РёРё РїСЂР°РІРѕР№ С‡Р°СЃС‚Рё РѕРєРЅР°, С‚Рѕ СЌР»РµРјРµРЅС‚ РІРёРґРµРЅ СЃРїСЂР°РІР°
    targetPosition.left < windowPosition.right) {
      // Р•СЃР»Рё СЌР»РµРјРµРЅС‚ РїРѕР»РЅРѕСЃС‚СЊСЋ РІРёРґРЅРѕ, С‚Рѕ Р·Р°РїСѓСЃРєР°РµРј СЃР»РµРґСѓСЋС‰РёР№ РєРѕРґ
      // Р—Р°РїСѓСЃРєР°РµРј Р°РЅРёРјР°С†РёСЋ СЃРјР°СЂС‚С„РѕРЅРѕРІ
      heroItems.forEach(function (el) {
        el.classList.remove("paused");
      });
    } else {
      // Р•СЃР»Рё СЌР»РµРјРµРЅС‚ РЅРµ РІРёРґРЅРѕ, С‚Рѕ Р·Р°РїСѓСЃРєР°РµРј СЌС‚РѕС‚ РєРѕРґ
      // РћСЃС‚Р°РЅР°РІР»РёРІР°РµРј Р°РЅРёРјР°С†РёСЋ СЃРјР°СЂС‚С„РѕРЅРѕРІ
      heroItems.forEach(function (el) {
        el.classList.add("paused");
      });
    }
  }; // Р—Р°РїСѓСЃРєР°РµРј С„СѓРЅРєС†РёСЋ РїСЂРё РїСЂРѕРєСЂСѓС‚РєРµ СЃС‚СЂР°РЅРёС†С‹
  
  
  window.addEventListener("scroll", function () {
    Visible(element);
  }); // Рђ С‚Р°РєР¶Рµ Р·Р°РїСѓСЃС‚РёРј С„СѓРЅРєС†РёСЋ СЃСЂР°Р·Сѓ. Рђ С‚Рѕ РІРґСЂСѓРі, СЌР»РµРјРµРЅС‚ РёР·РЅР°С‡Р°Р»СЊРЅРѕ РІРёРґРЅРѕ
  
  Visible(element);
  
  /***/ }),
  
  /***/ "./src/blocks/modules/modal/modal.js":
  /*!*******************************************!*\
    !*** ./src/blocks/modules/modal/modal.js ***!
    \*******************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  var buttons_open = document.querySelectorAll(".btn_open");
  
  function openModal(name) {
    var modal_form = document.querySelector(name);
    var close = modal_form.getElementsByClassName("close_modal_window")[0];
    modal_form.classList.add('open');
  
    close.onclick = function () {
      modal_form.classList.remove('open');
    };
  
    window.onclick = function (event) {
      if (event.target == modal_form) {
        modal_form.classList.remove('open');
      }
    };
  }
  
  buttons_open.forEach(function (btn) {
    btn.addEventListener('click', function () {
      openModal(".modal_form");
    });
  });
  document.querySelector('body').addEventListener('mouseleave', function () {
    if (document.cookie.replace(/(?:(?:^|.*;\s*)doSomethingOnlyOnce\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== "true") {
      if (document.querySelector('.modal_form').style.opacity == '0'){
        openModal(".modal_leave");
      }
      
      var cookie_date = new Date();
      cookie_date.setDate(cookie_date.getDate() + 1);
      document.cookie = "doSomethingOnlyOnce=true; expires=" + cookie_date.toGMTString() + "";
    }
  }); // buttons_open1.forEach((btn) => {
  //     btn.addEventListener('click', function (e) {
  //         openModal(".modal_thanks");
  //     });
  // });
  
  /***/ }),
  
  /***/ "./src/blocks/modules/order-block/order-block.js":
  /*!*******************************************************!*\
    !*** ./src/blocks/modules/order-block/order-block.js ***!
    \*******************************************************/
  /*! no exports provided */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parallax-js */ "./node_modules/parallax-js/dist/parallax.js");
  /* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parallax_js__WEBPACK_IMPORTED_MODULE_0__);
  /* harmony import */ var intl_tel_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! intl-tel-input */ "./node_modules/intl-tel-input/index.js");
  /* harmony import */ var intl_tel_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(intl_tel_input__WEBPACK_IMPORTED_MODULE_1__);
  /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
  /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
  /* harmony import */ var intl_tel_input_build_js_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! intl-tel-input/build/js/utils */ "./node_modules/intl-tel-input/build/js/utils.js");
  /* harmony import */ var intl_tel_input_build_js_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(intl_tel_input_build_js_utils__WEBPACK_IMPORTED_MODULE_3__);
  /* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! imask */ "./node_modules/imask/esm/index.js");
  /* harmony import */ var recaptcha_v3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recaptcha-v3 */ "./node_modules/recaptcha-v3/dist/ReCaptcha.js");
  /* harmony import */ var recaptcha_v3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(recaptcha_v3__WEBPACK_IMPORTED_MODULE_5__);
  
  
  
  
  
   // РћРїСЂРµРґРµР»СЏРµРј СЃРµР»РµРєС‚РѕСЂ РґР»СЏ РїР°СЂР°Р»Р°РєСЃР°
  
  var scene = document.querySelector('.order_block__scene'); // Р—Р°РїСѓСЃРєР°РµРј РїР°СЂР°Р»Р°РєСЃ
  
  var parallaxInstance = new parallax_js__WEBPACK_IMPORTED_MODULE_0___default.a(scene, {
    hoverOnly: true,
    frictionY: 0
  }); // РћР±СЂР°Р±РѕС‚С‡РёРє РјРѕРґР°Р»СЊРЅС‹С… РѕРєРѕРЅ
  
  function openModal(name) {
    var modal_form = document.querySelector(name);
    var close = modal_form.getElementsByClassName("close_modal_window")[0];
    modal_form.classList.add('open');
  
    close.onclick = function () {
      modal_form.classList.remove('open');
    };
  
    window.onclick = function (event) {
      if (event.target == modal_form) {
        modal_form.classList.remove('open');
      }
    };
  }
  
  ; // РћР±СЂР°Р±РѕС‚РєР° С„РѕСЂРј
  // РЈСЃС‚Р°РЅР°РІР»РёРІР°РµРј РїРѕР»СЏ С‚СЂРµР±СѓСЋС‰РёРµ РІР°Р»РёРґР°С†РёРё
  
  /*
  Р”Р°РЅРЅС‹Рµ СѓРєР°Р·С‹РІР°СЋС‚СЃСЏ РІ С„РѕСЂРјР°С‚Рµ json:
  "РќР°Р·РІР°РЅРёРµ РїРѕР»СЏ": {
          "mask": Р•СЃР»Рё РЅСѓР¶РЅР° РјР°СЃРєР° РґР»СЏ СЌС‚РѕРіРѕ РїРѕР»СЏ, РЅР°РїСЂРёРјРµСЂ "phone"
          "minlength": РјРёРЅРёРјР°Р»СЊРЅР°СЏ РґР»РёРЅР° РїРѕР»СЏ,
          "valid": false РµСЃР»Рё РїРѕР»Рµ РµС‰Рµ РЅРµ РІР°Р»РёРґРЅРѕ
      },
   */
  
  var validationInput = {
    "name": {
      "mask": false,
      "minlength": 2,
      "valid": false
    },
    "phones": {
      "mask": "phone",
      "minlength": 2,
      "valid": false
    },
    "emails": {
      "mask": "email",
      "minlength": 2,
      "valid": false
    }
  }; // Р’Р°Р»РёРґР°С†РёСЏ email
  
  function validateEmail(email) {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
  }
  
  ; // Р’Р°Р»РёРґР°С†РёСЏ phone
  
  function validatePhone(phone) {
    var validate = "_";
    return phone.indexOf(validate) > -1;
  }
  
  ; // РџСЂРѕРІРµСЂРєР° РІР°Р»РёРґРЅРѕСЃС‚Рё С„РѕСЂРј
  
  function validate(form, input, inputName, sendButton) {
    var errorMessage = form.querySelector('.email_form__hint--' + inputName + ''); // РџСЂРѕРІРµСЂСЏРµРј РІР°Р»РёРґРЅРѕСЃС‚СЊ РїРѕР»РµР№
  
    var inputValid = false;
  
    if (inputName === "emails") {
      inputValid = !validateEmail(input['value']);
    }
  
    if (inputName === "phones") {
      inputValid = validatePhone(input['value']);
    } // Р•СЃР»Рё РїРѕР»СЏ РЅРµ РІР°Р»РёРґРЅС‹, С‚Рѕ Р±Р»РѕРєРёСЂСѓРµРј РєРЅРѕРїРєСѓ, Рё РїРѕРєР°Р·С‹РІР°РµРј СЃРѕРѕР±С‰РµРЅРёРµ РѕР± РѕС€РёР±РєРµ
  
  
    if (inputValid || !(input['value'].length > validationInput[inputName]["minlength"])) {
      input.classList.add('error');
      errorMessage.classList.add('error');
      validationInput[inputName]["valid"] = false;
    } else {
      input.classList.remove('error');
      errorMessage.classList.remove('error');
      validationInput[inputName]["valid"] = true;
    } // РџСЂРѕРІРµСЂСЏРµРј Р·Р°РїРѕР»РЅРµРЅРЅРѕСЃС‚СЊ РєР°Р¶РґРѕРіРѕ РїРѕР»СЏ
  
  
    var validationStatus = [];
  
    for (var _inputName in validationInput) {
      validationStatus.push(validationInput[_inputName]["valid"]);
    }
  
    sendButton.disabled = validationStatus.indexOf(false) > -1;
  }
  
  ; // РџР°СЂСЃРёРЅРі URL
  
  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
  
  ;
  
  function getUtm(form) {
    // РџРѕР»СѓС‡Р°РµРј utm РјРµС‚РєРё Рё РїСЂРѕСЃС‚Р°РІР»СЏРµРј РёС… РІ input
    form.querySelector('input[name="property_utm_source"]').value = getParameterByName('utm_source');
    form.querySelector('input[name="property_utm_medium"]').value = getParameterByName('utm_medium');
    form.querySelector('input[name="property_utm_campaign"]').value = getParameterByName('utm_campaign');
  }
  
  ; // Р¤РѕСЂРјРёСЂРѕРІР°РЅРёРµ РїРѕР»РЅРѕС†РµРЅРЅРѕРіРѕ С‚РµР»РµС„РѕРЅРЅРѕРіРѕ РЅРѕРјРµСЂР°
  
  function getNumber(form) {
    var code = form.querySelector('.iti__selected-dial-code').innerText;
    var number = form.querySelector('input[name="phones"]');
    number.value = code + " " + number['value'].replace("".concat(code, " "), "");
  }
  
  ; // РћС‚РїСЂР°РІРєР° РґР°РЅРЅС‹С… РёР· С„РѕСЂРјС‹ РІ РѕР±СЂР°Р±РѕС‚С‡РёРє
  
  function send(form) {
    var data = new FormData(form);
    var modals = document.querySelectorAll('.modal');
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/.handlers/client.php', data).then(function (response) {
      var modals = document.querySelectorAll('.modal');
      modals.forEach(function (modal) {
        modal.classList.remove('open');
        form.classList.remove('sending');
        openModal(".modal_thanks");
        form.reset();
      });
      var cookie_date = new Date();
      cookie_date.setDate(cookie_date.getDate() + 1);
      document.cookie = "doSomethingOnlyOnce=true; expires=" + cookie_date.toGMTString() + "";
    })["catch"](function (error) {
      var modals = document.querySelectorAll('.modal');
      modals.forEach(function (modal) {
        modal.classList.remove('open');
        form.classList.remove('sending');
        openModal(".modal_error");
        form.reset();
      });
    });
  }
  
  ; // РС‰РµРј РІСЃРµ С„РѕСЂРјС‹
  
  var forms = document.querySelectorAll('.email_form'); // Р—Р°РїСѓСЃРєР°РµРј РѕС‚СЃР»РµР¶РёРІР°РЅРёРµ РєР°Р¶РґРѕР№ РЅР°Р№РґРµРЅРЅРѕР№ С„РѕСЂРјС‹
  
  forms.forEach(function (form) {
    form.reset(); // РџРѕР»СѓС‡Р°РµРј РєРЅРѕРїРєСѓ Рё СЃСЂР°Р·Сѓ Р¶Рµ РµРµ РѕС‚РєР»СЋС‡Р°РµРј
  
    var sendButton = form.querySelector('.email_form__button');
    sendButton.disabled = true; // РџРµСЂРµР±РёСЂР°РµРј РїРѕР»СЏ С‚СЂРµР±СѓСЋС‰РёРµ РІР°Р»РёРґР°С†РёСЋ
  
    var _loop = function _loop(inputName) {
      // РџРѕР»СѓС‡Р°РµРј С‚РµРєСѓС‰РёР№ input РІ С†РёРєР»Рµ
      var input = form.querySelector("input[name='" + inputName + "']"); // Р”Р»СЏ РїРѕР»СЏ СЃ С‚РµР»РµС„РѕРЅРѕРј РґРѕР±Р°РІР»СЏРµРј РІС‹Р±РѕСЂ СЃС‚СЂР°РЅС‹ Рё Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё РіРµРЅРµСЂРёСЂСѓРµРј РјР°СЃРєСѓ РїРѕРґ РЅРµРµ
  
      if (validationInput[inputName]["mask"] === "phone") {
        intl_tel_input__WEBPACK_IMPORTED_MODULE_1___default()(input, {
          autoHideDialCode: false,
          autoPlaceholder: "aggressive",
          separateDialCode: true,
          preferredCountries: ['ru', 'ua', 'by', 'kz', 'uz', 'tj', 'us'],
          customPlaceholder: function customPlaceholder(selectedCountryPlaceholder, selectedCountryData) {
            return '' + selectedCountryPlaceholder.replace(/[0-9]/g, '0');
          }
        }); // РЈСЃС‚Р°РЅР°РІР»РёРІР°РµРј РјР°СЃРєСѓ
  
        var phoneMask = Object(imask__WEBPACK_IMPORTED_MODULE_4__["default"])(input, {
          mask: input['placeholder'].replace(/[0-9]/g, '0'),
          lazy: false
        }); // Р”РµР»Р°РµРј РіРµРЅРµСЂРёСЂСѓРµРј РјР°СЃРєСѓ С‚РµР»РµС„РѕРЅР° РІ Р·Р°РІРёСЃРёРјРѕСЃС‚Рё РѕС‚ РІС‹Р±СЂР°РЅРЅРѕР№ СЃС‚СЂР°РЅС‹
  
        input.addEventListener('focus', function (e) {
          var placeholder = this['placeholder'].replace(/[0-9]/g, '0');
  
          if (placeholder) {
            // РћР±РЅРѕРІР»СЏРµРј РјР°СЃРєСѓ РЅР° СЃР»СѓС‡Р°Р№, РµСЃР»Рё Р±С‹Р»Р° РІС‹Р±СЂР°РЅР° РґСЂСѓРіР°СЏ СЃС‚СЂР°РЅР°
            phoneMask.updateOptions({
              mask: placeholder
            });
          }
        });
      } // Р—Р°РїСѓСЃРє РІР°Р»РёРґР°С‚РѕСЂР°
  
  
      input.addEventListener('mouseover', function () {
        validate(form, input, inputName, sendButton);
      });
      input.addEventListener('mouseleave', function () {
        validate(form, input, inputName, sendButton);
      });
      input.addEventListener('focus', function () {
        validate(form, input, inputName, sendButton);
      });
      input.addEventListener('blur', function () {
        validate(form, input, inputName, sendButton);
      }); // РїСЂРѕСЃС‚Р°РІР»СЏРµРј utm РјРµС‚РєРё
  
      getUtm(form);
    };
  
    for (var inputName in validationInput) {
      _loop(inputName);
    }
  
    ; // РћС‚СЃР»РµР¶РёРІР°РЅРёРµ РєР»РёРєР° РїРѕ РєРЅРѕРїРєРµ
  
    sendButton.addEventListener('click', function (e) {
      var _this = this;
  
      e.preventDefault();
      Object(recaptcha_v3__WEBPACK_IMPORTED_MODULE_5__["load"])('6LcXxccZAAAAAHEKKMFdzdVXp0LCCbHx_N9Q260F').then(function (recaptcha) {
        recaptcha.execute('sendform').then(function (token) {
          form.querySelector('input[name="property_check"]').value = token;
          form.classList.add('sending');
          _this.disabled = true;
          getNumber(form);
          send(form);
        });
      });
    });
  });
  
  /***/ }),
  
  /***/ "./src/blocks/modules/trust-us/trust-us.js":
  /*!*************************************************!*\
    !*** ./src/blocks/modules/trust-us/trust-us.js ***!
    \*************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  
  
  /***/ }),
  
  /***/ "./src/blocks/modules/what-bots-do-we-make/what-bots-do-we-make.js":
  /*!*************************************************************************!*\
    !*** ./src/blocks/modules/what-bots-do-we-make/what-bots-do-we-make.js ***!
    \*************************************************************************/
  /*! no exports provided */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parallax-js */ "./node_modules/parallax-js/dist/parallax.js");
  /* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parallax_js__WEBPACK_IMPORTED_MODULE_0__);
   // РћРїСЂРµРґРµР»СЏРµРј СЃРµР»РµРєС‚РѕСЂ РґР»СЏ РїР°СЂР°Р»Р°РєСЃР°
  
  var scene = document.querySelector('.what_bots_do_we_make__scene');
  var parallaxInstance = new parallax_js__WEBPACK_IMPORTED_MODULE_0___default.a(scene, {
    hoverOnly: true,
    frictionY: 0
  });
  
  /***/ }),
  
  /***/ "./src/blocks/modules/what-our-bots-can/what-our-bots-can.js":
  /*!*******************************************************************!*\
    !*** ./src/blocks/modules/what-our-bots-can/what-our-bots-can.js ***!
    \*******************************************************************/
  /*! no exports provided */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parallax-js */ "./node_modules/parallax-js/dist/parallax.js");
  /* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parallax_js__WEBPACK_IMPORTED_MODULE_0__);
   // РћРїСЂРµРґРµР»СЏРµРј СЃРµР»РµРєС‚РѕСЂ РґР»СЏ РїР°СЂР°Р»Р°РєСЃР°
  
  var scene = document.querySelector('.what_our_bots_can__scene');
  var parallaxInstance = new parallax_js__WEBPACK_IMPORTED_MODULE_0___default.a(scene, {
    hoverOnly: true,
    frictionY: 0
  });
  
  /***/ }),
  
  /***/ "./src/blocks/modules/what-technologies-do-we-use/what-technologies-do-we-use.js":
  /*!***************************************************************************************!*\
    !*** ./src/blocks/modules/what-technologies-do-we-use/what-technologies-do-we-use.js ***!
    \***************************************************************************************/
  /*! no exports provided */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parallax-js */ "./node_modules/parallax-js/dist/parallax.js");
  /* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parallax_js__WEBPACK_IMPORTED_MODULE_0__);
   // РћРїСЂРµРґРµР»СЏРµРј СЃРµР»РµРєС‚РѕСЂ РґР»СЏ РїР°СЂР°Р»Р°РєСЃР°
  
  var scene = document.querySelector('.what_technologies_do_we_use__scene');
  var parallaxInstance = new parallax_js__WEBPACK_IMPORTED_MODULE_0___default.a(scene, {
    hoverOnly: true,
    frictionY: 0
  });
  
  /***/ }),
  
  /***/ "./src/blocks/modules/who-are-we/who-are-we.js":
  /*!*****************************************************!*\
    !*** ./src/blocks/modules/who-are-we/who-are-we.js ***!
    \*****************************************************/
  /*! no static exports found */
  /***/ (function(module, exports) {
  
  
  
  /***/ }),
  
  /***/ "./src/js/import/modules.js":
  /*!**********************************!*\
    !*** ./src/js/import/modules.js ***!
    \**********************************/
  /*! no exports provided */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
  /* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
  /* harmony import */ var _modules_intro_intro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/intro/intro */ "./src/blocks/modules/intro/intro.js");
  /* harmony import */ var _modules_who_are_we_who_are_we__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/who-are-we/who-are-we */ "./src/blocks/modules/who-are-we/who-are-we.js");
  /* harmony import */ var _modules_who_are_we_who_are_we__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_who_are_we_who_are_we__WEBPACK_IMPORTED_MODULE_2__);
  /* harmony import */ var _modules_development_of_chat_bots_development_of_chat_bots__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/development-of-chat-bots/development-of-chat-bots */ "./src/blocks/modules/development-of-chat-bots/development-of-chat-bots.js");
  /* harmony import */ var _modules_development_of_chat_bots_development_of_chat_bots__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_development_of_chat_bots_development_of_chat_bots__WEBPACK_IMPORTED_MODULE_3__);
  /* harmony import */ var _modules_what_our_bots_can_what_our_bots_can__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/what-our-bots-can/what-our-bots-can */ "./src/blocks/modules/what-our-bots-can/what-our-bots-can.js");
  /* harmony import */ var _modules_integration_features_integration_features__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/integration-features/integration-features */ "./src/blocks/modules/integration-features/integration-features.js");
  /* harmony import */ var _modules_what_bots_do_we_make_what_bots_do_we_make__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/what-bots-do-we-make/what-bots-do-we-make */ "./src/blocks/modules/what-bots-do-we-make/what-bots-do-we-make.js");
  /* harmony import */ var _modules_what_technologies_do_we_use_what_technologies_do_we_use__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/what-technologies-do-we-use/what-technologies-do-we-use */ "./src/blocks/modules/what-technologies-do-we-use/what-technologies-do-we-use.js");
  /* harmony import */ var _modules_examples_of_our_bots_examples_of_our_bots__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/examples-of-our-bots/examples-of-our-bots */ "./src/blocks/modules/examples-of-our-bots/examples-of-our-bots.js");
  /* harmony import */ var _modules_order_block_order_block__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/order-block/order-block */ "./src/blocks/modules/order-block/order-block.js");
  /* harmony import */ var _modules_trust_us_trust_us__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/trust-us/trust-us */ "./src/blocks/modules/trust-us/trust-us.js");
  /* harmony import */ var _modules_trust_us_trust_us__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_modules_trust_us_trust_us__WEBPACK_IMPORTED_MODULE_10__);
  /* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
  /* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! %modules%/modal/modal */ "./src/blocks/modules/modal/modal.js");
  /* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_modules_modal_modal__WEBPACK_IMPORTED_MODULE_12__);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /***/ }),
  
  /***/ "./src/js/index.js":
  /*!*************************!*\
    !*** ./src/js/index.js ***!
    \*************************/
  /*! no exports provided */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
  /* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vanilla-lazyload */ "./node_modules/vanilla-lazyload/dist/lazyload.min.js");
  /* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vanilla_lazyload__WEBPACK_IMPORTED_MODULE_1__);
  /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
  /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
  
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  
  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
  
  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
  
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
  
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }
  
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  
  
  
  
  new vanilla_lazyload__WEBPACK_IMPORTED_MODULE_1___default.a({
    elements_selector: ".lazy",
    load_delay: 300
  });
  
  var Snow = function Snow(canvas, count, options) {
    var ctx = canvas.getContext('2d');
    var snowflakes = [];
  
    var add = function add(item) {
      return snowflakes.push(item(canvas));
    };
  
    var update = function update() {
      return lodash__WEBPACK_IMPORTED_MODULE_2___default.a.forEach(snowflakes, function (el) {
        return el.update();
      });
    };
  
    var resize = function resize() {
      ctx.canvas.width = canvas.offsetWidth;
      ctx.canvas.height = canvas.offsetHeight;
  
      lodash__WEBPACK_IMPORTED_MODULE_2___default.a.forEach(snowflakes, function (el) {
        return el.resized();
      });
    };
  
    var draw = function draw() {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
  
      lodash__WEBPACK_IMPORTED_MODULE_2___default.a.forEach(snowflakes, function (el) {
        return el.draw();
      });
    };
  
    var events = function events() {
      window.addEventListener('resize', resize);
    };
  
    var loop = function loop() {
      draw();
      update();
      animFrame(loop);
    };
  
    var init = function init() {
      lodash__WEBPACK_IMPORTED_MODULE_2___default.a.times(count, function () {
        return add(function (canvas) {
          return SnowItem(canvas, null, options);
        });
      });
  
      events();
      loop();
    };
  
    init(count);
    resize();
    return {
      add: add,
      resize: resize
    };
  };
  
  var defaultOptions = {
    color: 'orange',
    radius: [0.5, 5.0],
    speed: [0.5, 3],
    wind: [-0.5, 5.0]
  };
  
  var SnowItem = function SnowItem(canvas) {
    var drawFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var opts = arguments.length > 2 ? arguments[2] : undefined;
  
    var options = _objectSpread(_objectSpread({}, defaultOptions), opts);
  
    var radius = options.radius,
        speed = options.speed,
        wind = options.wind,
        color = options.color;
    var params = {
      color: color,
      x: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.random(0, canvas.offsetWidth),
      y: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.random(-canvas.offsetHeight, 0),
      radius: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.random.apply(lodash__WEBPACK_IMPORTED_MODULE_2___default.a, _toConsumableArray(radius)),
      speed: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.random.apply(lodash__WEBPACK_IMPORTED_MODULE_2___default.a, _toConsumableArray(speed)),
      wind: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.random.apply(lodash__WEBPACK_IMPORTED_MODULE_2___default.a, _toConsumableArray(wind)),
      isResized: false
    };
    var ctx = canvas.getContext('2d');
  
    var updateData = function updateData() {
      params.x = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.random(0, canvas.offsetWidth);
      params.y = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.random(-canvas.offsetHeight, 0);
    };
  
    var resized = function resized() {
      return params.isResized = true;
    };
  
    var drawDefault = function drawDefault() {
      ctx.beginPath();
      ctx.arc(params.x, params.y, params.radius, 0, 2 * Math.PI);
      ctx.fillStyle = params.color;
      ctx.fill();
      ctx.closePath();
    };
  
    var draw = drawFn ? function () {
      return drawFn(ctx, params);
    } : drawDefault;
  
    var translate = function translate() {
      params.y += params.speed;
      params.x += params.wind;
    };
  
    var onDown = function onDown() {
      if (params.y < canvas.offsetHeight) return;
  
      if (params.isResized) {
        updateData();
        params.isResized = false;
      } else {
        params.y = 0;
        params.x = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.random(0, canvas.offsetWidth);
      }
    };
  
    var update = function update() {
      translate();
      onDown();
    };
  
    return {
      update: update,
      resized: resized,
      draw: draw
    };
  };
  
  var el = document.querySelector('.container');
  var wrapper = document.querySelector('body');
  var canvas = document.getElementById('snow');
  var animFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  if (canvas) Snow(canvas, 350, {
    color: 'white'
  });
  
  /***/ })
  
  /******/ });
  //# sourceMappingURL=main.js.map