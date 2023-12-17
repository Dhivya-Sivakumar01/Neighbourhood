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
exports.ApartmentDetails = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const apartment_model_1 = require("./apartment.model");
const residents_model_1 = require("./residents.model");
let ApartmentDetails = class ApartmentDetails extends sequelize_typescript_1.Model {
};
exports.ApartmentDetails = ApartmentDetails;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ApartmentDetails.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    (0, sequelize_typescript_1.HasMany)(() => apartment_model_1.Apartment, { foreignKey: { name: 'apartmentId' }, sourceKey: 'apartmentId', as: 'Apartment' }),
    __metadata("design:type", Number)
], ApartmentDetails.prototype, "apartmentId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ApartmentDetails.prototype, "blockNumber", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ApartmentDetails.prototype, "doorNumber", void 0);
__decorate([
    sequelize_typescript_1.Column,
    (0, sequelize_typescript_1.HasMany)(() => residents_model_1.Residents, { foreignKey: { name: 'residentId' }, sourceKey: 'ownerId', as: 'Resident' }),
    __metadata("design:type", Number)
], ApartmentDetails.prototype, "ownerId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    (0, sequelize_typescript_1.HasMany)(() => residents_model_1.Residents, { foreignKey: { name: 'residentId' }, sourceKey: 'ownerId', as: 'Resident' }),
    __metadata("design:type", Number)
], ApartmentDetails.prototype, "tenantId", void 0);
exports.ApartmentDetails = ApartmentDetails = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'ApartmentDetails', timestamps: true, paranoid: true })
], ApartmentDetails);
//# sourceMappingURL=apartmentDetails.model.js.map