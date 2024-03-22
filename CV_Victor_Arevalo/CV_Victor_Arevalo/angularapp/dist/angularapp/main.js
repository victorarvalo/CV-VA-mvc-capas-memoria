"use strict";
(self["webpackChunkangularapp"] = self["webpackChunkangularapp"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav/nav.component */ 5120);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);





const routes = [{
  path: 'nav',
  component: _nav_nav_component__WEBPACK_IMPORTED_MODULE_0__.NavComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav/nav.component */ 5120);



class AppComponent {
  constructor() {
    this.title = 'angularapp';
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 4,
    vars: 0,
    consts: [["role", "banner"], ["role", "main", 1, "content"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _nav_nav_component__WEBPACK_IMPORTED_MODULE_0__.NavComponent],
    styles: ["[_nghost-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n    margin: 8px 0;\n  }\n\n  p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .spacer[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n\n  .toolbar[_ngcontent-%COMP%] {\n    \n\n\n\n\n\n\n    height: 80px;  \n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0 16px;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 20px auto 32px;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%] {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: #888;\n  }\n\n  .card-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  svg#rocket[_ngcontent-%COMP%] {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    height: calc(100vh - 95px);\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a[_ngcontent-%COMP%]:hover {\n    color: #125699;\n  }\n\n  .terminal[_ngcontent-%COMP%] {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal[_ngcontent-%COMP%]::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link[_ngcontent-%COMP%]:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%] {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27,31,35,.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]:hover {\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n    border-color: rgba(27,31,35,.35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n  \n\n  @media screen and (max-width: 767px) {\n    .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n\n    .card[_ngcontent-%COMP%]:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      display: none;\n      visibility: hidden;\n    }\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwSkFBMEo7SUFDMUosZUFBZTtJQUNmLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsbUNBQW1DO0lBQ25DLGtDQUFrQztFQUNwQzs7RUFFQTs7Ozs7O0lBTUUsYUFBYTtFQUNmOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsT0FBTztFQUNUOztFQUVBO0lBQ0U7Ozs7OzBCQUtzQjtJQUN0QixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsZ0JBQWdCO0VBQ2xCOztFQUVBOzs7Ozs7Ozs7Ozs7Ozs7S0FlRzs7RUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWtDRzs7RUFFSDtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7RUFDWjs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0VBRUE7OztJQUdFLGNBQWM7SUFDZCxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usb0VBQW9FO0lBQ3BFLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsU0FBUztFQUNYOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHdFQUF3RTtJQUN4RSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSwrQkFBK0I7SUFDL0IsMkNBQTJDO0VBQzdDOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUNBQW1DO0lBQ25DLGtCQUFrQjtJQUNsQiw4REFBOEQ7SUFDOUQsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLDhEQUE4RDtJQUM5RCxnQ0FBZ0M7SUFDaEMsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBLHNCQUFzQjtFQUN0QjtJQUNFOztNQUVFLFdBQVc7SUFDYjs7SUFFQTtNQUNFLFlBQVk7TUFDWixhQUFhO0lBQ2Y7O0lBRUE7TUFDRSxpQkFBaUI7SUFDbkI7O0lBRUE7TUFDRSxZQUFZO01BQ1osd0JBQXdCO0lBQzFCO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLGFBQWE7TUFDYixrQkFBa0I7SUFDcEI7RUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICB9XHJcblxyXG4gIGgxLFxyXG4gIGgyLFxyXG4gIGgzLFxyXG4gIGg0LFxyXG4gIGg1LFxyXG4gIGg2IHtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC5zcGFjZXIge1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcblxyXG4gIC50b29sYmFyIHtcclxuICAgIC8qIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwOyAgXHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXHJcbiAgICBoZWlnaHQ6IDgwcHg7ICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuXHJcbiAgLnRvb2xiYXIgaW1nIHtcclxuICAgIG1hcmdpbjogMCAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvIDMycHg7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBzdmcubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG5cclxuICBzdmcubWF0ZXJpYWwtaWNvbnM6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICB9XHJcblxyXG4gIC5jYXJkIHN2Zy5tYXRlcmlhbC1pY29ucyBwYXRoIHtcclxuICAgIGZpbGw6ICM4ODg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICB9XHJcblxyXG4gIC8qIC5jYXJkIHtcclxuICAgIGFsbDogdW5zZXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIG1hcmdpbjogMCA4cHggMTZweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgfSAqL1xyXG5cclxuICAvKiAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAuY2FyZC5jYXJkLXNtYWxsIHtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIHdpZHRoOiAxNjhweDtcclxuICB9XHJcblxyXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTdweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIC5tYXRlcmlhbC1pY29ucyBwYXRoIHtcclxuICAgIGZpbGw6IHJnYigxMDUsIDEwMywgMTAzKTtcclxuICB9XHJcblxyXG4gIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtaW4td2lkdGg6IDMwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC5jYXJkLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcclxuICB9ICovXHJcblxyXG4gIHN2ZyNyb2NrZXQge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtMTBweDtcclxuICAgIHRvcDogLTI0cHg7XHJcbiAgfVxyXG5cclxuICBzdmcjcm9ja2V0LXNtb2tlIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDk1cHgpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDE4MHB4O1xyXG4gICAgei1pbmRleDogLTEwO1xyXG4gIH1cclxuXHJcbiAgYSxcclxuICBhOnZpc2l0ZWQsXHJcbiAgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzE5NzZkMjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcblxyXG4gIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICMxMjU2OTk7XHJcbiAgfVxyXG5cclxuICAudGVybWluYWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNDVweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNik7XHJcbiAgfVxyXG5cclxuICAudGVybWluYWw6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlxcMjAyMiBcXDIwMjIgXFwyMDIyXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTgsIDU4LCA1OCk7XHJcbiAgICBjb2xvcjogI2MyYzNjNDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDA7XHJcbiAgICB0ZXh0LWluZGVudDogNHB4O1xyXG4gIH1cclxuXHJcbiAgLnRlcm1pbmFsIHByZSB7XHJcbiAgICBmb250LWZhbWlseTogU0ZNb25vLVJlZ3VsYXIsQ29uc29sYXMsTGliZXJhdGlvbiBNb25vLE1lbmxvLG1vbm9zcGFjZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDAgMXJlbSAxcmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLmNpcmNsZS1saW5rIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxuICAgIHRyYW5zaXRpb246IDFzIGVhc2Utb3V0O1xyXG4gIH1cclxuXHJcbiAgLmNpcmNsZS1saW5rOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNXJlbSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBmb290ZXIgYSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5naXRodWItc3Rhci1iYWRnZSB7XHJcbiAgICBjb2xvcjogIzI0MjkyZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LDMxLDM1LC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmYWZiZmMsI2VmZjNmNiA5MCUpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5cclxuICAuZ2l0aHViLXN0YXItYmFkZ2U6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsI2YwZjNmNiwjZTZlYmYxIDkwJSk7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjcsMzEsMzUsLjM1KTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0uNWVtO1xyXG4gIH1cclxuXHJcbiAgLmdpdGh1Yi1zdGFyLWJhZGdlIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIH1cclxuXHJcbiAgc3ZnI2Nsb3VkcyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IC0xNjBweDtcclxuICAgIGxlZnQ6IC0yMzBweDtcclxuICAgIHotaW5kZXg6IC0xMDtcclxuICAgIHdpZHRoOiAxOTIwcHg7XHJcbiAgfVxyXG5cclxuICAvKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuY2FyZC1jb250YWluZXIgPiAqOm5vdCguY2lyY2xlLWxpbmspICxcclxuICAgIC50ZXJtaW5hbCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcclxuICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogNzJweDtcclxuICAgIH1cclxuXHJcbiAgICBzdmcjcm9ja2V0LXNtb2tlIHtcclxuICAgICAgcmlnaHQ6IDEyMHB4O1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgc3ZnI3JvY2tldC1zbW9rZSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-svg-icon */ 1291);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav/nav.component */ 5120);
/* harmony import */ var src_information_information_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/information/information.module */ 9019);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);










class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, angular_svg_icon__WEBPACK_IMPORTED_MODULE_7__.AngularSvgIconModule.forRoot(), src_information_information_module__WEBPACK_IMPORTED_MODULE_3__.InformationModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__.NavComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, angular_svg_icon__WEBPACK_IMPORTED_MODULE_7__.AngularSvgIconModule, src_information_information_module__WEBPACK_IMPORTED_MODULE_3__.InformationModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule]
  });
})();

