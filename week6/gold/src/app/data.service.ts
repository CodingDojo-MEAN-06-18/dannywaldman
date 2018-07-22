import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  gold : number = 0;
  logs : Array<string> = [];
  emitGold : BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() { }


  setGold(type:string, low:number, high:number) : void{
    let gamble = Math.floor(Math.random() * (high - low + 1) + low);
    this.logs.push(`You've ${gamble < 0 ? 'lost' : 'earned'} ${gamble} from ${type}`);
    this.emitGold.next(this.gold += gamble);
  }

}
