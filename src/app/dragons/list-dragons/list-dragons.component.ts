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
                    this.dragons = this.filterDragons(data);
                    this.isLoading = false;
                },
                err => console.error(err)
            );
    }

    private filterDragons(dragons: any): Dragon[] {

        return dragons.filter(dragon => {
            return dragon.id.trim() !== '' && dragon.type.trim() !== '';
        });
    }

    public removeDragon(dragonId: string): void {
        this.service
            .delete(dragonId)
            .subscribe(
                data => this.dragons = this.dragons.filter(item => item.id !== dragonId),
                err => console.log(err)
            );
    }

}
