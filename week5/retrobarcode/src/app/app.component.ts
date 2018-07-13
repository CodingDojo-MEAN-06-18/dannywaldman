import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode Generator';

  colors: Array<String> = [
    'BlanchedAlmond',
    'BlueViolet',
    'CornflowerBlue',
    'DarkRed',
    'blue',
    'Cyan',
    'DarkBlue',
    'DarkCyan',
    'DarkGreen',
    'DarkOrange',
    'DarkOrchid'
  ]

  random = () => Math.floor(Math.random() * this.colors.length);
}
