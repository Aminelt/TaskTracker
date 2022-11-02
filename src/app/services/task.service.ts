import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http'
import { Observable  , of } from 'rxjs';
import {Task} from '../Task';  

const HttpOptions = { 
  headers : new HttpHeaders({
    'Content-Type' : 'Application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks' ; 

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]>  { 
    // const tasks = of(TASKS) ; 
    return this.http.get<Task[]>(this.apiUrl) ; 
  }

  deleteTask(task: Task):Observable<Task> { 
    const url = `${this.apiUrl}/${task.id}` ; 
    console.log(url);     
    return this.http.delete<Task>(url) ; 
  }
 updateToggleReminder(task:Task ): Observable<Task> {
  const url = `${this.apiUrl}/${task.id}` ; 
  return this.http.put<Task>(url , task , HttpOptions) ; 
 }
 AddTask(task: Task ):Observable<Task>{ 
  return this.http.post<Task>(this.apiUrl, task , HttpOptions); 

 }
}
