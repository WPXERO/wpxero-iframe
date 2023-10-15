/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/iframe/edit.js":
/*!***********************************!*\
  !*** ./src/blocks/iframe/edit.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/iframe/editor.scss");
/* harmony import */ var _urlGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./urlGenerator */ "./src/blocks/iframe/urlGenerator.js");
/* harmony import */ var _iframe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./iframe */ "./src/blocks/iframe/iframe.js");





const {
  Fragment
} = wp.element;

// editor style




// colors

function Edit({
  attributes,
  setAttributes,
  clientId
}) {
  const {
    iframe_url,
    iframe_height,
    iframe_scrolling,
    iframe_allowFullScreen,
    lazyload,
    throttle,
    threshold,
    live,
    alignments
  } = attributes;
  let videoUrl = (0,_urlGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])({
    iframe_url
  });
  const [videoID, setVideoID] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Iframe Settings', 'wpxero-iframe'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Iframe Url', 'wpxero-iframe'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Type or paste the specified iframe url that you want to display on the block.'),
    value: iframe_url,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter the URL to embed here...', 'wpxero-iframe'),
    onChange: iframe_url => setAttributes({
      iframe_url
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Height', 'wpxero-iframe'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Specifies the height of the iframe in pixels.', 'wpxero-iframe'),
    value: iframe_height,
    onChange: iframe_height => setAttributes({
      iframe_height
    }),
    min: 200,
    max: 1200
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Scrolling', 'wpxero-iframe'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Specifies whether scrollbars should be displayed within the iframe', 'wpxero-iframe'),
    value: iframe_scrolling,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Auto', 'wpxero-iframe'),
      value: 'auto'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Yes', 'wpxero-iframe'),
      value: 'yes'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No', 'wpxero-iframe'),
      value: 'no'
    }],
    onChange: iframe_scrolling => setAttributes({
      iframe_scrolling
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Allow Full Screen', 'wpxero-iframe'),
    help: iframe_allowFullScreen ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Allow Full Screen is enabled', 'wpxero-iframe') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Allow Full Screen is disabled', 'wpxero-iframe'),
    checked: iframe_allowFullScreen,
    onChange: e => setAttributes({
      iframe_allowFullScreen: !iframe_allowFullScreen
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Lazyload', 'wpxero-iframe'),
    help: lazyload ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Lazyload is enabled', 'wpxero-iframe') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Lazyload is disabled', 'wpxero-iframe'),
    checked: lazyload,
    onChange: e => setAttributes({
      lazyload: !lazyload
    })
  }), lazyload && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Throttle', 'wpxero-iframe'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('millisecond interval at which to process events', 'wpxero-iframe'),
    value: throttle,
    onChange: throttle => setAttributes({
      throttle
    }),
    min: 0,
    max: 1000
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Threshold', 'wpxero-iframe'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('scroll distance from element before its loaded', 'wpxero-iframe'),
    value: threshold,
    onChange: threshold => setAttributes({
      threshold
    }),
    min: 0,
    max: 1000
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Live', 'wpxero-iframe'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('auto bind lazy loading to ajax loaded elements ', 'wpxero-iframe'),
    checked: live,
    onChange: e => setAttributes({
      live: !live
    })
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockAlignmentToolbar, {
    value: alignments,
    onChange: alignments => setAttributes({
      alignments
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
      className: {
        'wpxero-iframe': true,
        [`wpxero-iframe-${clientId}`]: true,
        [`align${alignments}`]: alignments
      }
    })
  }, !iframe_url && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Placeholder, {
    style: {
      display: 'block',
      width: '100%'
    },
    label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "#000000",
      width: "28",
      height: "28",
      viewBox: "0 0 24 24"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      "fill-rule": "evenodd",
      d: "M13,20 L20,20 L20,4 L4,4 L4,11 L11,11 C12.1045695,11 13,11.8954305 13,13 L13,20 Z M11,20 L11,13 L4,13 L4,20 L11,20 Z M4,2 L20,2 C21.1045695,2 22,2.8954305 22,4 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,4 C2,2.8954305 2.8954305,2 4,2 Z"
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('WPXero Iframe', 'wpxero-iframe')))
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpxero-iframe--warning flex-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    className: "wpxero-input-url",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Iframe Url', 'wpxero-iframe'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Paste a link to the content you want to display on your site.', 'wpxero-iframe'),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter the URL to embed here...', 'wpxero-iframe'),
    onChange: setVideoID
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    className: "wpxero-submit-button",
    variant: "primary",
    onClick: () => {
      setAttributes({
        iframe_url: videoID
      });
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('EMBED', 'wpxero-iframe')))), iframe_url && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpxero-iframe--editor"
  }, lazyload ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_iframe__WEBPACK_IMPORTED_MODULE_7__["default"], {
    url: videoUrl,
    className: "lazy",
    throttle: throttle,
    threshold: threshold,
    live: live,
    height: iframe_height,
    allowFullScreen: iframe_allowFullScreen,
    scrolling: iframe_scrolling
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_iframe__WEBPACK_IMPORTED_MODULE_7__["default"], {
    url: videoUrl,
    height: iframe_height,
    allowFullScreen: iframe_allowFullScreen,
    scrolling: iframe_scrolling
  })))));
}

