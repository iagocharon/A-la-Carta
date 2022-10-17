export class Nutrients {
  name: string;
  amount: number;
  unit: string;
  percentOfDailyNeeds: number;

  constructor(
    name: string,
    amount: number,
    unit: string,
    percentOfDailyNeeds: number
  ) {
    this.name = name;
    this.amount = amount;
    this.unit = unit;
    this.percentOfDailyNeeds = percentOfDailyNeeds;
  }
}
