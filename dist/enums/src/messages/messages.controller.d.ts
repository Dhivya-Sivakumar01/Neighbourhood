import { MessagesService } from './messages.service';
import { Messages } from 'models/messages.model';
export declare class MessagesController {
    private readonly messagesService;
    constructor(messagesService: MessagesService);
    findAllAnnouncements(): Promise<Messages[]>;
    create(createMessageDto: Messages): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateMessageDto: Messages): string;
    remove(id: string): string;
}
