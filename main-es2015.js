(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-item/add-item.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-item/add-item.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row container-fluid bg-light mx-0 p-3\">\n    <div class=\"col-11 mx-auto p-3\" style=\"background: white;\">\n      <div class=\"text-center\">\n          <h4>Add a Item</h4>\n      </div>   \n      <hr>\n          <div class=\"container mx-auto p-3\">\n              <form action=\"\">\n                <div class=\"form-group\">\n                    <label for=\"id\">Restraurant id : </label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter restraurant's id\" name=\"id\" [(ngModel)]=\"ITEM.restroId\">\n\n                  </div>\n                  <div class=\"form-group\">\n                      <label for=\"name\">Item Name : </label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Enter item's name\" name=\"name\" [(ngModel)]=\"ITEM.name\">\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"category\">Category : </label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Enter item's category\" name=\"category\" [(ngModel)]=\"ITEM.category\">\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"description\">Item's Description : </label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Enter item's description\" name=\"description\" [(ngModel)]=\"ITEM.description\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"type\">Veg/Non-veg  : </label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Veg/Non-veg\" name=\"type\" [(ngModel)]=\"ITEM.type\">\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"price\">Item's Price (in Rs.) : </label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Enter item's price\" name=\"price\" [(ngModel)]=\"ITEM.price\">\n                    </div>\n                    <!-- <div class=\"form-group\">\n                      <label for=\"img\">Image's URL : </label>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Enter image's url\" name=\"img\" [(ngModel)]=\"ITEM.img\">\n                    </div> -->\n                    <div><button class=\"btn btn-warning\" (click)=\"onsubmit()\">Submit details</button></div>\n                    \n              </form>\n      </div>\n    </div>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-bar></app-nav-bar>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cust/cust.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cust/cust.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid bg-light\" style=\"padding:10rem ; \">\n    <div class=\"col-sm-4 mx-auto\" style=\"padding: 1rem;background: rgba(0, 0, 0, 0.8); box-shadow:6px 6px 6px rgba(0, 0, 0, 0.5);  border: 2px solid black\">\n      <div class=\"text-warning \">\n         <div class=\"text-center\"><h2>SIGN-UP</h2></div>\n         <div class=\"container\">\n           <div>\n           <form #userForm=\"ngForm\" (ngSubmit)=\"Onsubmit()\" novalidate>\n            <div class=\"form-group\"  >\n                <label  for=\"usr\">Email:</label>\n                <input type=\"email\" required #mail=\"ngModel\" [class.is-invalid]=\"mail.invalid && mail.touched\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Enter Email\" pattern=\"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$\" [(ngModel)]=\"post1.email\">\n                <small class=\"text-danger\" [class.d-none]=\"mail.valid || mail.untouched\" >Enter an valid E-mail</small>\n              </div>\n             <div class=\"form-group\">\n               <label  for=\"usr\">Username:</label>\n               <input type=\"text\" required #name=\"ngModel\" [class.is-invalid]=\"name.invalid && name.touched\" class=\"form-control\" id=\"usr\" name=\"username\" placeholder=\"Enter Username\" [(ngModel)]=\"post1.username\">\n               <small class=\"text-danger\" [class.d-none]=\"name.valid || name.untouched\" >Name is required</small>\n              </div>\n             <div class=\"form-group\">\n               <label for=\"pwd\">Password:</label>\n               <input type=\"password\" required #pass=\"ngModel\" [class.is-invalid]=\"pass.invalid && pass.touched\" class=\"form-control\" id=\"pwd\" name=\"password\" placeholder=\"Enter Password\" [(ngModel)]=\"post1.password\">\n               <small class=\"text-danger\" [class.d-none]=\"pass.valid || pass.untouched\" >Password is required</small>\n              </div>\n              <div class=\"form-group\">\n                <label  for=\"usr\">Preferance:</label>\n                <input type=\"text\" required #pfre=\"ngModel\" [class.is-invalid]=\"pfre.invalid && pfre.touched\" class=\"form-control\" id=\"pf\" name=\"pref\" placeholder=\"Veg/Non-veg\" [(ngModel)]=\"post1.pref\">\n                <small class=\"text-danger\" [class.d-none]=\"pfre.valid || pfre.untouched\" >Preferance is required</small>\n               </div>\n             <div>\n                <input type=\"checkbox\" required #check=\"ngModel\" [class.is-invalid]=\"check.invalid\" name=\"accept\" [(ngModel)]=\"post1.accept\"><a href=\"#\">  Accept Terms & Conditions</a>\n                <br><small class=\"text-danger\" [class.d-none]=\"check.valid || check.untouched\" >Please accept Terms & Conditions</small>\n              </div>\n            <br>\n            <div><button [disabled]=\"userForm.form.invalid\" class=\"btn btn-warning text-dark\" type=\"submit\" style=\"width: 100% ;\">Submit</button></div>\n             \n           </form>\n           <br>\n           </div>\n         </div>\n      </div>\n    </div>\n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-12\"> \n  <div style=\"background: white ; box-shadow:1px 1px 2px 2px rgba(0, 0, 0, 0.4) ;\">\n  <div class=\"row ml-2\" >\n   <div *ngFor=\"let item of Data \">\n      <div class=\"column\" style=\"width: 18.5rem\">\n       <div class=\"card m-3 \" style=\" box-shadow:1px 1px 1px 1px rgba(0, 0, 0, 0.3) ;\" >\n       <img class=\"card-img-top\" src=\"/assets/pics/hotel.jpg\" alt=\"Card image\" style=\"width:100% ; height: 200px;\">\n       <div class=\"card-body\">\n           <h4 class=\"card-title\">{{item.name}}</h4>\n         <p class=\"card-text\">₹ {{item.money}} for 1 person approx.</p>\n         <p class=\"card-text\" style=\"white-space: nowrap; overflow: hidden; text-overflow: ellipsis \">{{item.description}}</p>\n         <div><button  class=\"btn btn-warning text-dark\" (click)=\"verify(item.userid)\" type=\"submit\" style=\"width: 100% ;\">Order Now</button></div>\n         </div>\n         </div>\n         </div>\n         </div>\n         </div>\n         </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-ask/login-ask.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login-ask/login-ask.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center\"><h2>LOGIN AS:</h2></div>\n<div class=\"container-fluid bg-light\" style=\"padding:10rem ; \">\n    <div class=\"col-sm-4 mx-auto\" style=\"padding: 1rem;background: rgba(0, 0, 0, 0.8); box-shadow:6px 6px 6px rgba(0, 0, 0, 0.5);  border: 2px solid black\">\n      <div class=\"text-warning \">\n<div class=\"container\">\n<div><button  class=\"btn btn-warning text-dark\" (click)=\"verify1()\" type=\"submit\" style=\"width: 100% ;\">Customer</button></div>\n<br>\n<div><button  class=\"btn btn-warning text-dark\" (click)=\"verify2()\" type=\"submit\" style=\"width: 100% ;\">Restraurant</button></div>\n</div>\n</div>\n</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-restro/login-restro.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login-restro/login-restro.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container-fluid bg-light\" style=\"padding:10rem ;\">\n    <div class=\"col-sm-4 mx-auto\" style=\"padding: 1rem;background: rgba(0, 0, 0, 0.8); border: 2px solid black ; box-shadow:6px 6px 6px rgba(0, 0, 0, 0.5)\">\n      <div class=\"text-warning \">\n         <div class=\"text-center\"><h2>LOGIN</h2></div>\n         <div class=\"container\">\n           <div>\n           <form action=\"/home\" #userForm=\"ngForm\" (ngSubmit)=\"check_login(name.value,pass.value)\" novalidate>\n             <div class=\"form-group\">\n               <label  for=\"usr\">Username:</label>\n               <input type=\"text\" required #name=\"ngModel\" [class.is-invalid]=\"name.invalid && name.touched\" class=\"form-control\" id=\"usr\" name=\"username\" placeholder=\"Enter Username\" ngModel>\n              <small class=\"text-danger\" [class.d-none]=\"name.valid || name.untouched\" >Name is required</small>\n             </div>\n             <div class=\"form-group\">\n               <label for=\"pwd\">Password:</label>\n               <input type=\"password\" required #pass=\"ngModel\" [class.is-invalid]=\"pass.invalid && pass.touched\" class=\"form-control\" id=\"pwd\" name=\"password\" placeholder=\"Enter Password\" ngModel>\n              <small class=\"text-danger\" [class.d-none]=\"pass.valid || pass.untouched\" >Password is required</small>\n             </div>\n             <br>\n             <button [disabled]=\"userForm.form.invalid\" class=\"btn btn-warning text-dark\" type=\"submit\" style=\"width: 100% ;\">Submit</button>\n           </form>\n           <div *ngIf=\"check()\"  class=\"text-center\">Enter Correct Details </div>\n           <br>\n           </div>\n          <div class=\"text-center\">Don't have an account ?</div>\n          <br>\n          <form action=\"/sign-up\" (ngSubmit)=\"Sign()\">\n          <div><button class=\"btn btn-warning text-dark \" type=\"submit\" style=\"width: 100% ; \">Create an Account</button></div>\n           </form>\n           \n         </div>\n      </div>\n    </div>\n    \n \n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container-fluid bg-light\" style=\"padding:10rem ;\">\n    <div class=\"col-sm-4 mx-auto\" style=\"padding: 1rem;background: rgba(0, 0, 0, 0.8); border: 2px solid black ; box-shadow:6px 6px 6px rgba(0, 0, 0, 0.5)\">\n      <div class=\"text-warning \">\n         <div class=\"text-center\"><h2>LOGIN</h2></div>\n         <div class=\"container\">\n           <div>\n           <form action=\"/home\" #userForm=\"ngForm\" (ngSubmit)=\"check_login(name.value,pass.value)\" novalidate>\n             <div class=\"form-group\">\n               <label  for=\"usr\">Username:</label>\n               <input type=\"text\" required #name=\"ngModel\" [class.is-invalid]=\"name.invalid && name.touched\" class=\"form-control\" id=\"usr\" name=\"username\" placeholder=\"Enter Username\" ngModel>\n              <small class=\"text-danger\" [class.d-none]=\"name.valid || name.untouched\" >Name is required</small>\n             </div>\n             <div class=\"form-group\">\n               <label for=\"pwd\">Password:</label>\n               <input type=\"password\" required #pass=\"ngModel\" [class.is-invalid]=\"pass.invalid && pass.touched\" class=\"form-control\" id=\"pwd\" name=\"password\" placeholder=\"Enter Password\" ngModel>\n              <small class=\"text-danger\" [class.d-none]=\"pass.valid || pass.untouched\" >Password is required</small>\n             </div>\n             <br>\n             <button [disabled]=\"userForm.form.invalid\" class=\"btn btn-warning text-dark\" type=\"submit\" style=\"width: 100% ;\">Submit</button>\n           </form>\n           <div *ngIf=\"check()\"  class=\"text-center\">Enter Correct Details </div>\n           <br>\n           </div>\n          <div class=\"text-center\">Don't have an account ?</div>\n          <br>\n          <form action=\"/sign-up\" (ngSubmit)=\"Sign()\">\n          <div><button class=\"btn btn-warning text-dark \" type=\"submit\" style=\"width: 100% ; \">Create an Account</button></div>\n           </form>\n         </div>\n      </div>\n    </div>\n \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"col10\"> \n    <div style=\"background: rgb(238, 238, 240) ; box-shadow:1px 1px 2px 2px rgba(0, 0, 0, 0.4) ;\">\n    <div class=\"row ml-2\" >\n     <div *ngFor=\"let item of data2 \">\n        <div class=\"column\" style=\"width: 18.5rem\">\n         <div class=\"card m-3 \" style=\" box-shadow:1px 1px 1px 1px rgba(133, 87, 87, 0.3) ;\" >\n         <!-- <img class=\"card-img-top\" src=\"/assets/pics/hotel.jpg\" alt=\"Card image\" style=\"width:100% ; height: 50px;\"> --> \n         <div class=\"card-body\" style=\"background: rgb(177, 161, 161) ;box-shadow:1px 1px 1px 1px rgba(133, 87, 87, 0.3);\">\n             <h4 class=\"card-title\">{{item.name}}</h4>\n             <p>{{item.type}}</p>\n           <p class=\"card-text\">₹ {{item.price}} . </p>\n           <p class=\"card-text\" style=\"overflow: hidden; text-overflow: ellipsis \">{{item.description}}</p>\n           <div class=\"form-group\">\n            <label for=\"quantity\">Quantity:</label>\n            <input type=\"text\"  placeholder=\"Enter Quantity\" value=\"\" id=\"qty\">\n          \n          </div>\n            <div><button  class=\"btn btn-warning text-dark\" (click)=\"verify(item.itemId)\" type=\"submit\" style=\"width: 100% ;\">Add Item</button></div> \n            </div>\n           </div> \n           </div>\n           </div>\n           </div>\n           </div>\n           <div class=\"text-center\">\n          <div *ngIf=\"menu()\" <div><button  class=\"btn btn-warning text-dark\" (click)=\"orderNow()\" type=\"submit\" style=\"width: 30% ;\">Order Now</button></div></div>\n           </div>\n          ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"></script>\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.6.3/css/all.css\">\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\"></script>\n<nav class=\"navbar navbar-expand-sm bg-dark\">\n    <a class=\"navbar-brand text-warning\" href=\"#\">Foodshalla</a>\n    <div style=\"display: flex ; justify-content: space-between ; margin-left: auto\">\n      <div *ngIf=\"isUserLoggedIn1()\"> <a class=\"nav-link text-warning\">Welcome {{user1}} </a></div>\n      <div *ngIf=\"isUserLoggedIn()\"><a class=\"nav-link text-warning\" href=\"/home\">Home  <i class=\"fas fa-home\"></i></a></div>\n      <div *ngIf=\"isUserLoggedIn()\"> <a class=\"nav-link text-warning\" href=\"/user-cart\">Cart  <i class=\"fas fa-shopping-cart\"></i></a></div>\n     \n      <a *ngIf=\"!isUserLoggedIn()\" class=\"nav-link text-warning\" href=\"/loginask\">LogIn  <i class=\"fa fa-user\" aria-hidden=\"true\"></i></a>\n      <a *ngIf=\"!isUserLoggedIn()\" class=\"nav-link text-warning\" href=\"/sign-up\">SignUp  <i class=\"fa fa-users\" aria-hidden=\"true\"></i></a>\n     \n      <button *ngIf=\"isUserLoggedIn()\" class=\"btn btn-dark text-warning nav-item\" (click)=\"logout()\">LogOut  <i class=\"fa fa-arrow-right\" ></i></button>\n      \n    </div>\n  </nav>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-history/order-history.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-history/order-history.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container m-3\">\n    <h5 class=\"font-weight-light\">Your Orders </h5>\n    <div class=\"my-4\" *ngFor=\"let data of Myorder\">\n      <div class=\"container m-1 row\" style=\"border: 1px solid darkgray;  box-shadow:1px 1px 1px 1px rgba(0, 0, 0, 0.3);\">\n       <div class=\"col-4 p-3\">\n        <img  src=\"{{data.item.img}}\" style=\"width: 85% ; height:85%;\">\n       </div>\n       <div class=\"col-8 p-3\">\n         <div class=\"row\">\n             <div class=\"col-6\"><h6>Order Id : {{data.orderId}}</h6></div>\n             <div class=\"col-6\"><h6>Order Date : {{data.date1}}</h6></div>\n         </div>  \n         <hr>\n         <h5>{{data.item.name}}</h5>\n         <h6>{{data.item.subcategory}}</h6>\n         <h6>{{data.item.description}}</h6>\n         <h6>Quantity : {{data.quantity}}</h6>\n         <h6>Total Price : ₹  {{data.item.price * data.quantity}}</h6>\n         <div class=\"d-flex\">\n                 <div><h6>Status : </h6></div>\n                 <div class=\"ml-2\"><h6 class=\"text-success\"> DELIVERED</h6></div>\n             </div> \n       </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/restro/restro.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/restro/restro.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid bg-light\" style=\"padding:10rem ; \">\n    <div class=\"col-sm-4 mx-auto\" style=\"padding: 1rem;background: rgba(0, 0, 0, 0.8); box-shadow:6px 6px 6px rgba(0, 0, 0, 0.5);  border: 2px solid black\">\n      <div class=\"text-warning \">\n         <div class=\"text-center\"><h2>SIGN-UP</h2></div>\n         <div class=\"container\">\n           <div>\n           <form #userForm=\"ngForm\" (ngSubmit)=\"Onsubmit()\" novalidate>\n            <div class=\"form-group\"  >\n                <label  for=\"usr\">Email:</label>\n                <input type=\"email\" required #mail=\"ngModel\" [class.is-invalid]=\"mail.invalid && mail.touched\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Enter Email\" pattern=\"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$\" [(ngModel)]=\"post2.email\">\n                <small class=\"text-danger\" [class.d-none]=\"mail.valid || mail.untouched\" >Enter an valid E-mail</small>\n              </div>\n              <div class=\"form-group\">\n                <label  for=\"usr\">Name Of Restrautant:</label>\n                <input type=\"text\" required #namer=\"ngModel\" [class.is-invalid]=\"namer.invalid && namer.touched\" class=\"form-control\" id=\"nm\" name=\"name\" placeholder=\"Enter Name Of Restrautant\" [(ngModel)]=\"post2.name\">\n                <small class=\"text-danger\" [class.d-none]=\"name.valid || name.untouched\" >Name is required</small>\n             </div>\n                <div class=\"form-group\">\n               <label  for=\"usr\">Username:</label>\n               <input type=\"text\" required #name=\"ngModel\" [class.is-invalid]=\"name.invalid && name.touched\" class=\"form-control\" id=\"usr\" name=\"username\" placeholder=\"Enter Username\" [(ngModel)]=\"post2.username\">\n               <small class=\"text-danger\" [class.d-none]=\"name.valid || name.untouched\" >Name is required</small>\n              </div>\n             <div class=\"form-group\">\n               <label for=\"pwd\">Password:</label>\n               <input type=\"password\" required #pass=\"ngModel\" [class.is-invalid]=\"pass.invalid && pass.touched\" class=\"form-control\" id=\"pwd\" name=\"password\" placeholder=\"Enter Password\" [(ngModel)]=\"post2.password\">\n               <small class=\"text-danger\" [class.d-none]=\"pass.valid || pass.untouched\" >Password is required</small>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"usr\">Address:</label>\n                <input type=\"text\" required #addr=\"ngModel\" [class.is-invalid]=\"addr.invalid && addr.touched\" class=\"form-control\" id=\"adr\" name=\"address\" placeholder=\"Enter Address\" [(ngModel)]=\"post2.address\">\n                <small class=\"text-danger\" [class.d-none]=\"addr.valid || addr.untouched\" >Address is required</small>\n               </div>\n               <div class=\"form-group\">\n                <label for=\"usr\">Approx Amount Of Money Per Person:</label>\n                <input type=\"text\" required #mon=\"ngModel\" [class.is-invalid]=\"mon.invalid && mon.touched\" class=\"form-control\" id=\"mon\" name=\"money\" placeholder=\"Enter Amount of Money\" [(ngModel)]=\"post2.money\">\n                <small class=\"text-danger\" [class.d-none]=\"mon.valid || mon.untouched\" >This Field is required</small>\n               </div>\n               <!-- <div class=\"form-group\">\n                <label for=\"img\">Restrautant Image's URL : </label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Restrautant image's url\" name=\"img\" [(ngModel)]=\"post2.image\">\n              </div> -->\n             <div>\n                <input type=\"checkbox\" required #check=\"ngModel\" [class.is-invalid]=\"check.invalid\" name=\"accept\" [(ngModel)]=\"post2.accept\"><a href=\"#\">  Accept Terms & Conditions</a>\n                <br><small class=\"text-danger\" [class.d-none]=\"check.valid || check.untouched\" >Please accept Terms & Conditions</small>\n              </div>\n            <br>\n            <div><button [disabled]=\"userForm.form.invalid\" class=\"btn btn-warning text-dark\" type=\"submit\" style=\"width: 100% ;\">Submit</button></div>\n             \n           </form>\n           <br>\n           </div>\n         </div>\n      </div>\n    </div>\n \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container-fluid bg-light\" style=\"padding:10rem ; \">\n    <div class=\"col-sm-4 mx-auto\" style=\"padding: 1rem;background: rgba(0, 0, 0, 0.8); box-shadow:6px 6px 6px rgba(0, 0, 0, 0.5);  border: 2px solid black\">\n      <div class=\"text-warning \">\n         <div class=\"text-center\"><h2>REGISTRATION</h2></div>\n         <div class=\"container\">\n            <div><button  class=\"btn btn-warning text-dark\" (click)=\"verify1()\" style=\"width: 100% ;\">Click For Registration Of Restaurant</button></div>\n           <br>\n            <div><button  class=\"btn btn-warning text-dark\" (click)=\"verify2()\" type=\"submit\" style=\"width: 100% ;\">Click For Registration For A Customer</button></div>\n           </div>\n         </div>\n      </div>\n    </div>\n \n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/add-item/add-item.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-item/add-item.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1pdGVtL2FkZC1pdGVtLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/add-item/add-item.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-item/add-item.component.ts ***!
  \************************************************/
/*! exports provided: AddItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemComponent", function() { return AddItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _get_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../get-user.service */ "./src/app/get-user.service.ts");
/* harmony import */ var _get_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../get-data.service */ "./src/app/get-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../items */ "./src/app/items.ts");






