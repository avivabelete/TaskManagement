import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule, MatDialogModule, MatSortModule, MatTableModule} from '@angular/material';
import { EditTaskComponent } from './edit-task/edit-task.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataService} from './data.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    CreateTaskComponent,
    EditTaskComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatSortModule,
        MatCardModule,
        MatDialogModule,
        FormsModule,
        HttpClientModule,
      ReactiveFormsModule
    ],
  entryComponents: [EditTaskComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
