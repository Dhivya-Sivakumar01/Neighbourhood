import { Model } from "sequelize-typescript";
export declare class MaintenanceHistory extends Model {
    maintenanceid: number;
    month: String;
    totalAmount: number;
}
