import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  notes : Array<Note> = []

  constructor(private _service : NoteService) {
    this._service.notes.subscribe(
      notes => this.notes = notes.reverse()
    );
   }

  ngOnInit() {
    this._service.fetch();
  }

}
