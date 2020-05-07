import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Task } from '../models/task';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  successfulyDeleted = false;
  successfulyEdited = false;
  taskForm: FormGroup;
  _id = '';
  title = '';
  description = '';
  startDate: Date = new Date();
  endDate: Date = new Date();
  severity = '';
  type = '';

  constructor(private fb: FormBuilder, private _data: DataService, public dialogRef: MatDialogRef<EditTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    this.taskForm = fb.group({
      _id: [data._id],
      title: [data.title, Validators.required],
      description: [data.description, Validators.required],
      startDate: [data.startDate],
      endDate: [data.endDate],
      severity: [data.severity],
      type: [data.type]
    }, { validator: this.dateLessThan('startDate', 'endDate') });
  }
  dateLessThan(from: string, to: string) {
    return (group: FormGroup): { [key: string]: any } => {
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
    this._data.updateTask(task).subscribe(task => {
      console.log(task);
      this.successfulyEdited = true;
    }, error => console.error(error));
  }
  delete(task) {
    this._data.deleteTask(task).subscribe(task => {
      console.log(task)
      this.successfulyDeleted = true;
    }, error => console.error(error));
  }
  ngOnInit() {
  }

}
