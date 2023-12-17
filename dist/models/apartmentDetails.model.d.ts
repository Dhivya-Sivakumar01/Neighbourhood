import { Model } from "sequelize-typescript";
export declare class ApartmentDetails extends Model {
    apartmentDetailsId: number;
    apartmentId: number;
    blockNumber: string;
    doorNumber: string;
    ownerId: number;
    tenantId: number;
}
