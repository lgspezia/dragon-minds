import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

    transform(filterable: any, filterString: string, filterProps: string[]): any {
        if (filterable.length === 0 || filterString === '') {
            return filterable;
        }

        const filteredItems = [];

        filterString = filterString.toLocaleLowerCase().trim();

        for (const item of filterable) {
            for (const prop of filterProps) {
                if (prop in item && item[prop] && item[prop].toLowerCase().includes(filterString)) {
                    filteredItems.push(item);
                }
            }
        }

        return filteredItems;
    }

}
