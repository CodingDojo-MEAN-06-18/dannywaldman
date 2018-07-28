import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  data:any[] = [];

  constructor(private _taskService : TaskService) { }

  ngOnInit() {
    this._taskService.tasks.subscribe(
      (data) => {this.data = data}
    );
  }

  onSubmit(data:any) :void{
    this._taskService.addTask(data);
  }

}