let AddItemComponent = class AddItemComponent {
    constructor(service1, service, router, route) {
        this.service1 = service1;
        this.service = service;
        this.router = router;
        this.route = route;
        this.ITEM = new _items__WEBPACK_IMPORTED_MODULE_5__["items"](0, "", "", 0, "", "");
    }
    ngOnInit() {
        this.route.queryParams.subscribe(param => {
            this.USER = param.id1;
            // console.log(this.USER);
            sessionStorage.setItem('username', this.USER);
        });
    }
    onsubmit() {
        this.service.post_item(this.ITEM).subscribe(data => {
            console.log(data);
        });
        alert("Details Submitted Successfully...");
        this.success = true;
        location.assign('/addItem');
    }
};
AddItemComponent.ctorParameters = () => [
    { type: _get_user_service__WEBPACK_IMPORTED_MODULE_2__["GetUserService"] },
    { type: _get_data_service__WEBPACK_IMPORTED_MODULE_3__["GetDataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
AddItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-item/add-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-item.component.css */ "./src/app/add-item/add-item.component.css")).default]
    })
], AddItemComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.route */ "./src/app/app.route.ts");




const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_route__WEBPACK_IMPORTED_MODULE_3__["MAIN_ROUTES"])],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'project';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _get_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./get-data.service */ "./src/app/get-data.service.ts");
/* harmony import */ var _get_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./get-user.service */ "./src/app/get-user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _basic_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./basic-auth.service */ "./src/app/basic-auth.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _restro_restro_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./restro/restro.component */ "./src/app/restro/restro.component.ts");
/* harmony import */ var _cust_cust_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cust/cust.component */ "./src/app/cust/cust.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _login_ask_login_ask_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login-ask/login-ask.component */ "./src/app/login-ask/login-ask.component.ts");
/* harmony import */ var _login_restro_login_restro_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./login-restro/login-restro.component */ "./src/app/login-restro/login-restro.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./add-item/add-item.component */ "./src/app/add-item/add-item.component.ts");
/* harmony import */ var _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./order-history/order-history.component */ "./src/app/order-history/order-history.component.ts");







