import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatoService } from 'src/app/services/plato.service';
import { MenuService } from 'src/app/services/menu.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  plato!: any;

  isInMenu: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private platoService: PlatoService,
    private menuService: MenuService
  ) {}

  ngOnInit(): void {
    this.setPlato();
    this.checkIsInMenu();
  }

  setPlato() {
    this.platoService
      .getPlato(parseInt(this.route.snapshot.paramMap.get('id')!))
      .subscribe((data: any) => (this.plato = data));
  }

  corregirBool(bool: boolean) {
    if (bool) {
      return 'Si';
    } else {
      return 'No';
    }
  }

  checkIsInMenu() {
    this.isInMenu = this.menuService.isInMenu(
      parseInt(this.route.snapshot.paramMap.get('id')!)
    );

    console.log(
      this.menuService.isInMenu(
        parseInt(this.route.snapshot.paramMap.get('id')!)
      )
    );
  }

  onAdd() {
    let response = this.menuService.add(this.plato);

    if (response === 0) {
      Swal.fire({
        title: 'Plato agregado al menú',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (response === -1) {
      Swal.fire({
        title: 'No puede haber más de 2 platos veganos',
        icon: 'error',
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (response === -2) {
      Swal.fire({
        title: 'No puede haber más de 2 platos no veganos',
        icon: 'error',
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (response === -3) {
      Swal.fire({
        title: 'No puede haber más de 4 platos',
        icon: 'error',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  onDelete() {
    let response = this.menuService.delete(this.plato);
    if (response === 0) {
      Swal.fire({
        title: 'Plato eliminado del menú',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        title: 'No se pudo eliminar el plato',
        icon: 'error',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
}
