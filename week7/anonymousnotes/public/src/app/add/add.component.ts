import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NgForm } from '@angular/forms';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  n : Note = new Note();

  constructor(private _service : NoteService) { }

  ngOnInit() {
  }

  onSubmit(event : Event, form : NgForm) : void {
    this._service.add(this.n);
    event.preventDefault();
    form.reset();
  }

}
