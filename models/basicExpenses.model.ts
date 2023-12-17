import { AutoIncrement, Column, HasMany,DataType, Model, PrimaryKey, Table, HasOne } from "sequelize-typescript";

@Table({tableName: 'BasicExpenses', timestamps: true, paranoid:true}) 
export class BasicExpenses extends Model{


    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    categoryId:number;

    @Column(DataType.STRING)
    categoryName:string;

    @Column(DataType.INTEGER)
    amount:number;

    @Column(DataType.BOOLEAN)
    isPrimary:boolean;

}