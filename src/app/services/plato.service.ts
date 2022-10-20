import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlatoService {
  constructor(private httpClient: HttpClient) {}

  public getPlato(id: number): any {
    return this.httpClient.get(
      environment.platoURL + id + environment.information + environment.APIKey
    );
  }

  public getSearch(search: string): any {
    return this.httpClient.get(
      environment.searchURL + search + environment.number + environment.APIKey
    );
  }
}
