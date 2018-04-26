"use strict";function Auth(e,t){e.loginUrl=t+"/login",e.signupUrl=t+"/register",e.tokenPrefix=""}function RegisterController(e,t){var r=this;r.user={is_store:!1},r.submit=function(){e.signup(r.user).then(function(){t.go("login")})}}function LoginController(e,t){var r=this;r.credentials={},r.submit=function(){e.login(r.credentials).then(function(r){e.currentUser=r.data.user,console.log("LoginController: successResponse:",r),e.currentUser.is_store?t.go("usersShow",{id:e.currentUser.id}):t.go("usersIndex")})}}function MainController(e,t,r,o,l){var s=this;s.isLoggedIn=e.isAuthenticated,s.message=null;var n=["usersEdit","usersNew"];r.$on("$stateChangeStart",function(r,l){s.message=null,e.isAuthenticated()&&(s.currentUser=o.get({id:e.getPayload().id}),console.log("main.currentUser")),!e.isAuthenticated()&&n.includes(l.name)&&(r.preventDefault(),t.go("login"),s.message="You must be logged in to go there!")}),s.logout=function(){e.logout().then(function(){t.go("home")})},s.selectedList=[],s.addToSelectedProducts=function(e){s.selectedList.push(e),console.log("Basket: ",s.selectedList)}}function Router(e,t){e.state("home",{url:"/",templateUrl:"/templates/home.html",controller:"MainController as home"}).state("usersIndex",{url:"/users",templateUrl:"/templates/usersIndex.html",controller:"UsersIndexController as usersIndex"}).state("register",{url:"/register",templateUrl:"/templates/register.html",controller:"RegisterController as register"}).state("login",{url:"/login",templateUrl:"/templates/login.html",controller:"LoginController as login"}).state("productsOffered",{url:"/products/offered",templateUrl:"/templates/productsOffered.html",controller:"ProductsOfferedController as productsOffered"}).state("userOffers",{url:"/offers",templateUrl:"/templates/userOffers.html",controller:"UserOffersController as userOffers"}).state("usersShow",{url:"/users/:id",templateUrl:"/templates/usersShow.html",controller:"UsersShowController as usersShow"}).state("usersEdit",{url:"/users/:id/edit",templateUrl:"/templates/usersEdit.html",controller:"UsersEditController as usersEdit"}).state("productsIndex",{url:"/products",templateUrl:"/templates/productsIndex.html",controller:"ProductsIndexController as productsIndex"}).state("productsNew",{url:"/products/new",templateUrl:"/templates/productsNew.html",controller:"ProductsNewController as productsNew"}).state("productsShow",{url:"/products/:id",templateUrl:"/templates/productsShow.html",controller:"ProductsShowController as productsShow"}).state("productsEdit",{url:"/products/:id/edit",templateUrl:"/templates/productsEdit.html",controller:"ProductsEditController as productsEdit"}).state("tagsIndex",{url:"/tags",templateUrl:"/templates/tagsIndex.html",controller:"TagsIndexController as tagsIndex"}).state("tagsShow",{url:"/tags/:id",templateUrl:"/templates/tagsShow.html",controller:"TagsShowController as tagsShow"}).state("tagsEdit",{url:"/tags/:id/edit",templateUrl:"/templates/tagsEdit.html",controller:"TagsEditController as tagsEdit"}),t.otherwise("/users")}function User(e,t){return new e(t+"/users/:id",{id:"@id"},{update:{method:"PUT"}})}function UsersIndexController(e,t,r,o){var l=this;l.all=t.query({is_store:!0}),l.location={latitude:51.51,longitude:-.08},r.navigator.geolocation.getCurrentPosition(function(e){l.location.latitude=e.coords.latitude,l.location.longitude=e.coords.longitude,o.$apply()})}function UsersNewController(e,t){var r=this;r.user={},r.create=function(){e.save(r.user,function(){t.go("usersIndex")})}}function UsersShowController(e,t,r,o,l,s){var n=this;n.user=e.get(t.params),n.location={latitude:51.51,longitude:-.08},l.navigator.geolocation.getCurrentPosition(function(e){n.location.latitude=e.coords.latitude,n.location.longitude=e.coords.longitude,o.$apply()}),n.delete=function(){n.user.$remove(function(){t.go("usersIndex")})},n.isLoggedIn=r.isAuthenticated}function UsersEditController(e,t){var r=this;r.user=e.get(t.params),this.update=function(){console.log(r.user),r.user.$update(function(){t.go("usersShow",t.params)})}}function UserOffersController(e){this.all=e.query({is_available:!0})}angular.module("PopShopRzProject",["ngResource","ui.router","satellizer"]).constant("API_URL","http://localhost:3000/api").config(Auth),Auth.$inject=["$authProvider","API_URL"],angular.module("PopShopRzProject").controller("RegisterController",RegisterController).controller("LoginController",LoginController),RegisterController.$inject=["$auth","$state"],LoginController.$inject=["$auth","$state"],angular.module("PopShopRzProject").controller("MainController",MainController),MainController.$inject=["$auth","$state","$rootScope","User","$window"],angular.module("PopShopRzProject").config(Router),Router.$inject=["$stateProvider","$urlRouterProvider"],angular.module("PopShopRzProject").factory("User",User),User.$inject=["$resource","API_URL"],angular.module("PopShopRzProject").controller("UsersIndexController",UsersIndexController).controller("UsersNewController",UsersNewController).controller("UsersShowController",UsersShowController).controller("UsersEditController",UsersEditController).controller("UserOffersController",UserOffersController),UsersIndexController.$inject=["$auth","User","$window","$scope"],UsersNewController.$inject=["User","$state"],UsersShowController.$inject=["User","$state","$auth","$scope","$window","$http"],UsersEditController.$inject=["User","$state"],UserOffersController.$inject=["Product"];
//# sourceMappingURL=app.js.map
