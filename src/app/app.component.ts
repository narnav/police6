import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my app';
  total:number =1

  greeting(user:string){
    return `mr. ${user}`
  }
  add(){
    this.total++;
  }

  minus(){
    this.total--;
  }
}
