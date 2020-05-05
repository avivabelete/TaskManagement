import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatSort, MatTableDataSource} from '@angular/material';
import {Task} from '../models/task';
import {EditTaskComponent} from '../edit-task/edit-task.component';
import {DataService} from '../data.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  displayedColumns: string[] = ['title', 'description', 'startDate', 'endDate', 'severity'];
  dataSource: any;
  data: Task[];
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private _data: DataService) {
  }
  ngOnInit() {
    this._data.getTasks().subscribe((data: Task[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
  }
  openModal(row){
    const dialogRef = this.dialog.open(EditTaskComponent, {
      width: '50%',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
