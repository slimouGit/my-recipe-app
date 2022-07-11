import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
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
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeServie:RecipeService) { }

  ngOnInit(): void {
      this.route.params.subscribe(
        (params:Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
          console.log(this.editMode);
        }
      )
      if(this.editMode){
        this.recipe = this.recipeServie.getRecipe(this.id);
        console.log(this.recipe.name);
      }
  }

   private initForm(){
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescripton = '';
    let recipeIngredients = new FormArray([]);

    

    if(this.editMode){
      const recipe = this.recipeServie.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescripton = recipe.desription;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name),
              'amount': new FormControl(ingredient.amount)
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImagePath),
      'description': new FormControl(recipeDescripton),
      'ingredients': recipeIngredients
      
    });
   }

   get ingredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

   onSubmit(){
    console.log(this.recipeForm);
   }

   onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(),
        'amount': new FormControl()
      })
    )
   }
  

}