/***/ }),

/***/ 5935:
/*!*********************************************************!*\
  !*** ./src/app/material.model/material.model.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialModelModule: () => (/* binding */ MaterialModelModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);




class MaterialModelModule {
  static #_ = this.ɵfac = function MaterialModelModule_Factory(t) {
    return new (t || MaterialModelModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MaterialModelModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModelModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule],
    exports: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule]
  });
})();

/***/ }),

/***/ 5120:
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavComponent: () => (/* binding */ NavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-svg-icon */ 1291);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);



const _c0 = function () {
  return {
    "width.px": 90,
    "height.px": 90
  };
};
const _c1 = function () {
  return ["PersonalData"];
};
const _c2 = function () {
  return ["SummaryListData"];
};
const _c3 = function () {
  return ["EducationListData"];
};
const _c4 = function () {
  return ["ExperienceListData"];
};
const _c5 = function () {
  return ["PersonalReferenceListData"];
};
const _c6 = function () {
  return ["FullInformation"];
};
class NavComponent {
  constructor(_registry) {
    this._registry = _registry;
  }
  ngOnInit() {
    this._registry.loadSvg("/assets/imgVictorSVGsvg.svg", "vic");
  }
  static #_ = this.ɵfac = function NavComponent_Factory(t) {
    return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_svg_icon__WEBPACK_IMPORTED_MODULE_1__.SvgIconRegistryService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NavComponent,
    selectors: [["app-nav"]],
    decls: 31,
    vars: 15,
    consts: [[1, "container", 2, "background-color", "#f7f8f8"], [1, "row", "justify-content-md-center"], [1, "col"], ["src", "vic", 3, "svgStyle", "stretch"], [1, "dropdown", 2, "top", "25px"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-outline-primary", "dropdown-toggle", "dropdown-toggle-split"], [1, "dropdown-menu"], [1, "dropdown-item", 3, "routerLink"], [1, "dropdown-divider"]],
    template: function NavComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "svg-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "div", 4)(7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Menu de Opciones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 6)(10, "li")(11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Datos Personales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li")(14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Objetivos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li")(17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Educaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li")(20, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Experiencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li")(23, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Referencias Personales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "hr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li")(28, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Informaci\u00F3n Completa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0))("stretch", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c6));
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, angular_svg_icon__WEBPACK_IMPORTED_MODULE_1__.SvgIconComponent],
    styles: [".spacer[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksT0FBTztFQUNUIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlciB7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 1420:
/*!****************************************!*\
  !*** ./src/enviroments/environment.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  myAppUrl: "https://localhost:7206/"
};

/***/ }),

/***/ 3571:
/*!**********************************************************************************!*\
  !*** ./src/information/Services/EducationData/education-data.service.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EducationDataServiceService: () => (/* binding */ EducationDataServiceService)
