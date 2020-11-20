import { Component, OnInit } from '@angular/core';

import { DragonsService } from './../dragons.service';
import { Dragon } from './../dragon';

@Component({
    selector: 'app-list-dragons',
    templateUrl: './list-dragons.component.html',
    styleUrls: ['./list-dragons.component.sass']
})
export class ListDragonsComponent implements OnInit {
    dragons: Dragon[];
    filteredDragons: string;
    isLoading: boolean;
    order: string;

    constructor(private service: DragonsService) {
        this.dragons = [];
        this.isLoading = true;
        this.order = 'name';
        this.filteredDragons = '';
    }

    ngOnInit() {

        this.service
            .getAll()
            .subscribe(
                data => {
                    this.dragons = this.filterSluggedDragons(data);
                    this.isLoading = false;
                },
                err => console.error(err)
            );
    }

    private filterSluggedDragons(dragons: any): Dragon[] {

        // return dragons.filter(dragon => dragon.slug.trim() !== '' && dragon.type.trim() !== '');
        return dragons.filter(dragon => {
            return dragon.id.trim() !== '' && dragon.type.trim() !== '';
            // return dragon;
        });
    }

    public removeDragon(slug: string): void {
        this.service
            .delete(slug)
            .subscribe(
                data => this.dragons = this.dragons.filter(item => item.id !== slug),
                err => console.log(err)
            );
    }

}
