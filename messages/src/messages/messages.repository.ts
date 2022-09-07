import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from "fs/promises";
import { MessagesSettings } from "src/messages.settings";

@Injectable()
export class MessagesRepository {

    messages_path = MessagesSettings.PATH_FILE_MESSAGES+'messages.json';

    async findOne(id: string) {
        const contents = await readFile(this.messages_path, 'utf8');
        const messages = JSON.parse(contents);
        console.log(messages);
        console.log('id : ' + id);
        return messages.id;
    }

    async findAll() {
        const contents = await readFile(this.messages_path, 'utf8');
        const messages = JSON.parse(contents);
        return messages;
    }

    async create(content: string) {
        console.log('*** create')
        const contents = await readFile(this.messages_path, 'utf8');
        const messages = JSON.parse(contents);

        const id = Math.floor(Math.random() * 999);
        console.log('*** id : ' + id)
        messages[id] = {id, content}; 
        console.log(messages)
        await writeFile(this.messages_path, JSON.stringify(messages));
    }

}