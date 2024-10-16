import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
  {
    path: "", component: LoginComponent
  },
  {
    path:"dashboard",component:DashboardComponent
  },
  {
    path:"user",component:UserListComponent
  }, 
  {
    path:"user/add",component:UserAddComponent
  },
  {
    path:"user/edit/:id",component:UserEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
