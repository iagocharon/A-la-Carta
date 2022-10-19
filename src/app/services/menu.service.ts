import { Injectable } from '@angular/core';
import { PlatoService } from './plato.service';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  platos: any[] = [];

  vegan: number = 0;
  nonVegan: number = 0;
  totalPrice: number = 0;
  avgTime: number = 0;
  avgScore: number = 0;

  constructor(private platoService: PlatoService) {}

  setPlatos() {
    this.platos = JSON.parse(localStorage.getItem('menu')!);
    if (this.platos.length > 0) {
      this.updateTotals();
    }
  }

  getPlatos() {
    this.setPlatos();
    return this.platos;
  }

  getVegan() {
    return this.vegan;
  }

  getNonVegan() {
    return this.nonVegan;
  }

  getTotalPrice() {
    return this.totalPrice;
  }

  getAvgTime() {
    return this.avgTime;
  }

  getAvgScore() {
    return this.avgScore;
  }

  add(plato: any) {
    if (this.platos.length < 4) {
      if (this.checkType(plato)) {
        this.platos.push(plato);
        this.updateTotals();
        this.savePlato(plato);
        return 0;
      } else if (plato.vegan) {
        return -1;
      } else if (plato.nonVegan) {
        return -2;
      }
    }
    return -3;
  }

  checkType(plato: any): boolean {
    if (plato.vegan) {
      if (this.vegan < 2) {
        return true;
      }
    } else {
      if (this.nonVegan < 2) {
        return true;
      }
    }
    return false;
  }

  updateTotals() {
    this.totalPrice = 0;
    this.avgTime = 0;
    this.avgScore = 0;

    this.platos.forEach((plato: any) => {
      this.totalPrice += plato.pricePerServing;
      this.avgTime += plato.readyInMinutes;
      this.avgScore += plato.healthScore;
    });

    this.avgTime = this.avgTime / this.platos.length;
    this.avgScore = this.avgScore / this.platos.length;

    this.updateVegan();
  }

  updateVegan() {
    this.vegan = 0;
    this.nonVegan = 0;

    this.platos.forEach((plato: any) => {
      if (plato.vegan) {
        this.vegan++;
      } else {
        this.nonVegan++;
      }
    });
  }

  delete(plato: any) {
    let index = this.platos.indexOf(plato);
    if (index > -1) {
      this.platos.splice(index, 1);
      this.deletePlato(plato);
      this.updateTotals();
      return 0;
    }
    return -1;
  }

  clearAll() {
    this.platos = [];
    this.vegan = 0;
    this.nonVegan = 0;
    this.totalPrice = 0;
    this.avgTime = 0;
    this.avgScore = 0;
  }

  savePlato(plato: any) {
    let menu: any[] = [];
    if (JSON.parse(localStorage.getItem('menu')!)) {
      menu = JSON.parse(localStorage.getItem('menu')!);
    }
    menu.push(plato);
    localStorage.setItem('menu', JSON.stringify(menu));
  }

  deletePlato(plato: any) {
    let menu = JSON.parse(localStorage.getItem('menu')!);
    let index = menu.indexOf(plato);
    if (index > -1) {
      menu.splice(index, 1);
    }
    localStorage.setItem('menu', JSON.stringify(menu));
  }
}
