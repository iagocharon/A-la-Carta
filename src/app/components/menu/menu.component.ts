import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  platos!: any[];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.platos = this.menuService.getPlatos();
  }
}
