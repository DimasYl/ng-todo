import {Component} from '@angular/core';
import {ITodo, todos} from "./todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: ITodo[] = todos

  addTask(title: string) {
    this.todos.push({
      title, completed: false
    })
  }
}