//import { HomePageComponent } from './home-page/home-page.component';
//import { UserCartComponent } from './user-cart/user-cart.component';
//import { ProductDetailsComponent } from './product-details/product-details.component';
//import { ProductListComponent } from './product-list/product-list.component';















//import { SignUpComponent } from './sign-up/sign-up.component';
//import { ProfileComponent } from './profile/profile.component';
//import { EditProfileComponent } from './edit-profile/edit-profile.component';
//import { AddProductComponent } from './add-product/add-product.component';
//import { EditProductComponent } from './edit-product/edit-product.component';
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
            _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"],
            // HomePageComponent,
            // UserCartComponent,
            // ProductDetailsComponent,
            // ProductListComponent,
            _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavBarComponent"],
            _restro_restro_component__WEBPACK_IMPORTED_MODULE_14__["RestroComponent"],
            _cust_cust_component__WEBPACK_IMPORTED_MODULE_15__["CustComponent"],
            _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_16__["HomePageComponent"],
            _login_ask_login_ask_component__WEBPACK_IMPORTED_MODULE_17__["LoginAskComponent"],
            _login_restro_login_restro_component__WEBPACK_IMPORTED_MODULE_18__["LoginRestroComponent"],
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_19__["MenuComponent"],
            _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_20__["AddItemComponent"],
            _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_21__["OrderHistoryComponent"]
            // ProfileComponent,
            // EditProfileComponent,
            // AddProductComponent,
            // EditProductComponent
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]
        ],
        providers: [_get_data_service__WEBPACK_IMPORTED_MODULE_9__["GetDataService"], _get_user_service__WEBPACK_IMPORTED_MODULE_10__["GetUserService"], _auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _basic_auth_service__WEBPACK_IMPORTED_MODULE_12__["BasicAuthService"], multi: true
            }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.route.ts":
