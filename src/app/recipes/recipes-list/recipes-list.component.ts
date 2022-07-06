import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simple a Test','https://nourisheveryday.com/wp-content/uploads/2015/04/Orange-Raspberry-Cake-2.jpg'),
    new Recipe('A Second Recipe', 'This is simple a Second Test','https://nourisheveryday.com/wp-content/uploads/2021/09/WholeChickenNoodleSoup_WEB-5.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
      this.recipeWasSelected.emit(recipe);
  }

}
