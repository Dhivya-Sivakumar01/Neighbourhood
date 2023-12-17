import { MessageType } from "enums/messageType";
import { AutoIncrement, Column, HasMany,DataType, Model, PrimaryKey, Table, HasOne, AllowNull } from "sequelize-typescript";
import { Residents } from "./residents.model";


@Table({tableName: 'Messages', timestamps: true, paranoid:true}) 
export class Messages extends Model{
    

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    messageId: number;

    @Column(DataType.STRING)
    messageTitle:string;

  
    @AllowNull
    @Column(DataType.BLOB)
    image:Blob;

    @Column(DataType.STRING)
    description:string;

    @Column(DataType.STRING)
    @HasOne(()=> Residents,{foreignKey: {name:'residentId'}, sourceKey: 'createdBy', as: 'OneToOneResident'})
    createdBy:number;

    @Column(DataType.DATE)
    createdAt:Date;
    
    @Column(DataType.STRING)
    type:MessageType;

    @Column(DataType.INTEGER)
    @HasMany(()=>Messages,{foreignKey: {name:'messageId'}, sourceKey: 'replyId', as: 'OneToManyResident'})
    replyId?: number;
}