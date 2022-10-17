import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PlatoService {
  platoURL = 'https://api.spoonacular.com/food/menuItems/';
  APIKey = '?apiKey=bd55ae92df814e6487a46786aa7c885d';

  constructor(private httpClient: HttpClient) {}

  public getPlato(id: number): any {
    return this.httpClient.get(this.platoURL + id + this.APIKey);
  }
}
