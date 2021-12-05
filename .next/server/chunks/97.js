exports.id = 97;
exports.ids = [97];
exports.modules = {

/***/ 5474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x4": () => (/* binding */ login),
/* harmony export */   "a$": () => (/* binding */ registerUser),
/* harmony export */   "kS": () => (/* binding */ logout),
/* harmony export */   "Ui": () => (/* binding */ isLoggedUser),
/* harmony export */   "jw": () => (/* binding */ fetchTestsName),
/* harmony export */   "lD": () => (/* binding */ fetchTest)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const server = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: 'http://89.108.79.146'
});
function login(user) {
  return server.post('/auth/login', {
    username: user.username,
    password: user.password
  }, {
    withCredentials: true
  }).then(data => {
    return "good";
  }).catch(err => {
    return "bad";
  });
}
function registerUser(user) {
  return server.post('/auth/register', {
    name: user.name,
    surname: user.surname,
    username: user.username,
    password: user.password,
    school: user.school,
    class: user.class,
    group: user.group
  }, {
    withCredentials: true
  }).then(data => {
    return 'good';
  }).catch(err => {
    return 'bad';
  });
}
function logout() {
  server.get('/auth/logout', {
    withCredentials: true
  });
}
function isLoggedUser(setUserData) {
  server.get('/auth/me', {
    withCredentials: true
  }).then(data => {
    setUserData(data.data);
  }).catch(err => {
    setUserData(undefined);
  });
}
function fetchTestsName(setQuizes) {
  server.get('/tests/name', {
    withCredentials: true
  }).then(data => {
    setQuizes(data.data);
  }).catch(err => {});
}
function fetchTest(id, setQuiz) {
  return server.get(`/tests/${id}`, {
    withCredentials: true
  }).then(data => {
    setQuiz(data.data);
  }).catch(err => {});
}

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;