import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  alpha: number[] = [];
  beta: number[] = [];

  constructor() { }

  generate(which: string): void {
    switch (which) {
      case 'alpha':
        this.alpha.push(this.random());
        break;
      case 'beta':
        this.beta.push(this.random());
        break;
    }
  }

  delta(): number {
    return Math.abs(this.alpha.reduce((a, b) => a + b, 0) - this.beta.reduce((a, b) => a + b, 0));
  }

  private random = () : number => Math.floor(Math.random() * 10);
}
