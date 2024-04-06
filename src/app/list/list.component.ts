import { Component } from '@angular/core';
import { GamesApiService } from '../controllers/games-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  game!: any[];

  constructor(private api: GamesApiService, private router: Router) {
    this.getAllData();
    let loggedIn = JSON.parse(localStorage.getItem('loggedIn') || 'false');
    if (!loggedIn) {
      this.router.navigateByUrl('/notFound');
    }
  }

  // get All game from APi
  getAllData() {
    this.api.get().subscribe((data: any) => {
      this.game = data;
    });
  }
  // remove game by id
  remove(id: any) {
    this.api.delete(id).subscribe(() => {
      this.getAllData();
    });
  }
}
