import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editMode = false;
  recipe:Recipe;

  constructor(private route: ActivatedRoute, private recipeServie:RecipeService) { }

  ngOnInit(): void {
      this.route.params.subscribe(
        (params:Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          console.log(this.editMode);
        }
      )
      if(this.editMode){
        this.recipe = this.recipeServie.getRecipe(this.id);
        console.log(this.recipe.name);
      }
  }

}
