import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchURL = 'https://api.spoonacular.com/food/menuItems/search?query=';
  number = '&number=12';
  APIKey = '&apiKey=bd55ae92df814e6487a46786aa7c885d';

  constructor(private httpClient: HttpClient) {}

  public getSearch(search: string): any {
    console.log('BUSCANDOOOOO');
    return this.httpClient.get(
      this.searchURL + search + this.number + this.APIKey
    );
  }
}
