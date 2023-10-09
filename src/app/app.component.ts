import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';
  flag: boolean = false;
  constructor() {
    const token = localStorage.getItem('Token');
    if(token){
      this.flag = true;
    }
  }
}
