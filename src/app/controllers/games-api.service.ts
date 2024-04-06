import { Injectable } from '@angular/core';
import { ApiFunctionService } from './api-function.service';
import { HttpClient } from '@angular/common/http';
import { games } from '../modules/games';

@Injectable({
  providedIn: 'root'
})
export class GamesApiService extends ApiFunctionService<games>{

  constructor(public override http: HttpClient) {
    super('http://localhost:3000/games', http);
  }
}
