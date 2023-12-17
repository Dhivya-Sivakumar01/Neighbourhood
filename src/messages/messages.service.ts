import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Messages } from 'models/messages.model';
import { MessagesDAO } from './messages.dao';

@Injectable()
export class MessagesService {

  private messageDAO= new MessagesDAO();

  create(createMessageDto: Messages) {
    return 'This action adds a new message';
  }

  findAll() {
    return `This action returns all messages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  update(id: number, updateMessageDto: Messages) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }

  findAllAnnouncements(){
    console.log('Entered into MessagesService.findAllAnnouncements');
    return this.messageDAO.findAllAnnouncements()
  }
}
