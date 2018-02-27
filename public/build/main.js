webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\TOM\Documents\GitHub\test\fulhaus\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="All Places" tabIcon="map"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Your Stays" tabIcon="pin"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Favorites" tabIcon="heart"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\TOM\Documents\GitHub\test\fulhaus\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\TOM\Documents\GitHub\test\fulhaus\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Your Stays\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n\n    <img src="https://static1.squarespace.com/static/57e41380e58c62a984015af5/5925cc5803596e075b583f25/5925d3831b10e3761b327932/1497980173837/Expo+1.jpg?format=1000w">\n    <ion-fab right top>\n      <button ion-fab>\n        <ion-icon name="pin"></ion-icon>\n      </button>\n    </ion-fab>\n\n    <ion-item>\n      <ion-icon name="pricetags" item-start large></ion-icon>\n      <h2>All Items</h2>\n      <p>1 Table</p>\n      <p>2 Chairs</p>\n      <p>4 Articles</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="home" item-left large ></ion-icon>\n      <h2>Boston Fünhaus</h2>\n      <p>14 S. Hop Avenue, Madison, WI 53703</p>\n    </ion-item>\n\n    <ion-item>\n      <span item-left>3 Bed</span>\n      <span item-left>4 Rooms</span>\n      <button ion-button icon-left clear item-end>\n        <ion-icon name="book"></ion-icon>\n        Book\n      </button>\n    </ion-item>\n\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\TOM\Documents\GitHub\test\fulhaus\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\TOM\Documents\GitHub\test\fulhaus\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>\n      Favorites Items\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="data:image/jpeg;base64,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">\n      </ion-thumbnail>\n      <h2>Boston Velvet Heaven</h2>\n      <p>Table • 25,99$</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="http://pawprintnews.com/wp-content/uploads/2016/09/Art.jpg">\n      </ion-thumbnail>\n      <h2>New England Hideaway</h2>\n      <p>Painting • 450,99$</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-B0Qpjcv8EDn29ffL9xiNZ0njXoPxeXQ80pRTo-na7H9RoQIl">\n      </ion-thumbnail>\n      <h2>Boston Fünhaus</h2>\n      <p>Chair • 25,99$</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQdKoQayAu9kzpNEua8KQFlIssruW120ho1Mv2P8yNB2fHZeQq0A">\n      </ion-thumbnail>\n      <h2>Boston Velvet Heaven</h2>\n      <p>Table • 25,99$</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="http://pawprintnews.com/wp-content/uploads/2016/09/Art.jpg">\n      </ion-thumbnail>\n      <h2>New England Hideaway</h2>\n      <p>Painting • 450,99$</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfEWB2NA30kyuVhWgZTTuN8MJQOqyhRMK8RjC1IyiuDloFCd9n0Q">\n      </ion-thumbnail>\n      <h2>Boston Fünhaus</h2>\n      <p>Chair • 25,99$</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="https://secure.img1-fg.wfcdn.com/im/60243122/resize-h800%5Ecompr-r85/4037/40372281/Corona+Extendable+Dining+Table.jpg">\n      </ion-thumbnail>\n      <h2>Boston Velvet Heaven</h2>\n      <p>Table • 25,99$</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREN421Rf-4-6hYeeu5zzi32fWFnX2ngmZljX03vPMjoro8qqHsZA">\n      </ion-thumbnail>\n      <h2>New England Hideaway</h2>\n      <p>Painting • 450,99$</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="data:image/jpeg;base64,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">\n      </ion-thumbnail>\n      <h2>Boston Fünhaus</h2>\n      <p>Chair • 48,99$</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\TOM\Documents\GitHub\test\fulhaus\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\TOM\Documents\GitHub\test\fulhaus\src\pages\home\home.html"*/'<ion-content padding>\n  <h2 text-center color="primary">FÜLHAUS</h2>\n  <h3 text-center color="primary">SHOPPABLE STAYS</h3>\n  <ion-card>\n    <img src="https://static1.squarespace.com/static/57e41380e58c62a984015af5/5925cc5803596e075b583f25/5a4e92a9ec212d38914c070b/1515098850126/Copy+of+untitled-0054.jpg?format=750w"/>\n    <div class="card-title">New England</div>\n    <div class="card-subtitle">41 Listings</div>\n  </ion-card>\n\n  <ion-card>\n    <img src="https://static1.squarespace.com/static/57e41380e58c62a984015af5/5925cc5803596e075b583f25/5a4e8a3ef9619a322dc1ed92/1515096684099/unit_408-14.jpg?format=1500w"/>\n    <div class="card-title">Amsterdam</div>\n    <div class="card-subtitle">64 Listings</div>\n  </ion-card>\n\n  <ion-card>\n    <img src="https://static1.squarespace.com/static/57e41380e58c62a984015af5/5925cc5803596e075b583f25/5a4e8a3ef9619a322dc1ed92/1515096684099/unit_408-14.jpg?format=1500w"/>\n    <div class="card-title">Boston</div>\n    <div class="card-subtitle">72 Listings</div>\n  </ion-card>\n\n  <ion-card>\n    <img src="https://static1.squarespace.com/static/57e41380e58c62a984015af5/5925cc5803596e075b583f25/5a4e9290e2c4835f86be96ef/1515098919516/untitled-0079.jpg?format=750w"/>\n    <div class="card-title">New England</div>\n    <div class="card-subtitle">28 Listings</div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\TOM\Documents\GitHub\test\fulhaus\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\TOM\Documents\GitHub\test\fulhaus\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\TOM\Documents\GitHub\test\fulhaus\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map