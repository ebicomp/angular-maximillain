import { Ingredient } from './../shared/ingredient.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

onAddIngredient($event: Ingredient) {
  this.ingredients.push($event);
}
ingredients :Ingredient[]= [
  new Ingredient('Apples' , 5),
  new Ingredient('Tomatoes' , 3),
];
}