/*!******************************!*\
  !*** ./src/app/app.route.ts ***!
  \******************************/
/*! exports provided: MAIN_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAIN_ROUTES", function() { return MAIN_ROUTES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _cust_cust_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cust/cust.component */ "./src/app/cust/cust.component.ts");
/* harmony import */ var _restro_restro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./restro/restro.component */ "./src/app/restro/restro.component.ts");
/* harmony import */ var _login_ask_login_ask_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-ask/login-ask.component */ "./src/app/login-ask/login-ask.component.ts");
/* harmony import */ var _login_restro_login_restro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login-restro/login-restro.component */ "./src/app/login-restro/login-restro.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-item/add-item.component */ "./src/app/add-item/add-item.component.ts");


//import { UserCartComponent } from './user-cart/user-cart.component';

//import { ProductListComponent } from './product-list/product-list.component';
//import { ProductDetailsComponent } from './product-details/product-details.component';







//import { ProfileComponent } from './profile/profile.component';
//import { EditProfileComponent } from './edit-profile/edit-profile.component';
//import { AddProductComponent } from './add-product/add-product.component';
//import { EditProductComponent } from './edit-product/edit-product.component';
const MAIN_ROUTES = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    {
        path: 'loginask',
        component: _login_ask_login_ask_component__WEBPACK_IMPORTED_MODULE_6__["LoginAskComponent"]
    },
    {
        path: 'loginRestro',
        component: _login_restro_login_restro_component__WEBPACK_IMPORTED_MODULE_7__["LoginRestroComponent"]
    },
    {
        path: 'cust',
        component: _cust_cust_component__WEBPACK_IMPORTED_MODULE_4__["CustComponent"]
    },
    {
        path: 'restro',
        component: _restro_restro_component__WEBPACK_IMPORTED_MODULE_5__["RestroComponent"]
    },
    {
        path: 'home',
        component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"]
    },
    {
        path: 'menu',
        component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"]
    },
    //  {
    //      path: 'cart',
    //      component: UserCartComponent
    //  }
    //  ,
    //  {
    //      path: 'product-list',
    //      component: ProductListComponent
    //  }
    //  ,
    //  {
    //      path: 'product-details',
    //      component: ProductDetailsComponent
    //  }
    // ,
    {
        path: 'sign-up',
        component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"]
    },
    //  {
    //     path: 'user-cart',
    //     component: UserCartComponent
    // },
    // {
    //     path: 'edit-profile',
    //     component: EditProfileComponent
    // },
    {
        path: 'addItem',
        component: _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_9__["AddItemComponent"]
    }
    // {
    //     path: 'edit-product',
    //     component: EditProductComponent
    // },
    // {
    //     path: 'profile',
    //     component: ProfileComponent
    // }
];


