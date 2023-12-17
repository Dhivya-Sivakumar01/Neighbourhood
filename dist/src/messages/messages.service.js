"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesService = void 0;
const common_1 = require("@nestjs/common");
const messages_dao_1 = require("./messages.dao");
let MessagesService = class MessagesService {
    constructor() {
        this.messageDAO = new messages_dao_1.MessagesDAO();
    }
    create(createMessageDto) {
        return 'This action adds a new message';
    }
    findAll() {
        return `This action returns all messages`;
    }
    findOne(id) {
        return `This action returns a #${id} message`;
    }
    update(id, updateMessageDto) {
        return `This action updates a #${id} message`;
    }
    remove(id) {
        return `This action removes a #${id} message`;
    }
    findAllAnnouncements() {
        console.log('Entered into MessagesService.findAllAnnouncements');
        return this.messageDAO.findAllAnnouncements();
    }
};
exports.MessagesService = MessagesService;
exports.MessagesService = MessagesService = __decorate([
    (0, common_1.Injectable)()
], MessagesService);
//# sourceMappingURL=messages.service.js.map