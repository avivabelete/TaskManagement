import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TasksComponent} from './tasks/tasks.component';
import {CreateTaskComponent} from './create-task/create-task.component';

const routes: Routes = [
  // {path: '', redirectTo: TasksComponent, pathMatch: 'full'},
  {path: 'tasks', component: TasksComponent},
  {path: 'createTask', component: CreateTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
