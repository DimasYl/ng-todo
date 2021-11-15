import {Component, OnInit, Input} from '@angular/core';
import {ITodo} from "../todo";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() task: any;
  @Input() index: any;
  @Input() todos: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggle(task: ITodo) {
    task.completed = !task.completed
  }

  remove(index: number) {
    this.todos.splice(index, 1)
  }
}
