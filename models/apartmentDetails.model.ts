import { AutoIncrement, Column,HasMany,Model, PrimaryKey, Table } from "sequelize-typescript"
import { Apartment } from "./apartment.model"
import { Residents } from "./residents.model"

@Table({tableName: 'ApartmentDetails', timestamps: true, paranoid:true})
export class ApartmentDetails extends Model{

    @PrimaryKey
    @AutoIncrement
    @Column
    id:number

    @Column
    @HasMany(()=> Apartment,{foreignKey: {name:'apartmentId'}, sourceKey: 'apartmentId', as: 'Apartment'})
    apartmentId:number

    @Column
    blockNumber:string

    @Column
    doorNumber:string

    @Column
    @HasMany(()=> Residents,{foreignKey: {name:'id'}, sourceKey: 'ownerId', as: 'Resident'})
    ownerId:number

    @Column
    @HasMany(()=> Residents,{foreignKey: {name:'id'}, sourceKey: 'ownerId', as: 'Resident'})
    tenantId:number
}