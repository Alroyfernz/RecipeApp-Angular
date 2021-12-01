export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  number = 0;

  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}
