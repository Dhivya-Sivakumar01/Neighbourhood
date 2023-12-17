import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Messages } from 'models/messages.model';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get('/announcements')
  findAllAnnouncements(){
    console.log('Entered into MessagesController.findAllAnnouncements');
    return this.messagesService.findAllAnnouncements();
  }

  @Post()
  create(@Body() createMessageDto: Messages) {
    return this.messagesService.create(createMessageDto);
  }

  @Get()
  findAll() {
    console.log('Hello1')
    return this.messagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMessageDto: Messages) {
    return this.messagesService.update(+id, updateMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messagesService.remove(+id);
  }

  
}
