import { CaloricBreakdown } from './caloricBreakdown';
import { Nutrients } from './nutrients';

export class Nutrition {
  nutrients: Nutrients[];
  caloricBreakdown: CaloricBreakdown;
  calories: number;
  fat: string;
  protein: string;

  constructor(
    nutrients: Nutrients[],
    caloricBreakdown: CaloricBreakdown,
    calories: number,
    fat: string,
    protein: string,
    carbs: string
  ) {
    this.nutrients = nutrients;
    this.caloricBreakdown = caloricBreakdown;
    this.calories = calories;
    this.fat = fat;
    this.protein = protein;
    this.carbs = carbs;
  }
  carbs: string;
}
