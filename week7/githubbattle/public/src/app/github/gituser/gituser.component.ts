import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-gituser',
  templateUrl: './gituser.component.html',
  styleUrls: ['./gituser.component.css']
})
export class GituserComponent implements OnInit {
@Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
