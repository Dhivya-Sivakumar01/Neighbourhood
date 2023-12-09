import { ResidentType } from "enums/residentType";
import { AutoIncrement, Column, Default, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({tableName: 'Residents', timestamps: true, paranoid:true})
export class Residents extends Model{
    @Column
    @PrimaryKey
    @AutoIncrement
    id: number

    @Column
    residentName: string

    @Column
    @Default(['Owner','Tenant']) //try
    type: ResidentType

    @Column
    @Default(false)
    isOfficeBearer: boolean
}