/* harmony export */ });
/* harmony import */ var _enviroments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../enviroments/environment */ 1420);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);



class EducationDataServiceService {
  constructor(http) {
    this.http = http;
    this.myAppUrl = _enviroments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.myAppUrl;
    this.myApiUrl = "api/EducationData";
  }
  getListPersonalData() {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }
  static #_ = this.ɵfac = function EducationDataServiceService_Factory(t) {
    return new (t || EducationDataServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: EducationDataServiceService,
    factory: EducationDataServiceService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5134:
/*!************************************************************************************!*\
  !*** ./src/information/Services/ExperienceData/experience-data.service.service.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExperienceDataServiceService: () => (/* binding */ ExperienceDataServiceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _enviroments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../enviroments/environment */ 1420);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);





let ExperienceDataServiceService = class ExperienceDataServiceService {
  constructor(http) {
    this.http = http;
    this.myAppUrl = _enviroments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.myAppUrl;
    this.myApiUrl = "api/ExperienceData";
  }
  getListExperienceData() {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }
  static #_ = this.ɵfac = function ExperienceDataServiceService_Factory(t) {
    return new (t || ExperienceDataServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ExperienceDataServiceService,
    factory: ExperienceDataServiceService.ɵfac,
    providedIn: 'root'
  });
};
ExperienceDataServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
})], ExperienceDataServiceService);

/***/ }),

/***/ 1658:
/*!********************************************************************************!*\
  !*** ./src/information/Services/PersonalData/personal-data.service.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonalDataServiceService: () => (/* binding */ PersonalDataServiceService)
/* harmony export */ });
/* harmony import */ var src_enviroments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/enviroments/environment */ 1420);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);



class PersonalDataServiceService {
  constructor(http) {
    this.http = http;
    this.myAppUrl = src_enviroments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.myAppUrl;
    this.myApiUrl = "api/PersonalData";
  }
  getListPersonalData() {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }
  static #_ = this.ɵfac = function PersonalDataServiceService_Factory(t) {
    return new (t || PersonalDataServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: PersonalDataServiceService,
    factory: PersonalDataServiceService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7761:
/*!***************************************************************************************************!*\
  !*** ./src/information/Services/PersonalReferenceData/personal-reference-data.service.service.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonalReferenceDataServiceService: () => (/* binding */ PersonalReferenceDataServiceService)
/* harmony export */ });
/* harmony import */ var src_enviroments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/enviroments/environment */ 1420);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);



class PersonalReferenceDataServiceService {
  constructor(http) {
    this.http = http;
    this.myAppUrl = src_enviroments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.myAppUrl;
    this.myApiUrl = "api/PersonalReference";
  }
  getListPersonalReferenceData() {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }
  static #_ = this.ɵfac = function PersonalReferenceDataServiceService_Factory(t) {
    return new (t || PersonalReferenceDataServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: PersonalReferenceDataServiceService,
    factory: PersonalReferenceDataServiceService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4870:
/*!******************************************************************************!*\
  !*** ./src/information/Services/SummaryData/summary-data.service.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SummaryDataServiceService: () => (/* binding */ SummaryDataServiceService)
/* harmony export */ });
/* harmony import */ var src_enviroments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/enviroments/environment */ 1420);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);



class SummaryDataServiceService {
  constructor(http) {
    this.http = http;
    this.myAppUrl = src_enviroments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.myAppUrl;
    this.myApiUrl = "api/SummaryData";
  }
  getListPersonalData() {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }
  static #_ = this.ɵfac = function SummaryDataServiceService_Factory(t) {
    return new (t || SummaryDataServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: SummaryDataServiceService,
    factory: SummaryDataServiceService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4691:
/*!****************************************************************************************!*\
  !*** ./src/information/component/education-data-list/education-data-list.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EducationDataListComponent: () => (/* binding */ EducationDataListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _Services_EducationData_education_data_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../Services/EducationData/education-data.service.service */ 3571);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _education_data_education_data_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../education-data/education-data.component */ 3707);




