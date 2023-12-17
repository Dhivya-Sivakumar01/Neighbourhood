import { Model } from "sequelize-typescript";
export declare class ExpenseHistory extends Model {
    expenseId: number;
    maintenanceId: number;
    categoryId: number;
    expense: number;
}
