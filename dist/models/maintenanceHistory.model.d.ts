import { Model } from "sequelize-typescript";
export declare class MaintenanceHistory extends Model {
    maintenanceId: number;
    month: Date;
    totalAmount: number;
}
