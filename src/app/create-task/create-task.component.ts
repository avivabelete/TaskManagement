import { Component, OnInit } from '@angular/core';
import {Task} from '../models/task';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../data.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  newTask: Task = null;
  taskForm: FormGroup;
  title = '';
  description = '';
  startDate: Date = new Date();
  endDate: Date = new Date();
  severity = '';
  type = 'TimeTask';

  constructor(private  fb: FormBuilder, private _data: DataService) {
    this.taskForm = fb.group({
      title: [null, Validators.required],
      description : [null, Validators.required],
      startDate: [null],
      endDate: [null],
      severity: [null],
      type: ['TimeTask']
    }, {validator: this.dateLessThan('startDate' , 'endDate')});
  }
  dateLessThan(from: string, to: string) {
    return (group: FormGroup): {[key: string]: any} => {
      let f = group.controls[from];
      let t = group.controls[to];
      if (f.value > t.value) {
        return {
          dates: 'Date from should be less than Date to'
        };
      }
      return {};
    }
  }

  ngOnInit() {
  }
  submit(task) {
    this.newTask = new Task();
    this.newTask._id = '';
    this.newTask.title = this.title = task.title;
    this.newTask.description = this.description = task.description;
    this.newTask.startDate = this.startDate = task.startDate;
    this.newTask.endDate = this.endDate = task.endDate;
    this.newTask.severity = this.severity = task.severity;
    this._data.createTask(this.newTask)
      .subscribe(data => {
        console.log('created successfuly');
      }, error => {
        console.log(error);
      });
  }

}
