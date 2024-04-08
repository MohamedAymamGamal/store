import { GamesApiService } from './../controllers/games-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { games } from './../modules/games';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listedit',
  templateUrl: './listedit.component.html',
  styleUrls: ['./listedit.component.css']
})
export class ListeditComponent {
  game = new games();
  message: string = '';
  id!: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private api: GamesApiService,
    private router: Router
){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getById(this.id).subscribe((data: any) => {
      this.game = data;
    });
    let loggedIn = JSON.parse(localStorage.getItem('loggedIn') || 'false');
    if (!loggedIn) {
      this.router.navigateByUrl('/notFound');
    }
  }
  update() {
    this.api.put(this.id, this.game).subscribe((data: any) => {
      this.router.navigateByUrl('/admin/games/list');
    });
  }
}
