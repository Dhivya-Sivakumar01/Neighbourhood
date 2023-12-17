import { Model } from "sequelize-typescript";
export declare class ApartmentDetails extends Model {
    id: number;
    apartmentId: number;
    blockNumber: string;
    doorNumber: string;
    ownerId: number;
    tenantId: number;
}
