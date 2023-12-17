import { Messages } from 'models/messages.model';
export declare class MessagesService {
    private messageDAO;
    create(createMessageDto: Messages): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMessageDto: Messages): string;
    remove(id: number): string;
    findAllAnnouncements(): Promise<Messages[]>;
}
