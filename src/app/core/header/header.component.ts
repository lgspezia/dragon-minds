import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../auth';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    public logout(): void {
        this.authService.logout();
        this.router.navigate(['/login']);
    }

}
