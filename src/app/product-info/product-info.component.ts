import { Component } from '@angular/core';
import { GamesApiService } from '../controllers/games-api.service';
import { games } from '../modules/games';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent {
  games = new games()
  game!:any[]
  id!: any;
  constructor(public activatedRoute: ActivatedRoute,private api: GamesApiService,private router: Router){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getById(this.id).subscribe((data: any) => {
      this.game = data;
      console.log(data);
    });
  }
}
