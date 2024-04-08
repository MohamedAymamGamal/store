import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.css']
})
export class DashboradComponent {

  constructor(private router: Router) {
    let loggedIn = JSON.parse(localStorage.getItem('loggedIn') || 'false');
    
  }
}
