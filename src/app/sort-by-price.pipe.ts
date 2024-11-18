import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {
  transform(products: any[], order: string): any[] {
    if (!products) {
      return [];
    }

    // Tri par défaut : ordre croissant d'ID
    if (order === 'default') {
      return products.sort((a, b) => a.id - b.id);
    }

    // Tri par prix
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