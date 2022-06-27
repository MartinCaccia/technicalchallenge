import {AnimalsInterface} from '../interfaces/zoo';

export class Animals implements AnimalsInterface {
  constructor(public name: string, public sound: string) {}

  speak(talk: string): void {
    talk = talk.replace(/ /g, ` ${this.sound} `);
    talk = `${talk} ${this.sound}`;
    console.log(talk);
  }
}
