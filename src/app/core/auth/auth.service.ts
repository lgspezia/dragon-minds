import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

@Injectable()
export class AuthService {

    public isAuthenticated(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(this.hasToken()), 750);
        });
    }

    public login(email: string, password: string): void {
        if (email === environment.user.email && password === environment.user.password) {
            localStorage.setItem('token', 'JWT');
        }
    }

    public logout(): void {
        localStorage.removeItem('token');
    }

    private hasToken(): boolean {
        return !!localStorage.getItem('token');
    }

}