/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: User, Restrautants, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Restrautants", function() { return Restrautants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




class User {
    constructor(status) {
        this.status = status;
    }
}
class Restrautants {
    constructor(status) {
        this.status = status;
    }
}
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    authenticate(username, password) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        return this.http.get('http://localhost:2019/users/get1', { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(userData => {
            let authString = 'Basic ' + btoa(username + ':' + password);
            sessionStorage.setItem('basicauth', authString);
            sessionStorage.setItem('username', username);
            return userData;
        }));
    }
    // authenticate_restro(username, password) {
    //   const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    //   return this.http.get<Restrautants>('http://localhost:2019/restro/get2',{headers}).pipe(
    //    map(
    //      userData => {
    //       let authString = 'Basic ' + btoa(username + ':' + password);
    //       sessionStorage.setItem('basicauth', authString);
    //       sessionStorage.setItem('username',username);
    //       return userData;
    //      }
    //    )
    //   );
    //     }
    isUserLoggedIn() {
        let user = sessionStorage.getItem('username');
        console.log(!(user === null));
        return !(user === null);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/basic-auth.service.ts":
/*!***************************************!*\
  !*** ./src/app/basic-auth.service.ts ***!
  \***************************************/
/*! exports provided: BasicAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicAuthService", function() { return BasicAuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BasicAuthService = class BasicAuthService {
    constructor() { }
    intercept(req, next) {
        if (sessionStorage.getItem('username') && sessionStorage.getItem('basicauth')) {
            req = req.clone({
                setHeaders: {
                    Authorization: sessionStorage.getItem('basicauth')
                }
            });
        }
        return next.handle(req);
    }
};
BasicAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BasicAuthService);



/***/ }),

