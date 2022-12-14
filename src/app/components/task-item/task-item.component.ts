import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';
import {Task} from '../../Task' ; 
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task:Task ; 
  @Output() OnToggleTask: EventEmitter<Task> = new EventEmitter() ; 
  @Output() OnDeleteTask: EventEmitter<Task> = new EventEmitter(); 

  faTimes = faTimes ; 


  constructor() { }

  ngOnInit(): void {
  }

OnDelete(task: Task){ 
  this.OnDeleteTask.emit(task) ; 
}
OnToggle(task : Task) { 
  this.OnToggleTask.emit(task) ; 
}
}
