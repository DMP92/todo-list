/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day?
 *
 * @description
 * Are the given dates in the same day?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week?
 *
 * @description
 * Are the given dates in the same week?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft, dirtyOptions);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight, dirtyOptions);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * var result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The previous `parse` implementation was renamed to `parseISO`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   parseISO('2016-01-01')
 *   ```
 *
 * - `parseISO` now validates separate date and time values in ISO-8601 strings
 *   and returns `Invalid Date` if the date is invalid.
 *
 *   ```javascript
 *   parseISO('2018-13-32')
 *   //=> Invalid Date
 *   ```
 *
 * - `parseISO` now doesn't fall back to `new Date` constructor
 *   if it fails to parse a string argument. Instead, it returns `Invalid Date`.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * var result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.additionalDigits);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (isNaN(date) || !date) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time) || time === null) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    dateStrings.date = null;
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: null
  };
  var year = captures[1] && parseInt(captures[1]);
  var century = captures[2] && parseInt(captures[2]);
  return {
    year: century == null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return null;
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return null;
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return null; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/editTasks.js":
/*!**************************!*\
  !*** ./src/editTasks.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editItems": () => (/* binding */ editItems),
/* harmony export */   "taskUpdate": () => (/* binding */ taskUpdate)
/* harmony export */ });
/* harmony import */ var _grabTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grabTask.js */ "./src/grabTask.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _printTasks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./printTasks.js */ "./src/printTasks.js");
/* harmony import */ var _updateDOM_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateDOM.js */ "./src/updateDOM.js");





/* 
************************************************************************************
**********************************EDIT ITEMS MODULE*********************************
************************************************************************************
*/

// module made for editing and interacting with each task item
const editItems = (function() {

    // array for replacing .textSpans items
    let newTextArray = [];

    // variables for the locallyStored projectArray
    const projectPanel = document.querySelector('.projectPanel');
    const projectS = JSON.parse(localStorage.getItem('projectArray'));
    // variables that target DOM elements for deletion and editing
    const taskPanel = document.querySelector('.taskPanel');

    // function that houses the event listener for the deleteItem function
    function buttonEventListeners(event) {
        // variables that get each nodeList of buttons for interaction
        const deleteButtons = document.querySelectorAll('.itemDelete');
        const editButtons = document.querySelectorAll('.editTask');
        const completeButtons = document.querySelectorAll('.completeTask');
        const checkedButtons = document.querySelectorAll('.checkedTask');


        deleteButtons.forEach(button => button.addEventListener('click', _deleteItem));
        editButtons.forEach(button => button.addEventListener('click', () => {
            const projectPanel = document.querySelector('.projectPanel');
            if(projectPanel === null ) {
                _editTask() 
            } else if (projectPanel != null) {
                _editProject ();
            }

        }));     
        completeButtons.forEach(button => button.addEventListener('click', _completeTask));
        checkedButtons.forEach(button => button.addEventListener('click', _completeTask));
    }

    // private function that removes task item nodes from taskPanel
    function _deleteItem(event) {
        // variables that grab each parent + task to pinpoint the index of said task
        const parent = event.target.parentElement;
        const task = parent.children[4].textContent;
        const project = parent.children[0].textContent;
        const action = 'delete';
        const parentGroup = document.querySelectorAll('.taskItem');
        const projectPanel = document.querySelector('.projectPanel');
        let index = undefined;

        // variable for task index
        if (project === '') {
            index = searchItem(task);
        }

        switch(true) {
            case projectPanel === null:
                if (task === '') {
                    index = Array.from(parentGroup).indexOf(parent);
                   let projectIndex = searchProjectItems(project);
                    // variable that fetches array 
                    let itemArray = _index_js__WEBPACK_IMPORTED_MODULE_2__.itemRef.arrayShare();
                    
                    // removes items from both the array, localStorage, and the DOM
                    _printTasks_js__WEBPACK_IMPORTED_MODULE_3__.taskPrint.removeProject(project);
                    _index_js__WEBPACK_IMPORTED_MODULE_2__.itemRef.update(action, index, 1);
                    taskPanel.removeChild(parent);  
                    // projects.delete(projectIndex); 
                } else if ( task != '' && project === '' ) {
                    let projectIndex = searchProjectItems(project);
                    // variable that fetches array 
                    let itemArray = _index_js__WEBPACK_IMPORTED_MODULE_2__.itemRef.arrayShare();
                   

                    // removes items from both the array, localStorage, and the DOM
                    _printTasks_js__WEBPACK_IMPORTED_MODULE_3__.taskPrint.removeProject(project);
                    _index_js__WEBPACK_IMPORTED_MODULE_2__.itemRef.update(action, index, 1);
                    taskPanel.removeChild(parent);  
                    // projects.delete(projectIndex); 
                } else if ( task != '' && project != '') {
                    let projectIndex = searchProjectItems(project, task);
                    // variable that fetches array 
                    console.log(projectIndex);
                    let projectItems = JSON.parse(localStorage.getItem('projectArray'));
                    // removes items from both the array, localStorage, and the DOM
                    let tasks = projectItems[projectIndex.project].tasks[projectIndex.task];
                    
                            
                            
                            
                            _updateDOM_js__WEBPACK_IMPORTED_MODULE_4__.projectPrint.delete(projectIndex.project, projectIndex.task);
                            taskPanel.removeChild(parent);  
                        
                    
                }
            break;
            case projectPanel != null:
                if (project === undefined) {
                //     let projectItems = JSON.parse(localStorage.getItem('projectArray'));

                let projectIndex = searchProjectItems(project);
                // variable that fetches array 
                let projectItems = JSON.parse(localStorage.getItem('projectArray'));
                
                // removes items from both the array, localStorage, and the DOM
               
        
                //    let projectIndex = searchProjectItems(project);
                //     // variable that fetches array 
                //     let itemArray = itemRef.arrayShare();
                    
                //     // removes items from both the array, localStorage, and the DOM
                //     taskPrint.removeProject(project);
                //     itemRef.update(action, index, 1);
                //     taskPanel.removeChild(parent);  
                // //     projects.delete(projectIndex); 
                } else if (project != undefined) {
                    
                   

                    let projectIndex = searchProjectItems(project, task);
                    // variable that fetches array 
                    
                    // removes items from both the array, localStorage, and the DOM
                    
                            _updateDOM_js__WEBPACK_IMPORTED_MODULE_4__.projectPrint.delete(projectIndex.project, projectIndex.task);
                            taskPanel.removeChild(parent);  
                        
                    
                }
        }
       
        
        
    }



        /* I think I need to get the index of each item to print upon clicking
                then I need to send that into itemRef and replace w/e item is edited
                then call for a storage Push so it updates the item
         */

    function searchItem(name) {

        const array = JSON.parse(localStorage.getItem('itemArray'));

        for (var i = 0; i < array.length; i++){
            let index = array[i].task;
            
            if (index === name) {
               
                return array.indexOf(array[i]);
            }
        }

    }

    function searchProjectItems( project, task ) {
       
        const array = JSON.parse(localStorage.getItem('projectArray'));

        for (var i = 0; i < array.length; i++) {

            let index = array[i].projectName;
            let taskArray = array[i].tasks;

            if ( index === project ) {

                for ( var j = 0; j < taskArray.length; j++ ) {
                    if ( taskArray[j].task === task ) {
                        //
                        //
                        let taskIndex = taskArray.indexOf(taskArray[j]);
                        let projectIndex = array.indexOf(array[i]);
                        let newTask = {
                            task: taskIndex,
                            project: projectIndex
                        }
                        return newTask;
                    }
                }
                
                
            }
        }
    }


    /* 
    **************************** COMPLETE TASK *******************************    
    */

    // function that grays each task out that is already marked complete
    function loadComplete(item) {
        
        const gray = "filter: grayscale(1);";
        const checkBox = item.children[1];
        
        checkBox.classList.remove('completeTask');
        checkBox.classList.add('checkedTask');
        item.style.cssText = `${gray}`;
    } 

    // private function that marks task item as completed
    function _completeTask() {
        // variables that fetch and assign the cssText for the clicked completeTask button
        const parent = event.target.parentElement;
        const project = parent.children[0].textContent;
        const gray = "filter: grayscale(1);";
        const normal = "filter: grayscale(0);";
        const action = 'complete';
        
        // targets specific element interacted with and returns a usable index position
        const task = parent.children[4].textContent;
        let index = searchItem(task);
        let status = 'incomplete';
        const projectColor = document.querySelector('.projects');

        // switch statement that (based on the cssText of the clicked element) either grays out, or 
        // fills in the taskItem container div
        switch(true) {
            case parent.style.cssText === '':
                event.target.classList.remove('completeTask');
                event.target.classList.add('checkedTask');
                parent.style.cssText = `${gray}`;
                status = 'complete';

                // if the project tab is highlighted, then it updates the project array
                // else it will update item array
                if (project != '') {
                    const projectArrays = JSON.parse(localStorage.getItem('projectArray'));

                    for ( var i = 0; i < projectArrays.length; i++ ) {
                        if ( projectArrays[i].projectName === project ) {
                            index = projectArrays.indexOf(projectArrays[i]);
                            _updateDOM_js__WEBPACK_IMPORTED_MODULE_4__.projectPrint.update(action, index, status);
                        }
                    }
                } else {

                    _index_js__WEBPACK_IMPORTED_MODULE_2__.itemRef.update(action, index, status);
                }
            break;
            case parent.style.cssText === "filter: grayscale(1);":
                event.target.classList.remove('checkedTask');
                event.target.classList.add('completeTask');
                parent.style.cssText = `${normal}`;
                status = 'incomplete';


                 if (project != '' && index === undefined) {
                    const projectArrays = JSON.parse(localStorage.getItem('projectArray'));

                    for ( var i = 0; i < projectArrays.length; i++ ) {
                        if ( projectArrays[i].projectName === project ) {
                            index = projectArrays.indexOf(projectArrays[i]);
                           
                            _updateDOM_js__WEBPACK_IMPORTED_MODULE_4__.projectPrint.update(action, index, status);
                        }
                    }
                } else if (project != '') {
                    index = _updateDOM_js__WEBPACK_IMPORTED_MODULE_4__.projectPrint.search(task, project);
                   
                    _updateDOM_js__WEBPACK_IMPORTED_MODULE_4__.projectPrint.update(action, index, status);
                } else {
                    
                    _index_js__WEBPACK_IMPORTED_MODULE_2__.itemRef.update(action, index, status);
                }
                
            break;
            case parent.style.cssText === "filter: grayscale(0);":
                event.target.classList.remove('completeTask');
                event.target.classList.add('checkedTask');
                parent.style.cssText = `${gray}`;
                status = 'complete';
                _index_js__WEBPACK_IMPORTED_MODULE_2__.itemRef.update(action, index, status);
            break;
        }
        completeLocalStorage(parent);
    }   
    
    function completeLocalStorage(parent) {

        // variables for grabbing identification
       
        const project = parent.children[0];
        const name = parent.children[4];

        const keys = Object.keys(localStorage);
        let i = 0;

        while (i < keys.length) {
            const items = JSON.parse(localStorage.getItem(keys[i]));
             if (items.task === name.textContent) {
                // const oldItems = JSON.parse(localStorage.getItem(keys[i]).key);
                var key = localStorage.key(i);
                const newItems = {};
                newItems.task = items.task;
                newItems.notes = items.notes;
                newItems.date = items.date;
                newItems.project = items.project;
                newItems.status = 'complete';
                const newest = JSON.stringify(newItems);
                localStorage.setItem(key, newest);
                //  localStorage.setItem(items, `{task:${task}, notes: ${notes}, date: ${date}, ${project}, ${status}}`);
                 
             }
            
            i++
        }
    }

    function parentIndex ( event ) {
        const taskPanel = document.querySelector('.taskPanel');
        const parent = event.parentElement;

        switch ( true ) {
            case parent.children[0].textContent === '':
               const items = JSON.parse(localStorage.getItem('itemArray'));

                for ( var i = 0; i < items.length; i++ ) {
                    if ( parent.children[4].textContent === items[i].task ) {
                        items.indexOf ( item[i] );
                    }
                }

            break;
            case parent.children[0].textContent != '':
                
                const projects = JSON.parse(localStorage.getItem('projectArray'));

                for ( var i = 0; i < projects.length; i++ ) {
                    if ( projects[i].projectName === parent.children[0] ) {

                        const projectTasks = projects.map((a) => a.tasks);

                        for ( var j = 0; j < projectTasks.length; j++ ) {
                            if ( parent.children[4] === projectTasks[i][j].task) {
                            }
                        }

                    }
                }
            
            break;
        }

        
    }

    const currentProject = [];

    function _editProject () {
        // variables that get each nodeList item of the specific container the clicked button is in
        const parent = event.target.parentElement;
        const project = parent.children[0].textContent;
        const edit = parent.children[3];
        const name = parent.children[4];
        const date = parent.children[5];
        const notes = parent.children[6];
        const task = parent.children[4].textContent;

        const projectTextArray = document.querySelectorAll('.textSpans');

        for (var i = 0; i < projectTextArray.length; i++) {
            if (projectTextArray[i].textContent === project.textContent && name.tagName === 'DIV') {
                
                newTextArray.push(projectTextArray[i]);
            } else if (projectTextArray[i].textContent === undefined) {
            }
        }

        
        let newTasks = searchProjectItems( project, task );
        currentProject.push(newTasks);
       
        
        // variable that fetches array 
        let projectItems = JSON.parse(localStorage.getItem('projectArray'));
        // removes items from both the array, localStorage, and the DOM
        

        
      
        // IF the edit button is clicked and the task.tagName is still a DIV, then the code runs
        // ELSE it will run the function called below which appends the newly edited info to the DOM
        if (name.tagName === 'DIV') {
            // variables for appending input items to taskItem
    
            const editName = document.createElement('input');
                editName.classList.add('taskName');
                editName.placeholder = 'Edit Task Name';
                editName.style.cssText = 'text-align: center;';
                parent.replaceChild(editName, name);
    
    
            const editDate = document.createElement('input');
                editDate.classList.add('taskDate');
                editDate.type = 'date';
                editDate.style.cssText = "background-color: White; color: black; text-align: center;";
                editDate.placeholder = 'Edit Date';
                parent.replaceChild(editDate, date)
    
    
    
            const editDescription = document.createElement('input');
                editDescription.classList.add('description');
                editDescription.placeholder = 'Edit Notes';
                editDescription.style.cssText = 'text-align: center;';
                parent.replaceChild(editDescription, notes);
    
                event.target.classList.remove('editTask');
                event.target.classList.add('editingTask');
            // parent.appendChild();
        } else {
            
             _appendProject ( currentProject[0].project, currentProject[0].task );

            currentProject.pop();
            currentProject.pop();
        }
    }

    function _appendProject ( ind, i ) {
        // variable for grabbing all task items
        const taskItems = document.querySelectorAll('.taskItem');
        const tasks = Array.from(taskItems);

        event.target.classList.remove('editingTask');
        event.target.classList.add('editTask');

        // gets the container of the specific edit button clicked
        const parent = event.target.parentElement;

        // variables for appending finished items to taskItem
        const project = parent.children[0].textContent
        const edit = parent.children[3];
        const name = parent.children[4];
        const date = parent.children[5];
        const notes = parent.children[6];
        const defaultProject = '';

        const taskName = document.createElement('div');
            taskName.classList.add('taskName');
            taskName.textContent = name.value;

        const description = document.createElement('div');
            description.classList.add('description');
            description.textContent = notes.value;

        const taskDate = document.createElement('div');
            taskDate.classList.add('taskDate');
            taskDate.textContent = date.value;

            
            // if(textIndex != undefined ) {
            //     const projectScroll = document.querySelector('.scrollContainer');
            //     projectScroll.appendChild(textIndex);
            //     textIndex.textContent = project.value;
            //     newTextArray.pop();
            // } else if (project.value === '') {
            //     const projectPanel = document.querySelector('.projectPanel');
            //     if (projectPanel != null) {
            //         const projectScroll = document.querySelector('.scrollContainer');
            //         projectScroll.removeChild(textIndex);
            //        
            //     }
            // }


        // variable that fetches index of edited element
        const index = tasks.indexOf(parent);

        if(name.value != '') {
            
                parent.replaceChild(taskName, name);
                parent.replaceChild(taskDate, date);
                parent.replaceChild(description, notes);
               
        } else if (name.value === '') {
            
        }
        
        

        const newItem = {};
        newItem.task = name.value;
        newItem.notes = notes.value;
        newItem.date = date.value;
        newItem.project = project;
        newItem.status = 'incomplete';
        _project_js__WEBPACK_IMPORTED_MODULE_1__.projects.splice( ind, i, newItem );

        const hovered = document.querySelector('.hovered');
        _updatePage ( hovered.textContent );

  }

  function _updatePage ( page ) {
      
        switch ( true ) {
            case page === 'Today':
                _updateDOM_js__WEBPACK_IMPORTED_MODULE_4__.tabSelection.today();
            break;

            case page === 'Weekly':
                _updateDOM_js__WEBPACK_IMPORTED_MODULE_4__.tabSelection.weekly();
            break;

        }
  }

    /* 
    **************************** EDIT TASK *******************************    
    */
    const taskContainer = [];

    // private function that allows the task info to be edited
    function _editTask() {
// ************************IF TASK EXISTS IN EITHER ARRAY AND LOSES THE REASON IT'S IN THAT ARRAY, SWITCH
// THE ARRAY IT'S CONTAINED IN

        // variables that get each nodeList item of the specific container the clicked button is in
        const parent = event.target.parentElement;
        const project = parent.children[0]
        const edit = parent.children[3];
        const name = parent.children[4];
        const date = parent.children[5];
        const notes = parent.children[6];
        const task = parent.children[4].textContent;
        
        if (project.textContent != '' ) {
            _editProject();
        } else {

            const projectTextArray = document.querySelectorAll('.textSpans');
            

            for (var i = 0; i < projectTextArray.length; i++) {
                if (projectTextArray[i].textContent === project.textContent && name.tagName === 'DIV') {
                    
                    newTextArray.push(projectTextArray[i]);
                } else if (projectTextArray[i].textContent === undefined) {
                }
            }

            const itemIndex = searchItem(task);
            taskContainer.push(itemIndex);

            // IF the edit button is clicked and the task.tagName is still a DIV, then the code runs
            // ELSE it will run the function called below which appends the newly edited info to the DOM
            if (name.tagName === 'DIV') {
            // variables for appending input items to taskItem

            const editProject = document.createElement('input');
                editProject.classList.add('projectName');
                editProject.style.cssText = 'text-align: center;';
                editProject.placeholder = 'Edit Project Name';
                parent.replaceChild(editProject, project);


            const editName = document.createElement('input');
                editName.classList.add('taskName');
                editName.placeholder = 'Edit Task Name';
                editName.style.cssText = 'text-align: center;';
                parent.replaceChild(editName, name);


            const editDate = document.createElement('input');
                editDate.classList.add('taskDate');
                editDate.type = 'date';
                editDate.style.cssText = "background-color: White; color: black; text-align: center;";
                editDate.placeholder = 'Edit Date';
                parent.replaceChild(editDate, date)



            const editDescription = document.createElement('input');
                editDescription.classList.add('description');
                editDescription.placeholder = 'Edit Notes';
                editDescription.style.cssText = 'text-align: center;';
                parent.replaceChild(editDescription, notes);

                event.target.classList.remove('editTask');
                event.target.classList.add('editingTask');
        // parent.appendChild();
            
            } else { 
                    let tempIndex = taskContainer[0];
                    _appendTask(tempIndex);
                    taskContainer.pop();
            }
        }
    }

    /* 
    ************************************************************************************
    **********************************APPEND EACH TASK AFTER EDIT***********************
    ************************************************************************************
    */


    // function that takes newly edited information and publishes them to the DOM
    function _appendTask(textIndex, itemIndex) {

        // variable for grabbing all task items
        const taskItems = document.querySelectorAll('.taskItem');
        const tasks = Array.from(taskItems);

        event.target.classList.remove('editingTask');
        event.target.classList.add('editTask');

        // gets the container of the specific edit button clicked
        const parent = event.target.parentElement;

        // variables for appending finished items to taskItem
        const project = parent.children[0]
        const edit = parent.children[3];
        const name = parent.children[4];
        const date = parent.children[5];
        const notes = parent.children[6];
        const defaultProject = '';

        const taskName = document.createElement('div');
            taskName.classList.add('taskName');
            taskName.textContent = name.value;

        const description = document.createElement('div');
            description.classList.add('description');
            description.textContent = notes.value;

        const taskDate = document.createElement('div');
            taskDate.classList.add('taskDate');
            taskDate.textContent = date.value;

        const projectName = document.createElement('div');
            projectName.classList.add('projectName');
            projectName.textContent = project.value;

            
            if(textIndex != undefined && project.value != '') {
                const projectScroll = document.querySelector('.scrollContainer');
                projectScroll.appendChild(textIndex);
                textIndex.textContent = project.value;
                newTextArray.pop();
            } else if (project.value === '') {
                const projectPanel = document.querySelector('.projectPanel');
                if (projectPanel != null) {
                    const projectScroll = document.querySelector('.scrollContainer');
                    projectScroll.removeChild(textIndex);
                }
            }


        // variable that fetches index of edited element
        textIndex

        _checkItemData(event.target, name.value, notes.value, date.value, project.value, status, textIndex)

        if(name.value != '') {
            
                parent.replaceChild(projectName, project);
                parent.replaceChild(taskName, name);
                parent.replaceChild(taskDate, date);
                parent.replaceChild(description, notes);
           
                projectName.textContent = '';
            
           
        } else if (name.value === '') {
            
        }

        const newItem = {};
        newItem.task = name.value;
        newItem.notes = notes.value;
        newItem.date = date.value;
        newItem.project = projectName.textContent;
        newItem.status = 'incomplete';
        
        // conditional that prints project to scroll container if project name exists
        if (project.value != '') {
            alert('Tasks cannot be made into projects.')
        }
        
        _index_js__WEBPACK_IMPORTED_MODULE_2__.itemRef.update('edit', textIndex, newItem);
        
        const hovered = document.querySelector('.hovered');
        _updatePage ( hovered.textContent );
    }

    
    // function to confirm there are no repeating task values
    function _checkItemData(target, taskName, notes, date, project, status, index) {

        const projectPanel = document.querySelector('.projectPanel');
        // variable for fetching the itemArray inside localStorage and assigning it a variable
        if ( projectPanel === null ) {
            const arrays = JSON.parse(localStorage.getItem('itemArray'));
        } else if ( projectPanel != null ) {
            const projectS = JSON.parse(localStorage.getItem('projectArray'));
        }

        const arrays = JSON.parse(localStorage.getItem('itemArray'));
        // variables that help the switch statement below decide what to do based on if repeat data is found
        let existing = false;
        let dataSet = undefined;
        let projectPrompt = false;

        // loop that runs through each locallyStored item and checks if there are repeated values
        switch(true) {
            case arrays === null:     
            break;
            
            case arrays != null:
            for ( var i = 0; i < arrays.length; i++) {
                if (arrays[i].task === taskName && arrays[i].task != '') {
                    existing = true;
                    dataSet = 'tasks';
                }

                if (arrays[i].notes === notes && arrays[i].notes != '') {
                    existing = true;
                    dataSet = 'notes';
                }

                if (arrays[i].project === project && arrays[i].project != '') {
                    existing = true;
                    dataSet = 'projects';
                    projectPrompt = true;
                }
            }
        }
        // if no repeated data, print the task
            // if there IS repeated data, alert the user, and refuse their task
        switch(true) {
            case existing === false && taskName === '':
                return alert('Tasks cannot be blank!');
            break;

            case existing === false && taskName != '':
            if ( projectPanel === null ) {
                grabEditedTask.newTask(event.target, name.value, notes.value, date.value, project.value, status, index);
            } else if ( projectPanel != null ) {

            }


            break;

            case existing === true:
                if (projectPrompt === true) {
                    alert(`If you want to add tasks to your ${dataSet}, click on the 'Projects' tab.`);
                     alert(`All ${dataSet} must be unique. `);
                    
                } else {
                   
                    return alert(`All ${dataSet} must be unique. `);
                }
            break;
        }

    }


    return {
    eventListeners: buttonEventListeners,
    complete: loadComplete,

    }

})();

    /* 
    ************************************************************************************
    **********************************GRAB EDITED TASK**********************************
    ************************************************************************************
    */

    // module that grabs edited task info and communicates that changes were made
    const grabEditedTask = (function() {

        /* 
            there should be a way to track back to the orignial array in index.js when you edit
            it'll figure out which index the edited item belongs to, determine if it has a project
            and rewrite that information. Keeping it's place in the array index, but updating it
        */
        // variables that grab specific task that is edited

        function receiveEditedTask(target, task, notes, date, project, status, index) {
            const editedTask = {};
            editedTask.name = task,
            editedTask.notes = notes,
            editedTask.date = date,
            editedTask.project = project,
            editedTask.status = 'incomplete',
            _updateArrays(editedTask, index)

        }

        function _updateArrays(task, index) {
            // variable that tells itemRef that the action being taken is 'edit'
            const edit = 'edit';
            _index_js__WEBPACK_IMPORTED_MODULE_2__.itemRef.update(edit, index, task)
        }

        return {
            newTask: receiveEditedTask
        }
    })();

    

    const grabEditedProject = (function () {

        function receiveEditedProject (target, task, notes, date, project, status, index ) {
            const editedProject = {};
            editedProject.name = task,
            editedProject.notes = notes,
            editedProject.date = date,
            editedProject.project = project,
            editedProject.status = 'incomplete',
            _updateArrays ( task, index )
        }

        function _updateArrays(task, index) {
            // variable that tells itemRef that the action being taken is 'edit'
            const edit = 'edit';
            _project_js__WEBPACK_IMPORTED_MODULE_1__.projects.update(edit, index, task)
        }

        return {
            receiveEditedProject
        }
    })()

     /* 
    ************************************************************************************
    **********************************MODULE FOR DELETING EVERY ITEM********************
    ************************************************************************************
    */

    const taskUpdate = (function() {

        // variable that grabs task container & tasks
        const mainSection = document.querySelector('.mainSection');
        const taskPanel = document.querySelector('.taskPanel');
        const allItems = taskPanel.children;
        // function that erases all tasks from panel

        function eraseTasks() {
            var child = taskPanel.lastElementChild; 
            while (child) {
                taskPanel.removeChild(child);
                child = taskPanel.lastElementChild;
            }

        }

        // function that deletes each .textSpans element so they don't spam
        function clearProjectName() {

            // variable that fetches project panel
            const scrollContainer = document.querySelector('.scrollContainer');
            var child = document.querySelectorAll('.textSpans');

            for(var i = 0; i < child.length; i++) {
                scrollContainer.removeChild(child[i]);
            }

        }

        return {
            erase: eraseTasks,
            clear: clearProjectName
        }
    })();



/***/ }),

/***/ "./src/grabTask.js":
/*!*************************!*\
  !*** ./src/grabTask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "grabTask": () => (/* binding */ grabTask)
/* harmony export */ });
/* harmony import */ var _printTasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printTasks.js */ "./src/printTasks.js");
/* harmony import */ var _taskFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskFactory.js */ "./src/taskFactory.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ "./src/project.js");



/* 
************************************************************************************
***************** MODULE THAT GRABS INFO FOR TASKS FROM INPUT FIELDS ***************
************************************************************************************
*/

const grabTask = (function() {
    
    
    // upon click will get task  item
    function toDoInput() { 
        const input = document.querySelector('.task');
        return input.value;
    }

    // on click will get notes of todo list item
    function itemNotes() {
        const notes = document.querySelector('.notes');
        return notes.value;
    }

    // on click will get completion date
    function itemDate() {
        const itemDate = document.querySelector('.date');
        return itemDate.value;
    }

    function itemProject() {
        const projectTitle = document.querySelector('.project');   
        return projectTitle.value;
    }

    // function to confirm there are no repeating task values
    function checkItemData(taskName, notes, date, project, status) {
        
        // variable for fetching the itemArray inside localStorage and assigning it a variable
        const arrays = JSON.parse(localStorage.getItem('itemArray'));
        const projectArray = JSON.parse(localStorage.getItem('projectArray'));
        // variables that help the switch statement below decide what to do based on if repeat data is found
        let existing = false;
        let dataSet = undefined;
        let projectPrompt = false;

        // loop that runs through each locallyStored item and checks if there are repeated values
        switch(true) {
            case arrays === null:     
            break;
            
            case arrays != null:
            for ( var i = 0; i < arrays.length; i++) {
                if (arrays[i].task === taskName && arrays[i].task != '') {
                    existing = true;
                    dataSet = 'tasks';
                }

                if (arrays[i].notes === notes && arrays[i].notes != '') {
                    existing = true;
                    dataSet = 'notes';
                }

                if (arrays[i].project === project && project != '') {
                    existing = true;
                    dataSet = 'projects';
                    projectPrompt = true;
                    const newProject = (0,_taskFactory_js__WEBPACK_IMPORTED_MODULE_1__.ProjectFactory)();
                    newProject.receiveProjects(taskName, notes, date, project, status);
                } else {

                }
            }
        }
        // if no repeated data, print the task
            // if there IS repeated data, alert the user, and refuse their task
            
        switch(true) {
            case existing === false && taskName === '':
                return alert('Tasks cannot be blank!');
            break;

            case existing === false && project != '':
                
                const newProject = (0,_taskFactory_js__WEBPACK_IMPORTED_MODULE_1__.ProjectFactory)();
                newProject.receiveProjects(taskName, notes, date, project, status);
            break;

            case existing === false && project === '':
                if ( taskName != '') {
                    
                    const sendGrabbedData = (0,_taskFactory_js__WEBPACK_IMPORTED_MODULE_1__.ItemFactory)();
                    sendGrabbedData.receiveTasks(taskName, notes, date, project, status);
                }
            break;

            case existing === true:
                if (projectPrompt === true) {
                   
                } else {
                    
                    return alert(`All ${dataSet} must be unique. `);
                }
            break;
        }
       
    }

    // function that gathers all task data from each form, and pushes to the above function 'checkItemData()'
    function sendItemData() {

        const input = document.querySelector('.task');
        const notesInput = document.querySelector('.notes');
        const dateInput = document.querySelector('.date');
        const projectTitle = document.querySelector('.project'); 
        
        const taskName = toDoInput();
        const notes = itemNotes();
        const date = itemDate();
        const project = itemProject();
        
        const status = 'incomplete'
        checkItemData(taskName, notes, date, project, status);

        projectTitle.value = '';
        dateInput.value = '';
        input.value = '';
        notesInput.value = '';
    }

    return {
        title: toDoInput,
        notes: itemNotes,
        itemDate: itemDate,
        itemProject: itemProject,
        check: checkItemData,
        send: sendItemData
    }
})()





/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "itemRef": () => (/* binding */ itemRef),
/* harmony export */   "getProject": () => (/* binding */ getProject),
/* harmony export */   "manipulateTaskArray": () => (/* binding */ manipulateTaskArray)
/* harmony export */ });
/* harmony import */ var _taskFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskFactory */ "./src/taskFactory.js");
/* harmony import */ var _updateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateDOM */ "./src/updateDOM.js");
/* harmony import */ var _grabTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grabTask */ "./src/grabTask.js");
/* harmony import */ var _editTasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editTasks */ "./src/editTasks.js");
/* harmony import */ var _printTasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./printTasks */ "./src/printTasks.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project */ "./src/project.js");









// This module will be used as the reference interface. It has an array of all todo list items, and 
// functions that break each list item down into its individual peices which can then be accessed as needed
const itemRef = (function() {

    // array of each task in the list shared by the factory function that made them
    const itemArray = [];
    
        function fillArray() {
            // gets stored array from localStorage
            const fillArray = JSON.parse(localStorage.getItem('itemArray'));
 
            // keeps itemArray filled with saved values so it doesn't reset on window load
            switch(true) {
                case fillArray != null:
                    for (var i = 0; i < fillArray.length; i++) {
                        itemArray.push(fillArray[i]);
                    }
                break;
            }
        }

        // pushes todo item into Item array & other functions inside the itemRef Module
        function pushItem(item) {
            // pushes item to array
            itemArray.push(item);
            
            storagePush(item);
        }

        // pushes each item into localStorage 
        function storagePush(item) {

            // gives index position
            const index = itemArray.indexOf(item);
            // stores the itemArray in localStorage
            const storeArray = JSON.stringify(itemArray);
            localStorage.setItem('itemArray', storeArray);
            
            // variable that contains the obtained reference to the locallyStored 'itemArray'
            let storedArray = JSON.parse(localStorage.getItem('itemArray'));
            // console.log(storedArray[index].task);   
            shareItem(item, index);
            shareArrayItems(item, index, 'index');
              
        }

        function arrayUpdate(action, index, amount) {
            let storeArray = JSON.stringify(itemArray);
            
            switch(true) {
                case action === 'delete':
                    itemArray.splice(index, 1);
                    storeArray = JSON.stringify(itemArray);
                    localStorage.setItem('itemArray', storeArray);
                break;
                case action === 'edit':
                    
                  
                    
                    itemArray.splice(index, 1, amount);
                    storeArray = JSON.stringify(itemArray);
                    localStorage.setItem('itemArray', storeArray);
                    let storedArray = JSON.parse(localStorage.getItem('itemArray'));
                    console.log(storedArray);
                    
                    
                    
                break;
                case action === 'complete':
                    if (itemArray[index] === undefined) {
                        _updateDOM__WEBPACK_IMPORTED_MODULE_1__.projectPrint.update();
                    } else {
                        itemArray[index].status = amount;
                        storeArray = JSON.stringify(itemArray);
                        localStorage.setItem('itemArray', storeArray);
                    }
                break;
            }
        }

        function arrayShare(item) {
            
            return itemArray;
        }

        // shares specific itemArray
        function shareArrayItems(item, index, page) {
            _updateDOM__WEBPACK_IMPORTED_MODULE_1__.tabSelection.receive(item, index, page);
        }

        function shareItem(item, index) {
            const tabList = document.querySelector('.sidebar');
        let selectedTab = ''
        
        for ( var i = 0; i < tabList.children.length; i++) {
            if (tabList.children[i].classList.contains('hovered')) {
                selectedTab = tabList.children[i].textContent;
            }
        }

            if (item.project === '' && selectedTab === 'All Projects') {
                console.log('item.project === "" && selectedTab === "All Projects"');
            } else {
                
                _printTasks__WEBPACK_IMPORTED_MODULE_4__.taskPrint.receive(item, index);
            }
            

        }

    // shares specific item
    function shareTask(index) {
        console.log('sharing task');
        console.log(itemArray[index])
        return itemArray[index];
    }

        // shares specific item name
        function shareName(index) {
            return itemArray[index].name;
        }

        // shares specific item notes
        function shareNote(index) {
            return itemArray[index].notes;
        }

        // shares specific item date
        function shareSummary(index) {
            return itemArray[index].date;
        }

        // shows which project the item belongs to
        function shareProject(index) {
           return itemArray[index].project;
        }

        

    return {
        fillArray, fillArray,
        printItem : pushItem,
        arrayShare: arrayShare,
        title: shareName,
        notes: shareNote,
        summary: shareSummary,
        notes: shareProject,
        task: shareTask,
        share: shareArrayItems,
        shareItem: shareItem, 
        update: arrayUpdate,
    }
})();


// Module for array manipulation 
const manipulateTaskArray = (function() {
    

    function _grabArray() {
        const itemArray = itemRef.arrayShare();
        console.log(itemArray);
        return itemArray;
       
    }

    function replaceItem(item, index) {
        const itemArray = _grabArray();
        itemArray.splice(index, 1, item);
        console.log(itemArray);
    }

    return {
        replace: replaceItem
    }
})();



// module for creating projects
const getProject = (function() {

    function currentProjectArray() {
        const currentProjectArray = JSON.parse(localStorage.getItem('projectArray'));

        return currentProjectArray;
    }
    

    return {
        array: currentProjectArray,
    }
})();

    // keeps all event listeners active
    const sidebar = document.querySelector('.sidebar');
        sidebar.addEventListener('click', () => {
            _editTasks__WEBPACK_IMPORTED_MODULE_3__.editItems.eventListeners();
        });

    const submit = document.querySelector('.submit');
    submit.addEventListener('click', () => {
        const projectPanel = document.querySelector('.projectPanel');
        _grabTask__WEBPACK_IMPORTED_MODULE_2__.grabTask.send();
        _updateDOM__WEBPACK_IMPORTED_MODULE_1__.projectPrint.reprint();
        if ( projectPanel != null) {
            _printTasks__WEBPACK_IMPORTED_MODULE_4__.taskPrint.project();
        } 

        

        _editTasks__WEBPACK_IMPORTED_MODULE_3__.editItems.eventListeners();
        
    });

    window.addEventListener('load', () => {
        _editTasks__WEBPACK_IMPORTED_MODULE_3__.editItems.eventListeners();
        _updateDOM__WEBPACK_IMPORTED_MODULE_1__.tabSelection.eventListeners();
        itemRef.fillArray();
        _project__WEBPACK_IMPORTED_MODULE_5__.projects.update();

    })



/* 
    I need there to be a way to communicate with
*/







/***/ }),

/***/ "./src/printTasks.js":
/*!***************************!*\
  !*** ./src/printTasks.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskPrint": () => (/* binding */ taskPrint),
/* harmony export */   "tabbedPrint": () => (/* binding */ tabbedPrint)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _editTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editTasks */ "./src/editTasks.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _updateDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateDOM */ "./src/updateDOM.js");

/* 
************************************************************************************
*************************MODULE THAT PRINTS INFO TO DOM*****************************
************************************************************************************
*/







// Module that prints each task item to UI
const taskPrint = (function() {
    // variables for task parent
    const taskPanel = document.querySelector('.taskPanel');
    let item = document.querySelector('.taskItem');

   

    function receiveLocalStorage(archive) {
        
    }

    function receiveItem(item, index) {
        // calls unpackItem to breakdown each item key
        unpackItem(item, index);
    }

    // takes item and breaks it down into each part
    function unpackItem(item, index, status) {

        const taskInput = document.querySelector('.task');
        
                const task = {};
                task.task = item.task;
                task.notes = item.notes;
                task.date = item.date;
                task.project = item.project;
                task.status = item.status;
                printTask(task, task.status, index);
                   
    }

    // function that calls each appendChild method in order to create the task
    function printTask(task, status, index) {
        const item = document.createElement('div');
        item.classList.add('taskItem');
            // appends taskItem container DIV to task item section
            taskPanel.appendChild(item);
        
              // project panel
        const projectPanel = document.querySelector('.projectPanel');

        switch(true) {
            case projectPanel === null:
                _printProjectName(item, task.project);
                _printButtons(item);
                _printTaskName(item, task.task);
                _printTaskDate(item, task.date);
                _printDescription(item, task.notes);
                
                if (status === 'complete') {
                    
                    _editTasks__WEBPACK_IMPORTED_MODULE_1__.editItems.complete(item);
                }
            break;
            case projectPanel != null:
                
                printProjects(task, index, status, item);
            break;
        }
            
            if (task.project != '') {
                appendProjectName(task, index, status)
            }
        // shareTaskItem(item);
        // itemRef.share(); // not sure why this was here?
        // createItemObject(item);
    }

    function printProjects(task, index, status, items) {

        const item = document.createElement('div');
        item.classList.add('taskItem');
            // appends taskItem container DIV to task item section
        taskPanel.appendChild(item);
        // variable for fetching each tab element
        const tabList = document.querySelector('.sidebar');
        let selectedTab = ''
        
        for ( var i = 0; i < tabList.children.length; i++) {
            if (tabList.children[i].classList.contains('hovered')) {
                selectedTab = tabList.children[i].textContent;
            }
        }

        
        switch(true) {
            case selectedTab === 'All Projects' && task.project === '':
            break;

            case selectedTab === 'All Projects' && task.project != '':
                if (task.project === '') {
                    
                } else if (task.project != '') {
                    _printProjectName(item, task.project);
                    _printButtons(item);
                    _printTaskName(item, task.task);
                    _printTaskDate(item, task.date);
                    _printDescription(item, task.notes);
                    
                        if (task.status === 'complete') {
                            _editTasks__WEBPACK_IMPORTED_MODULE_1__.editItems.complete(item);
                        }
                    
                }
                
                if (status === 'complete') {
                    _editTasks__WEBPACK_IMPORTED_MODULE_1__.editItems.complete(item);
                }
            break;
        }
        
        
    }

    function appendProjectName() {

        const projectPanel = document.querySelector('.projectPanel');
        _editTasks__WEBPACK_IMPORTED_MODULE_1__.taskUpdate.clear()
        
        const scrollContainer = document.querySelector('.scrollContainer');

        // gets locallyStored project array
        let array = JSON.parse(localStorage.getItem('projectArray'));
        
        

        
        if (status != true && array != null) {
            // const text span
            let projectNames = array.map((a) => a.projectName);
            
            // variable for fetching last array item
            let last = array.length - 1;

            for (let i = 0; i < projectNames.length; i++) {

                const textSpan = document.createElement('span');
                textSpan.classList.add('textSpans');
                textSpan.textContent = projectNames[i];
                textSpan.title = "Click to see this project's tasks";
                scrollContainer.appendChild(textSpan);
    
            }
           
        } else if (status === true) {
            const textSpan = document.querySelectorAll('.textSpans');
            
            for(var i = 0; i < textSpan.length; i++) {
                if (textSpan[i].textContent === '') {
                    name = task.project;
                    textSpan[i].textContent = name;
                   
                }
            }
        }
        _updateDOM__WEBPACK_IMPORTED_MODULE_3__.tabSelection.eventListeners();
        // breaks up task
        
    }

    function removeProjectName (project) {

        // variable that gets each scroll project span ele
        const projectSpan = document.querySelectorAll('.textSpans');
        const scrollContainer = document.querySelector('.scrollContainer');

        for (var i = 0; i < projectSpan.length; i++) {
            if (project === projectSpan[i].textContent) {
                scrollContainer.removeChild(projectSpan[i]);
            }
        }
    }

    // function that specifically prints each clicked project item to projectPanel
    function projectToPanel(task) {

        // variable that fetches project panel
        const panel = document.querySelector('.projectPanel');

        panel.textContent = `${task}`;

    }

    
    
    
                // variable for task container
                // prints the name of the project
                function _printProjectName(item, project) {
                    const projectName = document.createElement('div');

                    projectName.classList.add('projectName');

                    projectName.textContent = project;
                    if(projectName.textContent === '') {
                        projectName.textContent = '';
                        item.appendChild(projectName);
                    } else {
                        item.appendChild(projectName);
                    }
                }

                

                // prints the buttons (delete, complete, edit)
                function _printButtons(item) {

                    const completeTask = document.createElement('button');
                    completeTask.classList.add('completeTask');
                    completeTask.title = "Complete Task";
                    // const completeTaskObject = {};
                    // completeTaskObject.toggle = false;
                    // completeTaskObject.object = completeTask;

                    const editTask = document.createElement('button');
                    editTask.classList.add('editTask');
                    editTask.title = 'Edit Task'

                    const itemDelete = document.createElement('button');
                    itemDelete.classList.add('itemDelete');
                    itemDelete.title = 'Delete Task'

                    item.appendChild(completeTask);
                    item.appendChild(editTask);
                    item.appendChild(itemDelete);
                }

                // prints name of task
                function _printTaskName(item, task) {
                    const taskName = document.createElement('div');
                    taskName.classList.add('taskName');

                    taskName.textContent = task;
                    item.appendChild(taskName);
                }
            
                // prints task date
                function _printTaskDate(item, date) {
                    const taskDate = document.createElement('div');
                    taskDate.classList.add('taskDate');

                    taskDate.textContent = date;
                    item.appendChild(taskDate);
                }

                // prints description / notes for task
                function _printDescription(item, notes) {
                    const description = document.createElement('div');
                    description.classList.add('description');

                    description.textContent = notes;
                    item.appendChild(description);
                }


    return {
        localStore: receiveLocalStorage,
        receive: receiveItem,
        unpack: unpackItem,
        print: printTask,
        project: appendProjectName,
        pPanel: projectToPanel,
        removeProject: removeProjectName,
        projectPrint: printProjects,
    }

})();

/* 
************************************************************************************
*************************MODULE THAT PRINTS TAB SPECIFIC CONTENT********************
************************************************************************************
*/

const tabbedPrint = (function() {
    // breaks down each array sent into it's individual items
    
    function arrayUnpack(array) {
        for (var i = 0; i < array.length; i++) {
           
            _arrayItem(array[i]);
        }
    }


    function _arrayItem(index) {
        const item = {};
        item.task = index.task;
        item.notes = index.notes;
        item.date = index.date;
        item.project = index.project;
        item.status = index.status;
        taskPrint.unpack(item);
    }

    return {
        unpack: arrayUnpack
    }
})();


/* 
************************************************************************************
*************************MODULE THAT PRINTS TAB SPECIFIC CONTENT********************
************************************************************************************
*/






/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _printTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printTasks */ "./src/printTasks.js");
/* harmony import */ var _updateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateDOM */ "./src/updateDOM.js");


/* 
************************************************************************************
***************** MODULE THAT CONTROLS PROJECT FUNCTIONALITY************************
************************************************************************************
*/




// module that stores projects into localStorage
const projects = (function() {

    // array that stores each project obj
    let projectArray = [];
    const allProjects = JSON.parse(localStorage.getItem('projectArray'));
    
    

    

    function arrayShare() {
        return allProjects;
    }
        // on window load this pushes each locally stored project into the projectArray 
        function projectArrayUpdate() {
            // gets all contents of the project array from localStorage

            if (allProjects != null) {
                // one by one pushes each project into projectArray
                for (var i = 0; i < allProjects.length; i++) {
    
                    projectArray.push(allProjects[i]);
                    
                }
            }
        }


    function projectUpdate(action, index, amount) {
        let storeProjectArray = JSON.stringify(projectArray);


    }

    // function that adds tasks to locally stored array
    function addTasks(project, index, task) {

        project.tasks.push(task);

        projectArray.splice(index, 1, project);
        const locallyStored = JSON.stringify(projectArray);
        localStorage.setItem('projectArray', locallyStored);
        

        
    }

    // function that deletes specified project from localStorage array
    function deleteProject(index) {
        projectArray.splice(index, 1);

        const locallyStored = JSON.stringify(projectArray);
        localStorage.setItem('projectArray', locallyStored);
    }

    function completeProject(index) {
       
        const parent = event.target.parentElement;
        const project = parent.children[0];
        const task = parent.children[4];


        const allTasks = allProjects.map((a) => a.tasks);
        
        
        const tasks = allTasks.map((a) => a.task);
        
        
        for ( var i = 0; i < allProjects.length; i++) {
            if (project === allProjects[i].projectName) {
                
            } else {
                
            }
        }
    }

    // test function
    function convey() {
        if (allProjects != null) {
            _printTasks__WEBPACK_IMPORTED_MODULE_0__.taskPrint.projectPrint(allProjects);
            
        }
    }

    // receives each project, pushes them into the array and passes them off to be sored
    function receiveProjects(project) {
      
        projectArray.push(project);
        const index = projectArray.indexOf(project);
        storeProjects(project, index);
    }

    // stores each project in localStorage
    function storeProjects(project, index) {
        const locallyStored = JSON.stringify(projectArray);
        localStorage.setItem('projectArray', locallyStored);
        const stored = JSON.parse(localStorage.getItem('projectArray'));
        
    }

       
    function splice (index, i, newTask) {
        
        if (newTask === undefined) {
            let statusUpdate = projectArray[index].tasks.splice(i, 1);
            storeProjects(statusUpdate, index);
            
        } else if (newTask != undefined ) {
            

            let statusUpdate = projectArray[index].tasks.splice(i, 1, newTask);
            storeProjects(statusUpdate, index);
            
        }
        
        if (projectArray[index].tasks.length === 0) {
            const projectPanel = document.querySelector('.projectPanel');
            _printTasks__WEBPACK_IMPORTED_MODULE_0__.taskPrint.removeProject(projectArray[index].projectName);
           let statusUpdate = projectArray.splice(index, 1);
            storeProjects(statusUpdate, index);
            if ( projectPanel != null ) {
                projectPanel.textContent = '';
            }
        }

    }
    
    return {
        share: arrayShare,
        receiving: receiveProjects,
        update: projectArrayUpdate,
        add: addTasks,
        complete: completeProject,
        convey: convey,
        delete: deleteProject,
        splice: splice
    }

})();




/***/ }),

/***/ "./src/taskFactory.js":
/*!****************************!*\
  !*** ./src/taskFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemFactory": () => (/* binding */ ItemFactory),
/* harmony export */   "ProjectFactory": () => (/* binding */ ProjectFactory)
/* harmony export */ });
/* harmony import */ var _grabTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grabTask */ "./src/grabTask.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
 



// Module that turns task data into an object
const ItemFactory = () => {

    // receiving function that breaks down each task item and sends it onward
    function receiveTasks(taskName, notes, date, project, status) {
        
        // forms each group of task data into an object 
        const item = {
           task: taskName,
           notes: notes,
           date: date,
           project: project, 
           status: status
        }

        _pushItem(item);
    }
    // pushes each task into index.js where it is added to the taskArray
    function _pushItem(item) {
        if (item.project != '') {
            const newProject = ProjectFactory();
            newProject.qualify(item);    
        } else {

            _index__WEBPACK_IMPORTED_MODULE_1__.itemRef.printItem(item);
        }
        
    }
   
    return { receiveTasks }
}



const ProjectFactory = () => {

    
   
    function qualify (item) {
        const projectName = item.project;
        if (projectName != undefined) {
            _breakDown(item);
        }
       
    }

    function _breakDown(item) {
        const taskName = item.task;
        const notes = item.notes;
        const date = item.date;
        const project = item.project;
        const status = item.status;
        receiveProjects(taskName, notes, date, project, status);
    }

    function receiveProjects(taskName, notes, date, project, status) {

        // variables for repeat or new projects
        let repeat = false;
        let newProject = false;
        
        // creates each project that contains each task inside of it
        const container = {};
        container.projectName = project;
        container.tasks = [];

        const task = {};
        task.task = taskName;
        task.notes = notes;
        task.date = date;
        task.project = project;
        task.status = status;

        if (_index__WEBPACK_IMPORTED_MODULE_1__.getProject.array() != null && _index__WEBPACK_IMPORTED_MODULE_1__.getProject.array().length != 0 ) { 
            for (var i = 0; i < _index__WEBPACK_IMPORTED_MODULE_1__.getProject.array().length; i++) {
                if (_index__WEBPACK_IMPORTED_MODULE_1__.getProject.array()[i].projectName === project && project != undefined) {
                    repeat = true; 
                    var projectItem = _index__WEBPACK_IMPORTED_MODULE_1__.getProject.array()[i];
                    var index = [i];
                } else {
                    newProject = true;

                }
            }

            if ( repeat === true && project != '') {
                _project__WEBPACK_IMPORTED_MODULE_2__.projects.add(projectItem, index, task);
                repeat = false;
            } else if ( newProject === true ) {
                container.tasks.push(task);
                _project__WEBPACK_IMPORTED_MODULE_2__.projects.receiving(container);
                newProject = false;
            }

        } else if (_index__WEBPACK_IMPORTED_MODULE_1__.getProject.array() === null || _index__WEBPACK_IMPORTED_MODULE_1__.getProject.array().length === 0 ) {
            
            container.tasks.push(task);
            _project__WEBPACK_IMPORTED_MODULE_2__.projects.receiving(container);
        }



    }

    return {qualify, receiveProjects}
}





/* 
I may need **************************
    - something to reference all items in itemArray and check for matching projects
    - it will grab that matching project and push the new data inside of that project's array
    - then format it so it can push THAT data on to be printed or used however is needed
 */

/***/ }),

/***/ "./src/updateDOM.js":
/*!**************************!*\
  !*** ./src/updateDOM.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sideBarHighlight": () => (/* binding */ sideBarHighlight),
/* harmony export */   "tabSelection": () => (/* binding */ tabSelection),
/* harmony export */   "projectPrint": () => (/* binding */ projectPrint)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var _editTasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editTasks.js */ "./src/editTasks.js");
/* harmony import */ var _printTasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./printTasks.js */ "./src/printTasks.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");








/* 
************************************************************************************
****************************CONTROLS WHICH SIDEBAR IS LIT UP************************
************************************************************************************
*/

// module that tracks which sidebar panel is interacted with, and then passes that info on
// so the data corresponding with that tab can be displayed in the DOM
const sideBarHighlight = (function () {

    // variables for targeting each tab
    const sideBarChildren = document.querySelector('.sidebar').children;
    // each tab element
    const child1 = sideBarChildren[0];
    const child2 = sideBarChildren[1];
    const child3 = sideBarChildren[2];
    const child4 = sideBarChildren[3];
    

    // array to contain sidebar tabs
    const sideBarArray = [];
    sideBarArray.push(child1, child2, child3, child4);

    function defaultTab() {
        const all = document.querySelector('.all');
        all.classList.add('hovered');
        operator(0);
        
    }

    // function that highlights the tab that is clicked and unhighlights the tabs that aren't
    function sideBarEventListeners(number) {

        

            // if (number != undefined) {
            //     child1.classList.remove('hovered');
            //     child2.classList.remove('hovered');
            //     child3.classList.remove('hovered');
            //     child4.classList.remove('hovered');
            //     child5.classList.remove('hovered');
            //     // added by 'number'
            //     child5.classList.add('hovered');
            //     
            // } else 
            // gives each tab an event listener
            if (number === undefined) {
                sideBarArray.forEach(tab => tab.addEventListener('click', () => {
                const index = sideBarArray.indexOf(event.target);

                switch (true) {
                    // If event target contains hovered class, it will remove it, and give the hovered class
                    // to the default tab 'all'
                    case event.target.classList.contains('hovered'):
                        event.target.classList.remove('hovered');
                        defaultTab();
                        tabSelection.eventListeners();
                        break;
                    // if the event target doesn't contain the hovered class, it will remove it from all other tabs
                    // and give it to the target
                    case !event.target.classList.contains('hovered'):
                        child1.classList.remove('hovered');
                        child2.classList.remove('hovered');
                        child3.classList.remove('hovered');
                        child4.classList.remove('hovered');
                        
                        event.target.classList.add('hovered');
                        operator(index);
                        tabSelection.eventListeners();
                        break;
                    
                }

                const hover = document.querySelector('.hovered');
            }))
        }
    }

    // shares the array that contains each sidebar element
    function shareTabs() {
        return sideBarChildren;
    }

    return {
        default: defaultTab,
        children: sideBarEventListeners,
        share: shareTabs
    }
})();

// function that calls functions in the 'tabSelection' module based on which tab is clicked
function operator(index) {
    switch (true) {
        case index === 0:
            tabSelection.all();
            // communicates that the selected tab is the 'all' tab'
            
            break;
        case index === 1:
            tabSelection.today();
            // communicates that the selected tab is the 'all' tab'
            
            break;
        case index === 2:
            tabSelection.weekly();
            // communicates that the selected tab is the 'all' tab'
            
            break;
        case index === 3:
            tabSelection.projects();
            // communicates that the selected tab is the 'all' tab'
            
            break;
    }
}



/* 
************************************************************************************
****************************MODULE THAT CONTROLS EACH TAB***************************
************************************************************************************
*/

// runs logic for each tab based on which tab is clicked
const tabSelection = (function () {

    const projectArray = [];
    const itemArray = [];

    // listens for which project title is clicked on and prints it to the project tab display
    function eventListeners() {
        const textSpans = document.querySelectorAll('.textSpans');

        const textArray = Array.from(textSpans);
        textArray.forEach(text => text.addEventListener('click', _eventListen));
    
    }

    function _eventListen() {
        const projectPanel = document.querySelector('.projectPanel'); 
        if (projectPanel != null) {
            projectName();               
        } else {
            projectsTab(true);
            projectName();
        }
    }

    function receiveProjects(project) {
        projectArray.push(project);

    }

    function receiveArrayItems(item, index, page) {

        switch (true) {
            case page === 'index':
                itemArray.push(item);
                break;
        }
    }
    

    function todayTab() {

        // erases tasks from DOM so they don't spam themselves
        _editTasks_js__WEBPACK_IMPORTED_MODULE_1__.taskUpdate.erase();

        // searches DOM for .taskSpans elements
        const text = document.querySelectorAll('.taskSpans');

        // clears them if they are found so they don't spam themselves
        if (text != null) {
            _editTasks_js__WEBPACK_IMPORTED_MODULE_1__.taskUpdate.clear();
        } 

        // variables that target elements of DOM needed to remove projectPanel
        const taskPanel = document.querySelector('.taskPanel');
        const projectPanel = document.querySelector('.projectPanel');
        const mainSection = document.querySelector('.mainSection');
        const isPresent = mainSection.contains(projectPanel);
        
        // removes projectpanel
        if (isPresent === true) {
            mainSection.removeChild(projectPanel);
            mainSection.style.cssText = `
            grid-template-areas: 
            "form form"
            "items items";
            `;
            
            taskPanel.style.cssText = `grid-row: 4/11`;
    
        } 
        _editTasks_js__WEBPACK_IMPORTED_MODULE_1__.taskUpdate.erase();
       
        // variables to retrieve both arrays - project and item
        const projects = JSON.parse(localStorage.getItem('projectArray'));
        const items = JSON.parse(localStorage.getItem('itemArray'));

          const projectTasks = projects.map((a) => a.tasks);

        // whatever taks are dated for today show up in the DOM
        
        for ( var i = 0; i < items.length; i++ ) {
            
            var result = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.default) ( (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.default) ( items[i].date ), 1 );
            
            if ( result ) {
                _printTasks_js__WEBPACK_IMPORTED_MODULE_2__.taskPrint.print(items[i], items[i].status);
                
                _editTasks_js__WEBPACK_IMPORTED_MODULE_1__.taskUpdate.clear();
            }  

         }

        for ( var i = 0; i < projectTasks.length; i++ ) {
           for ( var j = 0; j < projectTasks[i].length; j++ ) {
                var result = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.default)((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.default)(projectTasks[i][j].date ), 1)

                if ( result ) {
                    _printTasks_js__WEBPACK_IMPORTED_MODULE_2__.taskPrint.print(projectTasks[i][j], projectTasks[i][j].status);
                    _editTasks_js__WEBPACK_IMPORTED_MODULE_1__.taskUpdate.clear();
                }
           }
            
        }
       
    }


    function weeklyTab() {

        // erases tasks from DOM so they don't spam themselves
        _editTasks_js__WEBPACK_IMPORTED_MODULE_1__.taskUpdate.erase();

        // searches DOM for .taskSpans elements
        const text = document.querySelectorAll('.taskSpans');

        // clears them if they are found so they don't spam themselves
        if (text != null) {
            _editTasks_js__WEBPACK_IMPORTED_MODULE_1__.taskUpdate.clear();
        } 

        // variables that target elements of DOM needed to remove projectPanel
        const taskPanel = document.querySelector('.taskPanel');
        const projectPanel = document.querySelector('.projectPanel');
        const mainSection = document.querySelector('.mainSection');
        const isPresent = mainSection.contains(projectPanel);
        
        // removes projectPanel 
        if (isPresent === true) {
            mainSection.removeChild(projectPanel);
            mainSection.style.cssText = `
            grid-template-areas: 
            "form form"
            "items items";
            `;
            
            taskPanel.style.cssText = `grid-row: 4/11`;
    
        } 
        
        _editTasks_js__WEBPACK_IMPORTED_MODULE_1__.taskUpdate.erase();
        
        // whatever tasks happen this week show up in the DOM
         // variables to retrieve both arrays - project and item
         const projects = JSON.parse(localStorage.getItem('projectArray'));
         const items = JSON.parse(localStorage.getItem('itemArray'));
 
          const projectTasks = projects.map((a) => a.tasks);
      
         const year = new Date().getFullYear();
         const month = new Date().getMonth() + 1;
         const day = new Date().getDate();
         const today = `${year}, ${month}, ${day}`;
         
         // whatever taks are dated for today show up in the DOM
         
         for ( var i = 0; i < items.length; i++ ) {
             
             var result = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.default) ( (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.default) ( items[i].date ) );
             
             
             
             if ( result ) {
                 _printTasks_js__WEBPACK_IMPORTED_MODULE_2__.taskPrint.print(items[i], items[i].status);
                 
                 _editTasks_js__WEBPACK_IMPORTED_MODULE_1__.taskUpdate.clear();
             }  
 
          }
 
         for ( var i = 0; i < projectTasks.length; i++ ) {
            for ( var j = 0; j < projectTasks[i].length; j++ ) {
                 var result = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.default) ( (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.default) ( projectTasks[i][j].date ) )
 
                 if ( result ) {
                     _printTasks_js__WEBPACK_IMPORTED_MODULE_2__.taskPrint.print(projectTasks[i][j], projectTasks[i][j].status);
                     _editTasks_js__WEBPACK_IMPORTED_MODULE_1__.taskUpdate.clear();
                 }
            }
             
         }
        

    }
    

    function projectName() {
        const projectPanel = document.querySelector('.projectPanel');
        projectPanel.textContent = event.target.textContent;
        let currentText = event.target.textContent;
        eventListeners(currentText);
        projectPrint.print(currentText);
    }

    // controls both ways that you can get to the project tab
            // by clicking on the project tab itself
            // or, but clicking on a project name in the scroll section
    function projectsTab(condition) {
        const projectText = event.target.textContent;
        if (condition === true) {
            sideBarHighlight.children(4);
        } else {}
        // erases all tasks from prior tabs and all scroll items

        // variables for finding taskSpan elements
        const text = document.querySelectorAll('.taskSpans');
        // if taskSpan elements are found, clear the projectScroll element of them
        if (text != null) {
            _editTasks_js__WEBPACK_IMPORTED_MODULE_1__.taskUpdate.clear();
        } 

        // variable for targeting the 'mainSection' div && adding a place for chosen project title to go
        const mainSection = document.querySelector('.mainSection');
        mainSection.style.cssText = `
        position: relative;
        grid-area: "main";
        grid-column: 4/11;
        grid-row: 1/11;
        background-color: var(--dark-color);
        z-index: 5;
        display: grid;
        grid-template-columns: repeat(4, 24%);
        grid-template-rows: repeat(10, 10%);
        grid-template-areas: 
                "form form"
                "project project"
                "items items";
        width: min(100%, 1200px);
        `;

        // const targets projectPanel div
        const projectPanel = document.createElement('div');
        projectPanel.classList.add('projectPanel');

        // variable that targets taskPanel div
        const taskPanel = document.querySelector('.taskPanel');

        taskPanel.style.cssText = `grid-row: 5/11`;
        
        // appends projectPanel to section
        mainSection.appendChild(projectPanel);
        
        // variable that allows task to print
        let check = false;
        

        

        // variable that contains the locallyStored array
        const projectItems = JSON.parse(localStorage.getItem('projectArray'));
        // pushes each project item to interface that prints them to DOM

    //     const projectNames = JSON.parse(localStorage.getItem('projectArray'));
    //    for (var i = 0; i < projectNames.length; i++) {
    //        taskPrint.print(projectNames[i].projectName);
    //    }

        if (projectItems != null) {

            const projectNames = projectItems.map((a) => a.tasks);
        }

        _editTasks_js__WEBPACK_IMPORTED_MODULE_1__.taskUpdate.erase();
       _printTasks_js__WEBPACK_IMPORTED_MODULE_2__.taskPrint.project();

    }

    // controls logic involved in the selection of the All tab. Prints all tasks and projects
    function allTab(array) {
        
        
        // erases tasks from DOM so they don't spam themselves
        _editTasks_js__WEBPACK_IMPORTED_MODULE_1__.taskUpdate.erase();

        // searches DOM for .taskSpans elements
        const text = document.querySelectorAll('.taskSpans');

        // clears them if they are found so they don't spam themselves
        if (text != null) {
            _editTasks_js__WEBPACK_IMPORTED_MODULE_1__.taskUpdate.clear();
        } 

        // const targets projectPanel div
        const projectPanel = document.querySelector('.projectPanel');

        // variable that targets taskPanel div
        const taskPanel = document.querySelector('.taskPanel');

        // variable for targeting the 'mainSection' div
        const mainSection = document.querySelector('.mainSection');

        const isPresent = mainSection.contains(projectPanel);
        // appends projectPanel to section
        
        // if the project panel is present, it's removed
        if (isPresent === true) {
            mainSection.removeChild(projectPanel);
            mainSection.style.cssText = `
            grid-template-areas: 
            "form form"
            "items items";
            `;
            
            taskPanel.style.cssText = `grid-row: 4/11`;
    
        } 


        let storedArray = JSON.parse(localStorage.getItem('itemArray'));

        if (storedArray != null) {
            for (var i = 0; i < storedArray.length; i++) {
                
                if(storedArray[i].project === '') {
                    _printTasks_js__WEBPACK_IMPORTED_MODULE_2__.taskPrint.unpack(storedArray[i]);
                    
                } else {
                    
                }
            }
        }


    }

    

    return {
        eventListeners: eventListeners,
        receive: receiveArrayItems,
        receiveProjects: receiveProjects,
        today: todayTab,
        weekly: weeklyTab,
        projects: projectsTab,
        all: allTab
    }
})();


const projectPrint = (function () {

    const projectArray = JSON.parse(localStorage.getItem('projectArray'));
    
    const projectStorage = JSON.parse(localStorage.getItem('projectArray'));
    
    // returns each project name
    if (projectStorage != null) {
        const taskNames = projectStorage.map((a) => a.projectName);
    }

    

        function reprintOnSubmit() {
        const projectPanel = document.querySelector('.projectPanel');
        
        if (projectPanel != null && projectPanel.textContent != '') {
            let projectName = projectPanel.textContent;
            
            printTasks(projectName);
        }
    }

    // function for printing a selected project's task items 
    function findTasks(project) {
        
        _editTasks_js__WEBPACK_IMPORTED_MODULE_1__.taskUpdate.erase();
        let allProjects = JSON.parse(localStorage.getItem('projectArray'));
        
        for (var i = 0; i < allProjects.length; i++) {
            if (allProjects[i].projectName === project) {
                let tasks = allProjects[i].tasks;
                return tasks;
            }
        }
        
    }


    // apply a delete all and reprint all function to submit button
    function printTasks(project) {
        let allProjects = JSON.parse(localStorage.getItem('projectArray'));
        let stick = findTasks(project);
        
        for (var i = 0; i < stick.length; i++) {
            let index = i;
            _printTasks_js__WEBPACK_IMPORTED_MODULE_2__.taskPrint.projectPrint(stick[i], index);
        }
    }

    function pushDeletion(index, i) {
        
        
        _project_js__WEBPACK_IMPORTED_MODULE_3__.projects.splice (index, i);
                
    }

    // updates each project task item with each edit
    function projectArrayUpdate(action, index, amount) {
        let storeArray = JSON.stringify(projectArray);
        
        
        let projectStorage = JSON.parse(localStorage.getItem('projectArray'));

        switch(true) {
            case action === 'delete':
                
                storeArray = JSON.stringify(projectArray);
                localStorage.setItem('projectArray', projectArray);

            break;
            case action === 'edit':
                let indecie = findTasks(amount);
                

                
                const newItem = {};
                newItem.task = amount.name;
                newItem.notes = amount.notes;
                newItem.date = amount.date;
                newItem.project = amount.project;
                newItem.status = amount.status;

               
                projectArray.splice(index, 1, newItem);
                storeArray = JSON.stringify(projectArray);
                localStorage.setItem('itemArray', projectArray);
                let storedArray = JSON.parse(localStorage.getItem('itemArray'));
                

                
                
            break;
            case action === 'complete':
                const parent = event.target.parentElement;
                const taskText = parent.children[4];
                
                let completedProject = projectStorage[index].tasks;
                
                
                let position = '';
                let taskPos = '';

                for ( var i = 0; i < completedProject.length; i++ ) {
                    if (completedProject[i].task === taskText.textContent) {
                       position = completedProject[i];
                       
                       let newTask = {};

                       newTask.task = position.task,
                       newTask.notes = position.notes,
                       newTask.date = position.date,
                       newTask.project = position.project;
                       
                       if (position.status === 'incomplete') {
                           newTask.status = 'complete';
                       } else if (position.status === 'complete') {
                        newTask.status = 'incomplete';
                       }


                       let sharedArray = _index_js__WEBPACK_IMPORTED_MODULE_0__.getProject.array();
                
                       let replacement = sharedArray[index].tasks.splice(i, 1, newTask);

                        _project_js__WEBPACK_IMPORTED_MODULE_3__.projects.splice(index, i, newTask);
                       
                    }
                }

                


                
                // for ( var i = 0; i < tasks.length; i++) {
                //     tasker = tasks[i].map((a) => a.task);
                    
                   
                // }
                // // projectArray[index].status = amount;
                // storeArray = JSON.stringify(projectArray);
                // localStorage.setItem('itemArray', storeArray);
            break;
        }
    }

    function searchItem(task, project) {

        const array = JSON.parse(localStorage.getItem('projectArray'));

        const projectPanel = document.querySelector('.projectPanel');
        const textSpans = document.querySelectorAll('.textSpans');

        parent = event.target.parentElement;
        
        const projectItem = parent.children[0];
        
        for ( var i = 0; i < textSpans.length; i++) {
            if (textSpans[i].textContent === projectItem.textContent) {
                let index = [i];
                
                return index
            }
        }
        

               
        // switch(true) {
        //     case projectPanel.textContent === projectItem.textContent:
        //         for ( var i = 0; i < array.length; i++){
                    

        //             if (array[i].projectName === projectItem.textContent) {
        //                let currentProjectName = array[i].projectName;
        //                 for (var i = 0; i < currentProjectName.length; i++) {
                            
        //                     if (taskMap[i].task === taskItem.textContent) {
        //                         
        //                     }
        //                 }
        //             }
        //         }
        //     break;
        // }
        // for (var i = 0; i < currentTask.length; i++) {
        //     if (currentProject.tasks[i] === task) {
        //         currentTask = currentProject.tasks[i];
        //         currentTask.indexOf(task);
        //     }
        // }

        // 
        // 

    }
    
    return {
        tasks: findTasks,
        print: printTasks,
        update: projectArrayUpdate,
        search: searchItem,
        reprint: reprintOnSubmit,
        delete: pushDeletion
    }

})();

window.addEventListener('load', () => {

    sideBarHighlight.default();
    sideBarHighlight.children();
});




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
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map