function EducationDataListComponent_app_education_data_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-education-data", 4);
  }
  if (rf & 2) {
    const education_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("educationData", education_r1);
  }
}
class EducationDataListComponent {
  constructor(_educationData) {
    this._educationData = _educationData;
    this.listEducationData = [];
  }
  ngOnInit() {
    this._educationData.getListPersonalData().subscribe(data => {
      data.forEach(element => {
        if (element.finishDate != null) {
          var sfinishedDate = element.finishDate.split("/");
          var finishedDate = new Date(parseInt(sfinishedDate[2]), parseInt(sfinishedDate[1]), parseInt(sfinishedDate[0])).toLocaleDateString('en-us', {
            year: 'numeric'
          });
          element.finishDate = finishedDate.toString();
        }
      });
      this.listEducationData = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }
  static #_ = this.ɵfac = function EducationDataListComponent_Factory(t) {
    return new (t || EducationDataListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_Services_EducationData_education_data_service_service__WEBPACK_IMPORTED_MODULE_0__.EducationDataServiceService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: EducationDataListComponent,
    selectors: [["app-education-data-list"]],
    decls: 5,
    vars: 1,
    consts: [[1, "card"], [1, "card-body"], [1, "titulo", "text-center"], [3, "educationData", 4, "ngFor", "ngForOf"], [3, "educationData"]],
    template: function EducationDataListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "EDUCACI\u00D3N");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, EducationDataListComponent_app_education_data_4_Template, 1, 1, "app-education-data", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.listEducationData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _education_data_education_data_component__WEBPACK_IMPORTED_MODULE_1__.EducationDataComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3707:
/*!******************************************************************************!*\
  !*** ./src/information/component/education-data/education-data.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EducationDataComponent: () => (/* binding */ EducationDataComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 8497);



class EducationDataComponent {
  constructor() {}
  ngOnInit() {}
  styles() {
    var institutionString = this.educationData.institution;
    if (institutionString.includes("Salle")) {
      return {
        'background-image': 'url("./../../../assets/salle.png")',
        'background-size': 'cover'
      };
    }
    if (institutionString.includes("Interamericano")) {
      return {
        'background-image': 'url("./../../../assets/colegioInteramericano.png")',
        'background-size': 'cover'
      };
    }
    if (institutionString.includes("Angular")) {
      return {
        'background-image': 'url("./../../../assets/angular.png")',
        'background-size': 'cover'
      };
    }
    if (institutionString.includes("Sena")) {
      return {
        'background-image': 'url("./../../../assets/sena.png")',
        'background-size': 'cover'
      };
    }
    if (institutionString.includes("Udemy")) {
      return {
        'background-image': 'url("./../../../assets/udemy.png")',
        'background-size': 'cover'
      };
    }
    if (institutionString.includes("KOE")) {
      return {
        'background-image': 'url("./../../../assets/koe.png")',
        'background-size': 'cover'
      };
    }
    if (institutionString.includes("Coursera")) {
      return {
        'background-image': 'url("./../../../assets/coursera.png")',
        'background-size': 'cover'
      };
    }
    return undefined;
  }
  static #_ = this.ɵfac = function EducationDataComponent_Factory(t) {
    return new (t || EducationDataComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: EducationDataComponent,
    selectors: [["app-education-data"]],
    inputs: {
      educationData: "educationData"
    },
    decls: 14,
    vars: 5,
    consts: [[1, "card"], [1, "card-body"], [1, "mat-card"], ["mat-card-avatar", "", 3, "ngStyle"], [1, "mat-card-title"], [1, "mat-card-subtitle"]],
    template: function EducationDataComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card", 2)(3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-subtitle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content")(12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.styles());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.educationData.institution);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.educationData.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.educationData.finishDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.educationData.summary);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardAvatar, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle],
    styles: [".mat-card[_ngcontent-%COMP%]{\n    background-color:rgba(220, 220, 220, 0.699);\n}\n\n.mat-card-title[_ngcontent-%COMP%]{\n    color: blue;\n}\n\n.mat-card-subtitle[_ngcontent-%COMP%]{\n    color: black;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9pbmZvcm1hdGlvbi9jb21wb25lbnQvZWR1Y2F0aW9uLWRhdGEvZWR1Y2F0aW9uLWRhdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjIwLCAyMjAsIDIyMCwgMC42OTkpO1xyXG59XHJcblxyXG4ubWF0LWNhcmQtdGl0bGV7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxufVxyXG5cclxuLm1hdC1jYXJkLXN1YnRpdGxle1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3311:
/*!**************************************************************************************!*\
  !*** ./src/information/component/experien-data-list/experien-data-list.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExperienDataListComponent: () => (/* binding */ ExperienDataListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _Services_ExperienceData_experience_data_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../Services/ExperienceData/experience-data.service.service */ 5134);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _experience_data_experience_data_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../experience-data/experience-data.component */ 911);




