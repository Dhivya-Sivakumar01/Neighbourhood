import { Model } from "sequelize-typescript";
export declare class PaymentDetails extends Model {
    paymentId: number;
    residentId: number;
    apartmentDetailsId: string;
    paymentDate: Date;
}
