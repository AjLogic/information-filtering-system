import { Pipe, PipeTransform } from '@angular/core';




@Pipe({
  name: 'list-filter'
})
export class ListFilterPipe implements PipeTransform {

  transform(items: any[],keys: string, searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;

    let list = (items || []).filter
    ((item) => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(searchText, 'gi').test(item[key])));
    return list;
   }
}