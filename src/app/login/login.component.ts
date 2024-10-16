import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AdminApiService } from '../services/admin-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  empEmail: string = '';
  empPassword: string = '';

  constructor(private adminService: AdminApiService, private router: Router){ }

  login() {
    if (!this.empEmail || !this.empPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please enter form completely!",
      });
    }
    else {
      this.adminService.adminAuthorization().subscribe({
        next: (res: any) => {
          const { email, password } = res;
          if (email === this.empEmail && password === this.empPassword) {
            console.log("admin log succ");
          
            Swal.fire({
              title: "Good job!",
              text: "login successful!",
              icon: "success"
            });
            this.router.navigateByUrl('dashboard')
          }
          else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "invalid email or password",
            });
          }
        },
        error:(res: any) => {
          alert("server error in login")
        },
      })
      
    }
  }
}
