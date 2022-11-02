import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import {Task} from '../../Task' ; 
import { UiService } from 'src/app/services/ui.service';
import {Subscription} from 'rxjs' ; 
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
@Output()  OnAddTask: EventEmitter<Task> = new EventEmitter() ; 
  text: string; 
  Day: string ; 
  reminder: boolean  = false ; 
  showAddTask: boolean  ; 
  subscription : Subscription ; 
  constructor(private uiService: UiService) { 
    this.subscription = this.uiService
    .Ontoggle()
    .subscribe((value)=> (this.showAddTask = value))
  }

  ngOnInit(): void {
  }
OnSubmit(){ 
  if(!this.text) { 
    alert('Please add a task !');
    return ; 
  }

  const newTask = { 
    text: this.text ,
    Day: this.Day ,
    reminder: this.reminder 
  }

  this.OnAddTask.emit(newTask);

  this.text = '' ; 
  this.Day = '' ; 
  this.reminder = false ; 
}
}
