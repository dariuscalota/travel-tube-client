"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var register_component_1 = require('../register/register.component');
var login_component_1 = require('../login/login.component');
var NavbarComponent = (function () {
    function NavbarComponent(_router) {
        this._router = _router;
    }
    NavbarComponent.prototype.isActive = function (instruction) {
        return this._router.isRouteActive(this._router.generate(instruction));
    };
    NavbarComponent.prototype.onRegisterClick = function () {
        $('.ui.modal.register').modal('show');
    };
    NavbarComponent.prototype.onLoginClick = function () {
        $('.ui.modal.login').modal('show');
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'navbar',
            templateUrl: 'app/widgets/navbar/navbar.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, register_component_1.RegisterComponent, login_component_1.LoginComponent]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map