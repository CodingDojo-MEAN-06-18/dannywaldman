import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private _http : HttpClient) {
    this.retreiveTask();
  }

retreiveTask(){
  this._http.get('https://5b5bc04b50bab80014e5f8a0.mockapi.io/task').subscribe(
    (task : any[]) => {this.tasks.next(task);}
  );
}
addTask(newTask : any): void {
  this._http.post('https://5b5bc04b50bab80014e5f8a0.mockapi.io/task', newTask).subscribe(
      (response) => {this.retreiveTask();}
  );
}
}
