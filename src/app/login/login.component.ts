import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admins } from '../modules/admin';
import { AdminApiService } from '../controllers/admin-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  admin = new Admins();
  message = '';
  constructor(private api: AdminApiService, private router: Router) {}

  submit() {
    this.api.get().subscribe((data: any) => {
      let user = data.find((user: any) => {
        return (
          user.email === this.admin.email &&
          user.password === this.admin.password
        );
      });
      if (user) {
        localStorage.setItem('loggedIn', 'true');
        this.router.navigateByUrl('/admin/dashboard');
      } else {
        this.message = 'Invalid Credentials. Please try again';
        setTimeout(() => {
          this.message = '';
        }, 3000);
      }
    });
  }
}