/***/ }),

/***/ "./src/blocks/iframe/iframe.js":
/*!*************************************!*\
  !*** ./src/blocks/iframe/iframe.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const iframe = props => {
  const {
    height,
    url,
    className,
    throttle,
    threshold,
    live,
    allowFullScreen,
    scrolling
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("iframe", {
    class: className,
    "data-throttle": throttle,
    "data-threshold": threshold,
    "data-src": url,
    width: "100%",
    height: height,
    src: url,
    loading: className,
    "data-live": live,
    allowfullscreen: allowFullScreen,
    scrolling: scrolling
  });
};
/* harmony default export */ __webpack_exports__["default"] = (iframe);

/***/ }),

/***/ "./src/blocks/iframe/index.js":
/*!************************************!*\
  !*** ./src/blocks/iframe/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/iframe/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/iframe/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/blocks/iframe/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/blocks/iframe/save.js");





/**
 * Internal dependencies
 */



/**
 * Block Registration
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__, {
  icon: {
    src: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "#000000",
      width: "800px",
      height: "800px",
      viewBox: "0 0 24 24"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      "fill-rule": "evenodd",
      d: "M13,20 L20,20 L20,4 L4,4 L4,11 L11,11 C12.1045695,11 13,11.8954305 13,13 L13,20 Z M11,20 L11,13 L4,13 L4,20 L11,20 Z M4,2 L20,2 C21.1045695,2 22,2.8954305 22,4 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,4 C2,2.8954305 2.8954305,2 4,2 Z"
    }))
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/blocks/iframe/save.js":
/*!***********************************!*\
  !*** ./src/blocks/iframe/save.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _urlGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./urlGenerator */ "./src/blocks/iframe/urlGenerator.js");
/* harmony import */ var _iframe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./iframe */ "./src/blocks/iframe/iframe.js");





function save({
  attributes
}) {
  const {
    iframe_url,
    iframe_height,
    iframe_scrolling,
    iframe_allowFullScreen,
    lazyload,
    throttle,
    threshold,
    live,
    alignments
  } = attributes;
  var videoUrl = (0,_urlGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])({
    iframe_url
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
      className: `align${alignments}`
    })
  }, lazyload ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_iframe__WEBPACK_IMPORTED_MODULE_4__["default"], {
    url: videoUrl,
    className: "lazy",
    throttle: throttle,
    threshold: threshold,
    live: live,
    height: iframe_height,
    allowFullScreen: iframe_allowFullScreen,
    scrolling: iframe_scrolling
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_iframe__WEBPACK_IMPORTED_MODULE_4__["default"], {
    url: videoUrl,
    height: iframe_height,
    allowFullScreen: iframe_allowFullScreen,
    scrolling: iframe_scrolling
  }));
}

/***/ }),

