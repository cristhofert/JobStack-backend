"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.__esModule = true;
exports.Empresa = void 0;
var typeorm_1 = require("typeorm");
var Oferta_1 = require("./Oferta");
var Empresa = /** @class */ (function (_super) {
    __extends(Empresa, _super);
    function Empresa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Empresa.prototype, "id");
    __decorate([
        typeorm_1.Column({ unique: true }),
        __metadata("design:type", String)
    ], Empresa.prototype, "email");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Empresa.prototype, "contrasenna");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Empresa.prototype, "nombre");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Empresa.prototype, "icono");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Empresa.prototype, "descripcion");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Empresa.prototype, "departamento");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Empresa.prototype, "direccion");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Empresa.prototype, "sitio_web");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Empresa.prototype, "comentarios");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Empresa.prototype, "twitter");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Empresa.prototype, "facebook");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Empresa.prototype, "linkedin");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Empresa.prototype, "github");
    __decorate([
        typeorm_1.OneToMany(function () { return Oferta_1.Oferta; }, function (oferta) { return oferta.empresa; }),
        __metadata("design:type", Array)
    ], Empresa.prototype, "ofertas");
    Empresa = __decorate([
        typeorm_1.Entity()
    ], Empresa);
    return Empresa;
}(typeorm_1.BaseEntity));
exports.Empresa = Empresa;
