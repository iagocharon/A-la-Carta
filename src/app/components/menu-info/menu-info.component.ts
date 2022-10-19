import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-info',
  templateUrl: './menu-info.component.html',
  styleUrls: ['./menu-info.component.css'],
})
export class MenuInfoComponent implements OnInit {
  @Input() size!: number;
  @Input() vegan!: number;
  @Input() nonVegan!: number;
  @Input() totalPrice!: number;
  @Input() avgTime!: number;
  @Input() avgScore!: number;

  constructor() {}

  ngOnInit(): void {}
}
