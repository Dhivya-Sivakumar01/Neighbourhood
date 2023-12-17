import { AutoIncrement, Column, DataType, PrimaryKey, Table,Model } from "sequelize-typescript";

@Table({tableName: 'MaintenanceHistory', timestamps: true, paranoid:true}) 
export class MaintenanceHistory extends Model{


   @PrimaryKey
   @AutoIncrement
   @Column(DataType.INTEGER)
   maintenanceId: number;

   @Column(DataType.DATEONLY)
   month: Date;

   @Column(DataType.DECIMAL(5,2))
   totalAmount: number;

}