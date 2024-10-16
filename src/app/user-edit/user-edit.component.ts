import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeApiService } from '../services/employee-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit{
  employeeDetailsById:any={};
  //activate class is used to extract param from url path
  constructor(private route: ActivatedRoute, private empService : EmployeeApiService , private router:Router) { }
  ngOnInit(): void {
    //for getting value from path url
    this.route.params.subscribe((res: any) => {
      const {id} = res;
      this.getEmployeeDetailsById(id)
      })
  }
  getEmployeeDetailsById(empid:any) {
    this.empService.getEmployeeDetailsByIdApi(empid).subscribe({
      next: (res) => {
          console.log("get employee by id");
          console.log(res);
          
        this.employeeDetailsById = res;
      },
      error: (res) => {
        alert("error getemployee for edit ")
      }
    })
    
  }
  updateEmployee(){
    console.log(this.employeeDetailsById);
    this.employeeDetailsById.id = Number(this.employeeDetailsById.id);
    this.employeeDetailsById.status = Number(this.employeeDetailsById.status);
    this.empService.updateEmployee(this.employeeDetailsById.id, this.employeeDetailsById).subscribe({
      next: (res) => {
        console.log(res);
        Swal.fire({
          icon: "success",
          title: `${this.employeeDetailsById.username} successfully added`,
          text: "please enter form completely!",
        });
        this.router.navigateByUrl('user')
        
      },
      error: (res) => {
        console.log(res);
        Swal.fire({
          icon: "success",
          title: `${this.employeeDetailsById.username} successfully added`,
          text: "please enter form completely!",
        });
        
      }
    })
  }
  cancel() {
    this.router.navigateByUrl('user')
  }

}
