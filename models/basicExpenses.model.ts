import { AutoIncrement, Column, HasMany,DataType, Model, PrimaryKey, Table, HasOne } from "sequelize-typescript";

@Table({tableName: 'BasicExpenses', timestamps: true, paranoid:true}) 
export class BasicExpenses extends Model{

    @Column(DataType.INTEGER)
    @PrimaryKey
    @AutoIncrement
    categoryId:number;

    @Column(DataType.STRING)
    categoryName:string;

    @Column(DataType.INTEGER)
    amount:number;

    @Column(DataType.BOOLEAN)
    isPrimary:boolean;

}