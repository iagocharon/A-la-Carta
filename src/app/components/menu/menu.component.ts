import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { MenuInfoComponent } from '../menu-info/menu-info.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  platos: any[] = [];

  vegan: number = 0;
  nonVegan: number = 0;
  totalPrice: number = 0;
  avgTime: number = 0;
  avgScore: number = 0;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.platos = this.menuService.getPlatos();
    this.vegan = this.menuService.getVegan();
    this.nonVegan = this.menuService.getNonVegan();
    this.totalPrice = this.menuService.getTotalPrice();
    this.avgTime = this.menuService.getAvgTime();
    this.avgScore = this.menuService.getAvgScore();
  }
}
