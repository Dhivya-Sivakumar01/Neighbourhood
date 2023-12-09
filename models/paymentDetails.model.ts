import { AutoIncrement, Column, HasMany,DataType, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Residents } from "./residents.model";
import { Apartment } from "./apartment.model";
import { ApartmentDetails } from "./apartmentDetails.model";



@Table({tableName: 'PaymentDetails', timestamps: true, paranoid:true}) //paranoid defines softdelete(isDeleted)
export class PaymentDetails extends Model{
    
    @Column(DataType.INTEGER)
    @PrimaryKey
    @AutoIncrement
    id: number

    @Column(DataType.INTEGER)
    @HasMany(()=> Residents,{foreignKey: {name:'id'}, sourceKey: 'residentId', as: 'OneToManyResident'})
    residentId:number;

    @Column(DataType.STRING)
    @HasMany(()=> ApartmentDetails,{foreignKey:{name:'id'}, sourceKey: 'apartmentId', as: 'OneToManyApartment'})
    apartmentId:string;

    @Column(DataType.DATE)
    paymentDate: Date;

}