/***/ "./src/app/cust/cust.component.css":
/*!*****************************************!*\
  !*** ./src/app/cust/cust.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3QvY3VzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/cust/cust.component.ts":
/*!****************************************!*\
  !*** ./src/app/cust/cust.component.ts ***!
  \****************************************/
/*! exports provided: CustComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustComponent", function() { return CustComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _get_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../get-user.service */ "./src/app/get-user.service.ts");
/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../posts */ "./src/app/posts.ts");




let CustComponent = class CustComponent {
    constructor(service) {
        this.service = service;
        this.post1 = new _posts__WEBPACK_IMPORTED_MODULE_3__["posts"]("", "", "", "");
    }
    ngOnInit() {
    }
    Onsubmit() {
        this.service.post1_user(this.post1).subscribe(data => console.log("SUCCESS", data), error => console.log("ERROR", error));
        location.assign('/login');
    }
};
CustComponent.ctorParameters = () => [
    { type: _get_user_service__WEBPACK_IMPORTED_MODULE_2__["GetUserService"] }
];
CustComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cust',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cust.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cust/cust.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cust.component.css */ "./src/app/cust/cust.component.css")).default]
    })
], CustComponent);



/***/ }),

/***/ "./src/app/get-data.service.ts":
/*!*************************************!*\
  !*** ./src/app/get-data.service.ts ***!
  \*************************************/
/*! exports provided: GetDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDataService", function() { return GetDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let GetDataService = class GetDataService {
    constructor(http) {
        this.http = http;
    }
    get2() {
        return this.http.get('http://localhost:2019/restro/get2');
    }
    get_search(SEARCH) {
        return this.http.get('http://localhost:2019/product/search/' + SEARCH);
    }
    getsub(cate, sub) {
        return this.http.get('http://localhost:2019/product/' + cate + '/' + sub);
    }
    getprice(cate, first, last) {
        return this.http.get('http://localhost:2019/product/' + cate + '/' + first + '/' + last);
    }
    get_sub_price(cate, sub, first, last) {
        return this.http.get('http://localhost:2019/product/sub/' + cate + '/' + sub + '/' + first + '/' + last);
    }
    get_cat(cate) {
        return this.http.get('http://localhost:2019/product/get_cate/' + cate);
    }
    addto(id) {
        return this.http.get('http://localhost:2019/cart/addtocart/recieve/' + id);
    }
    getcart() {
        return this.http.get('http://localhost:2019/cart/showcart/recieve');
    }
    increase1(id) {
        return this.http.get('http://localhost:2019/cart/addtocart/recieve/' + id);
    }
    decrease1(id) {
        return this.http.get('http://localhost:2019/cart/removefromcart/recieve/' + id);
    }
    remove1(id) {
        return this.http.get('http://localhost:2019/cart/remove1fromcart/recieve/' + id);
    }
    checkout() {
        return this.http.get('http://localhost:2019/cart/checkout/recieve');
    }
    clear() {
        return this.http.get('http://localhost:2019/cart/clearcart/recieve');
    }
    gethistory() {
        return this.http.get('http://localhost:2019/cart/history/recieve');
    }
    post_item(item) {
        return this.http.post('http://localhost:2019/menu/post2', item, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) });
    }
    get_id(id) {
        return this.http.get('http://localhost:2019/menu/get_id/' + id);
    }
    put_item(item) {
        return this.http.post('http://localhost:2019/product/post1', item, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) });
    }
};
GetDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GetDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GetDataService);



/***/ }),

/***/ "./src/app/get-user.service.ts":
/*!*************************************!*\
  !*** ./src/app/get-user.service.ts ***!
  \*************************************/
