"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesDAO = void 0;
const messageType_1 = require("../../enums/messageType");
const messages_model_1 = require("../../models/messages.model");
const residents_model_1 = require("../../models/residents.model");
class MessagesDAO {
    async findAllAnnouncements() {
        console.log('Entered into MessagesDAO.findAllAnnouncements');
        return await messages_model_1.Messages.findAll({ where: { type: messageType_1.MessageType.Announcement }, include: [residents_model_1.Residents] });
    }
}
exports.MessagesDAO = MessagesDAO;
//# sourceMappingURL=messages.dao.js.map