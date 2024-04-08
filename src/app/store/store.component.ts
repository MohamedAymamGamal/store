import { Component } from '@angular/core';
import { GamesApiService } from '../controllers/games-api.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  game!: any[];
  constructor(private api: GamesApiService) {
    this.api.get().subscribe((data: any) => {
      this.game = data;
    });
  }
}
