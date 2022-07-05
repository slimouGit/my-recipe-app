export class Recipe {
    public name: string;
    public desription: string;
    public imagePath: string;

    constructor(name:string,desription:string,imagePath:string){
        this.name = name;
        this.desription = desription;
        this.imagePath = imagePath;
    }
}