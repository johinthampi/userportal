import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {
  server_url = "http://localhost:4600";

  constructor(private httpClient: HttpClient) { }
  addEmployeeApi(employeeDetails: any) {
    return this.httpClient.post(`${this.server_url}/user`,employeeDetails)
  }

  //get all employees
  getAllEmployeesApi() {
    return this.httpClient.get(`${this.server_url}/user`)
  }

  //delete an employee
  deleteEmployeeApi(empId:any) {
    return this.httpClient.delete(`${this.server_url}/user/${empId}`)
  }
  //get employee details by id
  getEmployeeDetailsByIdApi(empId: any) {
    return this.httpClient.get(`${this.server_url}/user/${empId}`)
  }
  //update employee details
  updateEmployee(employeeDetails: any, empId: number) {
    return this.httpClient.put(`${this.server_url}/user/${empId}`,employeeDetails)
  }
}