/*! exports provided: GetUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserService", function() { return GetUserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let GetUserService = class GetUserService {
    constructor(http) {
        this.http = http;
    }
    get1_user(username) {
        return this.http.get('http://localhost:2019/users/get_user/' + username);
    }
    get2_user(username) {
        return this.http.get('http://localhost:2019/restro/get_restro/' + username);
    }
    post1_user(posts) {
        return this.http.post('http://localhost:2019/users/post1', posts, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) });
    }
    post2_restro(posts_restro) {
        return this.http.post('http://localhost:2019/restro/post2', posts_restro, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) });
    }
    put_user(user) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: sessionStorage.getItem('basicauth') });
        return this.http.put('http://localhost:2019/users/put_user', user, { headers });
    }
    put_restro(user) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: sessionStorage.getItem('basicauth') });
        return this.http.put('http://localhost:2019/restro/put_restro', user, { headers });
    }
};
GetUserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GetUserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GetUserService);



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _get_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../get-data.service */ "./src/app/get-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




//console.log("homie");
let HomePageComponent = class HomePageComponent {
    constructor(router, service) {
        this.router = router;
        this.service = service;
        this.SEARCH = "";
    }
    ngOnInit() {
        // this.SEARCH=sessionStorage.getItem(username)
        this.service.get2().subscribe((data1) => {
            this.Data = data1;
        });
    }
    isUserLoggedIn() {
        let user = sessionStorage.getItem('username');
        console.log(user);
        return (user === null);
    }
    verify(id1) {
        console.log(id1);
        if (this.isUserLoggedIn()) {
            location.assign('/loginask');
        }
        else {
            this.router.navigate(['/menu'], { queryParams: { id: id1 } });
        }
    }
};
HomePageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _get_data_service__WEBPACK_IMPORTED_MODULE_2__["GetDataService"] }
];
HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")).default]
    })
], HomePageComponent);



/***/ }),

/***/ "./src/app/items.ts":
/*!**************************!*\
  !*** ./src/app/items.ts ***!
  \**************************/
/*! exports provided: items */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "items", function() { return items; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class items {
    constructor(restroId, name, category, 
    //public subcategory : string,
    price, 
    //public img : string,
    description, type) {
        this.restroId = restroId;
        this.name = name;
        this.category = category;
        this.price = price;
        this.description = description;
        this.type = type;
    }
}


/***/ }),

/***/ "./src/app/login-ask/login-ask.component.css":
/*!***************************************************!*\
  !*** ./src/app/login-ask/login-ask.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLWFzay9sb2dpbi1hc2suY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/login-ask/login-ask.component.ts":
/*!**************************************************!*\
  !*** ./src/app/login-ask/login-ask.component.ts ***!
  \**************************************************/
/*! exports provided: LoginAskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAskComponent", function() { return LoginAskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginAskComponent = class LoginAskComponent {
    constructor() { }
    ngOnInit() {
    }
    verify1() {
        location.assign('/login');
    }
    verify2() {
        location.assign('/loginRestro');
    }
};
LoginAskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-ask',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-ask.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-ask/login-ask.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-ask.component.css */ "./src/app/login-ask/login-ask.component.css")).default]
    })
], LoginAskComponent);



/***/ }),

/***/ "./src/app/login-restro/login-restro.component.css":
/*!*********************************************************!*\
  !*** ./src/app/login-restro/login-restro.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXJlc3Ryby9sb2dpbi1yZXN0cm8uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/login-restro/login-restro.component.ts":
/*!********************************************************!*\
  !*** ./src/app/login-restro/login-restro.component.ts ***!
  \********************************************************/
/*! exports provided: LoginRestroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRestroComponent", function() { return LoginRestroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _get_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../get-user.service */ "./src/app/get-user.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");





let LoginRestroComponent = class LoginRestroComponent {
    constructor(router, service, auth) {
        this.router = router;
        this.service = service;
        this.auth = auth;
        this.invalidLogin = false;
    }
    ngOnInit() {
        sessionStorage.removeItem('username');
    }
    check() {
        return this.invalidLogin;
    }
    check_login(username, password) {
        // (this.auth.authenticate_restro(username,password).subscribe(
        //   data => {
        //     this.router.navigate(['/addItem'])
        //     this.invalidLogin = false
        //   },
        //   error => {
        //     this.invalidLogin = true
        //   }
        // )
        // );
        this.service.get2_user(username).subscribe((data) => {
            this.DATA = data;
            console.log(this.DATA);
            if (this.DATA == null) {
                this.invalidLogin = true;
            }
            else {
                this.invalidLogin = false;
                this.router.navigate(['/addItem'], { queryParams: { id1: this.DATA.username } });
                // location.assign('/addItem');
            }
        });
    }
};
LoginRestroComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _get_user_service__WEBPACK_IMPORTED_MODULE_3__["GetUserService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
LoginRestroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-restro',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-restro.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-restro/login-restro.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-restro.component.css */ "./src/app/login-restro/login-restro.component.css")).default]
    })
], LoginRestroComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _get_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../get-user.service */ "./src/app/get-user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");