function ExperienDataListComponent_app_experience_data_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-experience-data", 4);
  }
  if (rf & 2) {
    const experience_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("experienceData", experience_r1);
  }
}
class ExperienDataListComponent {
  constructor(_experienceData) {
    this._experienceData = _experienceData;
    this.listExperienceData = [];
  }
  ngOnInit() {
    this._experienceData.getListExperienceData().subscribe(data => {
      this.listExperienceData = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }
  static #_ = this.ɵfac = function ExperienDataListComponent_Factory(t) {
    return new (t || ExperienDataListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_Services_ExperienceData_experience_data_service_service__WEBPACK_IMPORTED_MODULE_0__.ExperienceDataServiceService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ExperienDataListComponent,
    selectors: [["app-experien-data-list"]],
    decls: 6,
    vars: 1,
    consts: [[1, "card"], [1, "card-body"], [1, "titulo", "text-center"], [3, "experienceData", 4, "ngFor", "ngForOf"], [3, "experienceData"]],
    template: function ExperienDataListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2)(3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "EXPERIENCIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ExperienDataListComponent_app_experience_data_5_Template, 1, 1, "app-experience-data", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.listExperienceData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _experience_data_experience_data_component__WEBPACK_IMPORTED_MODULE_1__.ExperienceDataComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 911:
/*!********************************************************************************!*\
  !*** ./src/information/component/experience-data/experience-data.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExperienceDataComponent: () => (/* binding */ ExperienceDataComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 8497);




function ExperienceDataComponent_p_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Tel\u00E9fono: ", ctx_r0.experienceData.phone, "");
  }
}
function ExperienceDataComponent_p_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("URL: ", ctx_r1.experienceData.url, "");
  }
}
function ExperienceDataComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 15);
  }
}
function ExperienceDataComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const detail_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00B0 ", detail_r6.detail, "");
  }
}
function ExperienceDataComponent_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 17);
  }
}
function ExperienceDataComponent_mat_card_26_th_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 15);
  }
}
function ExperienceDataComponent_mat_card_26_td_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const skil_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00B0 ", skil_r11.skil, "");
  }
}
function ExperienceDataComponent_mat_card_26_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 17);
  }
}
function ExperienceDataComponent_mat_card_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 6)(1, "mat-card-content")(2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Logros:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExperienceDataComponent_mat_card_26_th_7_Template, 1, 0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExperienceDataComponent_mat_card_26_td_8_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExperienceDataComponent_mat_card_26_tr_9_Template, 1, 0, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r5.visible);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r5.skillsDataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r5.skillsDisplayColumns);
  }
}
class ExperienceDataComponent {
  constructor() {
    this.visible = true;
    //datasources tables
    this.detailSummaryDataSource = [];
    this.skillsDataSource = [];
    //displayColumns
    this.detailSummaryDisplayColumns = ['detail'];
    this.skillsDisplayColumns = ['skil'];
  }
  ngOnInit() {
    let startDate;
    let finishDate;
    if (this.experienceData.finishDate != null) {
      var sfinishedDate = this.experienceData.finishDate.split("/");
      var finishedDate = new Date(parseInt(sfinishedDate[2]), parseInt(sfinishedDate[1]), parseInt(sfinishedDate[0])).toLocaleDateString('es-co', {
        year: 'numeric',
        month: 'long'
      });
      this.experienceData.finishDate = finishedDate.toString().toUpperCase();
    }
    if (this.experienceData.startDate != null) {
      var sstartDate = this.experienceData.startDate.split("/");
      var startedDate = new Date(parseInt(sstartDate[2]), parseInt(sstartDate[1]), parseInt(sstartDate[0])).toLocaleDateString('es-co', {
        year: 'numeric',
        month: 'long'
      });
      this.experienceData.startDate = startedDate.toString().toUpperCase();
    }
    this.detailSummaryDataSource = this.experienceData.detailSummary;
    this.skillsDataSource = this.experienceData.skills;
  }
  toggle() {
    this.visible = !this.visible;
  }
  static #_ = this.ɵfac = function ExperienceDataComponent_Factory(t) {
    return new (t || ExperienceDataComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ExperienceDataComponent,
    selectors: [["app-experience-data"]],
    inputs: {
      experienceData: "experienceData"
    },
    decls: 30,
    vars: 11,
    consts: [[1, "card"], [1, "card-body"], [1, "mat-card"], [1, "mat-card-title"], [1, "mat-card-subtitle"], [4, "ngIf"], [1, "mat-card", 3, "hidden"], ["fixedLayout", "", 1, "matTable", 3, "dataSource"], ["matColumnDef", "detail"], ["mat-header-cell", "", 4, "matColumnDef"], ["mat-cell", "", 4, "matCellDef"], ["class", "matTr", "mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-card", 3, "hidden", 4, "ngIf"], ["align", "end"], ["mat-button", "", 1, "btn", "btn-outline-primary", 3, "click"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-row", "", 1, "matTr"], ["matColumnDef", "skil"], ["mat-header-cell", "", 4, "matHeaderCellDef"]],
    template: function ExperienceDataComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card", 2)(3, "mat-card-header")(4, "mat-card-title", 3)(5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content")(10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ExperienceDataComponent_p_13_Template, 3, 1, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ExperienceDataComponent_p_14_Template, 3, 1, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card", 6)(17, "mat-card-content")(18, "mat-card-subtitle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ExperienceDataComponent_th_23_Template, 1, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ExperienceDataComponent_td_24_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ExperienceDataComponent_tr_25_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ExperienceDataComponent_mat_card_26_Template, 10, 3, "mat-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card-actions", 13)(28, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperienceDataComponent_Template_button_click_28_listener() {
          return ctx.toggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Detalles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.experienceData.enterprise);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.experienceData.startDate, " - ", ctx.experienceData.finishDate, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cargo: ", ctx.experienceData.position, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.experienceData.phone != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.experienceData.url != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.experienceData.summary);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.detailSummaryDataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.detailSummaryDisplayColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.experienceData.skills != null);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRow, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardTitle],
    styles: [".mat-card[_ngcontent-%COMP%]{\n    background-color:rgba(220, 220, 220, 0.699);\n}\n\n.mat-card-title[_ngcontent-%COMP%]{\n    color: blue;\n}\n\n.mat-card-subtitle[_ngcontent-%COMP%]{\n    color: black;\n}\n\n.matTable[_ngcontent-%COMP%]{\n    background-color:#80bdee;\n}\n\n.mat-column-detail[_ngcontent-%COMP%]{\n    color: black;\n    display: flex;\n}\n\n.mat-column-skil[_ngcontent-%COMP%]{\n    color: black;\n    display:flex;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9pbmZvcm1hdGlvbi9jb21wb25lbnQvZXhwZXJpZW5jZS1kYXRhL2V4cGVyaWVuY2UtZGF0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjIwLCAyMjAsIDIyMCwgMC42OTkpO1xyXG59XHJcblxyXG4ubWF0LWNhcmQtdGl0bGV7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxufVxyXG5cclxuLm1hdC1jYXJkLXN1YnRpdGxle1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubWF0VGFibGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM4MGJkZWU7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWRldGFpbHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLXNraWx7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3253:
/*!********************************************************************************!*\
  !*** ./src/information/component/fullinformation/fullinformation.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FullinformationComponent: () => (/* binding */ FullinformationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _personal_data_personal_data_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../personal-data/personal-data.component */ 7554);
/* harmony import */ var _experien_data_list_experien_data_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../experien-data-list/experien-data-list.component */ 3311);
/* harmony import */ var _summary_data_list_summary_data_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../summary-data-list/summary-data-list.component */ 2724);
/* harmony import */ var _education_data_list_education_data_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../education-data-list/education-data-list.component */ 4691);
/* harmony import */ var _personal_reference_data_list_personal_reference_data_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../personal-reference-data-list/personal-reference-data-list.component */ 6767);






