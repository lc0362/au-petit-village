import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {
  transform(products: any[], order: string): any[] {
    if (!products || !order || order === 'default') {
      return products; // pour l'ordre par défaut "notre sélection"
    }
    return products.sort((a, b) => {
      if (order === 'ascending') {
        return a.price - b.price;
      } else if (order === 'descending') {
        return b.price - a.price;
      } else {
        return 0;
      }
    });
  }
}