import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PlatoService {
  platoURL = 'https://api.spoonacular.com/recipes/';
  information = '/information?';
  searchURL = 'https://api.spoonacular.com/recipes/complexSearch?query=';
  number = '&number=8&';
  APIKey = 'apiKey=bd55ae92df814e6487a46786aa7c885d';
  // APIKey = 'apiKey=9aaa6c381a064fcb853801ba4a41b2a5';

  constructor(private httpClient: HttpClient) {}

  public getPlato(id: number): any {
    return this.httpClient.get(
      this.platoURL + id + this.information + this.APIKey
    );
  }

  public getSearch(search: string): any {
    return this.httpClient.get(
      this.searchURL + search + this.number + this.APIKey
    );
  }
}