class FullinformationComponent {
  static #_ = this.ɵfac = function FullinformationComponent_Factory(t) {
    return new (t || FullinformationComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: FullinformationComponent,
    selectors: [["app-fullinformation"]],
    decls: 5,
    vars: 0,
    template: function FullinformationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-personal-data")(1, "app-summary-data-list")(2, "app-education-data-list")(3, "app-experien-data-list")(4, "app-personal-reference-data-list");
      }
    },
    dependencies: [_personal_data_personal_data_component__WEBPACK_IMPORTED_MODULE_0__.PersonalDataComponent, _experien_data_list_experien_data_list_component__WEBPACK_IMPORTED_MODULE_1__.ExperienDataListComponent, _summary_data_list_summary_data_list_component__WEBPACK_IMPORTED_MODULE_2__.SummaryDataListComponent, _education_data_list_education_data_list_component__WEBPACK_IMPORTED_MODULE_3__.EducationDataListComponent, _personal_reference_data_list_personal_reference_data_list_component__WEBPACK_IMPORTED_MODULE_4__.PersonalReferenceDataListComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7554:
/*!****************************************************************************!*\
  !*** ./src/information/component/personal-data/personal-data.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonalDataComponent: () => (/* binding */ PersonalDataComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _Services_PersonalData_personal_data_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../Services/PersonalData/personal-data.service.service */ 1658);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);



function PersonalDataComponent_tr_6_tr_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 8)(1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const mail_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r2.backGroundClass(false));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Email", i_r4 + 1, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r2.backGroundClass(false));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](mail_r3);
  }
}
function PersonalDataComponent_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "table", 3)(2, "tbody")(3, "tr")(4, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Nombre: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tr")(9, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Edad: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tr")(14, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Fecha de Nacimiento: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "tr")(19, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Lugar de Nacimiento: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "tr")(24, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Documento de Identidad: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "tr")(29, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Direcci\u00F3n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "tr")(34, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Tel\u00E9fono: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, PersonalDataComponent_tr_6_tr_38_Template, 5, 4, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r0.backGroundClass(true));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r0.backGroundClass(true));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", data_r1.name, " ", data_r1.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r0.backGroundClass(false));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r0.backGroundClass(false));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r1.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r0.backGroundClass(true));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r0.backGroundClass(true));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r1.bornDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r0.backGroundClass(false));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r0.backGroundClass(false));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r1.bornPlace);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r0.backGroundClass(true));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r0.backGroundClass(true));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r1.idDocument);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r0.backGroundClass(false));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r0.backGroundClass(false));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r1.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r0.backGroundClass(true));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r0.backGroundClass(true));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r1.celPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", data_r1.email);
  }
}
class PersonalDataComponent {
  constructor(_personalData) {
    this._personalData = _personalData;
    this.listPersonalData = [];
  }
  ngOnInit() {
    this._personalData.getListPersonalData().subscribe(data => {
      this.listPersonalData = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }
  backGroundClass(odd) {
    if (odd) {
      return {
        'background-color': 'rgba(220, 220, 220, 0.699)'
      };
    } else {
      return {
        'background-color': '#80bdee'
      };
    }
  }
  static #_ = this.ɵfac = function PersonalDataComponent_Factory(t) {
    return new (t || PersonalDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Services_PersonalData_personal_data_service_service__WEBPACK_IMPORTED_MODULE_0__.PersonalDataServiceService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: PersonalDataComponent,
    selectors: [["app-personal-data"]],
    decls: 7,
    vars: 1,
    consts: [[1, "card"], [1, "card-body"], [1, "titulo", "text-center"], [1, "table"], [4, "ngFor", "ngForOf"], [3, "ngStyle"], [1, "text-start", 3, "ngStyle"], ["style", "margin-bottom: 0%;padding: 0%;", 4, "ngFor", "ngForOf"], [2, "margin-bottom", "0%", "padding", "0%"]],
    template: function PersonalDataComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "INFORMACI\u00D3N PERSONAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "table", 3)(5, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PersonalDataComponent_tr_6_Template, 39, 23, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listPersonalData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6767:
/*!**********************************************************************************************************!*\
  !*** ./src/information/component/personal-reference-data-list/personal-reference-data-list.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonalReferenceDataListComponent: () => (/* binding */ PersonalReferenceDataListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _Services_PersonalReferenceData_personal_reference_data_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../Services/PersonalReferenceData/personal-reference-data.service.service */ 7761);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _personal_reference_data_personal_reference_data_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../personal-reference-data/personal-reference-data.component */ 7072);




function PersonalReferenceDataListComponent_app_personal_reference_data_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-personal-reference-data", 4);
  }
  if (rf & 2) {
    const personal_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("personalReference", personal_r1);
  }
}
class PersonalReferenceDataListComponent {
  constructor(_personalReference) {
    this._personalReference = _personalReference;
    this.listPersonalReference = [];
  }
  ngOnInit() {
    this._personalReference.getListPersonalReferenceData().subscribe(data => {
      this.listPersonalReference = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }
  static #_ = this.ɵfac = function PersonalReferenceDataListComponent_Factory(t) {
    return new (t || PersonalReferenceDataListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_Services_PersonalReferenceData_personal_reference_data_service_service__WEBPACK_IMPORTED_MODULE_0__.PersonalReferenceDataServiceService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: PersonalReferenceDataListComponent,
    selectors: [["app-personal-reference-data-list"]],
    decls: 5,
    vars: 1,
    consts: [[1, "card"], [1, "card-body"], [1, "titulo", "text-center"], [3, "personalReference", 4, "ngFor", "ngForOf"], [3, "personalReference"]],
    template: function PersonalReferenceDataListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "REFERENCIAS PERSONALES");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, PersonalReferenceDataListComponent_app_personal_reference_data_4_Template, 1, 1, "app-personal-reference-data", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.listPersonalReference);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _personal_reference_data_personal_reference_data_component__WEBPACK_IMPORTED_MODULE_1__.PersonalReferenceDataComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7072:
/*!************************************************************************************************!*\
  !*** ./src/information/component/personal-reference-data/personal-reference-data.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonalReferenceDataComponent: () => (/* binding */ PersonalReferenceDataComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 8497);


class PersonalReferenceDataComponent {
  constructor() {}
  ngOnInit() {}
  backgroundColor(index) {
    if (index % 2 == 0) {
      return {
        'background-color': 'lightgrey'
      };
    } else {
      return {
        'background-color': 'lightblue'
      };
    }
  }
  static #_ = this.ɵfac = function PersonalReferenceDataComponent_Factory(t) {
    return new (t || PersonalReferenceDataComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PersonalReferenceDataComponent,
    selectors: [["app-personal-reference-data"]],
    inputs: {
      personalReference: "personalReference"
    },
    decls: 11,
    vars: 4,
    consts: [[1, "card"], [1, "card-body"], [1, "mat-card"], [1, "mat-card-title"]],
    template: function PersonalReferenceDataComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card", 2)(3, "mat-card-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.personalReference.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.personalReference.celPhone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.personalReference.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.personalReference.occupation);
      }
    },
    dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardTitle],
    styles: [".mat-card[_ngcontent-%COMP%]{\n    background-color:rgba(220, 220, 220, 0.699);\n}\n\n.mat-card-title[_ngcontent-%COMP%]{\n    color: blue;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9pbmZvcm1hdGlvbi9jb21wb25lbnQvcGVyc29uYWwtcmVmZXJlbmNlLWRhdGEvcGVyc29uYWwtcmVmZXJlbmNlLWRhdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyMjAsIDIyMCwgMjIwLCAwLjY5OSk7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC10aXRsZXtcclxuICAgIGNvbG9yOiBibHVlO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2724:
/*!************************************************************************************!*\
  !*** ./src/information/component/summary-data-list/summary-data-list.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SummaryDataListComponent: () => (/* binding */ SummaryDataListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _Services_SummaryData_summary_data_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../Services/SummaryData/summary-data.service.service */ 4870);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../summary/summary.component */ 2437);




