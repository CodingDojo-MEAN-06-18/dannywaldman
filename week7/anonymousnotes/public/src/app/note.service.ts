import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from './note';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes: BehaviorSubject<Array<Note>> = new BehaviorSubject([]);

  constructor(private _http: HttpClient) { }

  add(note: Note): void {
    this._http.post('/add', note).subscribe(
      data => {
        const notes = this.getNotes();
        notes.push(data as Note);
        this.notes.next(notes);
      },
      err => console.log(err)
    );
  }

  fetch() {
    this._http.get('/fetch').subscribe(
      data => this.notes.next(data as Array<Note>),
      err => console.log(err)
    );
  }

  private getNotes = (): Array<Note> => this.notes.getValue();
}
