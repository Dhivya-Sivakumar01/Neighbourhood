import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Sequelize } from 'sequelize';

@Table({tableName: 'Apartment', timestamps: true, paranoid:true}) //paranoid defines softdelete(isDeleted)
export class Apartment extends Model{
    
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    apartmentId: number;

    @Column(DataType.STRING)
    apartmentName:string;

    @Column(DataType.STRING)
    location:string
}