function SummaryDataListComponent_app_summary_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-summary", 3);
  }
  if (rf & 2) {
    const summary_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("summaryData", summary_r1);
  }
}
class SummaryDataListComponent {
  constructor(_summaryData) {
    this._summaryData = _summaryData;
    this.listSummaryData = [];
  }
  ngOnInit() {
    this._summaryData.getListPersonalData().subscribe(data => {
      this.listSummaryData = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }
  static #_ = this.ɵfac = function SummaryDataListComponent_Factory(t) {
    return new (t || SummaryDataListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_Services_SummaryData_summary_data_service_service__WEBPACK_IMPORTED_MODULE_0__.SummaryDataServiceService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SummaryDataListComponent,
    selectors: [["app-summary-data-list"]],
    decls: 3,
    vars: 1,
    consts: [[1, "card"], [1, "card-body"], [3, "summaryData", 4, "ngFor", "ngForOf"], [3, "summaryData"]],
    template: function SummaryDataListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SummaryDataListComponent_app_summary_2_Template, 1, 1, "app-summary", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.listSummaryData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _summary_summary_component__WEBPACK_IMPORTED_MODULE_1__.SummaryComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2437:
/*!****************************************************************!*\
  !*** ./src/information/component/summary/summary.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SummaryComponent: () => (/* binding */ SummaryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _Services_SummaryData_summary_data_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../Services/SummaryData/summary-data.service.service */ 4870);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 8497);



class SummaryComponent {
  constructor(_summaryData) {
    this._summaryData = _summaryData;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function SummaryComponent_Factory(t) {
    return new (t || SummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Services_SummaryData_summary_data_service_service__WEBPACK_IMPORTED_MODULE_0__.SummaryDataServiceService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SummaryComponent,
    selectors: [["app-summary"]],
    inputs: {
      summaryData: "summaryData"
    },
    decls: 9,
    vars: 2,
    consts: [[1, "card"], [1, "card-body"], [1, "mat-card"], [1, "card-title"], [1, "card-content"]],
    template: function SummaryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card", 2)(3, "mat-card-header")(4, "mat-card-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-content", 4)(7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.summaryData.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.summaryData.data);
      }
    },
    dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle],
    styles: [".mat-card[_ngcontent-%COMP%]{\n    background-color:rgba(220, 220, 220, 0.699);\n}\n\n.card-title[_ngcontent-%COMP%]{\n    text-align: center;\n    color: blue;\n}\n\n.card-content[_ngcontent-%COMP%]{\n    background-color:#80bdee;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9pbmZvcm1hdGlvbi9jb21wb25lbnQvc3VtbWFyeS9zdW1tYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIyMCwgMjIwLCAyMjAsIDAuNjk5KTtcclxufVxyXG5cclxuLmNhcmQtdGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxufVxyXG5cclxuLmNhcmQtY29udGVudHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzgwYmRlZTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3368:
/*!*******************************************************!*\
  !*** ./src/information/information-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InformationRoutingModule: () => (/* binding */ InformationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _component_personal_data_personal_data_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/personal-data/personal-data.component */ 7554);
/* harmony import */ var _component_fullinformation_fullinformation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/fullinformation/fullinformation.component */ 3253);
/* harmony import */ var _component_experien_data_list_experien_data_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/experien-data-list/experien-data-list.component */ 3311);
/* harmony import */ var _component_summary_data_list_summary_data_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/summary-data-list/summary-data-list.component */ 2724);
/* harmony import */ var _component_education_data_list_education_data_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/education-data-list/education-data-list.component */ 4691);
/* harmony import */ var _component_personal_reference_data_list_personal_reference_data_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/personal-reference-data-list/personal-reference-data-list.component */ 6767);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);










