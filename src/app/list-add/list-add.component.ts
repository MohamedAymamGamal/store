import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { games } from '../modules/games';
import { GamesApiService } from '../controllers/games-api.service';

@Component({
  selector: 'app-list-add',
  templateUrl: './list-add.component.html',
  styleUrls: ['./list-add.component.css']
})
export class ListAddComponent {

  game = new games();
  message: string = '';
  constructor(public api: GamesApiService, private router: Router) {
    let loggedIn = JSON.parse(localStorage.getItem('loggedIn') || 'false');
    if (!loggedIn) {
      this.router.navigateByUrl('/notFound');
    }
  }
  submit() {
    this.api.post(this.game).subscribe((data: any) => {
      this.message = 'game has been added successfully';
      setTimeout(() => {
        this.message = '';
      }, 2000);
    });
  }
}
