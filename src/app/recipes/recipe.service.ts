import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

    recipeChanged = new Subject<Recipe[]>();

    constructor(private slService: ShoppingListService) {

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

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
    }

}