/***/ "./src/blocks/iframe/urlGenerator.js":
/*!*******************************************!*\
  !*** ./src/blocks/iframe/urlGenerator.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const iframeUrl = props => {
  const {
    iframe_url
  } = props;
  let videoUrl = iframe_url;

  // let videoUrl;
  function get_youtube_viedo_Id(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  }
  function get_vimeo_video_id(url) {
    const regExp = /https:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/;
    const match = url.match(regExp);
    return match && match[2].length === 9 ? match[2] : null;
  }

  // youtube video embed url
  const youtubeVideoId = get_youtube_viedo_Id('http://www.youtube.com/watch?v=' + iframe_url + '');
  const vimeoVideoId = get_vimeo_video_id(iframe_url);
  if (youtubeVideoId !== null) {
    videoUrl = `https://www.youtube.com/embed/${youtubeVideoId}`;
  }
  if (vimeoVideoId !== null) {
    videoUrl = `https://player.vimeo.com/video/${vimeoVideoId}`;
  }
  return videoUrl;
};
/* harmony default export */ __webpack_exports__["default"] = (iframeUrl);

/***/ }),

/***/ "./src/blocks/iframe/editor.scss":
/*!***************************************!*\
  !*** ./src/blocks/iframe/editor.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/iframe/style.scss":
/*!**************************************!*\
  !*** ./src/blocks/iframe/style.scss ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/blocks/iframe/block.json":
/*!**************************************!*\
  !*** ./src/blocks/iframe/block.json ***!
  \**************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"apiVersion":2,"name":"wpxero-iframe/iframe","version":"1.0.0","title":"WPXero Iframe","category":"wpxero-iframe","description":"Wpxero iframe for  WordPress Users. You can use this block to embed iframe, video, audio, maps, google map, etc.","supports":{"html":false,"anchor":true},"keywords":["iframe","embed","video","audio","youtube","vimeo","place","maps","google map"],"attributes":{"iframe_id":{"type":"string","default":""},"iframe_class":{"type":"string","default":""},"iframe_url":{"type":"string","default":""},"iframe_title":{"type":"string","default":""},"iframe_width":{"type":"number","default":450},"iframe_height":{"type":"number","default":350},"iframe_allowfullscreen":{"type":"boolean","default":false},"iframe_frameborder":{"type":"number","default":0},"iframe_scrolling":{"type":"string","default":"no"},"iframe_sandbox":{"type":"string","default":""},"iframe_name":{"type":"string","default":""},"iframe_style":{"type":"string","default":""},"iframe_loading":{"type":"string","default":"lazy"},"lazyload":{"type":"boolean","default":false},"throttle":{"type":"number","default":0},"threshold":{"type":"number","default":0},"lazyload_offset":{"type":"number","default":0},"lazyload_method":{"type":"string","default":"scroll"},"lazyload_blur":{"type":"boolean","default":false},"lazyload_fadein":{"type":"boolean","default":false},"lazyload_onload":{"type":"boolean","default":false},"lazyload_placeholder":{"type":"string","default":""},"lazyload_srcset":{"type":"boolean","default":false},"lazyload_sizes":{"type":"boolean","default":false},"lazyload_loading":{"type":"string","default":"auto"},"lazyload_threshold":{"type":"number","default":0},"lazyload_unobserve_completed":{"type":"boolean","default":false},"lazyload_callback_enter":{"type":"string","default":""},"lazyload_callback_exit":{"type":"string","default":""},"lazyload_callback_reveal":{"type":"string","default":""},"lazyload_callback_loaded":{"type":"string","default":""},"lazyload_callback_error":{"type":"string","default":""},"lazyload_callback_finish":{"type":"string","default":""},"width":{"type":"number","default":450},"height":{"type":"number","default":350},"alignments":{"type":"string","default":"center"}},"textdomain":"wpxero-iframe","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/iframe/index": 0,
/******/ 			"blocks/iframe/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwpxero_iframe"] = self["webpackChunkwpxero_iframe"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/iframe/style-index"], function() { return __webpack_require__("./src/blocks/iframe/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map