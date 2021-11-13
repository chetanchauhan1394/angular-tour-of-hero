import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  constructor() {}

  add(message: string) {
    // console.log("messages==>", this.messages);
    
    this.messages.push(message);
  }

  clear(){
    this.messages = [];
  }
}
