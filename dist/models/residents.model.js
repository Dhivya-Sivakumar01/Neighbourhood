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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Residents = void 0;
const residentType_1 = require("../enums/residentType");
const sequelize_typescript_1 = require("sequelize-typescript");
let Residents = class Residents extends sequelize_typescript_1.Model {
};
exports.Residents = Residents;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Residents.prototype, "residentId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Residents.prototype, "residentName", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(['Owner', 'Tenant']),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Residents.prototype, "type", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], Residents.prototype, "isOfficeBearer", void 0);
exports.Residents = Residents = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Residents', timestamps: true, paranoid: true })
], Residents);
//# sourceMappingURL=residents.model.js.map