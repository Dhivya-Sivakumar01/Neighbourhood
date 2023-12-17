import { AutoIncrement, Column, HasMany,DataType, Model, PrimaryKey, Table, HasOne } from "sequelize-typescript";
import { Residents } from "./residents.model";
import { ApartmentDetails } from "./apartmentDetails.model";



@Table({tableName: 'PaymentDetails', timestamps: true, paranoid:true}) //paranoid defines softdelete(isDeleted)
export class PaymentDetails extends Model{
    
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    paymentId: number

    @Column(DataType.INTEGER)
    @HasMany(()=> Residents,{foreignKey: {name:'residentId'}, sourceKey: 'residentId', as: 'OneToOneResident'})
    residentId:number;

    @Column(DataType.STRING)
    @HasMany(()=> ApartmentDetails,{foreignKey:{name:'apartmentDetailsId'}, sourceKey: 'apartmentDetailsId', as: 'OneToManyApartment'})
    apartmentDetailsId:string;

    @Column(DataType.DATE)
    paymentDate: Date;

}