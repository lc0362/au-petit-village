import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {
  transform(products: any[], order: string): any[] {
    if (!products || products.length === 0) return []; 
    if (order === 'default') {
      return products.sort((a, b) => a.id - b.id);
    }
    return products.sort((a, b) => {
      if (order === 'ascending') return a.price - b.price;
      if (order === 'descending') return b.price - a.price;
      return 0;
    });
  }
}
