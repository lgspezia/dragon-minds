import { HttpHeaders } from '@angular/common/http';

export abstract class HttpService {
    constructor() {}

    public getDefaultHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json'
        });
    }

}
