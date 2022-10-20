import { Component, OnInit } from '@angular/core';
import { PlatoService } from 'src/app/services/plato.service';
import { MenuService } from 'src/app/services/menu.service';
import { debounceTime, map, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  search: string = '';

  resultados: any[] = [];

  subject = new Subject<void>();

  constructor(
    private platoService: PlatoService,
    private menuService: MenuService
  ) {}

  ngOnInit(): void {
    this.subject.pipe(debounceTime(600)).subscribe(() => {
      this.getPlatos();
    });
  }

  getPlatos() {
    if (this.search.length > 2) {
      this.platoService
        .getSearch(this.search)
        .pipe(debounceTime(800))
        .subscribe((data: any) => {
          console.log(data);
          this.resultados = [];
          data['results'].forEach((plato: any) => {
            console.log(plato);
            this.platoService.getPlato(plato.id).subscribe((data: any) => {
              // if (this.menuService.getPlatos().indexOf(plato) === -1) {
              this.resultados.push(data);
              // }
            });
          });
        });
    }
  }

  onSearch() {
    this.subject.next();
  }
}
