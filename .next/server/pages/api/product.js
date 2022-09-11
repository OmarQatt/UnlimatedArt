module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/product/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./middleware/auth.js":
/*!****************************!*\
  !*** ./middleware/auth.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/userModel */ "./models/userModel.js");



const auth = async (req, res) => {
  const token = req.headers.authorization;
  if (!token) return res.status(400).json({
    err: 'Invalid Authentication.'
  });
  const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.verify(token, "isRvlIcw`L/)KLyc(=%-5BRHQ:b5p0&gA7LWYt|S^~u$S@L");
  if (!decoded) return res.status(400).json({
    err: 'Invalid Authentication.'
  });
  const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__["default"].findOne({
    _id: decoded.id
  });
  return {
    id: user._id,
    role: user.role,
    root: user.root
  };
};

/* harmony default export */ __webpack_exports__["default"] = (auth);

/***/ }),

/***/ "./models/productModel.js":
/*!********************************!*\
  !*** ./models/productModel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const productSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  images: {
    type: Array,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  checked: {
    type: Boolean,
    default: false
  },
  inStock: {
    type: Number,
    default: 0
  },
  sold: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});
let Dataset = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.product || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('product', productSchema);
/* harmony default export */ __webpack_exports__["default"] = (Dataset);

/***/ }),

/***/ "./models/userModel.js":
/*!*****************************!*\
  !*** ./models/userModel.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'user'
  },
  root: {
    type: Boolean,
    default: false
  },
  avatar: {
    type: String,
    default: 'https://res.cloudinary.com/unlimatedartt/image/upload/v1654270494/blank-profile-picture-973460_640_yqplrx.png'
  }
}, {
  timestamps: true
});
let Dataset = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.user || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('user', userSchema);
/* harmony default export */ __webpack_exports__["default"] = (Dataset);

/***/ }),

/***/ "./pages/api/product/index.js":
/*!************************************!*\
  !*** ./pages/api/product/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ "./utils/connectDB.js");
/* harmony import */ var _models_productModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/productModel */ "./models/productModel.js");
/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../middleware/auth */ "./middleware/auth.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




Object(_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  switch (req.method) {
    case "GET":
      await getProducts(req, res);
      break;

    case "POST":
      await createProduct(req, res);
      break;
  }
});

class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filtering() {
    const queryObj = _objectSpread({}, this.queryString);

    const excludeFields = ['page', 'sort', 'limit'];
    excludeFields.forEach(el => delete queryObj[el]);
    if (queryObj.category !== 'all') this.query.find({
      category: queryObj.category
    });
    if (queryObj.title !== 'all') this.query.find({
      title: {
        $regex: queryObj.title
      }
    });
    this.query.find();
    return this;
  }

  sorting() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join('');
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort('-createdAt');
    }

    return this;
  }

  paginating() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 6;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }

}

const getProducts = async (req, res) => {
  try {
    const features = new APIfeatures(_models_productModel__WEBPACK_IMPORTED_MODULE_1__["default"].find(), req.query).filtering().sorting().paginating();
    const products = await features.query;
    res.json({
      status: 'success',
      result: products.length,
      products
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const result = await Object(_middleware_auth__WEBPACK_IMPORTED_MODULE_2__["default"])(req, res);
    if (result.role !== 'admin') return res.status(400).json({
      err: 'Authentication is not valid.'
    });
    const {
      title,
      price,
      inStock,
      description,
      content,
      category,
      images
    } = req.body;
    if (!title || !price || !inStock || !description || !content || category === 'all' || images.length === 0) return res.status(400).json({
      err: 'Please add all the fields.'
    });
    const newProduct = new _models_productModel__WEBPACK_IMPORTED_MODULE_1__["default"]({
      title: title.toLowerCase(),
      price,
      inStock,
      description,
      content,
      category,
      images
    });
    await newProduct.save();
    res.json({
      msg: 'Success! Created a new product'
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message
    });
  }
};

/***/ }),

