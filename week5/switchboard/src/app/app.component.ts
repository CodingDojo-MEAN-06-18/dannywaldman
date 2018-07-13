import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';
  buttons = [
    {state:false},
    {state:false},
    {state:false},
    {state:false},
    {state:false},
    {state:false},
    {state:false},
    {state:false}
  ];

  toggle = (index: number) => this.buttons[index].state = this.buttons[index].state ? false : true;
}
