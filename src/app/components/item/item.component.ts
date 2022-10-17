import { Component, OnInit, Input } from '@angular/core';
import { Plato } from 'src/app/models/plato';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() plato!: Plato;

  constructor() {}

  ngOnInit(): void {}
}
