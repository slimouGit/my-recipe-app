import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    constructor(private slService:ShoppingListService){

    }

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe', 
        'This is simple a Test',
        'https://nourisheveryday.com/wp-content/uploads/2015/04/Orange-Raspberry-Cake-2.jpg',
        [new Ingredient('Gree Soß', 42),
        new Ingredient('Banana', 42)]),
        new Recipe(
            'A Second Recipe', 
            'This is simple a Second Test',
            'https://nourisheveryday.com/wp-content/uploads/2021/09/WholeChickenNoodleSoup_WEB-5.jpg',
            [new Ingredient('Gree Soß', 42),
            new Ingredient('Tomata', 42)])
      ];

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
      
}