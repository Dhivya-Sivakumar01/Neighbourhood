import { Model } from "sequelize-typescript";
export declare class BasicExpenses extends Model {
    categoryId: number;
    categoryName: string;
    amount: number;
    isPrimary: boolean;
}
