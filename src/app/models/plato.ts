import { Nutrition } from './nutrition';
import { Servings } from './servings';

export class Plato {
  id: number;
  title: string;
  price: number;
  likes: number;
  badges: string[];
  nutrition: Nutrition;
  images: string[];
  servingSize: string;
  readableServingSize: string;
  numberOfServings: number;
  servings: Servings;
  spoonacularScore: number;
  breadcrumbs: string[];
  image: string;
  imageType: string;
  generatedText: string;
  restaurantChain: string;

  constructor(
    id: number,
    title: string,
    price: number,
    likes: number,
    badges: string[],
    nutrition: Nutrition,
    images: string[],
    servingSize: string,
    readableServingSize: string,
    numberOfServings: number,
    servings: Servings,
    spoonacularScore: number,
    breadcrumbs: string[],
    image: string,
    imageType: string,
    generatedText: string,
    restaurantChain: string
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.likes = likes;
    this.badges = badges;
    this.nutrition = nutrition;
    this.images = images;
    this.servingSize = servingSize;
    this.readableServingSize = readableServingSize;
    this.numberOfServings = numberOfServings;
    this.servings = servings;
    this.spoonacularScore = spoonacularScore;
    this.breadcrumbs = breadcrumbs;
    this.image = image;
    this.imageType = imageType;
    this.generatedText = generatedText;
    this.restaurantChain = restaurantChain;
  }
}
