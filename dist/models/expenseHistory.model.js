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
exports.ExpenseHistory = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const basicExpenses_model_1 = require("./basicExpenses.model");
const maintenanceHistory_model_1 = require("./maintenanceHistory.model");
let ExpenseHistory = class ExpenseHistory extends sequelize_typescript_1.Model {
};
exports.ExpenseHistory = ExpenseHistory;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], ExpenseHistory.prototype, "expenseId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
    (0, sequelize_typescript_1.HasMany)(() => maintenanceHistory_model_1.MaintenanceHistory, { foreignKey: { name: 'id' }, sourceKey: 'maintenanceId', as: 'OneToManyMaintenance' }),
    __metadata("design:type", Number)
], ExpenseHistory.prototype, "maintenanceId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
    (0, sequelize_typescript_1.HasMany)(() => basicExpenses_model_1.BasicExpenses, { foreignKey: { name: 'categoryId' }, sourceKey: 'categoryId', as: 'OneToManyCategory' }),
    __metadata("design:type", Number)
], ExpenseHistory.prototype, "categoryId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DECIMAL(5, 2)),
    __metadata("design:type", Number)
], ExpenseHistory.prototype, "expense", void 0);
exports.ExpenseHistory = ExpenseHistory = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'ExpenseHistory', timestamps: true, paranoid: true })
], ExpenseHistory);
//# sourceMappingURL=expenseHistory.model.js.map