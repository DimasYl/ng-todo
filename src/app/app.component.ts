import { Component } from '@angular/core';
import {ITodo, todos} from "./todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: ITodo[] = todos
  toggle(task: ITodo) {
    task.completed = !task.completed
  }
}