/***/ "./utils/connectDB.js":
/*!****************************!*\
  !*** ./utils/connectDB.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);


const connectDB = () => {
  if (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connections[0].readyState) {
    console.log('Already connected.');
    return;
  }

  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect("mongodb+srv://admin:admin@cluster0.7ub6e.mongodb.net/?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, err => {
    if (err) throw err;
    console.log('Connected to mongodb.');
  });
};

/* harmony default export */ __webpack_exports__["default"] = (connectDB);

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZS9hdXRoLmpzIiwid2VicGFjazovLy8uL21vZGVscy9wcm9kdWN0TW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL3VzZXJNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcHJvZHVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb25uZWN0REIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29vc2VcIiJdLCJuYW1lcyI6WyJhdXRoIiwicmVxIiwicmVzIiwidG9rZW4iLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJkZWNvZGVkIiwiand0IiwidmVyaWZ5IiwicHJvY2VzcyIsInVzZXIiLCJVc2VycyIsImZpbmRPbmUiLCJfaWQiLCJpZCIsInJvbGUiLCJyb290IiwicHJvZHVjdFNjaGVtYSIsIm1vbmdvb3NlIiwiU2NoZW1hIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ0cmltIiwicHJpY2UiLCJOdW1iZXIiLCJkZXNjcmlwdGlvbiIsImNvbnRlbnQiLCJpbWFnZXMiLCJBcnJheSIsImNhdGVnb3J5IiwiY2hlY2tlZCIsIkJvb2xlYW4iLCJkZWZhdWx0IiwiaW5TdG9jayIsInNvbGQiLCJ0aW1lc3RhbXBzIiwiRGF0YXNldCIsIm1vZGVscyIsInByb2R1Y3QiLCJtb2RlbCIsInVzZXJTY2hlbWEiLCJuYW1lIiwiZW1haWwiLCJ1bmlxdWUiLCJwYXNzd29yZCIsImF2YXRhciIsImNvbm5lY3REQiIsIm1ldGhvZCIsImdldFByb2R1Y3RzIiwiY3JlYXRlUHJvZHVjdCIsIkFQSWZlYXR1cmVzIiwiY29uc3RydWN0b3IiLCJxdWVyeSIsInF1ZXJ5U3RyaW5nIiwiZmlsdGVyaW5nIiwicXVlcnlPYmoiLCJleGNsdWRlRmllbGRzIiwiZm9yRWFjaCIsImVsIiwiZmluZCIsIiRyZWdleCIsInNvcnRpbmciLCJzb3J0Iiwic29ydEJ5Iiwic3BsaXQiLCJqb2luIiwicGFnaW5hdGluZyIsInBhZ2UiLCJsaW1pdCIsInNraXAiLCJmZWF0dXJlcyIsIlByb2R1Y3RzIiwicHJvZHVjdHMiLCJyZXN1bHQiLCJsZW5ndGgiLCJtZXNzYWdlIiwiYm9keSIsIm5ld1Byb2R1Y3QiLCJ0b0xvd2VyQ2FzZSIsInNhdmUiLCJtc2ciLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInVzZUNyZWF0ZUluZGV4IiwidXNlRmluZEFuZE1vZGlmeSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7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O0lBQ2xDQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtJQUNBO0VBQ0g7O0VBQ0RwRSwrQ0FBUSxDQUFDcUUsT0FBVCxDQUFpQjlFLG1GQUFqQixFQUEwQztJQUN0QytFLGNBQWMsRUFBRSxJQURzQjtJQUV0Q0MsZ0JBQWdCLEVBQUUsS0FGb0I7SUFHdENDLGVBQWUsRUFBRSxJQUhxQjtJQUl0Q0Msa0JBQWtCLEVBQUU7RUFKa0IsQ0FBMUMsRUFLR3RGLEdBQUcsSUFBSTtJQUNOLElBQUdBLEdBQUgsRUFBUSxNQUFNQSxHQUFOO0lBQ1JnRixPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtFQUNILENBUkQ7QUFTSCxDQWREOztBQWlCZXRDLHdFQUFmLEU7Ozs7Ozs7Ozs7O0FDbkJBLHlDOzs7Ozs7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InBhZ2VzL2FwaS9wcm9kdWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvcHJvZHVjdC9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xuaW1wb3J0IFVzZXJzIGZyb20gJy4uL21vZGVscy91c2VyTW9kZWwnXG5cblxuY29uc3QgYXV0aCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbjtcbiAgICBpZighdG9rZW4pIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiAnSW52YWxpZCBBdXRoZW50aWNhdGlvbi4nfSlcblxuICAgIGNvbnN0IGRlY29kZWQgPSBqd3QudmVyaWZ5KHRva2VuLCBwcm9jZXNzLmVudi5BQ0NFU1NfVE9LRU5fU0VDUkVUKVxuICAgIGlmKCFkZWNvZGVkKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogJ0ludmFsaWQgQXV0aGVudGljYXRpb24uJ30pXG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlcnMuZmluZE9uZSh7X2lkOiBkZWNvZGVkLmlkfSlcblxuICAgIHJldHVybiB7aWQ6IHVzZXIuX2lkLCByb2xlOiB1c2VyLnJvbGUsIHJvb3Q6IHVzZXIucm9vdH07XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgYXV0aCIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuY29uc3QgcHJvZHVjdFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIHRpdGxlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIHRyaW06IHRydWVcbiAgICB9LFxuICAgIHByaWNlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIHRyaW06IHRydWVcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgaW1hZ2VzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgY2hlY2tlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgaW5TdG9jazoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIGRlZmF1bHQ6IDBcbiAgICB9LFxuICAgIHNvbGQ6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBkZWZhdWx0OiAwXG4gICAgfVxufSwge1xuICAgIHRpbWVzdGFtcHM6IHRydWVcbn0pXG5cbmxldCBEYXRhc2V0ID0gbW9uZ29vc2UubW9kZWxzLnByb2R1Y3QgfHwgbW9uZ29vc2UubW9kZWwoJ3Byb2R1Y3QnLCBwcm9kdWN0U2NoZW1hKVxuZXhwb3J0IGRlZmF1bHQgRGF0YXNldCIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIG5hbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgZW1haWw6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgdW5pcXVlOiB0cnVlXG4gICAgfSxcbiAgICBwYXNzd29yZDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICByb2xlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ3VzZXInXG4gICAgfSxcbiAgICByb290OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBhdmF0YXI6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vdW5saW1hdGVkYXJ0dC9pbWFnZS91cGxvYWQvdjE2NTQyNzA0OTQvYmxhbmstcHJvZmlsZS1waWN0dXJlLTk3MzQ2MF82NDBfeXFwbHJ4LnBuZydcbiAgICB9XG59LCB7XG4gICAgdGltZXN0YW1wczogdHJ1ZVxufSlcblxubGV0IERhdGFzZXQgPSBtb25nb29zZS5tb2RlbHMudXNlciB8fCBtb25nb29zZS5tb2RlbCgndXNlcicsIHVzZXJTY2hlbWEpXG5leHBvcnQgZGVmYXVsdCBEYXRhc2V0IiwiaW1wb3J0IGNvbm5lY3REQiBmcm9tICcuLi8uLi8uLi91dGlscy9jb25uZWN0REInXG5pbXBvcnQgUHJvZHVjdHMgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3Byb2R1Y3RNb2RlbCdcbmltcG9ydCBhdXRoIGZyb20gJy4uLy4uLy4uL21pZGRsZXdhcmUvYXV0aCdcblxuY29ubmVjdERCKClcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgc3dpdGNoKHJlcS5tZXRob2Qpe1xuICAgICAgICBjYXNlIFwiR0VUXCI6XG4gICAgICAgICAgICBhd2FpdCBnZXRQcm9kdWN0cyhyZXEsIHJlcylcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiUE9TVFwiOlxuICAgICAgICAgICAgYXdhaXQgY3JlYXRlUHJvZHVjdChyZXEsIHJlcylcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuY2xhc3MgQVBJZmVhdHVyZXMge1xuICAgIGNvbnN0cnVjdG9yKHF1ZXJ5LCBxdWVyeVN0cmluZyl7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5xdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nO1xuICAgIH1cbiAgICBmaWx0ZXJpbmcoKXtcbiAgICAgICAgY29uc3QgcXVlcnlPYmogPSB7Li4udGhpcy5xdWVyeVN0cmluZ31cblxuICAgICAgICBjb25zdCBleGNsdWRlRmllbGRzID0gWydwYWdlJywgJ3NvcnQnLCAnbGltaXQnXVxuICAgICAgICBleGNsdWRlRmllbGRzLmZvckVhY2goZWwgPT4gZGVsZXRlKHF1ZXJ5T2JqW2VsXSkpXG5cbiAgICAgICAgaWYocXVlcnlPYmouY2F0ZWdvcnkgIT09ICdhbGwnKVxuICAgICAgICAgICAgdGhpcy5xdWVyeS5maW5kKHtjYXRlZ29yeTogcXVlcnlPYmouY2F0ZWdvcnl9KVxuICAgICAgICBpZihxdWVyeU9iai50aXRsZSAhPT0gJ2FsbCcpXG4gICAgICAgICAgICB0aGlzLnF1ZXJ5LmZpbmQoe3RpdGxlOiB7JHJlZ2V4OiBxdWVyeU9iai50aXRsZX19KVxuXG4gICAgICAgIHRoaXMucXVlcnkuZmluZCgpXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNvcnRpbmcoKXtcbiAgICAgICAgaWYodGhpcy5xdWVyeVN0cmluZy5zb3J0KXtcbiAgICAgICAgICAgIGNvbnN0IHNvcnRCeSA9IHRoaXMucXVlcnlTdHJpbmcuc29ydC5zcGxpdCgnLCcpLmpvaW4oJycpXG4gICAgICAgICAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5xdWVyeS5zb3J0KHNvcnRCeSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5xdWVyeS5zb3J0KCctY3JlYXRlZEF0JylcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHBhZ2luYXRpbmcoKXtcbiAgICAgICAgY29uc3QgcGFnZSA9IHRoaXMucXVlcnlTdHJpbmcucGFnZSAqIDEgfHwgMVxuICAgICAgICBjb25zdCBsaW1pdCA9IHRoaXMucXVlcnlTdHJpbmcubGltaXQgKiAxIHx8IDZcbiAgICAgICAgY29uc3Qgc2tpcCA9IChwYWdlIC0gMSkgKiBsaW1pdDtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHRoaXMucXVlcnkuc2tpcChza2lwKS5saW1pdChsaW1pdClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5jb25zdCBnZXRQcm9kdWN0cyA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZlYXR1cmVzID0gbmV3IEFQSWZlYXR1cmVzKFByb2R1Y3RzLmZpbmQoKSwgcmVxLnF1ZXJ5KVxuICAgICAgICAuZmlsdGVyaW5nKCkuc29ydGluZygpLnBhZ2luYXRpbmcoKVxuXG4gICAgICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgZmVhdHVyZXMucXVlcnlcbiAgICAgICAgXG4gICAgICAgIHJlcy5qc29uKHtcbiAgICAgICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgcmVzdWx0OiBwcm9kdWN0cy5sZW5ndGgsXG4gICAgICAgICAgICBwcm9kdWN0c1xuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe2VycjogZXJyLm1lc3NhZ2V9KVxuICAgIH1cbn1cblxuY29uc3QgY3JlYXRlUHJvZHVjdCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF1dGgocmVxLCByZXMpXG4gICAgICAgIGlmKHJlc3VsdC5yb2xlICE9PSAnYWRtaW4nKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogJ0F1dGhlbnRpY2F0aW9uIGlzIG5vdCB2YWxpZC4nfSlcblxuICAgICAgICBjb25zdCB7dGl0bGUsIHByaWNlLCBpblN0b2NrLCBkZXNjcmlwdGlvbiwgY29udGVudCwgY2F0ZWdvcnksIGltYWdlc30gPSByZXEuYm9keVxuXG4gICAgICAgIGlmKCF0aXRsZSB8fCAhcHJpY2UgfHwgIWluU3RvY2sgfHwgIWRlc2NyaXB0aW9uIHx8ICFjb250ZW50IHx8IGNhdGVnb3J5ID09PSAnYWxsJyB8fCBpbWFnZXMubGVuZ3RoID09PSAwKVxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogJ1BsZWFzZSBhZGQgYWxsIHRoZSBmaWVsZHMuJ30pXG5cblxuICAgICAgICBjb25zdCBuZXdQcm9kdWN0ID0gbmV3IFByb2R1Y3RzKHtcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZS50b0xvd2VyQ2FzZSgpLCBwcmljZSwgaW5TdG9jaywgZGVzY3JpcHRpb24sIGNvbnRlbnQsIGNhdGVnb3J5LCBpbWFnZXNcbiAgICAgICAgfSlcblxuICAgICAgICBhd2FpdCBuZXdQcm9kdWN0LnNhdmUoKVxuXG4gICAgICAgIHJlcy5qc29uKHttc2c6ICdTdWNjZXNzISBDcmVhdGVkIGEgbmV3IHByb2R1Y3QnfSlcblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe2VycjogZXJyLm1lc3NhZ2V9KVxuICAgIH1cbn0iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXG5cbmNvbnN0IGNvbm5lY3REQiA9ICgpID0+IHtcbiAgICBpZihtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKXtcbiAgICAgICAgY29uc29sZS5sb2coJ0FscmVhZHkgY29ubmVjdGVkLicpXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSTCwge1xuICAgICAgICB1c2VDcmVhdGVJbmRleDogdHJ1ZSxcbiAgICAgICAgdXNlRmluZEFuZE1vZGlmeTogZmFsc2UsXG4gICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlXG4gICAgfSwgZXJyID0+IHtcbiAgICAgICAgaWYoZXJyKSB0aHJvdyBlcnI7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDb25uZWN0ZWQgdG8gbW9uZ29kYi4nKVxuICAgIH0pXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=