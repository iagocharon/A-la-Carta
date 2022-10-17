export class CaloricBreakdown {
  percentProtein: number;
  percentFat: number;
  percentCarbs: number;

  constructor(
    percentProtein: number,
    percentFat: number,
    percentCarbs: number
  ) {
    this.percentProtein = percentProtein;
    this.percentFat = percentFat;
    this.percentCarbs = percentCarbs;
  }
}
