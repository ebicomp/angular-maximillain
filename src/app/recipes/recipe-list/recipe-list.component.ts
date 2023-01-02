import { Recipe } from './../recipe.model';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  @Output() recipeSelected = new EventEmitter<Recipe>();

onRecipeSelect(recipe:Recipe) {
  this.recipeSelected.emit(recipe);
}

  recipes:Recipe[] = [
    new Recipe('pizza Recipe', 'This is simply a test for pizza', 'https://assets.epicurious.com/photos/61f423f29c9591f7270e22c6/1:1/w_1920,c_limit/Bouillabaise_RECIPE_20220125_1776_V1_final.jpg'),
    new Recipe('coffee recipe', 'This is simply a test coffee', 'https://assets.epicurious.com/photos/61f423f29c9591f7270e22c6/1:1/w_1920,c_limit/Bouillabaise_RECIPE_20220125_1776_V1_final.jpg'),
  ];

}
