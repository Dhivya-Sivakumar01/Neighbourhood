import { MessageType } from "enums/messageType";
import { Model } from "sequelize-typescript";
export declare class Messages extends Model {
    messageId: number;
    messageTitle: string;
    image: Blob;
    description: string;
    createdBy: number;
    createdAt: Date;
    type: MessageType;
    replyId?: number;
}
