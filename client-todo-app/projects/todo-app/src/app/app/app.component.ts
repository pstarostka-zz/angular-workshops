import { Component } from '@angular/core';

@Component({
  selector: 'cta-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'todo-app';

  public navigation = [
    { link: '', name: 'Main' },
    { link: 'home', name: 'Home' },
    { link: 'about', name: 'Super About' }
  ];
}
