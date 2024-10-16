import { Component, OnInit } from '@angular/core';
import { EmployeeApiService } from '../services/employee-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  allEmployeesList: any=[];
  constructor (private empService : EmployeeApiService){}
      ngOnInit()  {
      
        this.getAllEmployees()
      }
  getAllEmployees() {
    this.empService.getAllEmployeesApi().subscribe({
      next: (res) => {
        
        this.allEmployeesList=res
      },
      error: (res) => {
      }
    })

  }
  deleteEmployee(id: any) {
    this.empService.deleteEmployeeApi(id).subscribe({
      next: (res) => {
        Swal.fire({
          icon: "success",
          title: `Deleted successfully`,
          text: "wow!",
        });
        this.getAllEmployees();
      },
      error: (res) => {
        alert("error in server of deleting emp")
      }
    })
  }
  sortbyId() {
    this.allEmployeesList.sort((a:any,b:any)=>a.id-b.id)
  }
  sortbyName() {
    this.allEmployeesList.sort((a:any,b:any)=>a.username.localeCompare(b.username))
  }
}

