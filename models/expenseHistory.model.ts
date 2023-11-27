import { AutoIncrement, Column, DataType, HasMany, PrimaryKey, Table, Model } from "sequelize-typescript";
import { BasicExpenses } from "./basicExpenses.model";
import { MaintenanceHistory } from "./maintenanceHistory.model";

@Table({tableName: 'ExpenseHistory', timestamps: true, paranoid:true}) 
export class ExpenseHistory extends Model{

   @Column(DataType.INTEGER)
   @PrimaryKey
   @AutoIncrement
   id: number;

   @Column(DataType.INTEGER)
   @HasMany(()=> MaintenanceHistory,{foreignKey: {name:'id'}, sourceKey: 'maintenanceId', as: 'OneToManyMaintenance'})
   maintenanceId:number;

   @Column(DataType.INTEGER)
   @HasMany(()=> BasicExpenses,{foreignKey:{name:'categoryId'}, sourceKey: 'categoryId', as: 'OneToManyCategory'})
   categoryId:number;

   @Column(DataType.DECIMAL(5,2))
   expense: number;

}