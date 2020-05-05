import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Task} from '../models/task';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../data.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  // newTask: Task = null;
  taskForm: FormGroup;
  title = '';
  description = '';
  startDate: Date = new Date();
  endDate: Date = new Date();
  severity = '';

  constructor(private  fb: FormBuilder, private _data: DataService, public dialogRef: MatDialogRef<EditTaskComponent>,
              @Inject(MAT_DIALOG_DATA) public data) {
    this.taskForm = fb.group({
      title: [data.title, Validators.required],
      description : [data.description, Validators.required],
      startDate: [data.startDate],
      endDate: [data.endDate],
      severity: [data.severity],
      type: [data.type]
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
    };
  }
  edit(task) {
    this._data.updateTask(task);
  }
  delete(task) {
    this._data.deleteTask(task);
  }
  ngOnInit() {
  }

}
