webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tns-core-modules/http");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./common/constants.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_ui_gauge_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nativescript-ui-gauge/vue");
/* harmony import */ var nativescript_ui_gauge_vue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_gauge_vue__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./components/Login.vue");
/* harmony import */ var _TimeLine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./components/TimeLine.vue");
/* harmony import */ var _QuizView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./components/QuizView.vue");
/* harmony import */ var _ContactModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./components/ContactModal.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




nativescript_vue__WEBPACK_IMPORTED_MODULE_2___default.a.use(nativescript_ui_gauge_vue__WEBPACK_IMPORTED_MODULE_3___default.a);





var appSettings = __webpack_require__("tns-core-modules/application-settings");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},

  data() {
    return {
      processing: true,
      summary: null,
      token: null,
      userid: null,
      username: '',
      message: "Welcome"
    };
  },

  created() {
    this.token = appSettings.getString("tok", null);
    this.userid = appSettings.getString("userid", null); // second parameter is default value

    this.message = 'Welcome' + appSettings.getString("username", null);
    this.username = appSettings.getString("username", null);
    var currentDate = new Date();
    var day = currentDate.getDay();
    var date = currentDate.getDate();
    var year = currentDate.getFullYear();
    var weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
    var dayName = weekdays[day];
    this.day = dayName;
    this.date = date;
    this.year = year;
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var monthName = month[currentDate.getMonth()];
    this.month = monthName;
    this.loadSummary();
  },

  methods: {
    loadSummary() {
      var addr = "".concat(_common_constants__WEBPACK_IMPORTED_MODULE_1__["BASE_API"], "Users/user_summary/").concat(this.userid);
      console.log(addr);
      Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_0__["request"])({
        url: addr,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + this.token
        }
      }).then(response => {
        var result = response.content.toJSON();
        console.log(result);

        if (response.statusCode == 200) {
          this.summary = result;
          this.percentage = 6 - this.summary.latest_score_numeric / 100 * 6;
          this.percentageDescription = this.summary.latest_score_title;
        }

        this.processing = false;
      }, e => {
        // this.processing = false;
        this.alert("Unfortunately we could not fetch your data.");
      });
    },

    showModal() {
      this.$showModal(_ContactModal__WEBPACK_IMPORTED_MODULE_7__["default"]);
    },

    openForm() {
      this.$navigateTo(_QuizView__WEBPACK_IMPORTED_MODULE_6__["default"], {
        transition: {
          name: 'fade',
          duration: 1200
        },
        props: {
          quizid: this.summary.active_quiz_id
        }
      });
    },

    logout() {
      this.$backendService.logout();
      this.$navigateTo(_Login__WEBPACK_IMPORTED_MODULE_4__["default"], {
        clearHistory: true
      });
    },

    goToTimeline() {
      this.$navigateTo(_TimeLine__WEBPACK_IMPORTED_MODULE_5__["default"], {
        clearHistory: true
      });
    }

  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Ib21lLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUlBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLGdCQURBOztBQUdBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLG1CQUZBO0FBR0EsaUJBSEE7QUFJQSxrQkFKQTtBQUtBLGtCQUxBO0FBTUE7QUFOQTtBQVFBLEdBWkE7O0FBY0E7QUFFQTtBQUVBLHdEQUpBLENBS0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQSxHQTNEQTs7QUE0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQURBO0FBRUEscUJBRkE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUhBLFNBSUEsSUFKQSxDQUlBO0FBQ0E7QUFFQTs7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBOztBQUVBO0FBRUEsT0FwQkEsRUFvQkE7QUFDQTtBQUNBLG1CQUNBLDZDQURBO0FBR0EsT0F6QkE7QUEwQkEsS0E5QkE7O0FBK0JBO0FBQ0E7QUFDQSxLQWpDQTs7QUFrQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBREE7QUFFQTtBQUZBLFNBREE7QUFLQTtBQUNBO0FBREE7QUFMQTtBQVNBLEtBNUNBOztBQTZDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0EsS0FsREE7O0FBbURBO0FBRUE7QUFDQTtBQURBO0FBSUE7O0FBekRBO0FBNURBLEciLCJmaWxlIjoiYnVuZGxlLmU1NzM1NWU4YmRhNDZjYjFlMjY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPFBhZ2U+XG4gICAgICAgIDxBY3Rpb25CYXIgIGFjdGlvbkJhckhpZGRlbj1cInRydWVcIj48L0FjdGlvbkJhcj5cblxuICAgICAgICA8U3RhY2tMYXlvdXQgc3RyZXRjaExhc3RDaGlsZD1cInRydWVcIiA+XG5cbiAgICAgICAgICAgIDxUYWJzIGhlaWdodD1cIjEyMDBcIiB0YWJzUG9zaXRpb249XCJib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJTdHJpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiU3RyaXBJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIkhvbWVcIiBzdHlsZT1cImNvbG9yOiBibGFja1wiIHYtaWY9XCJmYWxzZVwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJyZXM6Ly9ob21lXCI+PC9JbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlN0cmlwSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiU3RyaXBJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIlNldHRpbmdzXCIgdi1pZj1cImZhbHNlXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cInJlczovL3NldHRpbmdzXCI+PC9JbWFnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlN0cmlwSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiU3RyaXBJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cIlNlYXJjaFwiIHYtaWY9XCJmYWxzZVwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJyZXM6Ly9zZWFyY2hcIj48L0ltYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiU3RyaXBJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJTdHJpcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYkNvbnRlbnRJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiKiwgKlwiIHJvd3M9XCJhdXRvLCBhdXRvXCIgdi1pZj1cIiFwcm9jZXNzaW5nXCIgc3R5bGU9XCJoZWlnaHQ6IDEyMDsgcGFkZGluZzogMjNcIiAgY2xhc3M9XCJiZy1kYXJrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJkYXlcIiByb3c9XCIwXCIgY29sPVwiMFwiIGNsYXNzPVwibGFyZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIm1vbnRoICsgJyAnICsgZGF0ZSArICcsICcgKyB5ZWFyXCIgcm93PVwiMVwiIGNvbD1cIjBcIiBjbGFzcz1cImJvZHkgc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNDMkM4RTZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cInN1bW1hcnkubWVldGluZ3NfdG9kYXlcIiByb3c9XCIwXCIgY29sPVwiMVwiIGNsYXNzPVwibGFyZ2UgdGV4dC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzg5RDVFMlwiICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiY29udGFjdHMgdG9kYXlcIiByb3c9XCIxXCIgY29sPVwiMVwiIGNsYXNzPVwic21hbGwgdGV4dC1yaWdodCBib2R5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjODlENUUyXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiKiwgKlwiIHJvd3M9XCJhdXRvLCBhdXRvXCIgdi1pZj1cIiFwcm9jZXNzaW5nXCIgc3R5bGU9XCJoZWlnaHQ6IDEyMDsgcGFkZGluZzogMjNcIiAgY2xhc3M9XCJiZy1kYXJrXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJDb250YWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHRhcD1cInNob3dNb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgcm93PVwiMTRcIiBjb2w9XCIwXCIgY29sb3I9XCIjQzJDOEU2XCIgc3R5bGU9XCJtYXJnaW4tdG9wOiA4MFwiPjwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQWN0aXZpdHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAdGFwPVwic2hvd01vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiByb3c9XCIxNFwiIGNvbD1cIjFcIiBjb2xvcj1cIiNDMkM4RTZcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDgwXCI+PC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgc3R5bGU9XCJoZWlnaHQ6IDM4MDsgdGV4dC1hbGlnbjogY2VudGVyXCIgdi1pZj1cIiFwcm9jZXNzaW5nXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIDp0ZXh0PVwicGVyY2VudGFnZURlc2NyaXB0aW9uXCIgc3R5bGU9XCIgd2lkdGg6IDE4MDsgY29sb3I6IGJsYWNrXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkUmFkaWFsR2F1Z2Ugdi1pZj1cInRydWVcIiBzdHlsZT1cImhlaWdodDogMjIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFkaWFsU2NhbGUgdi10a1JhZGlhbEdhdWdlU2NhbGVzIG1pbmltdW09XCIwXCIgbWF4aW11bT1cIjZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1cz1cIjAuOTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTY2FsZVN0eWxlIHYtdGtSYWRpYWxTY2FsZVN0eWxlIG1ham9yVGlja3NDb3VudD1cIjdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbm9yVGlja3NDb3VudD1cIjlcIiBsaW5lVGhpY2tuZXNzPVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzQ291bnQ9XCI3XCIgdGlja3NPZmZzZXQ9XCIwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpYWxCYXJJbmRpY2F0b3Igdi10a1JhZGlhbFNjYWxlSW5kaWNhdG9yc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW09XCIwXCIgbWF4aW11bT1cIjEuMlwiIGxvY2F0aW9uPVwiMC45N1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYXJJbmRpY2F0b3JTdHlsZSB2LXRrUmFkaWFsQmFySW5kaWNhdG9yU3R5bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I9XCIjZGRkZGRkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaWFsQmFySW5kaWNhdG9yPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlhbEJhckluZGljYXRvciB2LXRrUmFkaWFsU2NhbGVJbmRpY2F0b3JzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bT1cIjEuMlwiIG1heGltdW09XCIyLjRcIiBsb2NhdGlvbj1cIjAuOTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYXJJbmRpY2F0b3JTdHlsZSB2LXRrUmFkaWFsQmFySW5kaWNhdG9yU3R5bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I9XCIjOURDQTU2XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaWFsQmFySW5kaWNhdG9yPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlhbEJhckluZGljYXRvciB2LXRrUmFkaWFsU2NhbGVJbmRpY2F0b3JzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bT1cIjIuNFwiIG1heGltdW09XCIzLjZcIiBsb2NhdGlvbj1cIjAuOTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYXJJbmRpY2F0b3JTdHlsZSB2LXRrUmFkaWFsQmFySW5kaWNhdG9yU3R5bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I9XCIjRjBDNDREXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpYWxCYXJJbmRpY2F0b3I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpYWxCYXJJbmRpY2F0b3Igdi10a1JhZGlhbFNjYWxlSW5kaWNhdG9yc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bT1cIjMuNlwiIG1heGltdW09XCI0LjhcIiBsb2NhdGlvbj1cIjAuOTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYXJJbmRpY2F0b3JTdHlsZSB2LXRrUmFkaWFsQmFySW5kaWNhdG9yU3R5bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxDb2xvcj1cIiNFMjc2MzNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlhbEJhckluZGljYXRvcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlhbEJhckluZGljYXRvciB2LXRrUmFkaWFsU2NhbGVJbmRpY2F0b3JzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtPVwiNC44XCIgbWF4aW11bT1cIjZcIiBsb2NhdGlvbj1cIjAuOTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYXJJbmRpY2F0b3JTdHlsZSB2LXRrUmFkaWFsQmFySW5kaWNhdG9yU3R5bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxDb2xvcj1cIiNBNzAxMEVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlhbEJhckluZGljYXRvcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlhbE5lZWRsZSB2LXRrUmFkaWFsU2NhbGVJbmRpY2F0b3JzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cInBlcmNlbnRhZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaWFsU2NhbGU+XG4gICAgICAgICAgICAgICAgICAgIDwvUmFkUmFkaWFsR2F1Z2U+XG5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiU2VsZiBDaGVjayBRdWl6XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIEB0YXA9XCJvcGVuRm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNDMkM4RTZcIj48L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD4gICBcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiQ29udGVudEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiQ29udGVudEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVwiU2V0dGluZ3MgUGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImgyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJDb250ZW50SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCJTZWFyY2ggUGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImgyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJzPlxuXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIDxBY3Rpdml0eUluZGljYXRvciByb3dTcGFuPVwiM1wiIDpidXN5PVwicHJvY2Vzc2luZ1wiPjwvQWN0aXZpdHlJbmRpY2F0b3I+XG5cbiAgICAgICAgICAgIFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgZ2V0RmlsZSwgZ2V0SW1hZ2UsIGdldEpTT04sIGdldFN0cmluZywgcmVxdWVzdCwgSHR0cFJlc3BvbnNlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xuXG5cblxuICAgIGltcG9ydCB7QkFTRV9BUEl9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnO1xuICAgIGltcG9ydCBWdWUgZnJvbSBcIm5hdGl2ZXNjcmlwdC12dWVcIjtcbiAgICBpbXBvcnQgUmFkUmFkaWFsR2F1Z2UgZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1nYXVnZS92dWVcIjtcbiAgICBWdWUudXNlKFJhZFJhZGlhbEdhdWdlKTtcblxuXG4gICAgaW1wb3J0IExvZ2luIGZyb20gXCIuL0xvZ2luXCI7XG5cbiAgICBpbXBvcnQgVGltZUxpbmUgZnJvbSBcIi4vVGltZUxpbmVcIjtcblxuICAgIGltcG9ydCBRdWl6VmlldyBmcm9tIFwiLi9RdWl6Vmlld1wiO1xuXG4gICAgaW1wb3J0IENvbnRhY3RNb2RhbCBmcm9tIFwiLi9Db250YWN0TW9kYWxcIjtcblxuICAgIGNvbnN0IGFwcFNldHRpbmdzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc2luZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzdW1tYXJ5OiBudWxsLFxuICAgICAgICAgICAgICAgIHRva2VuOiBudWxsLFxuICAgICAgICAgICAgICAgIHVzZXJpZDogbnVsbCxcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogJycsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYFdlbGNvbWVgXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgY3JlYXRlZCgpIHtcblxuICAgICAgICAgICAgdGhpcy50b2tlbiA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInRva1wiLCBudWxsKTtcblxuICAgICAgICAgICAgdGhpcy51c2VyaWQgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ1c2VyaWRcIiwgbnVsbCk7XG4gICAgICAgICAgICAvLyBzZWNvbmQgcGFyYW1ldGVyIGlzIGRlZmF1bHQgdmFsdWVcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9ICdXZWxjb21lJyArIGFwcFNldHRpbmdzLmdldFN0cmluZyhcInVzZXJuYW1lXCIsIG51bGwpO1xuICAgICAgICAgICAgdGhpcy51c2VybmFtZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInVzZXJuYW1lXCIsIG51bGwpO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHZhciBkYXkgPSBjdXJyZW50RGF0ZS5nZXREYXkoKTtcbiAgICAgICAgICAgIHZhciBkYXRlID0gY3VycmVudERhdGUuZ2V0RGF0ZSgpO1xuXHRcdFx0dmFyIHllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgd2Vla2RheXMgPSBuZXcgQXJyYXkoNyk7XG4gICAgICAgICAgICB3ZWVrZGF5c1swXSA9IFwiU3VuZGF5XCI7XG4gICAgICAgICAgICB3ZWVrZGF5c1sxXSA9IFwiTW9uZGF5XCI7XG4gICAgICAgICAgICB3ZWVrZGF5c1syXSA9IFwiVHVlc2RheVwiO1xuICAgICAgICAgICAgd2Vla2RheXNbM10gPSBcIldlZG5lc2RheVwiO1xuICAgICAgICAgICAgd2Vla2RheXNbNF0gPSBcIlRodXJzZGF5XCI7XG4gICAgICAgICAgICB3ZWVrZGF5c1s1XSA9IFwiRnJpZGF5XCI7XG4gICAgICAgICAgICB3ZWVrZGF5c1s2XSA9IFwiU2F0dXJkYXlcIjtcbiAgICAgICAgICAgIHZhciBkYXlOYW1lID0gd2Vla2RheXNbZGF5XTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5kYXkgPSBkYXlOYW1lO1xuICAgICAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcblx0XHRcdHRoaXMueWVhciA9IHllYXI7XG5cbiAgICAgICAgICAgIHZhciBtb250aCA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgbW9udGhbMF0gPSBcIkphbnVhcnlcIjtcbiAgICAgICAgICAgIG1vbnRoWzFdID0gXCJGZWJydWFyeVwiO1xuICAgICAgICAgICAgbW9udGhbMl0gPSBcIk1hcmNoXCI7XG4gICAgICAgICAgICBtb250aFszXSA9IFwiQXByaWxcIjtcbiAgICAgICAgICAgIG1vbnRoWzRdID0gXCJNYXlcIjtcbiAgICAgICAgICAgIG1vbnRoWzVdID0gXCJKdW5lXCI7XG4gICAgICAgICAgICBtb250aFs2XSA9IFwiSnVseVwiO1xuICAgICAgICAgICAgbW9udGhbN10gPSBcIkF1Z3VzdFwiO1xuICAgICAgICAgICAgbW9udGhbOF0gPSBcIlNlcHRlbWJlclwiO1xuICAgICAgICAgICAgbW9udGhbOV0gPSBcIk9jdG9iZXJcIjtcbiAgICAgICAgICAgIG1vbnRoWzEwXSA9IFwiTm92ZW1iZXJcIjtcbiAgICAgICAgICAgIG1vbnRoWzExXSA9IFwiRGVjZW1iZXJcIjtcblxuICAgICAgICAgICAgdmFyIG1vbnRoTmFtZSA9IG1vbnRoW2N1cnJlbnREYXRlLmdldE1vbnRoKCldO1xuICAgICAgICAgICAgdGhpcy5tb250aCA9IG1vbnRoTmFtZTtcblxuICAgICAgICAgICAgdGhpcy5sb2FkU3VtbWFyeSgpO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBsb2FkU3VtbWFyeSAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFkZHIgPSBgJHtCQVNFX0FQSX1Vc2Vycy91c2VyX3N1bW1hcnkvJHt0aGlzLnVzZXJpZH1gXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWRkcilcbiAgICAgICAgICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBhZGRyLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgLCAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMudG9rZW59LFxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UuY29udGVudC50b0pTT04oKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1bW1hcnkgPSByZXN1bHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcmNlbnRhZ2UgPSAoNiAtICh0aGlzLnN1bW1hcnkubGF0ZXN0X3Njb3JlX251bWVyaWMgLyAxMDApICogNilcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVyY2VudGFnZURlc2NyaXB0aW9uID0gdGhpcy5zdW1tYXJ5LmxhdGVzdF9zY29yZV90aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgfSwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IGZldGNoIHlvdXIgZGF0YS5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93TW9kYWwoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc2hvd01vZGFsKENvbnRhY3RNb2RhbCk7XG4gICAgICAgICAgICB9LCAgIFxuICAgICAgICAgICAgb3BlbkZvcm0oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhRdWl6Vmlldywge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6J2ZhZGUnLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTIwMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVpemlkOiB0aGlzLnN1bW1hcnkuYWN0aXZlX3F1aXpfaWQsIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCAgIFxuICAgICAgICAgICAgbG9nb3V0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGJhY2tlbmRTZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oTG9naW4sIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ29Ub1RpbWVsaW5lKCkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhUaW1lTGluZSwge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=