
import { MessageType } from "enums/messageType";
import { Messages } from "models/messages.model";
import { Residents } from "models/residents.model";

export class MessagesDAO{
    public async findAllAnnouncements():Promise<Messages[]>{
        console.log('Entered into MessagesDAO.findAllAnnouncements');
        return await Messages.findAll({where:{type:MessageType.Announcement},include:[Residents]})
    }
}