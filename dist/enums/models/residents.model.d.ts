import { ResidentType } from "enums/residentType";
import { Model } from "sequelize-typescript";
export declare class Residents extends Model {
    residentId: number;
    residentName: string;
    type: ResidentType;
    isOfficeBearer: boolean;
}
