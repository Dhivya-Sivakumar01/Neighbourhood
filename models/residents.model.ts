import { ResidentType } from "enums/residentType";
import { AutoIncrement, Column, Default, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({tableName: 'Residents', timestamps: true, paranoid:true})
export class Residents extends Model{
    
    @PrimaryKey
    @AutoIncrement
    @Column
    residentId: number

    @Column
    residentName: string

    @Default(['Owner','Tenant']) //try
    @Column
    type: ResidentType

    @Default(false)
    @Column
    isOfficeBearer: boolean
}