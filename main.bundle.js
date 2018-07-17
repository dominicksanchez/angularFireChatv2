webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_nav_nav_component__ = __webpack_require__("../../../../../src/app/components/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_friends_friends_component__ = __webpack_require__("../../../../../src/app/components/friends/friends.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_people_people_component__ = __webpack_require__("../../../../../src/app/components/people/people.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_add_friend_add_friend_component__ = __webpack_require__("../../../../../src/app/components/add-friend/add-friend.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_edit_profile_edit_profile_component__ = __webpack_require__("../../../../../src/app/components/edit-profile/edit-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_chat_chat_component__ = __webpack_require__("../../../../../src/app/components/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_people_service__ = __webpack_require__("../../../../../src/app/services/people.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_profile_service__ = __webpack_require__("../../../../../src/app/services/profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Material Component Imports

// Component Imports












// Service Imports




// Project Routes
var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
        data: {
            title: 'FireChatv2 | Login'
        },
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */],
        data: {
            title: 'FireChatv2 | Register'
        }
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__["a" /* HomeComponent */],
        data: {
            title: 'FireChatv2 | Home'
        },
        canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuardService */]]
    },
    {
        path: 'friends',
        component: __WEBPACK_IMPORTED_MODULE_14__components_friends_friends_component__["a" /* FriendsComponent */],
        data: {
            title: 'FireChatv2 | Friends'
        },
        canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuardService */]]
    },
    {
        path: 'people',
        component: __WEBPACK_IMPORTED_MODULE_15__components_people_people_component__["a" /* PeopleComponent */],
        data: {
            title: 'FireChatv2 | People'
        },
        canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuardService */]]
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_17__components_profile_profile_component__["a" /* ProfileComponent */],
        data: {
            title: 'FireChatv2 | Profile'
        },
        canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuardService */]]
    },
    {
        path: 'chat/:id',
        component: __WEBPACK_IMPORTED_MODULE_19__components_chat_chat_component__["a" /* ChatComponent */],
        data: {
            title: 'FireChatv2 | Profile'
        },
        canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuardService */]]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_9__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
