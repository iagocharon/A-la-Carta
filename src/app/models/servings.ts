export class Servings {
  servings: number;
  size: number;
  unit: string;

  constructor(servings: number, size: number, unit: string) {
    this.servings = servings;
    this.size = size;
    this.unit = unit;
  }
}
