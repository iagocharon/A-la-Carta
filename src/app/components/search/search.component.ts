import { Component, OnInit } from '@angular/core';
import { PlatoService } from 'src/app/services/plato.service';
import { SearchService } from 'src/app/services/search.service';
import { Plato } from 'src/app/models/plato';
import { debounceTime, map, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  search: string = '';

  platos: Plato[] = [];

  subject = new Subject<void>();

  constructor(
    private searchService: SearchService,
    private platoService: PlatoService
  ) {}

  ngOnInit(): void {
    this.subject.pipe(debounceTime(1000)).subscribe(() => {
      this.getPlatos();
    });
  }

  getPlatos() {
    if (this.search.length > 2) {
      this.searchService
        .getSearch(this.search)
        .pipe(debounceTime(1000))
        .subscribe((data: any) => {
          this.platos = [];
          data['menuItems'].forEach((element: Plato) => {
            console.log(element);
            this.platos.push(element);
            console.log(this.platos);
          });
        });
    }
  }

  onSearch() {
    this.subject.next();
  }
}
