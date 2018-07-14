import { Component } from '@angular/core';
import { User } from './user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';
  user = new User();
  pw_match: boolean = null;
  valid: boolean = false;
  users : Array<User> = [];

  submit = (evt: Event, frm: NgForm) => {
    evt.preventDefault();
    this.pw_match = this.user.password == frm.controls['confirm_pw'].value;
    if (this.pw_match) {
      this.users.push(this.user);
      this.user = new User();
      frm.reset();
      this.valid = true;
    } else {
      this.valid = false;
    }
  }
}
