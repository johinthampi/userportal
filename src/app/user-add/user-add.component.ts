import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { EmployeeApiService } from '../services/employee-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {
  employee: any = {
    id: "",
    username: "",
    email:"",
    status: 1,
  }
  constructor(private empService:EmployeeApiService, private router: Router){}
  clearField() {
    this.employee = {
      status:1
    }
  }
  addEmployee() {
    if (!this.employee.id || !this.employee.username || !this.employee.status) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please enter form completely!",
      });
    }
    else {
      //Number() and parseInt() can be used to convert string to integer
      this.employee.id = Number(this.employee.id);
      this.employee.status = parseInt(this.employee.status)
      this.empService.addEmployeeApi(this.employee).subscribe({
        next: (res) => {
          Swal.fire({
            icon: "success",
            title: `${this.employee.username} successfully added`,
            text: "please enter form completely!",
          });
          this.clearField();
          this.router.navigateByUrl('user')
        },
        error: (res) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "something went wrong!",
          });
          
        }
          
      })
    
    }
  }
}