const routes = [{
  path: 'PersonalData',
  component: _component_personal_data_personal_data_component__WEBPACK_IMPORTED_MODULE_0__.PersonalDataComponent
}, {
  path: 'SummaryListData',
  component: _component_summary_data_list_summary_data_list_component__WEBPACK_IMPORTED_MODULE_3__.SummaryDataListComponent
}, {
  path: 'EducationListData',
  component: _component_education_data_list_education_data_list_component__WEBPACK_IMPORTED_MODULE_4__.EducationDataListComponent
}, {
  path: 'ExperienceListData',
  component: _component_experien_data_list_experien_data_list_component__WEBPACK_IMPORTED_MODULE_2__.ExperienDataListComponent
}, {
  path: 'PersonalReferenceListData',
  component: _component_personal_reference_data_list_personal_reference_data_list_component__WEBPACK_IMPORTED_MODULE_5__.PersonalReferenceDataListComponent
}, {
  path: 'FullInformation',
  component: _component_fullinformation_fullinformation_component__WEBPACK_IMPORTED_MODULE_1__.FullinformationComponent
}];
class InformationRoutingModule {
  static #_ = this.ɵfac = function InformationRoutingModule_Factory(t) {
    return new (t || InformationRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: InformationRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](InformationRoutingModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 9019:
/*!***********************************************!*\
  !*** ./src/information/information.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InformationModule: () => (/* binding */ InformationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _component_personal_data_personal_data_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/personal-data/personal-data.component */ 7554);
/* harmony import */ var _component_summary_summary_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/summary/summary.component */ 2437);
/* harmony import */ var _component_education_data_education_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/education-data/education-data.component */ 3707);
/* harmony import */ var _component_fullinformation_fullinformation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/fullinformation/fullinformation.component */ 3253);
/* harmony import */ var _information_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./information-routing.module */ 3368);
/* harmony import */ var _component_experience_data_experience_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/experience-data/experience-data.component */ 911);
/* harmony import */ var _component_personal_reference_data_personal_reference_data_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/personal-reference-data/personal-reference-data.component */ 7072);
/* harmony import */ var _component_experien_data_list_experien_data_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/experien-data-list/experien-data-list.component */ 3311);
/* harmony import */ var _app_material_model_material_model_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../app/material.model/material.model.module */ 5935);
/* harmony import */ var _component_summary_data_list_summary_data_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/summary-data-list/summary-data-list.component */ 2724);
/* harmony import */ var _component_education_data_list_education_data_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/education-data-list/education-data-list.component */ 4691);
/* harmony import */ var _component_personal_reference_data_list_personal_reference_data_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/personal-reference-data-list/personal-reference-data-list.component */ 6767);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1699);
















class InformationModule {
  static #_ = this.ɵfac = function InformationModule_Factory(t) {
    return new (t || InformationModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
    type: InformationModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, _information_routing_module__WEBPACK_IMPORTED_MODULE_4__.InformationRoutingModule, _app_material_model_material_model_module__WEBPACK_IMPORTED_MODULE_8__.MaterialModelModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](InformationModule, {
    declarations: [_component_personal_data_personal_data_component__WEBPACK_IMPORTED_MODULE_0__.PersonalDataComponent, _component_summary_summary_component__WEBPACK_IMPORTED_MODULE_1__.SummaryComponent, _component_education_data_education_data_component__WEBPACK_IMPORTED_MODULE_2__.EducationDataComponent, _component_experience_data_experience_data_component__WEBPACK_IMPORTED_MODULE_5__.ExperienceDataComponent, _component_personal_reference_data_personal_reference_data_component__WEBPACK_IMPORTED_MODULE_6__.PersonalReferenceDataComponent, _component_fullinformation_fullinformation_component__WEBPACK_IMPORTED_MODULE_3__.FullinformationComponent, _component_experien_data_list_experien_data_list_component__WEBPACK_IMPORTED_MODULE_7__.ExperienDataListComponent, _component_summary_data_list_summary_data_list_component__WEBPACK_IMPORTED_MODULE_9__.SummaryDataListComponent, _component_education_data_list_education_data_list_component__WEBPACK_IMPORTED_MODULE_10__.EducationDataListComponent, _component_personal_reference_data_list_personal_reference_data_list_component__WEBPACK_IMPORTED_MODULE_11__.PersonalReferenceDataListComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, _information_routing_module__WEBPACK_IMPORTED_MODULE_4__.InformationRoutingModule, _app_material_model_material_model_module__WEBPACK_IMPORTED_MODULE_8__.MaterialModelModule]
  });
})();

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map