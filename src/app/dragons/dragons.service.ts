import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { HttpService } from '../core/http.service';

import { Dragon } from './dragon';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DragonsService extends HttpService {
    private endpoint: string = environment.endpoints.dragons;

    constructor(private http: HttpClient) {
        super();
    }

    public get(dragonId: string): Observable<Dragon> {
        return this.http.get<Dragon>(this.endpoint + '/' + dragonId, {
            headers: this.getDefaultHeaders()
        }).pipe(
            map((response: Dragon) => new Dragon(response)),
            catchError((err: HttpErrorResponse) => throwError(err))
        );
    }

    // Busca todos dragões
    public getAll(): Observable<Dragon[]> {
        const params = new HttpParams();

        return this.http.get<Dragon[]>(this.endpoint, {
            headers: this.getDefaultHeaders(),
            params: params
        }).pipe(
            map((response: Dragon[]) => {
                return response.map((data) => new Dragon(data)); // items
            }),
            catchError((err: HttpErrorResponse) => throwError(err))
        );
    }

    public post(dragon: any): Observable<Dragon> {
        return this.http.post(this.endpoint, dragon, {
            headers: this.getDefaultHeaders()
        }).pipe(
            map((response: Dragon) => new Dragon(response)),
            catchError((err: HttpErrorResponse) => throwError(err))
        );
    }

    public put(dragonId: string, dragon: any): Observable<void> {
        return this.http.put(this.endpoint + '/' + dragonId, dragon, {
            headers: this.getDefaultHeaders()
        }).pipe(
            map((response: any) => response),
            catchError((err: HttpErrorResponse) => throwError(err))
        );
    }

    public delete(dragonId: string): Observable<void> {
        return this.http.delete(this.endpoint + '/' + dragonId, {
            headers: this.getDefaultHeaders()
        }).pipe(
            map((response: any) => response),
            catchError((err: HttpErrorResponse) => throwError(err))
        );
    }

}
