import { Injectable } from '@angular/core';
import { Task } from './models/task';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'https://localhost:44356';
  constructor(private http: HttpClient) { }
  getTasks(): Observable<Object> {
    return this.http.get((this.url + '/api/Tasks'));
  }
  createTask(task: Task) {
    return this.http.post(this.url + '/api/Tasks', task);
  }
  updateTask(task: Task) {
    return this.http.put(this.url + '/api/Tasks/' + task._id, task);
  }
  deleteTask(task: Task) {
    return this.http.delete(this.url + '/api/Tasks/' + task._id);
  }
}
