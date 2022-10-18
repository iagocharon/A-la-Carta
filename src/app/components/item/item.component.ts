import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() plato!: any;
  @Input() add!: boolean;
  @Input() delete!: boolean;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {}

  corregirBool(bool: boolean) {
    if (bool) {
      return 'Si';
    } else {
      return 'No';
    }
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
