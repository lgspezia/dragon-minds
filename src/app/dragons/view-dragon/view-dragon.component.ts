import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DragonsService } from './../dragons.service';
import { Dragon } from './../dragon';

@Component({
    selector: 'app-view-dragon',
    templateUrl: './view-dragon.component.html',
    styleUrls: ['./view-dragon.component.sass']
})
export class ViewDragonComponent implements OnInit {
    dragon: Dragon;
    isLoading: boolean;

    constructor(
        private router: Router, private route: ActivatedRoute, private service: DragonsService) {

    }

    ngOnInit() {
        this.isLoading = true;
        this.dragon = new Dragon({});

        this.route.params.subscribe(params => {
            this.service
                .get(params['id'])
                .subscribe(
                    data => {
                        this.dragon = data;
                        this.isLoading = false;
                    },
                    err => this.router.navigate(['/dragons'])
                );

        });
    }

    public removeDragon(dragonId: string): void {
        this.service
            .delete(dragonId)
            .subscribe(
                data => this.router.navigate(['/dragons']),
                err => console.log(err)
            );
    }

}
