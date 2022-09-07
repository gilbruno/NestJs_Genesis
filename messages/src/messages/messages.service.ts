import { Injectable } from '@nestjs/common';
import { MessagesRepository } from "./messages.repository";

@Injectable()
export class MessagesService {

    //'public' keyword automatically assign the argument to the property of the class
    constructor(public messagesRepo: MessagesRepository) {}

    findOne(id: string) {
        console.log('id service :  '+id)
        return this.messagesRepo.findOne(id);
    }

    findAll() {
        return this.messagesRepo.findAll();
    }

    create(content: string) {
        this.messagesRepo.create(content);
    }
}