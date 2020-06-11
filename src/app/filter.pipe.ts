import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(diaries: any[], searchText:string): any []{
    if(!diaries) return [];
    if(!searchText) return diaries;

    searchText = searchText.toLowerCase();

    return diaries.filter( it => {
      return it.name.toLowerCase().includes(searchText);
    });
  }

}
