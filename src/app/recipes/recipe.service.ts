import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simple a Test','https://nourisheveryday.com/wp-content/uploads/2015/04/Orange-Raspberry-Cake-2.jpg'),
        new Recipe('A Second Recipe', 'This is simple a Second Test','https://nourisheveryday.com/wp-content/uploads/2021/09/WholeChickenNoodleSoup_WEB-5.jpg')
      ];

    getRecipes(){
        return this.recipes.slice();
    }
      
}