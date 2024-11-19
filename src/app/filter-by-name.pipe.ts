import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {
  transform(products: any[], searchQuery: string): any[] {
    if (!products || products.length === 0) return []; 
    if (!searchQuery) return products; 

    const lowerCaseQuery = searchQuery.toLowerCase();
    return products.filter((product) =>
      product.name.toLowerCase().includes(lowerCaseQuery)
    );
  }
}

