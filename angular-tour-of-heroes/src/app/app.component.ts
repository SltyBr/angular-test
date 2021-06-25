import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-course';
  name = 'Pavel';
  text = 'Hello World';
  isRed = false;
  inlineStyle = true;
  currentItem = 'from Parent';

  items = ['item1', 'item2', 'item3', 'item4'];

  myVar = false;

  changeItem(){
    this.currentItem = "changed"
  }

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  logItem(item){
    console.log(item);
  }
}