// Firebase Setup
var config = {
    apiKey: "AIzaSyCI9qf9mwV5EPF_VDDxQSW0Q8ltLO1cnjI",
    authDomain: "firechatv2.firebaseapp.com",
    databaseURL: "https://firechatv2.firebaseio.com",
    projectId: "firechatv2",
    storageBucket: "firechatv2.appspot.com",
    messagingSenderId: "220814588047"
};
__WEBPACK_IMPORTED_MODULE_6_firebase__["initializeApp"](config);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_friends_friends_component__["a" /* FriendsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_people_people_component__["a" /* PeopleComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_add_friend_add_friend_component__["a" /* AddFriendComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_edit_profile_edit_profile_component__["a" /* EditProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_chat_chat_component__["a" /* ChatComponent */],
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_16__components_add_friend_add_friend_component__["a" /* AddFriendComponent */], __WEBPACK_IMPORTED_MODULE_18__components_edit_profile_edit_profile_component__["a" /* EditProfileComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["E" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["m" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["n" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["o" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["p" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["q" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["r" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["s" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["t" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["u" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["v" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["w" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["x" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["y" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["A" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["z" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["C" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["D" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["F" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["G" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["H" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["I" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_20__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_22__services_people_service__["a" /* PeopleService */], __WEBPACK_IMPORTED_MODULE_23__services_profile_service__["a" /* ProfileService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/add-friend/add-friend.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".addFriend p {\r\n    padding: 10px 0 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-friend/add-friend.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"addFriend\">\r\n    <h3>Add Friend</h3>\r\n    <p>Are you sure do you want send a friend request to Dominick Sanchez?</p>\r\n    <div class=\"tCenter\">\r\n        <button mat-raised-button color=\"primary\" class=\"confirmBtn\" (click)=\"sendFriendRequest()\">Confirm</button>\r\n        <button mat-raised-button color=\"primary\" class=\"cancelBtn\" (click)=\"onNoClick()\">Close</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/add-friend/add-friend.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFriendComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore__ = __webpack_require__("../../../../firebase/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AddFriendComponent = (function () {
    function AddFriendComponent(dialogRef, data, snackBar) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.snackBar = snackBar;
        this.db = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]();
    }
    AddFriendComponent.prototype.ngOnInit = function () {
        this.user_id = localStorage.getItem('user_id');
        this.email = localStorage.getItem('email');
    };
    AddFriendComponent.prototype.onNoClick = function () {
        this.dialogRef.close(0);
    };
    AddFriendComponent.prototype.sendFriendRequest = function () {
        var _this = this;
        var friendEmail = this.data['email'];
        var friendName = friendEmail.split('@')[0];
        var userName = this.email.split('@')[0];
        var docName = (friendName > userName) ? userName + '_' + friendName : friendName + '_' + userName;
        // validate if already added on friends
        this.db.collection('friends').doc(docName).get().then(function (user) {
            if (user.exists) {
                _this.snackBar.open("Error! duplicate friend request.", 'closed', { duration: 4000 });
            }
            else {
                _this.db.collection('friends').doc(docName).set({
                    is_friend: false,
                    sender: userName
                });
                _this.snackBar.open('Friend request was sent', 'closed', { duration: 4000 });
            }
        });
        this.dialogRef.close(1);
    };
    AddFriendComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-friend',
            template: __webpack_require__("../../../../../src/app/components/add-friend/add-friend.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/add-friend/add-friend.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSnackBar */]])
    ], AddFriendComponent);
    return AddFriendComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chatHead {\r\n    background: #3f51b5;\r\n    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\r\n    position: fixed;\r\n    width: 100%;\r\n    top: 0;\r\n    z-index: 999;\r\n    height: 67px;\r\n    text-align: center;\r\n}\r\n\r\n.chatHead p {\r\n    color: #fff;\r\n    font-size: 11px;\r\n}\r\n\r\n.chatHead h1 {\r\n    margin-top: 12px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n}\r\n\r\n.chatHead button {\r\n    background: none;\r\n    border: none;\r\n    position: absolute;\r\n    left: 15px;\r\n    height: 24px;\r\n    top: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n}\r\n\r\n.chatHead button i {\r\n    color: #fff;\r\n}\r\n\r\n.chatPhoto {\r\n    display: inline-block;\r\n    position: absolute; \r\n    right: 15px;\r\n    height: 35px;\r\n    top: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n}\r\n\r\n.chatHead img {\r\n    border-radius: 50%;\r\n}\r\n\r\n.chatPhoto i {\r\n    width: 8px;\r\n    height: 8px;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n    position: absolute;\r\n    bottom: 0px;\r\n    right: -1px;\r\n    border: 1.5px solid #fff;\r\n}\r\n\r\n.chatFooter {\r\n    position: fixed;\r\n    width: 100%;\r\n    bottom: 0;\r\n    text-align: center;\r\n}\r\n\r\n.chatFooter button {\r\n    background: none;\r\n    border: none;\r\n    color: #3f51b5;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    height: 24px;\r\n    margin: auto;\r\n}\r\n\r\n.chatFooter .camera {\r\n    left: 15px;\r\n}\r\n\r\n.chatFooter .like {\r\n    right: 15px;\r\n}\r\n\r\n.chatFooter {\r\n    padding: 15px 0;\r\n    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\r\n}\r\n\r\n.chatFooter input {\r\n    width: calc(100% - 88px);\r\n    border: none;\r\n    color: #333;\r\n}\r\n\r\n.chatFooter button:focus,\r\n.chatFooter input:focus {\r\n    outline: none;\r\n}\r\n\r\n.chatArea {\r\n    margin: 82px 15px 30px;\r\n}\r\n\r\n.leftChat {\r\n    overflow: hidden;\r\n    margin-bottom: 20px;\r\n    clear: both;\r\n}\r\n\r\n.leftChat .pic {\r\n    float: left;\r\n    width: 40px;\r\n}\r\n\r\n.leftChat .message {\r\n    float: left;\r\n    margin-left: 10px;\r\n    color: #333;\r\n    width: calc(100% - 50px);\r\n}\r\n\r\n.leftChat .pic img {\r\n    border-radius: 50%;\r\n}\r\n\r\n.message p {\r\n    background: #eee;\r\n    padding: 10px;\r\n    border-radius: 15px;\r\n    margin-bottom: 5px;\r\n    display: inline-block;\r\n    font-size: 13px;\r\n}\r\n\r\n.message span {\r\n    font-size: 11px;\r\n    display: block;\r\n}\r\n\r\n.rightChat {\r\n    float: right;\r\n    clear: both;\r\n}\r\n\r\n.rightChat .message span {\r\n    text-align: right;\r\n}\r\n\r\n.rightChat .message p {\r\n    background: #3f51b5;\r\n    color: #fff;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chatHead\">\r\n  <button (click)=\"back()\"><i class=\"material-icons\">arrow_back</i></button>\r\n  <h1>James Steve</h1>\r\n  <p>Online now</p>\r\n  <div class=\"chatPhoto\">\r\n    <img src=\"/assets/images/blank-profile.png\" width=\"35\" height=\"35\" alt=\"\">\r\n    <i class=\"online\"></i>\r\n  </div>\r\n</div>\r\n<div class=\"chatArea\">\r\n  <div class=\"leftChat\">\r\n    <div class=\"pic\">\r\n        <img src=\"/assets/images/blank-profile.png\" width=\"40\" height=\"40\" alt=\"\">\r\n    </div>\r\n    <div class=\"message\">\r\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, accusamus dignissimos cumque tenetur non libero quae nulla officiis laboriosam ratione molestiae nam corrupti rerum excepturi voluptatibus adipisci tempora expedita nesciunt.</p>\r\n      <span>10:30 PM</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"rightChat\">\r\n    <div class=\"message\">\r\n      <p>Awesome!</p>\r\n      <span>10:31 PM</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"leftChat\">\r\n    <div class=\"pic\">\r\n        <img src=\"/assets/images/blank-profile.png\" width=\"40\" height=\"40\" alt=\"\">\r\n    </div>\r\n    <div class=\"message\">\r\n      <p>Hello doms!</p>\r\n      <span>10:33 PM</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"rightChat\">\r\n    <div class=\"message\">\r\n      <p>Thank you</p>\r\n      <span>10:35 PM</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"chatFooter\">\r\n  <form action=\"\">\r\n    <button class=\"camera\"><i class=\"material-icons\">local_see</i></button>\r\n    <input type=\"text\" placeholder=\"Type your message\">\r\n    <button class=\"like\"><i class=\"material-icons\">thumb_up</i></button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatComponent = (function () {
    function ChatComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.activatedRoute.params.subscribe(function (params) {
            console.log(params['id']);
        });
    };
    ChatComponent.prototype.back = function () {
        history.back();
    };
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chat',
            template: __webpack_require__("../../../../../src/app/components/chat/chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/edit-profile/edit-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".editProfile h3 {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.editProfile .mat-form-field {\r\n    width: 100%;\r\n}\r\n\r\n.editProfile button {\r\n    line-height: 32px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit-profile/edit-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"editProfile\">\r\n    <h3>Edit Profile</h3>\r\n    <form [formGroup]=\"editProfileForm\" (ngSubmit)=\"editProfile()\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Name\" formControlName=\"name\" [(ngModel)]=\"name\" name=\"name\" type=\"text\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Email\" formControlName=\"email\" [(ngModel)]=\"email\" name=\"email\" type=\"text\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Phone Number\" formControlName=\"phone\" [(ngModel)]=\"phone\" name=\"phone\" type=\"text\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Work\" formControlName=\"work\" [(ngModel)]=\"work\" name=\"work\" type=\"text\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Address\" formControlName=\"address\" [(ngModel)]=\"address\" name=\"address\" type=\"text\">\r\n      </mat-form-field>\r\n    \r\n      <div class=\"tCenter\">\r\n        <button mat-raised-button type=\"submit\" color=\"primary\" class=\"confirmBtn\">Confirm</button>\r\n        <button mat-raised-button type=\"button\" color=\"primary\" class=\"cancelBtn\" (click)=\"onNoClick()\">Close</button>\r\n      </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/edit-profile/edit-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_profile_service__ = __webpack_require__("../../../../../src/app/services/profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var EditProfileComponent = (function () {
    function EditProfileComponent(dialogRef, data, snackBar, profileService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.snackBar = snackBar;
        this.profileService = profileService;
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        this.nameCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required);
        this.emailCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].pattern(EMAIL_REGEX)]);
        this.phoneCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('');
        this.workCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('');
        this.addressCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('');
        this.editProfileForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            name: this.nameCtrl,
            email: this.emailCtrl,
            phone: this.phoneCtrl,
            work: this.workCtrl,
            address: this.addressCtrl
        });
        this.name = this.data.user['name'];
        this.email = this.data.user['email'];
        this.phone = this.data.user['phone'];
        this.work = this.data.user['work'];
        this.address = this.data.user['address'];
    };
    EditProfileComponent.prototype.editProfile = function () {
        var _this = this;
        if (this.editProfileForm.valid) {
            this.profileService.saveUpdate(this.editProfileForm.value).then(function (res) {
                if (res == 1) {
                    _this.snackBar.open('Profile information was updated', 'close', { duration: 4000 });
                    _this.dialogRef.close(1);
                }
                else {
                    _this.snackBar.open('Error! updating your profile information', 'close', { duration: 4000 });
                }
            });
        }
        else {
            this.snackBar.open('Please fill out all the required fields', 'close', { duration: 4000 });
        }
    };
    EditProfileComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-profile',
            template: __webpack_require__("../../../../../src/app/components/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/edit-profile/edit-profile.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_3__services_profile_service__["a" /* ProfileService */]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/friends/friends.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".searchForm {\r\n    margin-top: 67px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/friends/friends.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n\r\n<form class=\"searchForm\">\r\n  <mat-form-field>\r\n    <input type=\"text\" matInput placeholder=\"Search\">\r\n    <mat-icon matSuffix>search</mat-icon>\r\n  </mat-form-field>\r\n</form>\r\n\r\n<ul class=\"chatList\">\r\n  <li>\r\n    <div class=\"chatBlock01\">\r\n      <img src=\"/assets/images/blank-profile.png\" width=\"50\" height=\"50\" alt=\"\">\r\n      <i class=\"online\"></i>\r\n    </div>\r\n    <div class=\"chatBlock02\">\r\n      <strong>Dominick Sanchez</strong>\r\n      <span class=\"email\">dominicksanchez30@gmail.comdominicksanchez30@gmail.comdominicksanchez30@gmail.com</span>\r\n      <button><i class=\"material-icons\">chevron_right</i></button>\r\n    </div>\r\n  </li>\r\n  <li>\r\n    <div class=\"chatBlock01\">\r\n      <img src=\"/assets/images/blank-profile.png\" width=\"50\" height=\"50\" alt=\"\">\r\n      <i class=\"online\"></i>\r\n    </div>\r\n    <div class=\"chatBlock02\">\r\n      <strong>Dominick Sanchez</strong>\r\n      <span class=\"email\">dominicksanchez30@gmail.comdominicksanchez30@gmail.comdominicksanchez30@gmail.com</span>\r\n      <button><i class=\"material-icons\">chevron_right</i></button>\r\n    </div>\r\n  </li>\r\n  <li>\r\n    <div class=\"chatBlock01\">\r\n      <img src=\"/assets/images/blank-profile.png\" width=\"50\" height=\"50\" alt=\"\">\r\n      <i class=\"online\"></i>\r\n    </div>\r\n    <div class=\"chatBlock02\">\r\n      <strong>Dominick Sanchez</strong>\r\n      <span class=\"email\">dominicksanchez30@gmail.comdominicksanchez30@gmail.comdominicksanchez30@gmail.com</span>\r\n      <button><i class=\"material-icons\">chevron_right</i></button>\r\n    </div>\r\n  </li>\r\n  <li>\r\n    <div class=\"chatBlock01\">\r\n      <img src=\"/assets/images/blank-profile.png\" width=\"50\" height=\"50\" alt=\"\">\r\n      <i class=\"online\"></i>\r\n    </div>\r\n    <div class=\"chatBlock02\">\r\n      <strong>Dominick Sanchez</strong>\r\n      <span class=\"email\">dominicksanchez30@gmail.comdominicksanchez30@gmail.comdominicksanchez30@gmail.com</span>\r\n      <button><i class=\"material-icons\">chevron_right</i></button>\r\n    </div>\r\n  </li>\r\n  <li>\r\n    <div class=\"chatBlock01\">\r\n      <img src=\"/assets/images/blank-profile.png\" width=\"50\" height=\"50\" alt=\"\">\r\n      <i class=\"online\"></i>\r\n    </div>\r\n    <div class=\"chatBlock02\">\r\n      <strong>Dominick Sanchez</strong>\r\n      <span class=\"email\">dominicksanchez30@gmail.comdominicksanchez30@gmail.comdominicksanchez30@gmail.com</span>\r\n      <button><i class=\"material-icons\">chevron_right</i></button>\r\n    </div>\r\n  </li>\r\n</ul>\r\n "

/***/ }),