let LoginComponent = class LoginComponent {
    constructor(router, service, auth) {
        this.router = router;
        this.service = service;
        this.auth = auth;
        this.invalidLogin = false;
    }
    ngOnInit() {
        sessionStorage.removeItem('username');
    }
    check() {
        return this.invalidLogin;
    }
    check_login(username, password) {
        (this.auth.authenticate(username, password).subscribe(data => {
            console.log(data);
            this.router.navigate(['/home']);
            this.invalidLogin = false;
        }, error => {
            this.invalidLogin = true;
        }));
    }
    Sign() {
        location.assign('/sign-up');
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _get_user_service__WEBPACK_IMPORTED_MODULE_2__["GetUserService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _get_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../get-data.service */ "./src/app/get-data.service.ts");
/* harmony import */ var _orderhistory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../orderhistory */ "./src/app/orderhistory.ts");





let MenuComponent = class MenuComponent {
    constructor(route, service, router) {
        this.route = route;
        this.service = service;
        this.router = router;
        this.count = 0;
        this.orderArray = [];
        this.order = new _orderhistory__WEBPACK_IMPORTED_MODULE_4__["orderhistory"](0, "", 0, 0);
    }
    ngOnInit() {
        this.route.queryParams.subscribe(param => {
            this.ID = param.id;
            console.log(this.ID);
            this.service.get_id(this.ID).subscribe(data => {
                this.data2 = data;
                console.log(this.data2);
            });
        });
    }
    menu() {
        if (this.data2 == null) {
            return false;
        }
        else {
            return true;
        }
    }
    verify(id) {
        alert("Added");
        this.order.itemId = id;
        this.order.restroId = this.ID;
        this.orderArray[this.count] = this.order;
        this.orderArray[this.count].user = sessionStorage.getItem('username');
        this.orderArray[this.count].quantity = this.quantity;
        this.count++;
    }
    orderNow() {
        console.log(this.orderArray);
        alert("ORDER PLACED...");
        location.assign('/home');
    }
};
MenuComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _get_data_service__WEBPACK_IMPORTED_MODULE_3__["GetDataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")).default]
    })
], MenuComponent);



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _get_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../get-data.service */ "./src/app/get-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let NavBarComponent = class NavBarComponent {
    constructor(auth, service, route) {
        this.auth = auth;
        this.service = service;
        this.route = route;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(param => {
            this.restroLogin = param.id;
        });
    }
    check() {
        return this.restroLogin;
    }
    isUserLoggedIn() {
        let user = sessionStorage.getItem('username');
        console.log(user);
        return !(user === null);
    }
    isUserLoggedIn1() {
        let user = sessionStorage.getItem('username');
        this.user1 = user;
        return !(user === null);
    }
    logout() {
        sessionStorage.removeItem('username');
        location.assign('/home');
    }
};
NavBarComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _get_data_service__WEBPACK_IMPORTED_MODULE_3__["GetDataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")).default]
    })
], NavBarComponent);



/***/ }),

/***/ "./src/app/order-history/order-history.component.css":
/*!***********************************************************!*\
  !*** ./src/app/order-history/order-history.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyLWhpc3Rvcnkvb3JkZXItaGlzdG9yeS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/order-history/order-history.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/order-history/order-history.component.ts ***!
  \**********************************************************/
/*! exports provided: OrderHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryComponent", function() { return OrderHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OrderHistoryComponent = class OrderHistoryComponent {
    constructor() { }
    ngOnInit() {
    }
};
OrderHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-history',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-history/order-history.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-history.component.css */ "./src/app/order-history/order-history.component.css")).default]
    })
], OrderHistoryComponent);



/***/ }),

/***/ "./src/app/orderhistory.ts":
/*!*********************************!*\
  !*** ./src/app/orderhistory.ts ***!
  \*********************************/
/*! exports provided: orderhistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderhistory", function() { return orderhistory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class orderhistory {
    constructor(itemId, user, quantity, restroId) {
        this.itemId = itemId;
        this.user = user;
        this.quantity = quantity;
        this.restroId = restroId;
    }
}


/***/ }),

/***/ "./src/app/posts.ts":
/*!**************************!*\
  !*** ./src/app/posts.ts ***!
  \**************************/
/*! exports provided: posts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posts", function() { return posts; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class posts {
    constructor(email, username, password, pref) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.pref = pref;
    }
}


/***/ }),

/***/ "./src/app/posts_restro.ts":
/*!*********************************!*\
  !*** ./src/app/posts_restro.ts ***!
  \*********************************/
/*! exports provided: posts_restro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posts_restro", function() { return posts_restro; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class posts_restro {
    constructor(email, username, password, address, name, money
    //public image:string
    ) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.address = address;
        this.name = name;
        this.money = money;
    }
}


/***/ }),

/***/ "./src/app/restro/restro.component.css":
/*!*********************************************!*\
  !*** ./src/app/restro/restro.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3Ryby9yZXN0cm8uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/restro/restro.component.ts":
/*!********************************************!*\
  !*** ./src/app/restro/restro.component.ts ***!
  \********************************************/
/*! exports provided: RestroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestroComponent", function() { return RestroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _get_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../get-user.service */ "./src/app/get-user.service.ts");
/* harmony import */ var _posts_restro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../posts_restro */ "./src/app/posts_restro.ts");




let RestroComponent = class RestroComponent {
    constructor(service) {
        this.service = service;
        this.post2 = new _posts_restro__WEBPACK_IMPORTED_MODULE_3__["posts_restro"]("", "", "", "", "", "");
    }
    ngOnInit() {
    }
    Onsubmit() {
        this.service.post2_restro(this.post2).subscribe(data => console.log("SUCCESS", data), error => console.log("ERROR", error));
        location.assign('/loginRestro');
    }
};
RestroComponent.ctorParameters = () => [
    { type: _get_user_service__WEBPACK_IMPORTED_MODULE_2__["GetUserService"] }
];
RestroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-restro',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./restro.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/restro/restro.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./restro.component.css */ "./src/app/restro/restro.component.css")).default]
    })
], RestroComponent);



/***/ }),

/***/ "./src/app/sign-up/sign-up.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SignUpComponent = class SignUpComponent {
    constructor() { }
    ngOnInit() { }
    verify1() {
        location.assign('/restro');
    }
    verify2() {
        location.assign('/cust');
    }
};
SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-up',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-up.component.css */ "./src/app/sign-up/sign-up.component.css")).default]
    })
], SignUpComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Agam Chopra\Downloads\project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map