import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const data = [
  {desc: 'Mmm so delicious...', id: 1, url: 'https://images.freeimages.com/images/small-previews/c23/roasted-chicken-1326571.jpg'},
  {desc: 'Mmm so delicious...', id: 2, url: 'https://images.freeimages.com/images/small-previews/40c/dinnerplate-4-1325679.jpg'},
  {desc: 'Mmm so delicious...', id: 3, url: 'https://images.freeimages.com/images/small-previews/0fd/barbecue-1327528.jpg'},
  {desc: 'Mmm so delicious...', id: 4, url: 'https://images.freeimages.com/images/small-previews/65a/kebab-1327391.jpg'},
  {desc: 'Mmm so delicious...', id: 5, url: 'https://images.freeimages.com/images/small-previews/366/muesli-1322443.jpg'},
  {desc: 'Mmm so delicious...', id: 6, url: 'https://images.freeimages.com/images/small-previews/fc1/4-nature-broccoli-1328907.jpg'},
  {desc: 'Mmm so delicious...', id: 7, url: 'https://images.freeimages.com/images/small-previews/3dd/kebab-1327389.jpg'},
  {desc: 'Mmm so delicious...', id: 8, url: 'https://images.freeimages.com/images/small-previews/f5c/corn-soup-1324804.jpg'},
  {desc: 'Mmm so delicious...', id: 9, url: 'https://images.freeimages.com/images/small-previews/f4e/vegetable-1326535.jpg'},
  {desc: 'Mmm so delicious...', id: 10, url: 'https://images.freeimages.com/images/small-previews/80b/hunter-pastry-1319376.jpg'},
  {desc: 'Mmm so delicious...', id: 11, url: 'https://images.freeimages.com/images/small-previews/2e4/fruit-salad-01-1494686.jpg'},
  {desc: 'Mmm so delicious...', id: 12, url: 'https://images.freeimages.com/images/small-previews/c83/food-1322793.jpg'},
  {desc: 'Mmm so delicious...', id: 13, url: 'https://images.freeimages.com/images/small-previews/f81/hot-meatball-1319927.jpg'},
  {desc: 'Mmm so delicious...', id: 14, url: 'https://images.freeimages.com/images/small-previews/9a3/sandwich-1318363.jpg'},
  {desc: 'Mmm so delicious...', id: 15, url: 'https://images.freeimages.com/images/small-previews/412/breakfast-1321568.jpg'},
  {desc: 'Mmm so delicious...', id: 16, url: 'https://images.freeimages.com/images/small-previews/d45/pizza-spinaci-series-1318629.jpg'},
  {desc: 'Mmm so delicious...',
  id: 17, url: 'https://images.freeimages.com/images/small-previews/bc3/salad-with-quail-eggs-and-pepper-1634487.jpg'},
  {desc: 'Mmm so delicious...', id: 18,
  url: 'https://images.freeimages.com/images/small-previews/741/rasberry-chocolate-cake-3-1323016.jpg'},
  {desc: 'Mmm so delicious...', id: 19, url: 'https://images.freeimages.com/images/small-previews/bda/chocolate-croissant-1327698.jpg'},
  {desc: 'Mmm so delicious...', id: 20, url: 'https://images.freeimages.com/images/small-previews/cd2/crab-on-stone-1561011.jpg'},
  {desc: 'Mmm so delicious...', id: 21, url: 'https://images.freeimages.com/images/small-previews/351/pancakes-1324771.jpg'},
  {desc: 'Mmm so delicious...', id: 22, url: 'https://images.freeimages.com/images/small-previews/1cc/sinterklaas-1564467.jpg'},
  {desc: 'Mmm so delicious...', id: 23, url: 'https://images.freeimages.com/images/small-previews/be4/bifes-a-la-criolla-1327258.jpg'},
  {desc: 'Mmm so delicious...', id: 24, url: 'https://images.freeimages.com/images/small-previews/dd1/pizza-1327366.jpg'},
];

@Injectable({ providedIn: 'root' })
export class RecipeService {
  getRecipes(): Observable<any> {
    return of(data)
  }

  getRecipe(id: number): Observable<any> {
    return of(data.filter((obj) => obj.id === id)[0]);
  }
}