/***/ "../../../../../src/app/components/friends/friends.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FriendsComponent = (function () {
    function FriendsComponent() {
    }
    FriendsComponent.prototype.ngOnInit = function () {
    };
    FriendsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-friends',
            template: __webpack_require__("../../../../../src/app/components/friends/friends.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/friends/friends.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FriendsComponent);
    return FriendsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n\r\n<form class=\"searchForm\">\r\n\r\n<mat-form-field>\r\n  <input type=\"text\" matInput placeholder=\"Search\">\r\n  <mat-icon matSuffix>search</mat-icon>\r\n</mat-form-field>\r\n</form>\r\n\r\n<ul class=\"chatList\">\r\n  <li (click)=\"goChat(1)\">\r\n    <div class=\"chatBlock01\">\r\n      <img src=\"/assets/images/blank-profile.png\" width=\"50\" height=\"50\" alt=\"\">\r\n      <i class=\"online\"></i>\r\n    </div>\r\n    <div class=\"chatBlock02\">\r\n      <strong>Dominick Sanchez</strong>\r\n      <span class=\"lastChat\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt officiis temporibus id sint fugit, aliquid, labore tempora nam blanditiis illo quo. Sint sapiente dicta, veritatis natus quam tenetur doloribus placeat!</span>\r\n      <span class=\"chatDate\">8:30 PM</span>\r\n    </div>\r\n  </li>\r\n  <li (click)=\"goChat(2)\">\r\n    <div class=\"chatBlock01\">\r\n      <img src=\"/assets/images/blank-profile.png\" width=\"50\" height=\"50\" alt=\"\">\r\n      <i class=\"online\"></i>\r\n    </div>\r\n    <div class=\"chatBlock02\">\r\n      <strong>Dominick Sanchez</strong>\r\n      <span class=\"lastChat\">I see, got it.</span>\r\n      <span class=\"chatDate\">12:21 AM</span>\r\n    </div>\r\n  </li>\r\n  <li (click)=\"goChat(3)\">\r\n    <div class=\"chatBlock01\">\r\n      <img src=\"/assets/images/blank-profile.png\" width=\"50\" height=\"50\" alt=\"\">\r\n      <i class=\"online\"></i>\r\n    </div>\r\n    <div class=\"chatBlock02\">\r\n      <strong>Dominick Sanchez</strong>\r\n      <span class=\"lastChat\">Hi doms!</span>\r\n      <span class=\"chatDate\">07:39 AM</span>\r\n    </div>\r\n  </li>\r\n  <li (click)=\"goChat(4)\">\r\n    <div class=\"chatBlock01\">\r\n      <img src=\"/assets/images/blank-profile.png\" width=\"50\" height=\"50\" alt=\"\">\r\n      <i class=\"online\"></i>\r\n    </div>\r\n    <div class=\"chatBlock02\">\r\n      <strong>Dominick Sanchez</strong>\r\n      <span class=\"lastChat\">Your chat app is awesome. Keep it up</span>\r\n      <span class=\"chatDate\">08:45 AM</span>\r\n    </div>\r\n  </li>\r\n  <li (click)=\"goChat(5)\">\r\n    <div class=\"chatBlock01\">\r\n      <img src=\"/assets/images/blank-profile.png\" width=\"50\" height=\"50\" alt=\"\">\r\n      <i class=\"online\"></i>\r\n    </div>\r\n    <div class=\"chatBlock02\">\r\n      <strong>Dominick Sanchez</strong>\r\n      <span class=\"lastChat\">Please help me, I can't fix the issue</span>\r\n      <span class=\"chatDate\">11:15 AM</span>\r\n    </div>\r\n  </li>\r\n</ul>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.goChat = function (id) {
        this.router.navigate(['chat/' + id]);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  .formLogin {\r\n    max-width: 340px;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    padding-top: 90px;\r\n  }\r\n  \r\n  .formLogin .fullWidth {\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  .tRight {\r\n    text-align: right;\r\n  }\r\n  \r\n  .formLogin h1 {\r\n    font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n    font-size: 24px;\r\n    text-align: center;\r\n    color: #333;\r\n    margin: 15px 0 30px 0;\r\n  }\r\n  \r\n  .formLogin .appLogo img {\r\n    width: 80px;\r\n    margin-top: 30px;\r\n  }\r\n\r\n  .formLogin .appLogo {\r\n    text-align: center;\r\n  }\r\n  \r\n  .formLogin h1 img {\r\n    position: relative;\r\n    top: 16px;\r\n  }\r\n  \r\n  .formLogin h1 span {\r\n    margin-right: 20px;\r\n  }\r\n  \r\n  .socialLogin button {\r\n    width: 100%;\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  .button-row {\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  .googleLogin {\r\n    background: #dd4b39;\r\n    color: #fff;\r\n  }\r\n  \r\n  .fbLogin {\r\n    background: #415dae;\r\n    color: #fff;\r\n  }\r\n  \r\n  .accountSignUp p,\r\n  .accountSignUp a {\r\n    font-size: 14px;\r\n    margin-top: 0;\r\n  }\r\n  \r\n  .accountSignUp a {\r\n    text-decoration: none;\r\n    color: #08c;\r\n  }\r\n  \r\n  .formLogin mat-card {\r\n    padding-top: 0;\r\n  }\r\n  \r\n  body {\r\n    background: red;\r\n  }\r\n  @media only screen and (max-width : 767px) {\r\n    .formLogin {\r\n      width: calc(100% - 20px);\r\n      margin: 0 auto;\r\n      padding-top: 20px;\r\n    }\r\n\r\n    .mat-card {\r\n      box-shadow: none !important;\r\n    }\r\n\r\n    .formLogin {\r\n      max-width: none;\r\n    }\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"formLogin\">\r\n  <mat-card>\r\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"loginSubmit()\">\r\n      <p class=\"appLogo\"><img src=\"/assets/images/logo.svg\"></p>\r\n      <h1>Angular FireChat v2</h1>\r\n\r\n      <mat-form-field class=\"fullWidth\">\r\n        <input matInput placeholder=\"Email\" formControlName=\"email\" [(ngModel)]=\"email\" name=\"email\" type=\"text\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"fullWidth\">\r\n        <input matInput placeholder=\"Password\" formControlName=\"password\" [(ngModel)]=\"password\" name=\"password\" type=\"password\">\r\n      </mat-form-field>\r\n\r\n      <div class=\"button-row tRight\">\r\n        <button mat-raised-button color=\"primary\" [disabled]=\"is_authenticating\">Login</button>\r\n      </div>\r\n    </form>\r\n    <div class=\"socialLogin\">\r\n      <button mat-raised-button color=\"primary\" class=\"googleLogin\" (click)=\"loginWithGoogle()\" [disabled]=\"is_authenticating\">Login with Google</button>\r\n      <button mat-raised-button color=\"primary\" class=\"fbLogin\" (click)=\"loginWithFacebook()\" [disabled]=\"is_authenticating\">Login with Facebook</button>\r\n    </div>\r\n    <div class=\"accountSignUp\">\r\n      <p>No account? <a routerLink=\"/register\">Sign Up</a></p>\r\n    </div>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var LoginComponent = (function () {
    function LoginComponent(authService, router, matSnackBar) {
        this.authService = authService;
        this.router = router;
        this.matSnackBar = matSnackBar;
        this.is_authenticating = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.emailCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern(EMAIL_REGEX)]);
        this.passwordCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            email: this.emailCtrl,
            password: this.passwordCtrl
        });
        this.checkUserLoggedIn();
    };
    LoginComponent.prototype.checkUserLoggedIn = function () {
        var _this = this;
        this.authService.checkUserLoggedIn().then(function (user) {
            if (user) {
                _this.router.navigate(['/home']);
            }
        });
    };
    LoginComponent.prototype.loginWithGoogle = function () {
        var _this = this;
        this.is_authenticating = true;
        this.authService.loginWithGoogle().then(function (userData) {
            _this.authService.checkIfAccountExist(userData['userid']).then(function (status) {
                if (status) {
                    _this.router.navigate(['/home']);
                    _this.is_authenticating = false;
                }
                else {
                    _this.authService.saveUser(userData).then(function (response) {
                        _this.router.navigate(['/home']);
                        _this.is_authenticating = false;
                    });
                }
            });
        });
    };
    LoginComponent.prototype.loginWithFacebook = function () {
        this.is_authenticating = true;
        this.authService.loginWithFacebook().then(function (userData) {
            console.log('userData', userData);
        });
    };
    LoginComponent.prototype.loginSubmit = function () {
        var _this = this;
        this.is_authenticating = true;
        if (this.loginForm.valid) {
            this.authService.loginWithUserAndPass(this.email, this.password).then(function (user) {
                if (user['code']) {
                    _this.matSnackBar.open(user['message'], "remove", { duration: 3000 });
                }
                else {
                    if (user['emailVerified']) {
                        _this.router.navigate(['home']);
                    }
                    else {
                        _this.matSnackBar.open('Login failed! please verify your email first.', "remove", { duration: 3000 });
                    }
                }
                _this.is_authenticating = false;
            });
        }
        else {
            this.matSnackBar.open("Incorrect email or password!", "remove", { duration: 3000 });
            this.is_authenticating = false;
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["B" /* MatSnackBar */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\r\n    background: #3f51b5;\r\n    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\r\n    position: fixed;\r\n    width: 100%;\r\n    top: 0;\r\n    z-index: 999;\r\n}\r\n\r\nnav ul li {\r\n    width: 24%;\r\n    display: inline-block;\r\n    text-align: center;\r\n}\r\n\r\nnav ul li a {\r\n    display: block;\r\n    color: #ccc;\r\n    text-decoration: none;\r\n    font-size: 11px;\r\n    padding: 15px 0px 35px;    \r\n    position: relative;\r\n}\r\n\r\nnav ul li a.active-link {\r\n    color: #fff;\r\n    font-weight: bold;\r\n}\r\n\r\nnav ul li a i.material-icons {\r\n    position: absolute;\r\n    width: 24px;\r\n    left: 0;\r\n    right: 0;\r\n    margin: auto;\r\n}\r\n\r\nnav ul li a span {\r\n    position: relative;\r\n    bottom: -25px;\r\n    font-size: 11px;\r\n}\r\n\r\nnav ul li .notifCount {\r\n    display: table-cell;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    background: #ff0000;\r\n    font-size: 10px;\r\n    position: absolute;\r\n    color: #fff !important;\r\n    right: 0;\r\n    left: 31px;\r\n    top: 9px;\r\n    z-index: 999;\r\n    padding: 0 3px;\r\n    font-style: normal;\r\n    margin: auto;\r\n    width: 11px;\r\n    border-radius: 3px;\r\n    font-weight: bold;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\r\n  <ul class=\"navList\">\r\n    <li>\r\n      <a href=\"\" routerLink=\"/home\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{ exact: true }\">\r\n        <i class=\"notifCount chatCount\">34</i>\r\n        <i class=\"material-icons\">chat</i>\r\n        <span>Chats</span></a>\r\n      </li>\r\n    <li>\r\n      <a href=\"\" routerLink=\"/friends\" routerLinkActive=\"active-link\">\r\n        <i class=\"notifCount chatCount\">23</i>\r\n        <i class=\"material-icons\">account_box</i>\r\n        <span>Friends</span>\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a href=\"\" routerLink=\"/people\" routerLinkActive=\"active-link\">\r\n        <i class=\"material-icons\">people</i>\r\n        <span>People</span>\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a href=\"\" routerLink=\"/profile\" routerLinkActive=\"active-link\">\r\n        <i class=\"material-icons\">account_circle</i>\r\n        <span>Profile</span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  page-not-found works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/people/people.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-list {\r\n    padding-top: 0;\r\n}\r\n\r\n.mat-list .mat-list-item .mat-list-icon {\r\n    width: auto;\r\n    height: auto;\r\n    font-size: 42px;\r\n}\r\n\r\n.mat-list-text {\r\n    padding-left: 0 !important;\r\n}\r\n\r\n.searchForm button {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    background: none;\r\n    border: none;\r\n}\r\n\r\n.noResult {\r\n    padding-left: 15px;\r\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/people/people.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<form class=\"searchForm\" [formGroup]=\"searchForm\" (submit)=\"search()\">\r\n  <mat-form-field>\r\n    <input type=\"text\" matInput placeholder=\"Search\" formControlName=\"searchTxt\" [(ngModel)]=\"searchTxt\" name=\"searchTxt\" (keyup)=\"searching()\">\r\n    <button type=\"submit\" *ngIf=\"!isSearching\"><mat-icon matSuffix >search</mat-icon></button>\r\n    <button type=\"button\" (click)=\"clearSearch()\" *ngIf=\"isSearching\"><mat-icon matSuffix >clear</mat-icon></button>\r\n  </mat-form-field>\r\n</form>\r\n<mat-spinner *ngIf=\"fetching\"></mat-spinner>\r\n  <div #pulldown>\r\n    <div *ngIf=\"peoples\">\r\n      <ul class=\"chatList\" *ngIf=\"!fetching\">\r\n        <li *ngFor=\"let people of peoples let i = index\">\r\n          <div class=\"chatBlock01\">\r\n            <img src=\"/assets/images/blank-profile.png\" *ngIf=\"people?.photo == ''\" width=\"50\" height=\"50\" alt=\"\">\r\n            <img src=\"{{people?.photo}}\" *ngIf=\"people?.photo != ''\" width=\"50\" height=\"50\" alt=\"\">\r\n            <i [class.online]=\"people.isOnline\" [class.offline]=\"!people.isOnline\"></i>\r\n          </div>\r\n          <div class=\"chatBlock02\">\r\n            <strong>{{people.name}}</strong>\r\n            <span class=\"email\">{{people.email}}</span>\r\n            <button (click)=\"addFriend(people, i)\"><i class=\"material-icons\">person_add</i></button>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n<div *ngIf=\"peoples?.length == 0 && !fetching && !noSearchMsg\">\r\n  <p class=\"noResult\">No peoples yet.</p>\r\n</div>\r\n\r\n<div *ngIf=\"peoples?.length == 0 && !fetching && noSearchMsg\">\r\n  <p class=\"noResult\">No peoples found.</p>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/people/people.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_friend_add_friend_component__ = __webpack_require__("../../../../../src/app/components/add-friend/add-friend.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_people_service__ = __webpack_require__("../../../../../src/app/services/people.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_firestore__ = __webpack_require__("../../../../firebase/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jroll__ = __webpack_require__("../../../../jroll/src/jroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jroll_pulldown__ = __webpack_require__("../../../../jroll-pulldown/jroll-pulldown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jroll_pulldown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jroll_pulldown__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PeopleComponent = (function () {
    function PeopleComponent(dialog, snackBar, peopleService, elementRef, renderer) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.peopleService = peopleService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.peoples = [];
        this.db = __WEBPACK_IMPORTED_MODULE_4_firebase__["firestore"]();
        this.fetching = false;
        this.isSearching = false;
        this.hasLoadingSpinner = true;
        this.noSearchMsg = false;
        this.userId = localStorage.getItem('user_id');
        this.userEmail = localStorage.getItem('email');
        this.loadPeoples();
    }
    PeopleComponent.prototype.ngOnInit = function () {
        this.searchTxtCtrl = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]('');
        this.searchForm = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormGroup */]({
            searchTxt: this.searchTxtCtrl
        });
    };
    PeopleComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.pulldown);
            var jroll = new __WEBPACK_IMPORTED_MODULE_7_jroll__(_this.pulldown.nativeElement);
            jroll.pulldown({
                refresh: function (complete) {
                    _this.loadPeoples();
                    complete();
                },
                spinning: false,
                textPull: '',
                textRelease: '',
                textLoading: '',
                textFinish: '',
                iconArrow: '<img width="50px" height="50px" src="http://thinkfuture.com/wp-content/uploads/2013/10/loading_spinner.gif">',
                iconLoading: '<img width="50px" height="50px" src="http://thinkfuture.com/wp-content/uploads/2013/10/loading_spinner.gif">',
                iconFinish: '<img width="50px" height="50px" src="http://thinkfuture.com/wp-content/uploads/2013/10/loading_spinner.gif">'
            });
        }, 3000);
    };
    PeopleComponent.prototype.loadPeoples = function () {
        var _this = this;
        if (this.hasLoadingSpinner) {
            this.fetching = true;
            this.db.collection('users').get().then(function (users) {
                var peopleObj = users.docs.filter(function (doc) { return doc.id != _this.userId; });
                var peoples = users.docs.filter(function (doc) { return doc.id != _this.userId; }).map(function (user) { return user.data(); });
                var userEmailArr = _this.userEmail.split('@');
                var userEmail = userEmailArr[0];
                _this.peoples = [];
                var _loop_1 = function (people) {
                    var peopleEmailArr = people.email.split('@');
                    var peopleEmail = peopleEmailArr[0];
                    var friendName = (userEmail > peopleEmail) ? peopleEmail + '_' + userEmail : userEmail + '_' + peopleEmail;
                    _this.db.collection('friends').doc(friendName).get().then(function (data) {
                        if (data.exists) {
                            console.log('friend request was sent');
                        }
                        else {
                            _this.peoples.push(people);
                            _this.fetching = false;
                            _this.isSearching = false;
                        }
                    }).then(function () {
                        if (_this.peoples.length == 0) {
                            _this.fetching = false;
                            _this.isSearching = false;
                        }
                    });
                };
                for (var _i = 0, peoples_1 = peoples; _i < peoples_1.length; _i++) {
                    var people = peoples_1[_i];
                    _loop_1(people);
                }
            });
        }
    };
    PeopleComponent.prototype.addFriend = function (friend, index) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__add_friend_add_friend_component__["a" /* AddFriendComponent */], {
            width: '300px',
            data: {
                // index: 
                user_id: friend['user_id'],
                email: friend['email'],
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.peoples.splice(index, 1);
            }
        });
    };
    PeopleComponent.prototype.capitalize = function (str) {
        var wordCount = str.split(' ');
        var upperStr = '';
        for (var x = 0; x <= wordCount.length - 1; x++) {
            if (x > 0) {
                upperStr += ' ';
            }
            upperStr += wordCount[x].charAt(0).toUpperCase() + wordCount[x].slice(1).toLowerCase();
        }
        return upperStr;
    };
    PeopleComponent.prototype.search = function () {
        var _this = this;
        if (this.searchTxt != '' && this.searchTxt !== undefined) {
            this.fetching = true;
            this.db.collection('users').where('name', '==', this.capitalize(this.searchTxt)).get().then(function (res) {
                var peoples = [];
                var filteredPeople = [];
                if (res.docs.length) {
                    res.forEach(function (doc) {
                        peoples.push(doc.data());
                    });
                    var userEmailArr = _this.userEmail.split('@');
                    var userEmail_1 = userEmailArr[0];
                    var _loop_2 = function (people) {
                        var peopleEmailArr = people.email.split('@');
                        var peopleEmail = peopleEmailArr[0];
                        var friendName = (userEmail_1 > peopleEmail) ? peopleEmail + '_' + userEmail_1 : userEmail_1 + '_' + peopleEmail;
                        _this.db.collection('friends').doc(friendName).get().then(function (data) {
                            if (data.exists) {
                                console.log('friend request was sent');
                            }
                            else {
                                if (userEmail_1 != peopleEmail) {
                                    filteredPeople.push(people);
                                }
                                _this.fetching = false;
                                _this.isSearching = true;
                            }
                        }).then(function () {
                            _this.fetching = false;
                            _this.noSearchMsg = true;
                        });
                    };
                    for (var _i = 0, peoples_2 = peoples; _i < peoples_2.length; _i++) {
                        var people = peoples_2[_i];
                        _loop_2(people);
                    }
                    _this.peoples = filteredPeople;
                }
                else {
                    _this.peoples = [];
                    _this.searchResultCount = 0;
                    _this.fetching = false;
                    _this.noSearchMsg = true;
                }
            });
        }
    };
    PeopleComponent.prototype.searching = function () {
        if (this.searchTxt != '' && this.searchTxt !== undefined) {
            if (this.searchTxt.length) {
                this.isSearching = true;
            }
        }
    };
    PeopleComponent.prototype.clearSearch = function () {
        this.searchTxt = '';
        this.loadPeoples();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('pulldown'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], PeopleComponent.prototype, "pulldown", void 0);
    PeopleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-people',
            template: __webpack_require__("../../../../../src/app/components/people/people.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/people/people.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_3__services_people_service__["a" /* PeopleService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */]])
    ], PeopleComponent);
    return PeopleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profileBlock {\r\n    margin-top: 97px;\r\n    text-align: center;\r\n    position: relative;\r\n}\r\n\r\n.profileBlock .camera {\r\n    position: absolute;\r\n    color: #fff;\r\n    width: 24px;\r\n    left: 0;\r\n    right: 0;\r\n    margin: auto;\r\n    bottom: 37px;\r\n}\r\n\r\n.profileBlock img {\r\n    border-radius: 50%;\r\n}\r\n\r\n.profileBlock h3 {\r\n    color: #333;\r\n    font-size: 18px;\r\n}\r\n\r\n.profileTbl {\r\n    margin-top: 10px;\r\n}\r\n\r\n.profileTbl tr td:nth-child(1) i {\r\n    font-size: 22px;\r\n    color: #3f51b5;\r\n}\r\n\r\n.profileTbl tr td:nth-child(1) {\r\n    width: 50px;\r\n    text-align: center;\r\n}\r\n\r\n.profileTbl tr td:nth-child(2) {\r\n    padding-top: 6px;\r\n}\r\n\r\n.profileTbl tr td:nth-child(2) strong {\r\n    color: #3f51b5;\r\n    font-size: 14px;\r\n}\r\n\r\n.profileTbl tr {\r\n    position: relative;\r\n}\r\n\r\n.profileTbl tr:after {\r\n    width: 100%;\r\n    height: 1px;\r\n    background: #0000000f;\r\n    right: 0;\r\n    left: 0;\r\n    content: \"\";\r\n    position: absolute;\r\n}\r\n\r\n.profileTbl tr td:nth-child(2) p {\r\n    display: inline-block;\r\n    width: calc(100% - 15px);\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    color: #333;\r\n    font-size: 13px;\r\n}\r\n\r\n.editBtn {\r\n    position: absolute;\r\n    bottom: 30px;\r\n    right: 20px;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<div class=\"profileBlock\">\r\n  <input type=\"file\" hidden #profilePicUpload name=\"profilePicUpload\" (change)=\"profileChange($event)\">\r\n  <img [src]=\"user?.photo != '' && user?.photo != null ? user?.photo : '/assets/images/blank-profile.png' \" width=\"100\" height=\"100\" alt=\"\" (click)=\"profilePicUpload.click()\">\r\n  <i class=\"material-icons camera\" (click)=\"profilePicUpload.click()\">local_see</i>\r\n  <h3 *ngIf=\"user?.name != '' || user?.name != null\">{{user?.name}}</h3>\r\n  <h3 *ngIf=\"user?.name == '' || user?.name == null\">N/A</h3>\r\n</div>\r\n\r\n<table class=\"profileTbl\">\r\n  <tr>\r\n    <td><i class=\"material-icons\">email</i></td>\r\n    <td>\r\n      <strong>Email Address</strong>\r\n      <p *ngIf=\"user?.email != '' && user?.email != null\">{{user?.email}}</p>\r\n      <p *ngIf=\"user?.email == '' || user?.email == null\">N/A</p>\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <td><i class=\"material-icons\">phone</i></td>\r\n    <td>\r\n      <strong>Phone Number</strong>\r\n      <p *ngIf=\"user?.phone != '' && user?.phone != null\">{{user?.phone}}</p>\r\n      <p *ngIf=\"user?.phone == '' || user?.phone == null\">N/A</p>\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <td><i class=\"material-icons\">work</i></td>\r\n    <td>\r\n      <strong>Work</strong>\r\n      <p *ngIf=\"user?.work != '' && user?.work != null\">{{user?.work}}</p>\r\n      <p *ngIf=\"user?.work == '' || user?.work == null\">N/A</p>\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <td><i class=\"material-icons\">my_location</i></td>\r\n    <td>\r\n      <strong>Address</strong>\r\n      <p *ngIf=\"user?.address != '' && user?.address != null\">{{user?.address}}</p>\r\n      <p *ngIf=\"user?.address == '' || user?.address == null\">N/A</p>\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <td><i class=\"material-icons\">exit_to_app</i></td>\r\n    <td (click)=\"logout()\">\r\n      <strong>Log out</strong>\r\n      <p>Click to log out</p>\r\n    </td>\r\n  </tr>\r\n</table>\r\n\r\n<button mat-fab color=\"primary\" class=\"editBtn\" (click)=\"editProfile()\"><i class=\"material-icons\">mode_edit</i></button>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_profile_edit_profile_component__ = __webpack_require__("../../../../../src/app/components/edit-profile/edit-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_profile_service__ = __webpack_require__("../../../../../src/app/services/profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = (function () {
    function ProfileComponent(authService, router, dialog, snackBar, profileService) {
        this.authService = authService;
        this.router = router;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.profileService = profileService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.loadProfile();
    };
    ProfileComponent.prototype.loadProfile = function () {
        var _this = this;
        this.profileService.loadProfile().then(function (user) {
            _this.user = user;
            console.log('user', user);
        });
    };
    ProfileComponent.prototype.editProfile = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__edit_profile_edit_profile_component__["a" /* EditProfileComponent */], {
            width: '300px',
            data: { user: this.user }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 1) {
                _this.loadProfile();
            }
        });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.authService.logout().then(function () {
            localStorage.clear();
            _this.router.navigate(['/']);
        });
    };
    ProfileComponent.prototype.profileChange = function (event) {
        var _this = this;
        this.profileService.uploadPhoto(event.target.files.item(0)).then(function (res) {
            if (res) {
                _this.loadProfile();
                _this.snackBar.open('Profile photo was changed', 'close', { duration: 4000 });
            }
            else {
                _this.snackBar.open('Error changing your profile photo', 'close', { duration: 4000 });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('profilePicUpload'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ProfileComponent.prototype, "uploadPic", void 0);
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["B" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_5__services_profile_service__["a" /* ProfileService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".formRegister {\r\n  max-width: 340px;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  padding-top: 90px;\r\n}\r\n\r\n.formRegister .fullWidth {\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.tRight {\r\n  text-align: right;\r\n}\r\n\r\n.formRegister h1 {\r\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\r\n  font-size: 33px;\r\n  text-align: center;\r\n  color: #333;\r\n  margin: 0 0 30px 0;\r\n}\r\n\r\n.formRegister h1 img {\r\n  width: 80px;\r\n}\r\n\r\n.formRegister h1 img {\r\n  position: relative;\r\n  top: 16px;\r\n}\r\n\r\n.formRegister h1 span {\r\n  margin-right: 20px;\r\n}\r\n\r\n.socialLogin button {\r\n  width: 100%;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.button-row {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.googleLogin {\r\n  background: #dd4b39;\r\n  color: #fff;\r\n}\r\n\r\n.fbLogin {\r\n  background: #415dae;\r\n  color: #fff;\r\n}\r\n\r\n.accountSignUp p,\r\n.accountSignUp a {\r\n  font-size: 14px;\r\n  margin-top: 0;\r\n}\r\n\r\n.accountSignUp a {\r\n  text-decoration: none;\r\n  color: #08c;\r\n}\r\n\r\n.formRegister mat-card {\r\n  padding-top: 0;\r\n}\r\n\r\n@media only screen and (max-width : 767px) {\r\n  .formRegister {\r\n    width: calc(100% - 20px);\r\n    margin: 0 auto;\r\n    padding-top: 20px;\r\n  }\r\n\r\n  .mat-card {\r\n    box-shadow: none !important;\r\n  }\r\n\r\n  .formRegister {\r\n    max-width: none;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"formRegister\">\r\n  <mat-card>\r\n    <form [formGroup]=\"registerForm\" (submit)=\"registerSubmit()\" novalidate>\r\n      <h1>\r\n        <img src=\"/assets/images/angular.png\">\r\n      </h1>\r\n\r\n      <mat-form-field class=\"fullWidth\">\r\n        <input matInput placeholder=\"Name\" formControlName=\"name\" [(ngModel)]=\"name\" name=\"name\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"fullWidth\">\r\n        <input matInput placeholder=\"Email\" formControlName=\"email\" [(ngModel)]=\"email\" name=\"email\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"fullWidth\">\r\n        <input matInput placeholder=\"Password\" formControlName=\"password\" [(ngModel)]=\"password\" name=\"password\" type=\"password\">\r\n      </mat-form-field>\r\n\r\n      <div class=\"button-row tRight\">\r\n        <button mat-raised-button color=\"primary\" [disabled]=\"isSubmitted\">Register</button>\r\n      </div>\r\n    </form>\r\n    <div class=\"accountSignUp\">\r\n      <p>Already have an account?\r\n        <a routerLink=\"/\">Login</a>\r\n      </p>\r\n    </div>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var RegisterComponent = (function () {
    function RegisterComponent(authService, matSnackBar, router) {
        this.authService = authService;
        this.matSnackBar = matSnackBar;
        this.router = router;
        this.isSubmitted = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.nameCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.emailCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern(EMAIL_REGEX)]);
        this.passCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required);
        this.registerForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            name: this.nameCtrl,
            email: this.emailCtrl,
            password: this.passCtrl
        });
    };
    RegisterComponent.prototype.capitalize = function (str) {
        var wordCount = str.split(' ');
        var upperStr = '';
        for (var x = 0; x <= wordCount.length - 1; x++) {
            if (x > 0) {
                upperStr += ' ';
            }
            upperStr += wordCount[x].charAt(0).toUpperCase() + wordCount[x].slice(1).toLowerCase();
        }
        return upperStr;
    };
    RegisterComponent.prototype.registerSubmit = function () {
        var _this = this;
        this.isSubmitted = true;
        if (this.registerForm.valid) {
            this.authService.register(this.email, this.password).then(function (userData) {
                if (userData['code']) {
                    _this.isSubmitted = false;
                    _this.matSnackBar.open(userData['message'], "close", { duration: 3000 });
                }
                else {
                    _this.authService.saveUserRegistered(userData['uid'], _this.capitalize(_this.name), _this.email, _this.password).then(function (res) {
                        _this.authService.sendVerificationEmail().then(function (emailRes) {
                            _this.isSubmitted = false;
                            _this.name = "";
                            _this.email = "";
                            _this.password = "";
                            _this.router.navigate(['']);
                            _this.matSnackBar.open("Email verification was sent to your email", "close", { duration: 5000 });
                        });
                    });
                }
            });
        }
        else {
            this.isSubmitted = false;
            this.matSnackBar.open("Error! some of fields are incorrect", "close", { duration: 3000 });
        }
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["B" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().onAuthStateChanged(function (user) {
                resolve(user);
            });
        });
        return promise.then(function (user) {
            if (user) {
                if (user['emailVerified']) {
                    return true;
                }
                else {
                    _this.router.navigate(['']);
                    return false;
                }
            }
            else {
                _this.router.navigate(['']);
                return false;
            }
        });
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_firestore__ = __webpack_require__("../../../../firebase/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(http) {
        var _this = this;
        this.http = http;
        this.db = __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]();
        setInterval(function () {
            _this.userPresence();
        }, 5000);
    }
    AuthService.prototype.userPresence = function () {
        __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                var userId = user.uid;
                var firestoreUserRef_1 = __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().doc("users/" + userId);
                var firebaseUserRef_1 = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("users/" + userId);
                __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('.info/connected').on('value', function (snapshot) {
                    if (snapshot.val() == false) {
                        firestoreUserRef_1.update({
                            isOnline: false
                        });
                        return;
                    }
                    firebaseUserRef_1.onDisconnect().set({
                        isOnline: 'false'
                    }).then(function () {
                        firebaseUserRef_1.set({
                            isOnline: true
                        });
                        firestoreUserRef_1.update({
                            isOnline: true
                        });
                    });
                });
            }
        });
    };
    AuthService.prototype.loginWithGoogle = function () {
        var googleProvider = new __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"].GoogleAuthProvider();
        var promise = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().signInWithPopup(googleProvider).then(function (res) {
                var user = res.user;
                var userObj = {
                    userid: user.uid,
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                };
                resolve(userObj);
            }).catch(function (err) {
                resolve(err);
            });
        });
        return promise;
    };
    AuthService.prototype.checkIfAccountExist = function (userid) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.collection('users').doc(userid).get().then(function (doc) {
                if (doc.exists) {
                    resolve(doc.data());
                }
                else {
                    resolve(0);
                }
            });
        });
        return promise;
    };
    AuthService.prototype.saveUser = function (userData) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("users/" + userData['userid']).set({
                isOnline: false
            });
            localStorage.setItem('user_id', userData['userid']);
            localStorage.setItem('email', userData['email']);
            userData['phone'] = '';
            userData['work'] = '';
            userData['address'] = '';
            userData['name'] = '';
            _this.db.collection('users').doc(userData['userid']).set(userData).then(function (res) {
                resolve(res);
            }).catch(function (err) {
                resolve(err);
            });
        });
        return promise;
    };
    AuthService.prototype.checkUserLoggedIn = function () {
        var promise = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().onAuthStateChanged(function (user) {
                if (user) {
                    localStorage.setItem('user_id', user.uid);
                    localStorage.setItem('email', user.email);
                    resolve(user);
                }
            });
        });
        return promise;
    };
    AuthService.prototype.loginWithFacebook = function () {
        var facebookProvider = new __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"].FacebookAuthProvider();
        var promise = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().signInWithPopup(facebookProvider).then(function (res) {
                resolve(res.user);
            });
        });
        return promise;
    };
    AuthService.prototype.loginWithUserAndPass = function (email, password) {
        var promise = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().signInWithEmailAndPassword(email, password).then(function (data) {
                resolve(data);
            }).catch(function (err) {
                resolve(err);
            });
        });
        return promise;
    };
    AuthService.prototype.register = function (email, password) {
        var promise = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().createUserWithEmailAndPassword(email, password).then(function (user) {
                resolve(user);
            }).catch(function (err) {
                resolve(err);
            });
        });
        return promise;
    };
    AuthService.prototype.saveUserRegistered = function (uid, name, email, password) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("users/" + uid).set({
                isOnline: false
            });
            _this.db.collection('users').doc(uid).set({
                name: name,
                email: email,
                password: password,
                photo: '',
                address: '',
                work: '',
                phone: '',
                user_id: uid
            }).then(function (res) {
                resolve(res);
            }).catch(function (err) {
                resolve(err);
            });
        });
        return promise;
    };
    AuthService.prototype.sendVerificationEmail = function () {
        var promise = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().onAuthStateChanged(function (user) {
                user.sendEmailVerification().then(function (data) {
                    resolve(data);
                }).catch(function (err) {
                    resolve(err);
                });
            });
        });
        return promise;
    };
    AuthService.prototype.logout = function () {
        var promise = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().signOut().then(function (res) {
                var userId = localStorage.getItem('user_id');
                var firestoreUserRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]().doc("users/" + userId);
                var firebaseUserRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("users/" + userId);
                firebaseUserRef.set({
                    isOnline: false
                });
                firestoreUserRef.update({
                    isOnline: false
                });
                resolve(res);
            }).catch(function (err) {
                resolve(err);
            });
        });
        return promise;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/people.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore__ = __webpack_require__("../../../../firebase/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PeopleService = (function () {
    function PeopleService() {
        this.db = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]();
    }
    PeopleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PeopleService);
    return PeopleService;
}());



/***/ }),

/***/ "../../../../../src/app/services/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_firestore__ = __webpack_require__("../../../../firebase/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileService = (function () {
    function ProfileService() {
        this.db = __WEBPACK_IMPORTED_MODULE_1_firebase__["firestore"]();
        this.basePath = '/uploads';
        this.userId = localStorage.getItem('user_id');
    }
    ProfileService.prototype.loadProfile = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.collection('users').doc(_this.userId).get().then(function (userData) {
                resolve(userData.data());
            }).catch(function (err) {
                resolve(err);
            });
        });
        return promise;
    };
    ProfileService.prototype.uploadPhoto = function (upload) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var storageRef = __WEBPACK_IMPORTED_MODULE_1_firebase__["storage"]().ref();
            var uploadTask = storageRef.child(_this.basePath + "/" + upload.name).put(upload);
            uploadTask.on(__WEBPACK_IMPORTED_MODULE_1_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
                upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
            }, function (error) {
                resolve(error);
            }, function () {
                _this.saveFileData(uploadTask.snapshot.downloadURL);
                resolve(1);
            });
        });
        return promise;
    };
    ProfileService.prototype.saveFileData = function (uploadedFilePath) {
        this.db.collection('users').doc(this.userId).update({
            photo: uploadedFilePath
        });
    };
    ProfileService.prototype.saveUpdate = function (user) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.collection('users').doc(_this.userId).update(user).then(function () {
                resolve(1);
            }).catch(function (err) {
                resolve(err);
            });
        });
        return promise;
    };
    ProfileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map